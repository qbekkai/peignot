function Carousel({ image }: { image: Array<any> }) {
	return (
		<>
			<div className="carousel items-center">
				{image.map((i, n) => {
					return (
						<div
							key={n}
							id={`image${n}`}
							className="carousel-item h-fit w-full flex justify-center items-center flex-col"
						>
							<img src={i.src} alt={i.alt} className="rounded" />
							<p className="text-center w-11/12 text-sm">{i.alt}</p>
						</div>
					);
				})}
			</div>
			<div className="flex justify-center w-full py-2 gap-2 h-min">
				{image.map((i, n) => {
					return (
						<a key={n} href={`#image${n}`} className="font-bolder">
							•
						</a>
					);
				})}
			</div>
		</>
	);
}

export default function Main({ title, image, content, reverse }: any) {
	return (
		<div className="carousel-item h-full p-10">
			<div
				className={`card card-side ${
					reverse ? 'card-side-reverse' : ''
				} bg-card w-full h-full rounded-xl border-2 border-black`}
			>
				<figure className="w-1/3 p-5 bg-neutral-400 flex flex-col">
					{Array.isArray(image) ? <Carousel image={image} /> : image}
				</figure>
				<p className="card-body w-2/3 p-16 font-sans text-2xl">
					<span className="card-title mx-auto mb-14 text-6xl font-bold underline font-peignot">
						{title}
					</span>
					{content}
				</p>
			</div>
		</div>
	);
}
