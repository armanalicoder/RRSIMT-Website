import connectToDB from "@/lib/dbConnect";
import facultyModel from "@/models/facultyModel";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

export async function POST(req) {
  // const origin = req.headers.get("Origin") || "";
  // if (origin !== process.env.HOST_DOMAIN) {
  //   return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  // }
  try {
    await connectToDB();

    const body = await req.json();
    const { email, password } = body.data || body;

    if (!email || !password) {
      return NextResponse.json(
        { success: false, message: "All fields are required!" },
        { status: 400 }
      );
    }

    const faculty = await facultyModel.findOne({ email });
    if (!faculty) {
      return NextResponse.json(
        { success: false, message: "Invalid credentials" },
        { status: 401 }
      );
    }

    const isMatch = await bcrypt.compare(password, faculty.password);
    if (!isMatch) {
      return NextResponse.json(
        { success: false, message: "Invalid credentials" },
        { status: 401 }
      );
    }

    if (faculty.login != "disabled") {
      const token = jwt.sign(
        { id: faculty._id, role: faculty.role },
        process.env.JWT_SECRET,
        { expiresIn: "1d" }
      );

      const response = NextResponse.json({
        success: true,
        message: "Login successful",
        user: {
          id: faculty._id,
          email: faculty.email,
          role: faculty.role,
        },
      });

      response.cookies.set("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 60 * 60 * 24,
        path: "/",
      });

      return response;
    } else {
      return NextResponse.json(
        { success: false, message: "Login is Disabled. Contact to Director" },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("LOGIN ERROR ", error.message);
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}
