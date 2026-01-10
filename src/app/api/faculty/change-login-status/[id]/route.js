import connectToDB from "@/lib/dbConnect";
import facultyModel from "@/models/facultyModel";
import { jwtVerify } from "jose";
import { NextResponse } from "next/server";

export async function POST(req, { params }) {
  // const origin = req.headers.get("Origin") || "";
  // if (origin !== process.env.HOST_DOMAIN) {
  //   return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  // }
  await connectToDB();

  const token = req.cookies.get("token")?.value;
  if (!token) {
    return NextResponse.json({ status: 401, loggedIn: false });
  }
const secret = new TextEncoder().encode(process.env.JWT_SECRET);
  const { payload } = await jwtVerify(token, secret);
  if (!payload) {
    return NextResponse.json({ status: 401, message: "Unauthorized" });
  }

  const { id } = await params;
  const { data } = await req.json();
  if (!id || !data) {
    return NextResponse.json({
      success: false,
      message: "Missing Fields!",
    });
  }
  try {
    const dbData = await facultyModel.findByIdAndUpdate(id, { login: data });
    dbData.save();
    return NextResponse.json({
      success: true,
      message: "Status Updated Successfully",
    });
  } catch (err) {
    console.log(err)
    return NextResponse.json({
      success: false,
      message: "Something went wrong!",
    });
  }
}
