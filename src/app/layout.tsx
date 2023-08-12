import '../style/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import MainNav from '@COMPS/MainNav.component';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	description: '',
	icons: './next.svg',
};

export default function LaPresentationLayout({
	children,
}: React.PropsWithChildren) {
	return (
		<html lang="en" data-theme="light">
			<body
				className={`bg-peignot bg-cover bg-fixed bg-no-repeat w-screen h-screen ${inter.className}`}
			>
				<MainNav />
				{children}
				<footer className="h-24 bg-black">
					<div className="w-full h-full flex justify-end items-center p-5">
						<a
							className="btn font-peignot bg-neutral-300 text-3xl normal-case hover:bg-neutral-400 hover:underline"
							href="./fonts/peignot.zip"
							title="Télécharchez le Peigot"
						>
							<p>Téléchargez-moi</p>
						</a>
					</div>
				</footer>
			</body>
		</html>
	);
}
