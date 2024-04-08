import { FurnitureType, furnitures } from "@/data/furniture.data";
import { Product } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaCodeCompare } from "react-icons/fa6";

function ProductCard({ product }: {product:Product}) {
	return (
		<>
			<div className="card card-compact bg-base-200 shadow-md w-full rounded-md relative group">
				<figure>
					<Image
						src={`/furniture/${product.image}-1.avif`}
						height={400}
						width={400}
						alt="Chair"
						className="aspect-square object-cover group-hover:scale-110 transition-all ease-in-out duration-700"
					/>
				</figure>
				<div className="card-body">
					<h2 className="card-title text-primary-dark">
						{product.name}
						{/* <div className="badge badge-outline">NEW</div> */}
					</h2>
					<div className="badges space-x-2 space-y-2">
						{product.location.includes("office") && (
							<span className="badge badge-neutral badge-outline">office</span>
						)}
						{product.location.includes("living-room") && (
							<span className="badge badge-neutral badge-outline">living room</span>
						)}
						{product.location.includes("study-room") && (
							<span className="badge badge-neutral badge-outline">study room</span>
						)}
						{product.location.includes("kitchen") && (
							<span className="badge badge-neutral badge-outline">kitchen</span>
						)}
						{product.location.includes("bedroom") && (
							<span className="badge badge-neutral badge-outline">bedroom</span>
						)}
					</div>
					<p className="text-primary-light text-lg font-semibold align-baseline">Rs {product.price}</p>
					{/* <div className="card-actions justify-end">
                        <button className="btn btn-primary-dark">Buy Now</button>
                    </div> */}
				</div>
				<div className="hidden group-hover:flex flex-col gap-4 absolute w-full aspect-square bg-transparent group-hover:bg-black/70 items-center justify-center transition- ease-in-out duration-700">
					<Link href={`/product/${product.id}`} className="btn btn-primary-dark border-0">Add to Cart</Link>
					<div className="options flex-center text-white gap-2">
						<button className="btn btn-ghost">
							<FaRegHeart /> Like
						</button>
						<button className="btn btn-ghost">
							<FaCodeCompare />
							Compare
						</button>
					</div>
				</div>
			</div>
		</>
	);
}

export default ProductCard;
