import React from "react";

import Image from "next/image";
import PopularItem from "./PopularItem";

export default function Popular() {
	const mapPopularItems = (itemCount: number) => {
		// randomly initialize a null array of 8 items
		return Array(itemCount)
			.fill(null)
			.map((_, i) => <PopularItem key={i} index={i} itemId={i} />);
	};
	return (
		<>
			<h2 className="font-playfair text-5xl text-center text-primary-dark font-bold my-4">Popular Products</h2>
			<div className="w-full grid items-center my-4">
				<div className="carousel carousel-center w-full max-w-screen-xl p-4 space-x-5 mx-auto border-b-2 border-b-primary-dark">
					{mapPopularItems(8)}
				</div>
			</div>
		</>
	);
}
