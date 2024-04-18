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
    const [subtotal, setSubtotal] = useState(0);
    const [shipping, setShipping] = useState(0);
    const [total, setTotal] = useState(0);

    const fetchLocal = () => {
        const cart = JSON.parse(localStorage.getItem("cart") || "[]");
        // fetch product using the id and map
        setProducts(cart);
    };

    useEffect(() => {
        fetchLocal();
    },[]);

    const mapProducts = () => {
        return products.map((item) => {
            return (
                <>
                    <div className="flex items-start justify-between gap-4 py-8">
                        <div className="flex gap-6">
                            <div className="h-64 rounded bg-gray-100 p-6">
                                <Image
                                    height={600}
                                    width={600}
                                    src={`/furniture/${item.image}-1.avif`}
                                    alt="cart item"
                                    className="h-full w-full shrink-0 object-contain"
                                />
                            </div>
                            <div>
                                <p className="text-lg font-bold text-[#333]">
                                    {item.name}
                                </p>
                                <p className="mt-1 text-xs text-gray-400">
                                    1 Item
                                </p>
                                <h4 className="mt-4 text-xl font-bold text-[#333]">
                                    Rs {item.price}
                                </h4>
                                <div className="mt-6">
                                    <button
                                        type="button"
                                        className="flex flex-wrap gap-2 text-xl text-[#333]"
                                    >
                                        <span className="rounded bg-gray-100 px-2 py-1">
                                            <FaMinus />
                                        </span>
                                        <span className="mx-4">1</span>
                                        <span className="rounded bg-gray-100 px-2 py-1">
                                            <FaPlus />
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <ImBin className="cursor-pointer text-2xl text-red-500" />
                    </div>
                </>
            );
        });
    };

    return (
        <>
            <Navbar />
            <div className="bg-white font-[sans-serif]">
                <div className="mx-auto max-w-xl lg:max-w-7xl">
                    <h2 className="text-3xl font-extrabold text-[#333]">
                        Shopping Cart
                    </h2>
                    <div className="mt-8 grid items-start gap-8 lg:grid-cols-3">
                        <div className="divide-y lg:col-span-2">
                            {/* data here */}
                            {mapProducts()}
                        </div>
                        <div className="my-10 bg-gray-100 p-8">
                            <h3 className="text-2xl font-bold text-[#333]">
                                Order summary
                            </h3>
                            <ul className="mt-6 divide-y text-[#333]">
                                <li className="text-md flex flex-wrap gap-4 py-3">
                                    Subtotal{" "}
                                    <span className="ml-auto font-bold">
                                        Rs {subtotal}
                                    </span>
                                </li>
                                <li className="text-md flex flex-wrap gap-4 py-3">
                                    Shipping{" "}
                                    <span className="ml-auto font-bold">
                                        Rs {shipping}
                                    </span>
                                </li>
                                <li className="text-md flex flex-wrap gap-4 py-3 font-bold">
                                    Total{" "}
                                    <span className="ml-auto">Rs {total}</span>
                                </li>
                            </ul>
                            <button
                                type="button"
                                className="btn-primary-light btn border-none px-8 shadow-lg"
                            >
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
