"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Product } from "@prisma/client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { ImBin } from "react-icons/im";

const Cart = () => {
	const [products, setProducts] = useState<Product[]>([
		{
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
		},
	]);

	const fetchLocal = () => {
		const cart = JSON.parse(localStorage.getItem("cart") || '[]');
		// fetch product using the id and map
		setProducts(cart);
	};

	useEffect(() => {
		fetchLocal();
	});

	const mapProducts = () => {
		return products.map(item => {
			return (
				<>
					<div className="flex items-start justify-between gap-4 py-8">
						<div className="flex gap-6">
							<div className="h-64 bg-gray-100 p-6 rounded">
								<Image
									height={600}
									width={600}
									src={`/furniture/${item.image}-1.avif`}
									alt="cart item"
									className="w-full h-full object-contain shrink-0"
								/>
							</div>
							<div>
								<p className="text-lg font-bold text-[#333]">{item.name}</p>
								<p className="text-gray-400 text-xs mt-1">1 Item</p>
								<h4 className="text-xl font-bold text-[#333] mt-4">Rs {item.price}</h4>
								<div className="mt-6">
									<button type="button" className="flex flex-wrap gap-2 text-xl text-[#333]">
										<span className="bg-gray-100 px-2 py-1 rounded">
											<FaMinus />
										</span>
										<span className="mx-4">1</span>
										<span className="bg-gray-100 px-2 py-1 rounded">
											<FaPlus />
										</span>
									</button>
								</div>
							</div>
						</div>
						<ImBin className="text-2xl text-red-500 cursor-pointer" />
					</div>
				</>
			);
		});
	};

	return (
		<>
			<Navbar />
			<div className="font-[sans-serif] bg-white">
				<div className="lg:max-w-7xl max-w-xl mx-auto">
					<h2 className="text-3xl font-extrabold text-[#333]">Shopping Cart</h2>
					<div className="grid lg:grid-cols-3 gap-8 items-start mt-8">
						<div className="divide-y lg:col-span-2">
							{/* data here */}
							{mapProducts()}
						</div>
						<div className="bg-gray-100 p-8 my-10">
							<h3 className="text-2xl font-bold text-[#333]">Order summary</h3>
							<ul className="text-[#333] mt-6 divide-y">
								<li className="flex flex-wrap gap-4 text-md py-3">
									Subtotal <span className="ml-auto font-bold">$44.00</span>
								</li>
								<li className="flex flex-wrap gap-4 text-md py-3">
									Shipping <span className="ml-auto font-bold">$4.00</span>
								</li>
								<li className="flex flex-wrap gap-4 text-md py-3">
									Tax <span className="ml-auto font-bold">$4.00</span>
								</li>
								<li className="flex flex-wrap gap-4 text-md py-3 font-bold">
									Total <span className="ml-auto">$52.00</span>
								</li>
							</ul>
							<button type="button" className="btn px-8 btn-primary-light shadow-lg border-none">
								Check out
							</button>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Cart;
