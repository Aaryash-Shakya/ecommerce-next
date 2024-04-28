"use client";

import { CartApiClient } from "@/apiClients/CartApiClient";
import { ProductApiClient } from "@/apiClients/ProductApiClient";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ApiResponse } from "@/types/api";
import { Product as ProductType } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { CiHeart, CiShare2 } from "react-icons/ci";
import { FaCommentDots, FaMinus, FaPlus } from "react-icons/fa";
import { toast } from "react-toastify";

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
        ProductApiClient.getProductById({
            productId: parseInt(productId),
        })
            .then((res) => {
                if (!res.ok) throw new Error("Failed to fetch product");
                return res.json();
            })
            .then((res: ApiResponse) => {
                setProduct(res.data as ProductType);
            })
            .catch((err: Error) => {
                toast.error(err.message || "Failed to add to cart.", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    theme: "light",
                });
            });
    };

    const handleAddToCart = () => {
        CartApiClient.addToCart({
            userId: 1,
            productId: product.id,
            quantity: quantity,
        })
            .then((res) => {
                if (!res.ok) throw new Error("Failed to add product to cart");
                return res.json();
            })
            .then((res) => {
                toast.success(res.message, {
                    position: "top-right",
                    autoClose: 5000,
                    closeOnClick: true,
                    theme: "light",
                });
            })
            .catch((err) => {
                toast.error(err.message || "Failed to add to cart.", {
                    position: "top-right",
                    autoClose: 5000,
                    closeOnClick: true,
                    theme: "light",
                });
            });
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
    }, [productId]);
    return (
        <>
            <Navbar />
            {/* breadcrumbs */}
            <div className="nav-margin w-full bg-primary-light/40">
                <div className="breadcrumbs py-4 text-sm md:container">
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

            <div className="mt-10 md:container">
                <div className="mx-auto w-full max-w-screen-xl p-6">
                    <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2">
                        <div className="top-0 w-full text-center lg:sticky">
                            <div className="lg:h-[600px]">
                                <Image
                                    height={600}
                                    width={600}
                                    src={`/furniture/${product.image}${selectedImagePrefix}.avif`}
                                    alt="Product"
                                    className="h-full w-full rounded-xl object-cover object-top lg:w-11/12"
                                />
                            </div>
                            <div className="mx-auto mt-6 flex flex-wrap justify-center gap-x-8 gap-y-6">
                                <Image
                                    height={200}
                                    width={200}
                                    src={`/furniture/${product.image}-banner.avif`}
                                    alt="Product1"
                                    className={`w-20 cursor-pointer rounded-xl hover:ring-2 hover:ring-gray-800 ${
                                        selectedImagePrefix === "-banner"
                                            ? "ring-4 ring-gray-600"
                                            : ""
                                    }`}
                                    onClick={() =>
                                        setSelectedImagePrefix("-banner")
                                    }
                                />
                                <Image
                                    height={200}
                                    width={200}
                                    src={`/furniture/${product.image}-1.avif`}
                                    alt="Product1"
                                    className={`w-20 cursor-pointer rounded-xl hover:ring-2 hover:ring-gray-800 ${
                                        selectedImagePrefix === "-1"
                                            ? "ring-4 ring-gray-600"
                                            : ""
                                    }`}
                                    onClick={() => setSelectedImagePrefix("-1")}
                                />
                                <Image
                                    height={200}
                                    width={200}
                                    src={`/furniture/${product.image}-2.avif`}
                                    alt="Product2"
                                    className={`w-20 cursor-pointer rounded-xl hover:ring-2 hover:ring-gray-800 ${
                                        selectedImagePrefix === "-2"
                                            ? "ring-4 ring-gray-600"
                                            : ""
                                    }`}
                                    onClick={() => setSelectedImagePrefix("-2")}
                                />
                                <Image
                                    height={200}
                                    width={200}
                                    src={`/furniture/${product.image}-3.avif`}
                                    alt="Product3"
                                    className={`w-20 cursor-pointer rounded-xl hover:ring-2 hover:ring-gray-800 ${
                                        selectedImagePrefix === "-3"
                                            ? "ring-4 ring-gray-600"
                                            : ""
                                    }`}
                                    onClick={() => setSelectedImagePrefix("-3")}
                                />
                                <Image
                                    height={600}
                                    width={600}
                                    src={`/furniture/${product.image}-4.avif`}
                                    alt="Product4"
                                    className={`w-20 cursor-pointer rounded-xl hover:ring-2 hover:ring-gray-800 ${
                                        selectedImagePrefix === "-4"
                                            ? "ring-4 ring-gray-600"
                                            : ""
                                    }`}
                                    onClick={() => setSelectedImagePrefix("-4")}
                                />
                            </div>
                        </div>
                        <div>
                            <div className="flex flex-wrap items-start gap-4">
                                <div>
                                    <h2 className="text-2xl font-extrabold text-gray-800">
                                        {product.name} | Chairs
                                    </h2>
                                    <p className="mt-2 text-sm text-gray-400">
                                        Versatile Luxury Chair
                                    </p>
                                </div>
                                <div className="ml-auto flex flex-wrap gap-4">
                                    <button
                                        type="button"
                                        className="flex-center gap-1 rounded-md bg-pink-100 px-2.5 py-1.5 text-xs text-pink-600"
                                    >
                                        <CiHeart className="text-lg" />
                                        100
                                    </button>
                                    <button
                                        type="button"
                                        className="flex items-center rounded-md bg-gray-100 px-2.5 py-1.5 text-lg text-gray-800"
                                    >
                                        <CiShare2 />
                                    </button>
                                </div>
                            </div>
                            <hr className="my-8" />
                            <div className="flex flex-wrap items-start gap-4">
                                <div>
                                    <p className="text-3xl font-bold text-gray-800">
                                        {product.price}
                                    </p>
                                    <p className="mt-1 text-xl text-gray-400">
                                        <del>Rs {product.price}</del>{" "}
                                        <span className="ml-1 text-sm">
                                            Tax included
                                        </span>
                                    </p>
                                </div>
                            </div>
                            <hr className="my-8" />
                            {/* rating */}
                            <div className="flex-warp flex items-start">
                                <div className="flex-center cursor-pointer gap-1">
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
                                    className="!ml-4 flex items-center rounded-md bg-gray-100 px-2.5 py-1.5 text-xs text-gray-800"
                                >
                                    <FaCommentDots className="me-2 text-lg" />
                                    87 Reviews
                                </button>
                            </div>
                            <hr className="my-8" />

                            {/* color */}
                            <div>
                                <h3 className="text-lg font-bold text-gray-800">
                                    Choose a Color
                                </h3>
                                <div className="mt-4 flex flex-wrap gap-4">
                                    <button
                                        type="button"
                                        className="h-12 w-12 shrink-0 rounded-full border-2 border-white bg-black hover:border-gray-800"
                                    ></button>
                                    <button
                                        type="button"
                                        className="h-12 w-12 shrink-0 rounded-full border-2 border-white bg-gray-400 hover:border-gray-800"
                                    ></button>
                                    <button
                                        type="button"
                                        className="h-12 w-12 shrink-0 rounded-full border-2 border-white bg-orange-400 hover:border-gray-800"
                                    ></button>
                                    <button
                                        type="button"
                                        className="h-12 w-12 shrink-0 rounded-full border-2 border-white bg-red-400 hover:border-gray-800"
                                    ></button>
                                </div>
                            </div>
                            <hr className="my-8" />

                            {/* quantity */}
                            <div>
                                <h3 className="text-lg font-bold text-gray-800">
                                    Select Quantity
                                </h3>
                                <div className="flex-center mt-2 w-fit gap-0">
                                    <button
                                        className={`flex-center h-14 w-14 rounded-bl-md rounded-tl-md border hover:bg-slate-200 ${
                                            quantity == 1 &&
                                            "cursor-not-allowed"
                                        }`}
                                        onClick={() => {
                                            if (quantity > 1)
                                                setQuantity(quantity - 1);
                                        }}
                                    >
                                        <FaMinus />
                                    </button>
                                    <input
                                        type="text"
                                        value={quantity}
                                        className="h-14 w-14 border text-center text-xl"
                                    />
                                    <button
                                        className="flex-center h-14 w-14 rounded-br-md rounded-tr-md border hover:bg-slate-200"
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
                                    className="btn-primary-dark min-w-[200px] rounded px-4 py-3 font-bold"
                                    onClick={handleAddToCart}
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

function BottomDetails({ product }: { product: ProductType }) {
    const [tabState, setTabState] = useState<"description" | "reviews">(
        "description",
    );
    return (
        <>
            <div className="mt-24 max-w-4xl">
                <ul className="flex border-b">
                    <li
                        className={`cursor-pointer px-8 py-3 text-sm font-bold transition-all ${tabState == "description" ? "border-b-2 border-primary-dark bg-gray-100 text-primary-dark" : "text-gray-400 hover:bg-gray-100"}`}
                        onClick={() => setTabState("description")}
                    >
                        Description
                    </li>
                    <li
                        className={`cursor-pointer px-8 py-3 text-sm font-bold transition-all ${tabState == "reviews" ? "border-b-2 border-primary-dark bg-gray-100 text-primary-dark" : "text-gray-400 hover:bg-gray-100"}`}
                        onClick={() => setTabState("reviews")}
                    >
                        Reviews
                    </li>
                </ul>
                {tabState === "description" ? (
                    <>
                        <div className="mt-8">
                            <h3 className="text-lg font-bold text-gray-800">
                                Product Description
                            </h3>
                            <p className="mt-4 text-sm text-gray-400">
                                {product.description}
                            </p>
                        </div>
                        <div className="mt-8">
                            <h3 className="text-lg font-bold text-gray-800">
                                Product Location
                            </h3>
                            <p className="mt-4 text-sm text-gray-400">
                                {product.location.split(":").join(", ")}
                            </p>
                        </div>
                        <ul className="mt-6 list-disc space-y-3 pl-4 text-sm text-gray-400">
                            <li>
                                A comfortable single sofa is a must-have for any
                                living space due to its versatility and
                                functionality.
                            </li>
                            <li>
                                Available in a variety of sizes to fit your
                                space perfectly, from compact designs for small
                                apartments to spacious options for larger rooms.
                            </li>
                            <li>
                                Available in a variety of sizes to fit your
                                space perfectly, from compact designs for small
                                apartments to spacious options for larger rooms.
                            </li>
                            <li>
                                Personalize your sofa with your favorite throw
                                pillows or blankets to create a cozy retreat
                                that reflects your unique style and personality.
                            </li>
                        </ul>
                    </>
                ) : (
                    <div className="mt-8 max-w-md">
                        <h3 className="text-lg font-bold text-gray-800">
                            Reviews(10)
                        </h3>
                        <div className="mt-4 space-y-3">
                            <div className="flex items-center">
                                <p className="text-sm font-bold text-gray-800">
                                    5.0
                                </p>
                                <svg
                                    className="ml-1 w-5 fill-gray-800"
                                    viewBox="0 0 14 13"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                </svg>
                                <div className="ml-3 h-2 w-full rounded bg-gray-300">
                                    <div className="h-full w-2/3 rounded bg-gray-800"></div>
                                </div>
                                <p className="ml-3 text-sm font-bold text-gray-800">
                                    66%
                                </p>
                            </div>
                            <div className="flex items-center">
                                <p className="text-sm font-bold text-gray-800">
                                    4.0
                                </p>
                                <svg
                                    className="ml-1 w-5 fill-gray-800"
                                    viewBox="0 0 14 13"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                </svg>
                                <div className="ml-3 h-2 w-full rounded bg-gray-300">
                                    <div className="h-full w-1/3 rounded bg-gray-800"></div>
                                </div>
                                <p className="ml-3 text-sm font-bold text-gray-800">
                                    33%
                                </p>
                            </div>
                            <div className="flex items-center">
                                <p className="text-sm font-bold text-gray-800">
                                    3.0
                                </p>
                                <svg
                                    className="ml-1 w-5 fill-gray-800"
                                    viewBox="0 0 14 13"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                </svg>
                                <div className="ml-3 h-2 w-full rounded bg-gray-300">
                                    <div className="h-full w-1/6 rounded bg-gray-800"></div>
                                </div>
                                <p className="ml-3 text-sm font-bold text-gray-800">
                                    16%
                                </p>
                            </div>
                            <div className="flex items-center">
                                <p className="text-sm font-bold text-gray-800">
                                    2.0
                                </p>
                                <svg
                                    className="ml-1 w-5 fill-gray-800"
                                    viewBox="0 0 14 13"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                </svg>
                                <div className="ml-3 h-2 w-full rounded bg-gray-300">
                                    <div className="h-full w-1/12 rounded bg-gray-800"></div>
                                </div>
                                <p className="ml-3 text-sm font-bold text-gray-800">
                                    8%
                                </p>
                            </div>
                            <div className="flex items-center">
                                <p className="text-sm font-bold text-gray-800">
                                    1.0
                                </p>
                                <svg
                                    className="ml-1 w-5 fill-gray-800"
                                    viewBox="0 0 14 13"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                </svg>
                                <div className="ml-3 h-2 w-full rounded bg-gray-300">
                                    <div className="h-full w-[6%] rounded bg-gray-800"></div>
                                </div>
                                <p className="ml-3 text-sm font-bold text-gray-800">
                                    6%
                                </p>
                            </div>
                        </div>
                        <button
                            type="button"
                            className="mt-8 w-full rounded border-2 border-gray-800 bg-transparent px-4 py-2 font-bold text-gray-800"
                        >
                            Read all reviews
                        </button>
                    </div>
                )}
            </div>
        </>
    );
}

export default Product;
