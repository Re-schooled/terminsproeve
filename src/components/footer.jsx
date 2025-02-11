import { IoSearch, IoHomeOutline, IoCalendarOutline, IoHome } from "react-icons/io5";
import Link from "next/link";



export default function Footer() {
    Footer = () => {
    return (
        <footer className="fixed bottom-0 w-full bg-white">
            <nav className="w-full max-w-screen-xl mx-auto p-4 flex justify-around">
            <Link href="/"> <IoHomeOutline /> </Link>
            <Link href="/soeg"> <IoSearch /> </Link>
            <Link href="/calendar"> <IoCalendarOutline /> </Link>
            </nav>
        </footer>
    )
}
}