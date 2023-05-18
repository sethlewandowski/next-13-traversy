import { Bars3Icon } from "@heroicons/react/24/outline";

export default function Header() {
	return (
		<header className="bg-white">
			<nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
				<div className="flex lg:flex-1">
					<a href="#" className="-m-1.5 p-1.5">
						<span className="sr-only">Your Company</span>
					</a>
				</div>
				<div className="flex lg:hidden">
					<button
						type="button"
						className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
					>
						<span className="sr-only">Open main menu</span>
						<Bars3Icon className="h-6 w-6" aria-hidden="true" />
					</button>
				</div>
				<div className="hidden lg:flex lg:gap-x-12">
					<a href="/" className="text-sm font-semibold leading-6 text-gray-900">
						Home
					</a>
					<a href="/about" className="text-sm font-semibold leading-6 text-gray-900">
						About
					</a>
					<a href="/about/team" className="text-sm font-semibold leading-6 text-gray-900">
						Team
					</a>
					<a href="/code/repos" className="text-sm font-semibold leading-6 text-gray-900">
						Repos
					</a>
					<a href="/csrrepos" className="text-sm font-semibold leading-6 text-gray-900">
						CSR Repos
					</a>
				</div>
				<div className="hidden lg:flex lg:flex-1 lg:justify-end">
					<a href="#" className="text-sm font-semibold leading-6 text-gray-900">
						Log in <span aria-hidden="true">&rarr;</span>
					</a>
				</div>
			</nav>
		</header>
	);
}

// <header>
// 	<Link href="/">Home</Link>
// 	<Link href="/about">About</Link>
// 	<Link href="/about/team">Team</Link>
// 	<Link href="/code/repos">Repos</Link>
// </header>
