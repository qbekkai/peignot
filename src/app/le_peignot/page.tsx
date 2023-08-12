'use client';
import * as React from 'react';

export default function LePeignotPage() {
	const cerclageRef = React.useRef<any>(null);
	const [upperChar, setUpperChar] = React.useState<number>(65); // A
	const [lowerChar, setLowerChar] = React.useState<number>(97); // a

	React.useEffect(() => {
		document.addEventListener('mousemove', (e) => {
			var x = e.clientX;
			var y = e.clientY;
			console.log('coord', `${x}:${y}`);
			if (cerclageRef.current == null) return;
			cerclageRef.current.setAttribute(
				'style',
				// `clip-path: circle(75px at ${x}px calc(${y}px - (150px/1.1));`,
				`clip-path: circle(75px at ${x - 110}px ${y - 175}px);`,
			);
		});
	});

	return (
		<>
			<div className="flex h-full-m16 relative">
				<div className="flex items-center justify-between w-3/5 p-5 relative">
					<button
						onClick={() => {
							if (upperChar === 65 && lowerChar === 97) {
								setUpperChar(90);
								setLowerChar(122);
							} else {
								setUpperChar(upperChar - 1);
								setLowerChar(lowerChar - 1);
							}
						}}
						className="btn bg-white text-3xl"
					>
						{'<'}
					</button>
					<div className="absolute top-1/2 left-1/2 -right-[35%] -translate-x-1/2 -translate-y-1/2">
						<p className="text-XL text-center">
							<div className=" relative -z-10">
								<div className="h-1 w-full bg-neutral-700 fixed top-up-upper left-0"></div>
								<div className="h-1 w-full bg-neutral-700 fixed top-up-lower left-0"></div>
								<div className="h-1 w-full bg-neutral-700 fixed top-down-upper-lower left-0"></div>
								<div className="h-1 w-full bg-neutral-700 fixed top-down-lower left-0"></div>
							</div>
							{String.fromCharCode(upperChar) +
								String.fromCharCode(lowerChar)}
						</p>
					</div>
					<div className="absolute top-1/2 left-1/2 -right-[35%] -translate-x-1/2 -translate-y-1/2">
						<p
							className="text-XL text-center circle  cursor-none"
							ref={cerclageRef}
						>
							<div className=" relative -z-10">
								<div className="h-1 w-full bg-neutral-200 fixed top-up-upper left-0"></div>
								<div className="h-1 w-full bg-neutral-200 fixed top-up-lower left-0"></div>
								<div className="h-1 w-full bg-neutral-200 fixed top-down-upper-lower left-0"></div>
								<div className="h-1 w-full bg-neutral-200 fixed top-down-lower left-0"></div>
							</div>
							{String.fromCharCode(upperChar) +
								String.fromCharCode(lowerChar)}
						</p>
					</div>
					<button
						onClick={() => {
							if (upperChar === 90 && lowerChar === 122) {
								setUpperChar(65);
								setLowerChar(97);
							} else {
								setUpperChar(upperChar + 1);
								setLowerChar(lowerChar + 1);
							}
						}}
						className="btn bg-white text-3xl"
					>
						{'>'}
					</button>
				</div>
				<div className="flex items-center justify-center w-2/5 p-3">
					<div className="card border-dashed border-black border-2 w-full h-full bg-white-900">
						<p className="card-title py-3 flex justify-center text-3xl">
							Trouver les définitions de chaques mots
						</p>
					</div>
				</div>
			</div>
		</>
	);
}
