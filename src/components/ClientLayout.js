"use client"

// usePathname
import { usePathname } from "next/navigation"
import Footer from "./Footer"

export default function ClientLayout({ children }) {
    const pathname = usePathname();
    const removeFooterHeaderfromPages = pathname === "/" || pathname === "/login";

    return (
        <>
        <main>{children}</main>
        {!removeFooterHeaderfromPages && <Footer />}
        </>
    );
}

// usePathname er sejt B-)