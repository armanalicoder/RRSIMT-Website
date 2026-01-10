import connectToDB from "@/lib/dbConnect";
import admissionModel from "@/models/admissionModel";
import { jwtVerify } from "jose";
import { NextResponse } from "next/server";

export async function DELETE(req) {
  // const origin = req.headers.get("Origin") || "";
  // if (origin !== process.env.HOST_DOMAIN) {
  //   return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  // }
  await connectToDB();
  const token = req.cookies.get("token")?.value;
  if (!token) {
    return NextResponse.json({ success: false, message: "Unauthorized" });
  }
  const secret = new TextEncoder().encode(process.env.JWT_SECRET);
  const { payload } = await jwtVerify(token, secret);
  if (!payload) {
    return NextResponse.json({ status: 401, message: "Unauthorized" });
  }
  try {
    await admissionModel.deleteMany({});
    return NextResponse.json({
      success: true,
      message: "Deleted Successfully",
    });
  } catch (err) {
    console.log(err);
    return NextResponse.json({
      success: false,
      message: "Something Went Wrong!",
    });
  }
}
