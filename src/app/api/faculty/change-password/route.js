import { NextResponse } from "next/server";
import connectToDB from "@/lib/dbConnect";
import facultyModel from "@/models/facultyModel";
import bcrypt from "bcryptjs";
import { jwtVerify } from "jose";

const secret = new TextEncoder().encode(process.env.JWT_SECRET);

export async function POST(req) {
   // const origin = req.headers.get("Origin") || "";
  // if (origin !== process.env.HOST_DOMAIN) {
  //   return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  // }
  try {
    await connectToDB();

    //Get token from cookies
    const token = req.cookies.get("token")?.value;
    if (!token) {
      return NextResponse.json(
        { success: false, message: "Unauthorized" },
        { status: 401 }
      );
    }

    //Verify token
    const { payload } = await jwtVerify(token, secret);
    const facultyId = payload.id;
    const role = payload.role;

    // get request body
    const { data } = await req.json();
    if (role != "director") {
      const { old_password, new_password } = data;

      if (!old_password || !new_password) {
        return NextResponse.json(
          { success: false, message: "All fields are required" },
          { status: 400 }
        );
      }

      // Find faculty
      const faculty = await facultyModel.findById(facultyId);
      if (!faculty) {
        return NextResponse.json(
          { success: false, message: "Faculty not found" },
          { status: 404 }
        );
      }

      // Compare old password
      const isMatch = await bcrypt.compare(old_password, faculty.password);
      if (!isMatch) {
        return NextResponse.json(
          { success: false, message: "Old password is incorrect" },
          { status: 400 }
        );
      }

      // Save new password
      faculty.password = new_password;
      await faculty.save();

      const res = NextResponse.json({
        success: true,
        message: "Password changed successfully",
      });
      res.cookies.set("token", "", { maxAge: 0 });
      return res;
    } else {
      const { new_password, _id } = data;
      const faculty = await facultyModel.findById(_id);
      faculty.password = new_password;
      await faculty.save();
      return NextResponse.json({
        success: true,
        message: "Password changed successfully",
      });
    }
  } catch (error) {
    console.error("Change password error:", error);
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}
