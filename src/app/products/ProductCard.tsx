import { Product } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaCodeCompare } from "react-icons/fa6";

function ProductCard({ product }: { product: Product }) {
    return (
        <>
            <div className="group card card-compact relative w-full rounded-md bg-base-200 shadow-lg">
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
                        {product.location.split(":").map((location, i) => {
                            return (
                                <span
                                    key={i}
                                    className="badge badge-neutral badge-outline"
                                >
                                    {location}
                                </span>
                            );
                        })}
                    </div>
                    <p className="align-baseline text-lg font-semibold text-primary-light">
                        Rs {product.price}
                    </p>
                    <Link href={`/product/${product.id}`} className="card-actions justify-end block sm:hidden ms-auto me-0">
                        <button className="btn btn-primary-dark">Buy Now</button>
                    </Link>
                </div>
                <div className="absolute hidden aspect-square w-full flex-col items-center justify-center gap-4 rounded-t bg-transparent transition-all duration-700 ease-in-out group-hover:flex group-hover:bg-black/70">
                    <Link
                        href={`/product/${product.id}`}
                        className="btn-primary-dark btn border-0"
                    >
                        Add to Cart
                    </Link>
                    <div className="options flex-center gap-2 text-white">
                        <button className="btn btn-ghost">
                            <FaRegHeart className="text-red-400" /> Like
                        </button>
                        <button className="btn btn-ghost">
                            <FaCodeCompare className="text-blue-400" />
                            Compare
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductCard;
