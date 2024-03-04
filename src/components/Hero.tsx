import React from "react";

export default function Hero() {
	return (
		<>
			<div className="hero-wrapper h-screen pb-16">
				<div
					className="hero h-full min-w-screen rounded-b-[3rem] overflow-hidden"
					style={{
						backgroundImage: `url(./hero-chair.jpg)`,
					}}
				>
					<div className="hero-content items-center md:pe-[30vw] text-neutral-content">
						<div className="max-w-lg text-center md:text-start">
							<h1 className="mb-6 text-5xl lg:text-6xl font-bold text-primary-dark font-playfair">
								Exclusive Deals of Furniture Collection
							</h1>
							<p className="mb-5 lg:text-lg text-primary-dark">
								Explore different categories. Find the best deal for you.
							</p>
							<button className="btn px-8 btn-primary-light shadow-lg border-none">Show Now</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
