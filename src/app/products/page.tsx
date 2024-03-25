import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import React from "react";
import ProductCard from "./ProductCard";
import { furnitures } from "@/data/furniture.data";

function Products() {
	const mapProducts = () => {
		return furnitures.map(item => {
			return <ProductCard key={item.id} id={item.id} />;
		});
	};
	return (
		<>
			<Navbar />
			<div className="w-full mt-[78px] text-sm breadcrumbs bg-primary-light/50 text-primary-dark py-4 px-6">
				<ul className="md:container">
					<li>
						<Link href="/">Home</Link>
					</li>
					<li>
						<Link href="/products">Products</Link>
					</li>
				</ul>
			</div>
			<div className="w-full">
				<div className="md:container px-4 md:px-0">
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-8 my-10">
						{mapProducts()}
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
}

export default Products;
