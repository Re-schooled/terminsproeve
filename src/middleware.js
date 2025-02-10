import { NextResponse } from "next/server"

export function middleware(request) {
	//console.log("request", request.cookies.has("repe_token"))

	if (!request.cookies.has("repe_token") || !request.cookies.has("repe_uid")) {
		return NextResponse.redirect(new URL("/login", request.url))
	}
}

export const config = {
	matcher: "/profile/:path*"
}