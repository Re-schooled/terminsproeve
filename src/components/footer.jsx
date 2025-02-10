import { IoSearch, IoHomeOutline } from "react-icons/io5";


export default function Footer() {
    Footer = () => {
    return (
        <footer className="fixed bottom-0 h-20 flex bg-white w-full">
            <nav className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-evenly">
                <ul className="flex justify-evenly">
                    <li ><IoHomeOutline /></li>
                    <li><IoSearch /></li>
                </ul>
            </nav>
        </footer>
    )
}
}