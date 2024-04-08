"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { FurnitureType, furnitures } from "@/data/furniture.data";
import { Product as ProductType } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { CiHeart, CiShare2 } from "react-icons/ci";
import { FaCommentDots, FaMinus, FaPlus } from "react-icons/fa";

type ProductProps = {
	params: {
		productId: string;
	};
};

function Product({ params }: ProductProps) {
	const [quantity, setQuantity] = useState(1);
	const [selectedImagePrefix, setSelectedImagePrefix] = useState("-banner");
	const [product, setProduct] = useState<ProductType>({
		id: 0,
		categoryId: 0,
		name: "",
		price: 0,
		description: "",
		location: "",
		image: "sofa/sofa-1",
		imageCount: 0,
		createdAt: new Date(),
		updatedAt: new Date(),
	});

	const { productId } = params;

	const fetchProductById = (productId: string) => {
		fetch(`http://localhost:3000/api`)
			.then(res => res.json())
			.then((data: { data: ProductType[] }) => {
				for (let x of data.data) {
					if (x.id == parseInt(productId)) {
						return x;
					}
				}
				return data.data[0];
			})
			.then(product => setProduct(product));
	};
	useEffect(() => {
		fetchProductById(productId);
		/*
		setInterval(() => {
			if (selectedImagePrefix === "-banner") setSelectedImagePrefix("-1");
			else if (selectedImagePrefix === "-1") setSelectedImagePrefix("-2");
			else if (selectedImagePrefix === "-2") setSelectedImagePrefix("-3");
			else if (selectedImagePrefix === "-3") setSelectedImagePrefix("-4");
			else if (selectedImagePrefix === "-4") setSelectedImagePrefix("-banner");
		}, 1000);
		*/
	}, []);
	return (
		<>
			<Navbar />

			{/* breadcrumbs */}
			<div className="nav-margin w-full bg-primary-light/40">
				<div className="md:container text-sm breadcrumbs py-4">
					<ul>
						<li>
							<Link href="/">Home</Link>
						</li>
						<li>
							<Link href="/products">Products</Link>
						</li>
						<li>
							<Link href="/products">Chairs</Link>
						</li>
						<li>
							<Link href="#">{product.name}</Link>
						</li>
					</ul>
				</div>
			</div>

			<div className="md:container mt-10">
				<div className="p-6 w-full max-w-screen-xl mx-auto">
					<div className="grid items-start grid-cols-1 lg:grid-cols-2 gap-10">
						<div className="w-full lg:sticky top-0 text-center">
							<div className="lg:h-[600px]">
								<Image
									height={600}
									width={600}
									src={`/furniture/${product.image}${selectedImagePrefix}.avif`}
									alt="Product"
									className="lg:w-11/12 w-full h-full rounded-xl object-cover object-top"
								/>
							</div>
							<div className="flex flex-wrap gap-x-8 gap-y-6 justify-center mx-auto mt-6">
								<Image
									height={600}
									width={600}
									src={`/furniture/${product.image}-banner.avif`}
									alt="Product1"
									className={`w-20 cursor-pointer rounded-xl hover:ring-2 hover:ring-gray-800 ${
										selectedImagePrefix === "-banner" ? "ring-4 ring-gray-600" : ""
									}`}
									onClick={() => setSelectedImagePrefix("-banner")}
								/>
								<Image
									height={600}
									width={600}
									src={`/furniture/${product.image}-1.avif`}
									alt="Product1"
									className={`w-20 cursor-pointer rounded-xl hover:ring-2 hover:ring-gray-800 ${
										selectedImagePrefix === "-1" ? "ring-4 ring-gray-600" : ""
									}`}
									onClick={() => setSelectedImagePrefix("-1")}
								/>
								<Image
									height={600}
									width={600}
									src={`/furniture/${product.image}-2.avif`}
									alt="Product2"
									className={`w-20 cursor-pointer rounded-xl hover:ring-2 hover:ring-gray-800 ${
										selectedImagePrefix === "-2" ? "ring-4 ring-gray-600" : ""
									}`}
									onClick={() => setSelectedImagePrefix("-2")}
								/>
								<Image
									height={600}
									width={600}
									src={`/furniture/${product.image}-3.avif`}
									alt="Product3"
									className={`w-20 cursor-pointer rounded-xl hover:ring-2 hover:ring-gray-800 ${
										selectedImagePrefix === "-3" ? "ring-4 ring-gray-600" : ""
									}`}
									onClick={() => setSelectedImagePrefix("-3")}
								/>
								<Image
									height={600}
									width={600}
									src={`/furniture/${product.image}-4.avif`}
									alt="Product4"
									className={`w-20 cursor-pointer rounded-xl hover:ring-2 hover:ring-gray-800 ${
										selectedImagePrefix === "-4" ? "ring-4 ring-gray-600" : ""
									}`}
									onClick={() => setSelectedImagePrefix("-4")}
								/>
							</div>
						</div>
						<div>
							<div className="flex flex-wrap items-start gap-4">
								<div>
									<h2 className="text-2xl font-extrabold text-gray-800">{product.name} | Chairs</h2>
									<p className="text-sm text-gray-400 mt-2">Versatile Luxury Chair</p>
								</div>
								<div className="ml-auto flex flex-wrap gap-4">
									<button
										type="button"
										className="px-2.5 py-1.5 bg-pink-100 text-xs text-pink-600 rounded-md flex-center gap-1"
									>
										<CiHeart className="text-lg" />
										100
									</button>
									<button
										type="button"
										className="px-2.5 py-1.5 bg-gray-100 text-lg text-gray-800 rounded-md flex items-center"
									>
										<CiShare2 />
									</button>
								</div>
							</div>
							<hr className="my-8" />
							<div className="flex flex-wrap gap-4 items-start">
								<div>
									<p className="text-gray-800 text-3xl font-bold">{product.price}</p>
									<p className="text-gray-400 text-xl mt-1">
										<del>Rs {product.price}</del> <span className="text-sm ml-1">Tax included</span>
									</p>
								</div>
							</div>
							<hr className="my-8" />
							{/* rating */}
							<div className="flex flex-warp items-start">
								<div className="flex-center gap-1 cursor-pointer">
									<form className="rating">
										<input
											type="radio"
											name="rating-2"
											className="mask mask-star-2 bg-orange-400"
										/>
										<input
											type="radio"
											name="rating-2"
											className="mask mask-star-2 bg-orange-400"
										/>
										<input
											type="radio"
											name="rating-2"
											className="mask mask-star-2 bg-orange-400"
										/>
										<input
											type="radio"
											name="rating-2"
											className="mask mask-star-2 bg-orange-400"
											checked
										/>
										<input
											type="radio"
											name="rating-2"
											className="mask mask-star-2 bg-orange-400"
										/>
									</form>
								</div>
								<button
									type="button"
									className="px-2.5 py-1.5 bg-gray-100 text-xs text-gray-800 rounded-md flex items-center !ml-4"
								>
									<FaCommentDots className="text-lg me-2" />
									87 Reviews
								</button>
							</div>
							<hr className="my-8" />

							{/* color */}
							<div>
								<h3 className="text-lg font-bold text-gray-800">Choose a Color</h3>
								<div className="flex flex-wrap gap-4 mt-4">
									<button
										type="button"
										className="w-12 h-12 bg-black border-2 border-white hover:border-gray-800 rounded-full shrink-0"
									></button>
									<button
										type="button"
										className="w-12 h-12 bg-gray-400 border-2 border-white hover:border-gray-800 rounded-full shrink-0"
									></button>
									<button
										type="button"
										className="w-12 h-12 bg-orange-400 border-2 border-white hover:border-gray-800 rounded-full shrink-0"
									></button>
									<button
										type="button"
										className="w-12 h-12 bg-red-400 border-2 border-white hover:border-gray-800 rounded-full shrink-0"
									></button>
								</div>
							</div>
							<hr className="my-8" />

							{/* quantity */}
							<div>
								<h3 className="text-lg font-bold text-gray-800">Select Quantity</h3>

								{/* copied from flowbite fix later */}
								{/* <form className="mt-2">
									<div className="relative flex items-center max-w-[8rem]">
										<button
											type="button"
											id="decrement-button"
											data-input-counter-decrement="quantity-input"
											className="bg-white hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 focus:ring-2 focus:outline-none"
										>
											<svg
												className="w-3 h-3 text-black"
												aria-hidden="true"
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 18 2"
											>
												<path
													stroke="currentColor"
													stroke-linecap="round"
													stroke-linejoin="round"
													stroke-width="2"
													d="M1 1h16"
												/>
											</svg>
										</button>
										<input
											type="text"
											id="quantity-input"
											data-input-counter
											aria-describedby="helper-text-explanation"
											className="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-black text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 "
											placeholder="1"
											required
										/>
										<button
											type="button"
											id="increment-button"
											data-input-counter-increment="quantity-input"
											className="bg-white hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 focus:ring-2 focus:outline-none"
										>
											<svg
												className="w-3 h-3 text-gray-900"
												aria-hidden="true"
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 18 18"
											>
												<path
													stroke="currentColor"
													stroke-linecap="round"
													stroke-linejoin="round"
													stroke-width="2"
													d="M9 1v16M1 9h16"
												/>
											</svg>
										</button>
									</div>
									<p
										id="helper-text-explanation"
										className="mt-2 text-sm text-gray-500 dark:text-gray-400"
									>
										Available Quantity: 19
									</p>
								</form> */}
								<div className="flex-center gap-0 w-fit mt-2">
									<button
										className="rounded-tl-md rounded-bl-md border h-14 w-14 flex-center hover:bg-slate-200"
										onClick={() => {
											if (quantity > 0) setQuantity(quantity - 1);
										}}
									>
										<FaMinus />
									</button>
									<input type="text" value={quantity} className="h-14 w-14 border text-center" />
									<button
										className="rounded-tr-md rounded-br-md border h-14 w-14 flex-center hover:bg-slate-200"
										onClick={() => {
											setQuantity(quantity + 1);
										}}
									>
										<FaPlus />
									</button>
								</div>
							</div>
							<hr className="my-8" />

							<div className="flex flex-wrap gap-4">
								<button
									type="button"
									className="min-w-[200px] px-4 py-3 bg-gray-800 hover:bg-gray-900 text-white text-sm font-bold rounded"
								>
									Buy now
								</button>
								<button
									type="button"
									className="min-w-[200px] px-4 py-2.5 border border-gray-800 bg-transparent hover:bg-gray-50 text-gray-800 text-sm font-bold rounded"
								>
									Add to cart
								</button>
							</div>
						</div>
					</div>

					{/* bottom details */}
					<BottomDetails product={product} />
				</div>
			</div>
			<Footer />
		</>
	);
}

function BottomDetails({product}: {product: ProductType}) {
	return (
		<>
			<div className="mt-24 max-w-4xl">
				<ul className="flex border-b">
					<li className="text-gray-800 font-bold text-sm bg-gray-100 py-3 px-8 border-b-2 border-gray-800 cursor-pointer transition-all">
						Description
					</li>
					<li className="text-gray-400 font-bold text-sm hover:bg-gray-100 py-3 px-8 cursor-pointer transition-all">
						Reviews
					</li>
				</ul>
				<div className="mt-8">
					<h3 className="text-lg font-bold text-gray-800">Product Description</h3>
					<p className="text-sm text-gray-400 mt-4">
						{product.description}
					</p>
				</div>
				<div className="mt-8">
					<h3 className="text-lg font-bold text-gray-800">Product Description</h3>
					<p className="text-sm text-gray-400 mt-4">
						{product.location.split(":").join(", ")}
					</p>
				</div>
				<ul className="space-y-3 list-disc mt-6 pl-4 text-sm text-gray-400">
					<li>
						A comfortable single sofa is a must-have for any living space due to its versatility and
						functionality.
					</li>
					<li>
						Available in a variety of sizes to fit your space perfectly, from compact designs for small
						apartments to spacious options for larger rooms.
					</li>
					<li>
						Available in a variety of sizes to fit your space perfectly, from compact designs for small
						apartments to spacious options for larger rooms.
					</li>
					<li>
						Personalize your sofa with your favorite throw pillows or blankets to create a cozy retreat that
						reflects your unique style and personality.
					</li>
				</ul>
			</div>
			<div className="mt-8 max-w-md">
				<h3 className="text-lg font-bold text-gray-800">Reviews(10)</h3>
				<div className="space-y-3 mt-4">
					<div className="flex items-center">
						<p className="text-sm text-gray-800 font-bold">5.0</p>
						<svg
							className="w-5 fill-gray-800 ml-1"
							viewBox="0 0 14 13"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
						</svg>
						<div className="bg-gray-300 rounded w-full h-2 ml-3">
							<div className="w-2/3 h-full rounded bg-gray-800"></div>
						</div>
						<p className="text-sm text-gray-800 font-bold ml-3">66%</p>
					</div>
					<div className="flex items-center">
						<p className="text-sm text-gray-800 font-bold">4.0</p>
						<svg
							className="w-5 fill-gray-800 ml-1"
							viewBox="0 0 14 13"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
						</svg>
						<div className="bg-gray-300 rounded w-full h-2 ml-3">
							<div className="w-1/3 h-full rounded bg-gray-800"></div>
						</div>
						<p className="text-sm text-gray-800 font-bold ml-3">33%</p>
					</div>
					<div className="flex items-center">
						<p className="text-sm text-gray-800 font-bold">3.0</p>
						<svg
							className="w-5 fill-gray-800 ml-1"
							viewBox="0 0 14 13"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
						</svg>
						<div className="bg-gray-300 rounded w-full h-2 ml-3">
							<div className="w-1/6 h-full rounded bg-gray-800"></div>
						</div>
						<p className="text-sm text-gray-800 font-bold ml-3">16%</p>
					</div>
					<div className="flex items-center">
						<p className="text-sm text-gray-800 font-bold">2.0</p>
						<svg
							className="w-5 fill-gray-800 ml-1"
							viewBox="0 0 14 13"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
						</svg>
						<div className="bg-gray-300 rounded w-full h-2 ml-3">
							<div className="w-1/12 h-full rounded bg-gray-800"></div>
						</div>
						<p className="text-sm text-gray-800 font-bold ml-3">8%</p>
					</div>
					<div className="flex items-center">
						<p className="text-sm text-gray-800 font-bold">1.0</p>
						<svg
							className="w-5 fill-gray-800 ml-1"
							viewBox="0 0 14 13"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
						</svg>
						<div className="bg-gray-300 rounded w-full h-2 ml-3">
							<div className="w-[6%] h-full rounded bg-gray-800"></div>
						</div>
						<p className="text-sm text-gray-800 font-bold ml-3">6%</p>
					</div>
				</div>
				<button
					type="button"
					className="w-full mt-8 px-4 py-2 bg-transparent border-2 border-gray-800 text-gray-800 font-bold rounded"
				>
					Read all reviews
				</button>
			</div>
		</>
	);
}

export default Product;
