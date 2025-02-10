import Link from "next/link";

export default function MainLayout({ children }) {
	return (
		<>
			<header>
				Dette er Main Layoutet
				<Link href="/login">Log ind</Link>
			</header>
			{children}

		</>
	)
}