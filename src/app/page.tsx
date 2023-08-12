import Card from '@COMPS/Card.component';
import Main from '@COMPS/MainElement.component';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Planche typographique: Le Peignot | Peignot',
};

export default function LaPresentationPage() {
	return (
		<Main>
			<div className="carousel-item h-full flex flex-col items-center pt-12 font-peignot relative">
				<h1 className="text-[16rem]">Peignot</h1>
				<p className="text-[3rem] -mt-24 ml-96 -mr-24">1937 - Cassandre</p>
				<p className="w-2/3 mt-20 flex flex-col items-center text-center text-3xl">
					A quitter ses amis pour les plus grandes des vacances. Il leur
					souhaite agréable fin de terre, escompte leur visite fraternelle
					(en que sous un bienheureux délai), et se doit de leur redire :{' '}
					<br />
					<span className="text-[4rem] mt-7">aimez la typographie</span>
					<br />
					<span className="text-[5rem] mt-7">aimez la typo</span> <br />
					<span className="text-[6rem] mt-7">aimez</span>
					<br />
					<span className="text-[2rem] mt-12">~ A. M. Cassandre ~</span>
				</p>
			</div>

			<Card
				title="Le Peignot"
				content={
					<>
						<span className="mb-5">
							D&apos;inspiration art déco, cette police est célèbre pour
							le fait qu&apos;elle soit de type biforme,
							c&apos;est-à-dire qu&apos;elle n&apos;a pas de bas-de-casse
							au sens traditionnel, mais qu&apos;à la place elle combine
							des caractères bas-de-casse et de petites capitales
							modifiées. En effet, elle s&apos;attache à revenir aux
							origines, lorsque les caractères latins s&apos;écrivaient
							uniquement en capitales, à l&apos;époque romaine.
						</span>
						<span className="mb-5">
							Cette construction particulière la rend difficilement
							lisible dans les petits corps, si bien qu&apos;elle est
							principalement destinée à des énoncés courts et de grande
							taille, notamment pour l&apos;affichage et la signalétique.
							Lorsqu&apos;elle est utilisée sur support papier, elle se
							limite généralement aux titres.
						</span>
						<span className="mb-5">
							La police Peignot a été lancée durant l&apos;Exposition
							universelle de 1937 à Paris, lorsqu&apos;elle a été choisie
							par Paul Valéry pour les deux inscriptions qu&apos;il a
							rédigées dans le but d&apos;orner chacune des deux tours du
							Palais de Chaillot. Le Peignot a atteint une certaine
							popularité dans l&apos;affichage et la publicité depuis sa
							sortie jusqu&apos;à la fin des années 1940, mais son usage
							a ensuite décliné avec le succès grandissant du style
							typographique international et ses polices telles
							qu&apos;Helvetica.
						</span>
					</>
				}
				image={<img src="/table_glyphe.png" alt="" />}
			/>

			<Card
				hShorter
				reverse
				title="L'art-déco"
				content={
					<>
						<span className="mb-5">
							L&apos;art déco est un courant artistique qui voit le jour
							dans les années 1910 et qui connait son plein
							épanouissement au cours des années 20 pour à la fin
							décliner dans les années 30. Le terme « Art déco » est
							l&apos;abréviation de « Arts décoratifs » et tire son nom
							de l&apos;Exposition internationale des Arts décoratifs et
							industriels modernes qui se tint à Paris en 1925, il touche
							le monde de l&apos;architecture, plus précisément
							l&apos;aménagement et la décoration de l&apos;intérieur.
						</span>
						<span className="mb-5">
							L&apos;Art déco possède des caractéristiques qui lui sont
							propres. Voici quelques-unes de ces principales
							caractéristiques dans le design graphique :
							<ul className="pl-10 pt-3">
								<li>
									- réapparition de la rigueur et du dépouillement dans
									les formes
								</li>
								<li> - recherche de l&apos;élégance</li>
								<li> - opposition des courbes et des lignes droites</li>
								<li>
									- précision angulaire et contours en décrochements
								</li>
								<li> - couleurs vives</li>
								<li> - exotisme, féminité</li>
								<li> - tendance au monumentalisme</li>
							</ul>
						</span>
					</>
				}
				image={<img src="/art_deco1.jpg" alt="" />}
			/>
		</Main>
	);
}
