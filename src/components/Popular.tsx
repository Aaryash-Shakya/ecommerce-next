import React from "react";

import Image from "next/image";

export default function Popular() {
	return (
		<>
			<h2 className="font-playfair text-5xl text-center text-primary-dark font-bold my-4">Popular Products</h2>
			<div className="w-full grid items-center my-4">
				<div className="carousel carousel-center w-full max-w-screen-xl p-4 space-x-5 mx-auto border-b-2 border-b-primary-dark">
					<div className="carousel-item">
						<div className="skeleton p-4 md:p-7 w-64 aspect-[3/4] carousel-color-1 flex flex-col justify-center items-start">
							<Image src="/blue-chair.png" alt="sofa" width={120} height={0} className="mx-auto" />
							<p className="mt-4 font-semibold">Premium Sofa</p>
							<p className="mt-4">Minimal single chair</p>
							<p className="mt-2 font-semibold">Rs 4000</p>
						</div>
					</div>
					<div className="carousel-item">
						<div className="skeleton p-4 md:p-7 w-64 aspect-[3/4] carousel-color-2 flex flex-col justify-center items-start">
							<Image src="/blue-chair.png" alt="sofa" width={120} height={0} className="mx-auto" />
							<p className="mt-4 font-semibold">Premium Sofa</p>
							<p className="mt-4">Minimal single chair</p>
							<p className="mt-2 font-semibold">Rs 4000</p>
						</div>
					</div>
					<div className="carousel-item">
						<div className="skeleton p-4 md:p-7 w-64 aspect-[3/4] carousel-color-3 flex flex-col justify-center items-start">
							<Image src="/blue-chair.png" alt="sofa" width={120} height={0} className="mx-auto" />
							<p className="mt-4 font-semibold">Premium Sofa</p>
							<p className="mt-4">Minimal single chair</p>
							<p className="mt-2 font-semibold">Rs 4000</p>
						</div>
					</div>
					<div className="carousel-item">
						<div className="skeleton p-4 md:p-7 w-64 aspect-[3/4] carousel-color-4 flex flex-col justify-center items-start">
							<Image src="/blue-chair.png" alt="sofa" width={120} height={0} className="mx-auto" />
							<p className="mt-4 font-semibold">Premium Sofa</p>
							<p className="mt-4">Minimal single chair</p>
							<p className="mt-2 font-semibold">Rs 4000</p>
						</div>
					</div>
					<div className="carousel-item">
						<div className="skeleton p-4 md:p-7 w-64 aspect-[3/4] carousel-color-1 flex flex-col justify-center items-start">
							<Image src="/blue-chair.png" alt="sofa" width={120} height={0} className="mx-auto" />
							<p className="mt-4 font-semibold">Premium Sofa</p>
							<p className="mt-4">Minimal single chair</p>
							<p className="mt-2 font-semibold">Rs 4000</p>
						</div>
					</div>
					<div className="carousel-item">
						<div className="skeleton p-4 md:p-7 w-64 aspect-[3/4] carousel-color-2 flex flex-col justify-center items-start">
							<Image src="/blue-chair.png" alt="sofa" width={120} height={0} className="mx-auto" />
							<p className="mt-4 font-semibold">Premium Sofa</p>
							<p className="mt-4">Minimal single chair</p>
							<p className="mt-2 font-semibold">Rs 4000</p>
						</div>
					</div>
					<div className="carousel-item">
						<div className="skeleton p-4 md:p-7 w-64 aspect-[3/4] carousel-color-3 flex flex-col justify-center items-start">
							<Image src="/blue-chair.png" alt="sofa" width={120} height={0} className="mx-auto" />
							<p className="mt-4 font-semibold">Premium Sofa</p>
							<p className="mt-4">Minimal single chair</p>
							<p className="mt-2 font-semibold">Rs 4000</p>
						</div>
					</div>
					<div className="carousel-item">
						<div className="skeleton p-4 md:p-7 w-64 aspect-[3/4] carousel-color-4 flex flex-col justify-center items-start">
							<Image src="/blue-chair.png" alt="sofa" width={120} height={0} className="mx-auto" />
							<p className="mt-4 font-semibold">Premium Sofa</p>
							<p className="mt-4">Minimal single chair</p>
							<p className="mt-2 font-semibold">Rs 4000</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
