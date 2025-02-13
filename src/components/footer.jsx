import { IoSearch, IoHomeOutline, IoCalendarOutline } from "react-icons/io5";
import Link from "next/link";



export default function Footer() {
    Footer = () => {
    return (
        <footer className="fixed bottom-0 w-full bg-white h-[7vh]">
            <nav className="w-full max-w-screen-xl mx-auto py-2 px-1 flex justify-between">
            <Link href="/activities"> <div className="p-2 rounded-full border-2 border-black" > <IoHomeOutline size={28} /> </div></Link>
            <Link href="/soeg"> <div className="p-2 rounded-full border-2    border-black" > <IoSearch size={28}/></div> </Link>
            <Link href="/kalender"> <div className="p-2 rounded-full border-2 border-black" ><IoCalendarOutline size={28}/> </div></Link>
            </nav>
        </footer>
    )
}
}