import { NextResponse } from "next/server"

export function middleware(request) {
	//console.log("request", request.cookies.has("repe_token"))

	if (!request.cookies.has("termin_token") || !request.cookies.has("termin_bruger_uid")) {
		return NextResponse.redirect(new URL("/login", request.url))
	}
}

export const config = {
	matcher: "/profile/:path*"
}