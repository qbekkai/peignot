export default function Main({ children }: React.PropsWithChildren) {
	return (
		<main className="">
			<div className="w-full carousel carousel-vertical h-no-nav-no-foot-m-nav">
				{children}
			</div>
		</main>
	);
}
