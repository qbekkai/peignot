import Card from '@COMPS/Card.component';
import Main from '@COMPS/MainElement.component';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Mon Créateur : Cassandre | Peignot',
};

const carousel: Array<any> = [
	{ src: '/crea_and_works/cassandre2.jpg', alt: 'Le Créateur : Cassandre.' },
	{
		src: '/crea_and_works/atg.jpg',
		alt: "Couverture : L'arts et les techniques graphique, n° spécial 59 (n° rédiger entierement en Peignot).",
	},
	{ src: '/crea_and_works/le_jour.jpg', alt: 'Journal : Le Jour.' },
	{ src: '/crea_and_works/peignot.jpg', alt: 'Affiche : Planche Découverte.' },
	{
		src: '/crea_and_works/peignot1.jpg',
		alt: 'Affiche : Peignot Exemple, Peignot, n°2.',
	},
];

export default function LeCreateurPage() {
	return (
		<Main>
			<div className="carousel-item h-full flex flex-col items-center justify-center font-peignot relative">
				<h1 className="text-[5rem] font-bold flex flex-col items-center">
					Adolphe Jean Marie MOURON
					<br />
					<span className="text-[2rem] font-normal -mb-5 uppercase">
						alias
					</span>
					<br />
					Cassandre
				</h1>
				<p className="text-[1.8rem] -mt-3">
					24 janvier 1901 - 17 juin 1968
				</p>
				<p className=" mt-20 flex flex-col items-center text-center text-5xl font-bold">
					Peintre / Créateur de caractère
					<br />
					Affichiste / Graphiste
				</p>
			</div>

			<Card
				hShorter
				title="Cassandre"
				content={
					<>
						<span className="mb-5">
							Cassandre, pseudonyme d&apos;Adolphe Jean Marie Mouron est
							né le 24 janvier 1901 à Kharkov, Ukraine et décède le 17
							juin 1968 à Paris. C&apos;est un graphiste, affichiste,
							peintre et typographe français. Il est principalement connu
							pour ses affiches publicitaires, pour les caractères
							typographiques le Bifur et le Peignot, et pour avoir
							dessiné le logo de la marque Yves Saint Laurent, en 1961.
						</span>
						<span className="mb-5">
							Il fera un bref passage aux Beaux-Arts à Paris en 1918 pour
							y étudier la peinture et notamment l&apos;impressionnisme.
							Il s&apos;intéresse très tôt au Bauhaus, dont
							l&apos;influence transparaît dans ses compositions. En
							1922, devant s&apos;assumer financièrement, il est embauché
							par le studio de création indépendant Hachard, où il
							réalise ses premiers travaux publicitaires qu&apos;il signe
							du nom d&apos;artiste de «Cassandre» en 1922.
						</span>
					</>
				}
				image={carousel}
			/>
		</Main>
	);
}
