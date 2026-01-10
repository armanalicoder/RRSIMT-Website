import { NextResponse } from "next/server";

export async function POST() {
  // const origin = req.headers.get("Origin") || "";
  // if (origin !== process.env.HOST_DOMAIN) {
  //   return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  // }
  const res = NextResponse.json({
    success: true,
    message: "Logout Successfully",
  });
  res.cookies.set("token", "", { maxAge: 0 });
  return res;
}
