import { NextRequest, NextResponse } from "next/server";
import * as jose from "jose";

// Daftar rute
const privateRoutesAdmin = [
  "/dashboard",
  "/gallery",
  "/produk",
  "/transaksi",
  "/users",
];
const privateRouteAgenAndPengepul = ["/dashboard", "/transaksi"];
const privateRoutesMasyarakat = ["/profile"];
const authRoutes = ["/login", "/register"];

// Gabungkan semua rute privat untuk kemudahan pengecekan
const allPrivateRoutes = [
  ...privateRoutesAdmin,
  ...privateRouteAgenAndPengepul,
  ...privateRoutesMasyarakat,
];

// Petakan role ke rute yang diizinkan
const roleRoutes = {
  Admin: privateRoutesAdmin,
  Agen: privateRouteAgenAndPengepul,
  Pengepul: privateRouteAgenAndPengepul,
  Masyarakat: privateRoutesMasyarakat,
};

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get("accessToken")?.value;

  // 1. Logika untuk pengguna yang sudah login (punya token)
  if (token) {
    let decoded;
    try {
      // Verifikasi token untuk mendapatkan payload (termasuk role)
      const secret = new TextEncoder().encode(process.env.JWT_SECRET!);
      const { payload } = await jose.jwtVerify(token, secret);
      decoded = payload;
    } catch (error) {
      // Jika token tidak valid (kadaluwarsa, dll), arahkan ke login
      const response = NextResponse.redirect(new URL("/login", request.url));
      // Hapus cookie yang tidak valid
      response.cookies.delete("accessToken");
      return response;
    }

    // 1a. Jika sudah login, jangan biarkan akses halaman login/register
    if (authRoutes.includes(pathname)) {
      // Arahkan ke halaman utama sesuai role, atau ke profile sebagai default
      const redirectUrl =
        decoded.role === "Masyarakat" ? "/profile" : "/dashboard";
      return NextResponse.redirect(new URL(redirectUrl, request.url));
    }

    // 1b. Logika akses berdasarkan role
    const userRole = decoded.role as keyof typeof roleRoutes;
    const allowedRoutesForRole = roleRoutes[userRole] || [];

    // Cek apakah path yang diakses adalah rute privat
    const isAccessingPrivateRoute = allPrivateRoutes.some((route) =>
      pathname.startsWith(route)
    );

    // Jika mencoba akses rute privat yang bukan haknya
    if (
      isAccessingPrivateRoute &&
      !allowedRoutesForRole.some((route) => pathname.startsWith(route))
    ) {
      // Arahkan ke halaman utama sesuai role
      const redirectUrl = userRole === "Masyarakat" ? "/profile" : "/dashboard";
      return NextResponse.redirect(new URL(redirectUrl, request.url));
    }
  }
  // 2. Logika untuk pengguna yang belum login (tidak punya token)
  else {
    // Jika mencoba akses rute privat mana pun tanpa login, arahkan ke login
    if (allPrivateRoutes.some((route) => pathname.startsWith(route))) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  // Jika semua kondisi di atas tidak terpenuhi, izinkan akses
  return NextResponse.next();
}

// ... (config Anda tidak perlu diubah)
export const config = {
  matcher: [
    "/((?!_next|.*\\.(?:css|js|png|jpg|jpeg|webp|gif|svg|ico|woff2?|ttf|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};
