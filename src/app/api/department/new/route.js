import connectToDB from "@/lib/dbConnect";
import departmentModel from "@/models/departmentModel";
import { jwtVerify } from "jose";
import { NextResponse } from "next/server";

export async function POST(req) {
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
  if (!payload || payload.role != "director") {
    return NextResponse.json({ status: 401, message: "Unauthorized" });
  }

  const { data } = await req.json();
  if (!data) {
    return NextResponse.json({
      success: false,
      message: "Missing Data",
    });
  }
  try {
    await departmentModel.create(data);
    return NextResponse.json({
      success: true,
      message: "Department Added Successfully",
    });
  } catch (err) {
    return NextResponse.json({
      success: false,
      message: "Something went wrong!",
    });
  }
}
