import { NextResponse } from "next/server";
import connectToDB from "@/lib/dbConnect";
import Circular from "@/models/circularModel";
import { jwtVerify } from "jose";
import cloudinary from "@/lib/cloudinary";
import circularModel from "@/models/circularModel";

const secret = new TextEncoder().encode(process.env.JWT_SECRET);

export async function POST(req) {
  // const origin = req.headers.get("Origin") || "";
  // if (origin !== process.env.HOST_DOMAIN) {
  //   return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  // }
  try {
    await connectToDB();

    const token = req.cookies.get("token")?.value;
    if (!token) {
      return NextResponse.json({ success: false, message: "Unauthorized" });
    }
    const { payload } = await jwtVerify(token, secret);
    if (!payload) {
      return NextResponse.json({ status: 401, message: "Unauthorized" });
    }
    const formData = await req.formData();

    const title = formData.get("title");
    const department = formData.get("department");
    const pdf = formData.get("pdf");
    const date = formData.get("date");

    if (!pdf) {
      return NextResponse.json({ success: false, message: "PDF required" });
    }

    // Upload PDF to Cloudinary
    const bytes = await pdf.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const uploadResult = await new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream(
          {
            folder: "circulars",
            resource_type: "image",
            format: "pdf",
            use_filename: true,
            unique_filename: false,
          },
          (error, result) => {
            if (error) reject(error);
            else resolve(result);
          }
        )
        .end(buffer);
    });

    const circular = await circularModel.create({
      department,
      title,
      pdfUrl: uploadResult.secure_url,
      date: new Date().toLocaleDateString(),
    });

    return NextResponse.json({
      success: true,
      message: "Circular Uploaded Successfully",
      circular,
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "Server error",
    });
  }
}
