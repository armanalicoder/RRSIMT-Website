import connectToDB from "@/lib/dbConnect";
import departmentModel from "@/models/departmentModel";
import facultyModel from "@/models/facultyModel";
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
    return NextResponse.json({ success: false, message: "Unauthorized" });
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
    const dept_value = data.department;
    const res = await departmentModel.findOne({ code: dept_value });
    data.department = res._id;
    const isExist = await facultyModel.findOne({email : data?.email});
    if(isExist){
      return NextResponse.json({success:false,message : "This faculty is already added"});
    }
    await facultyModel.create(data);
    return NextResponse.json({
      success: true,
      message: "Faculty Added Successfully",
    });
  } catch (err) {
    console.log(err)
    return NextResponse.json({
      success: false,
      message: "Something went wrong!",
    });
  }
}
