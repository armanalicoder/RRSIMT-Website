import { NextResponse } from "next/server";
import { jwtVerify } from "jose";
import connectToDB from "@/lib/dbConnect";
import facultyModel from "@/models/facultyModel";
import "@/models/departmentModel";
import circularModel from "@/models/circularModel";
import admissionModel from "@/models/admissionModel";

const secret = new TextEncoder().encode(process.env.JWT_SECRET);

export async function GET(req) {
  // const origin = req.headers.get("Origin") || "";
  // if (origin !== process.env.HOST_DOMAIN) {
  //   return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  // }
  try {
    await connectToDB();

    const token = req.cookies.get("token")?.value;
    if (!token) {
      return NextResponse.json({ loggedIn: false });
    }

    const { payload } = await jwtVerify(token, secret);

    const circulars = await circularModel.find({});
    const total_circular = circulars.length;

    const admission = await admissionModel.find({});
    const admission_count = admission.length;

    const faculties = await facultyModel.find({});
    const faculty_count = faculties.length;

    const user = await facultyModel
      .findById(payload.id)
      .populate("department", "name -_id")
      .select("-password");

    if (!user) {
      return NextResponse.json({ loggedIn: false });
    }

    return NextResponse.json({
      loggedIn: true,
      user: {
        // id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        image: user.image,
        department: user.department,
        designation: user.designation,
        // totalCircular: total_circular,
        // admission_count: admission_count,
        // total_faculties: faculty_count,
      },
    });
  } catch (error) {
    return NextResponse.json({ loggedIn: false });
  }
}
