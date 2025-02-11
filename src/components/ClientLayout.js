"use client"

// usePathname
import { usePathname } from "next/navigation"
import Footer from "./Footer"

export default function ClientLayout({ children }) {
    const pathname = usePathname();
    const isSpecialPage = pathname === "/" || pathname === "/login";

    return (
        <>
        <main>{children}</main>
        {!isSpecialPage && <Footer />}
        </>
    );
}