'use client';
import * as React from 'react';

interface ValObj {
	text: string;
	value: number;
}

interface DemoText {
	content: string;
	italic: boolean;
	bold: boolean;
	underline: boolean;
	fontSize: ValObj;
	interline: ValObj;
	align: string;
}

export default function LeTesteurPage() {
	const [demoText, setDemoText] = React.useState<DemoText>({
		// const demoText: DemoText = {
		content:
			"« Je rend hommage à mon père, Henri Mouron, fils de A.M.Cassandre, qui au travers de son livre CASSANDRE, dédié à l'Artiste, à rendu possible la réalisation de ce site sur A.M.Cassandre. J'adresse également mes remerciements à Suntory Museum, la BnF et tout particulièrement à Monsieur Alain Weill pour son amitié indéfectible. » Roland Mouron, petit-fils de A.M.Cassandre (Ref : https://www.cassandre.fr)",
		bold: false,
		italic: false,
		underline: false,
		fontSize: {
			text: 'text-200',
			value: 200,
		},
		interline: {
			text: 'leading-250',
			value: 250,
		},
		align: 'text-start',
		// };
	});

	const OnChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		const name: string = e.currentTarget.name;
		let value: string | boolean | object | null = null;

		switch (name) {
			case 'bold':
			case 'italic':
			case 'underline':
				value = e.currentTarget.checked;
				break;
			case 'fontSize':
				value = {
					text: `text-${+e.currentTarget.value}`,
					value: +e.currentTarget.value,
				};
				break;
			case 'interline':
				value = {
					text: `leading-${+e.currentTarget.value}`,
					value: +e.currentTarget.value,
				};
				break;
			case 'align':
				value = e.currentTarget.value;
				break;
		}

		setDemoText({
			...demoText,
			[name]: value,
		});
	};

	return (
		<>
			<div className="flex h-full-m16 gap-3">
				<div className="card w-1/2 p-10 justify-around">
					<div className="w-full  flex flex-col">
						<div className="w-full  flex flex-col">
							<label
								htmlFor="fontSize"
								className="text-3xl w-full text-center block py-6"
							>
								Taille du text ( en pixel )
							</label>
							<input
								name="fontSize"
								type="range"
								min="100"
								max="1000"
								defaultValue={demoText.fontSize.value}
								step={25}
								className="range"
								onChange={OnChangeHandler}
							/>
						</div>
						<div className="w-full text-xs grid grid-cols-10 gap-7 py-10 font-bolder">
							<p className="flex flex-col items-center">
								<span>|</span>
								<span>16</span>
								<span>|</span>
							</p>
							<p className="flex flex-col items-center">
								<span>|</span>
								<span>32</span>
								<span>|</span>
							</p>
							<p className="flex flex-col items-center">
								<span>|</span>
								<span>48</span>
								<span>|</span>
							</p>
							<p className="flex flex-col items-center">
								<span>|</span>
								<span>64</span>
								<span>|</span>
							</p>
							<p className="flex flex-col items-center">
								<span>|</span>
								<span>80</span>
								<span>|</span>
							</p>
							<p className="flex flex-col items-center">
								<span>|</span>
								<span>96</span>
								<span>|</span>
							</p>
							<p className="flex flex-col items-center">
								<span>|</span>
								<span>112</span>
								<span>|</span>
							</p>
							<p className="flex flex-col items-center">
								<span>|</span>
								<span>128</span>
								<span>|</span>
							</p>
							<p className="flex flex-col items-center">
								<span>|</span>
								<span>144</span>
								<span>|</span>
							</p>
							<p className="flex flex-col items-center">
								<span>|</span>
								<span>160</span>
								<span>|</span>
							</p>
						</div>
						<div className="w-full flex flex-col-reverse">
							<label
								htmlFor="interline"
								className="text-3xl w-full text-center block py-6"
							>
								Taille de l&apos;interligne ( en pixel )
							</label>
							<input
								name="interline"
								type="range"
								min="100"
								max="1000"
								defaultValue={demoText.interline.value}
								step={25}
								className="range"
								onChange={OnChangeHandler}
							/>
						</div>
					</div>

					<div className="w-full  flex flex-col">
						<div className="text-3xl w-full text-center block py-3">
							Style de caractere
						</div>
						<div className="w-full grid grid-cols-3">
							<div className="flex flex-col">
								<label
									className="text-center pb-1 text-xl"
									htmlFor="bold"
								>
									Gras
								</label>
								<input
									type="checkbox"
									name="bold"
									onChange={OnChangeHandler}
								/>
							</div>
							<div className="flex flex-col">
								<label
									className="text-center pb-1 text-xl"
									htmlFor="italic"
								>
									Italique
								</label>
								<input
									type="checkbox"
									name="italic"
									onChange={OnChangeHandler}
								/>
							</div>
							<div className="flex flex-col">
								<label
									className="text-center pb-1 text-xl"
									htmlFor="underline"
								>
									Sousligné
								</label>
								<input
									type="checkbox"
									name="underline"
									onChange={OnChangeHandler}
								/>
							</div>
						</div>
					</div>
					<div className="w-full flex flex-col">
						<div className="text-3xl w-full text-center block py-3">
							Allignement
						</div>
						<div className="w-full grid grid-cols-4">
							<div className="flex flex-col">
								<label
									className="text-center pb-1 text-xl"
									htmlFor="b_style"
								>
									Gauche
								</label>
								<input
									defaultChecked
									type="radio"
									value="text-start"
									name="align"
									onChange={OnChangeHandler}
								/>
							</div>
							<div className="flex flex-col">
								<label
									className="text-center pb-1 text-xl"
									htmlFor="b_style"
								>
									Centré
								</label>
								<input
									type="radio"
									value="text-center"
									name="align"
									onChange={OnChangeHandler}
								/>
							</div>
							<div className="flex flex-col">
								<label
									className="text-center pb-1 text-xl"
									htmlFor="i_style"
								>
									Droite
								</label>
								<input
									type="radio"
									value="text-end"
									name="align"
									onChange={OnChangeHandler}
								/>
							</div>
							<div className="flex flex-col">
								<label
									className="text-center pb-1 text-xl"
									htmlFor="u_style"
								>
									Justifié
								</label>
								<input
									type="radio"
									value="text-justify"
									name="align"
									onChange={OnChangeHandler}
								/>
							</div>
						</div>
					</div>
				</div>
				<div className="card w-1/2 bg-white border border-black overflow-x-hidden overflow-y-scroll resize-none">
					<p
						className={`card-body 
							${demoText.align} 
							${demoText.fontSize.text} 
							${demoText.interline.text} 
							${demoText.underline ? 'underline' : ''} 
							${demoText.bold ? 'font-bold' : ''} 
							${demoText.italic ? 'italic' : ''} 
							
						`}
					>
						{demoText.content}
					</p>
				</div>
			</div>
		</>
	);
}
