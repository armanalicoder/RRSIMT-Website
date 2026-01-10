import connectToDB from "@/lib/dbConnect";
import admissionModel from "@/models/admissionModel";
import departmentModel from "@/models/departmentModel";
import { NextResponse } from "next/server";

export async function POST(request) {
  // const origin = req.headers.get("Origin") || "";
  // if (origin !== process.env.HOST_DOMAIN) {
  //   return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  // }
  await connectToDB();
  try {
    const { data } = await request.json();
    const user_email = data.email;

    const isExist = await admissionModel.find({ email: user_email });
    if (isExist.length == 0) {
      return NextResponse.json({
        success: false,
        message: "Enquiry Already Submitted. Please Wait..",
      });
    }

    const department = await departmentModel.findOne({ code: data.department });
    data.department = department;
    await admissionModel.create(data);
    return NextResponse.json({
      success: true,
      message:
        "Enquiry Submitted Successfully We will reach you within 24 hrs.",
    });
  } catch (err) {
    return NextResponse.json({
      success: false,
      message: "Somthing Went Wrong!",
      error: err,
    });
  }
}
