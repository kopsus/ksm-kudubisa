import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

// Daftar rute
const privateRoutesAdmin = [
  "/dashboard",
  "/gallery",
  "/produk",
  "/transaksi",
  "/users",
];
const privateRoutesMasyarakat = ["/profile"];
const authRoutes = ["/login", "/register"];
const publicRoutes = ["/edukasi", "/layanan", "/tentang"];

export async function middleware(request: NextRequest) {}

export const config = {
  matcher: [
    "/((?!_next|.*\\.(?:css|js|png|jpg|jpeg|webp|gif|svg|ico|woff2?|ttf|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};
