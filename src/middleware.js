import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

const secret = new TextEncoder().encode(process.env.JWT_SECRET);

export async function middleware(req) {
  const token = req.cookies.get("token")?.value;
  const pathname = req.nextUrl.pathname;
  if (pathname.startsWith("/login")) {
    if (token) {
      try {
        const { payload } = await jwtVerify(token, secret);

        if (payload.role === "faculty") {
          return NextResponse.redirect(
            new URL("/faculty/dashboard", req.url)
          );
        }

        if (payload.role === "director") {
          return NextResponse.redirect(
            new URL("/director/dashboard", req.url)
          );
        }
      } catch {
        return NextResponse.next();
      }
    }
    return NextResponse.next();
  }

  if (!token) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  let payload;
  try {
    const verified = await jwtVerify(token, secret);
    payload = verified.payload;
  } catch {
    return NextResponse.redirect(new URL("/", req.url));
  }

  if (pathname.startsWith("/faculty") && payload.role !== "faculty") {
    return NextResponse.redirect(new URL("/unauthorized", req.url));
  }

  if (pathname.startsWith("/director") && payload.role !== "director") {
    return NextResponse.redirect(new URL("/unauthorized", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/login/:path*",
    "/faculty/:path*",
    "/director/:path*",
  ],
};
