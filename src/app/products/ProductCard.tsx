import { FurnitureType, furnitures } from "@/data/furniture.data";
import { Product } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaCodeCompare } from "react-icons/fa6";

function ProductCard({ product }: { product: Product }) {
    return (
        <>
            <div className="group card card-compact relative w-full rounded-md bg-base-200 shadow-md">
                <figure>
                    <Image
                        src={`/furniture/${product.image}-1.avif`}
                        height={400}
                        width={400}
                        alt="Chair"
                        className="aspect-square object-cover transition-all duration-700 ease-in-out group-hover:scale-110"
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-primary-dark">
                        {product.name}
                        {/* <div className="badge badge-outline">NEW</div> */}
                    </h2>
                    <div className="badges space-x-2 space-y-2">
                        {product.location.includes("office") && (
                            <span className="badge badge-neutral badge-outline">
                                office
                            </span>
                        )}
                        {product.location.includes("living-room") && (
                            <span className="badge badge-neutral badge-outline">
                                living room
                            </span>
                        )}
                        {product.location.includes("study-room") && (
                            <span className="badge badge-neutral badge-outline">
                                study room
                            </span>
                        )}
                        {product.location.includes("kitchen") && (
                            <span className="badge badge-neutral badge-outline">
                                kitchen
                            </span>
                        )}
                        {product.location.includes("bedroom") && (
                            <span className="badge badge-neutral badge-outline">
                                bedroom
                            </span>
                        )}
                    </div>
                    <p className="align-baseline text-lg font-semibold text-primary-light">
                        Rs {product.price}
                    </p>
                    {/* <div className="card-actions justify-end">
                        <button className="btn btn-primary-dark">Buy Now</button>
                    </div> */}
                </div>
                <div className="transition- absolute hidden aspect-square w-full flex-col items-center justify-center gap-4 bg-transparent duration-700 ease-in-out group-hover:flex group-hover:bg-black/70">
                    <Link
                        href={`/product/${product.id}`}
                        className="btn-primary-dark btn border-0"
                    >
                        Add to Cart
                    </Link>
                    <div className="options flex-center gap-2 text-white">
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
