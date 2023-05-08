import Link from "next/link";

export default function Header() {
	return (
		<header>
			<Link href="/">Home</Link>
			<Link href="/about">About</Link>
			<Link href="/about/team">Team</Link>
		</header>
	);
}
