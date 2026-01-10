import connectToDB from "@/lib/dbConnect";
import departmentModel from "@/models/departmentModel";
import facultyModel from "@/models/facultyModel";
import { jwtVerify } from "jose";
import { NextResponse } from "next/server";

export async function DELETE(req, { params }) {
  await connectToDB();

  const token = req.cookies.get("token")?.value;
  if (!token) {
    return NextResponse.json({ loggedIn: false }, { status: 401 });
  }

  const secret = new TextEncoder().encode(process.env.JWT_SECRET);

  const { payload } = await jwtVerify(token, secret);
  if (!payload || payload.role !== "director") {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  if (!id) {
    return NextResponse.json({ message: "Department ID is required" }, { status: 400 });
  }

  try {
    await facultyModel.deleteMany({ department: id });

    await departmentModel.findByIdAndDelete(id);

    return NextResponse.json({
      success: true,
      message: "Department and related faculties deleted successfully",
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      success: false,
      message: "Something went wrong",
    });
  }
}
