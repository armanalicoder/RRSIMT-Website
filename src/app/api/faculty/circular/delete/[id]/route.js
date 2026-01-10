import connectToDB from "@/lib/dbConnect";
import circularModel from "@/models/circularModel";
import { jwtVerify } from "jose";
import { NextResponse } from "next/server";

export async function DELETE(req, { params }) {
  await connectToDB();

  const token = req.cookies.get("token")?.value;
  if (!token) {
    return NextResponse.json({ loggedIn: false }, { status: 401 });
  }

  const secret = new TextEncoder().encode(process.env.JWT_SECRET);

  let payload;
  try {
    const verified = await jwtVerify(token, secret);
    payload = verified.payload;
  } catch (err) {
    return NextResponse.json({ message: "Invalid Token" }, { status: 401 });
  }

  const { id } = await params;
  if (!id) {
    return NextResponse.json({ message: "Id is required" }, { status: 400 });
  }

  await circularModel.findByIdAndDelete(id);

  return NextResponse.json({
    success: true,
    message: "Circular Deleted Successfully",
  });
}
