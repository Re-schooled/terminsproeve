import Image from "next/image"

export default function Header() {
    return (
        <header className="fixed w-full">
            <div className="mt-32">
            <Image src="/images/Logo.png" alt="Landrup Dans Header Logo" width={400} height={600}/>
            </div>
        </header>
    )
}
