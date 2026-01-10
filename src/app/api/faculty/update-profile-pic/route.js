import { NextResponse } from "next/server";
import connectToDB from "@/lib/dbConnect";
import cloudinary from "@/lib/cloudinary";
import { jwtVerify } from "jose";
import facultyModel from "@/models/facultyModel";

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
    const image = formData.get("image");

    if (!image) {
      return NextResponse.json({ success: false, message: "Image required" });
    }

    const bytes = await image.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const uploadRes = await new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream(
          {
            folder: "faculty_profiles",
            resource_type: "image",
          },
          (err, result) => {
            if (err) reject(err);
            resolve(result);
          }
        )
        .end(buffer);
    });

    await facultyModel.findByIdAndUpdate(payload.id, {
      image: uploadRes.secure_url,
    });

    return NextResponse.json({
      success: true,
      message: "Image Changed Successfully",
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "Server error",
    });
  }
}
