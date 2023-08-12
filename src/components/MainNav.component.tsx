interface NavItem {
	name: string;
	url: string;
}

export default function MainNavComponent() {
	const navItems: Array<NavItem> = [
		{ name: 'La Présetation', url: '/' },
		{ name: 'Le Créateur', url: '/le_createur' },
		// { name: 'Le Peignot', url: '/le_peignot' },
		{ name: 'Le Testeur', url: '/le_testeur' },
	];

	return (
		<nav className="w-full h-9 fixed z-50 top-0 bg-black text-white font-peignot text-xl">
			<ul className={`w-full h-full grid grid-cols-${navItems.length}`}>
				{navItems.map((n) => (
					<li
						key={n.name}
						className="h-full hover:bg-neutral-700 hover:underline"
					>
						<a
							href={n.url}
							className="flex justify-center items-center w-full h-full"
						>
							{n.name}
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
}
