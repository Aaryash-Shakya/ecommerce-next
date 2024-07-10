"use client";

import { ProductApiClient } from "@/apiClients/ProductApiClient";
import { Product } from "@prisma/client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { toast } from "react-toastify";

const ExploreItem: React.FC<{ product: Product }> = ({ product }) => {
    return (
        <div className="group relative flex aspect-video w-full flex-col items-center justify-center gap-4 overflow-hidden rounded-3xl bg-base-200 shadow-md hover:bg-base-300">
            <Image
                src={`/furniture/${product.image}-banner.avif`}
                alt={product.name}
                height={500}
                width={500}
                className="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 object-cover"
            />
            <span className="absolute left-0 top-0 hidden h-full w-full bg-gray-200/30 group-hover:block"></span>
            <p className="z-20 hidden font-playfair text-5xl font-bold text-primary-dark drop-shadow-lg group-hover:block">
                {product.name}
            </p>
            <a
                href={`/product/${product.id}`}
                className="btn-primary-light btn z-20 hidden border-none px-8 shadow-lg group-hover:block"
            >
                EXPLORE
            </a>
        </div>
    );
};

const NotFoundExploreItem: React.FC = () => {
    return (
        <div className="group relative flex aspect-video w-full flex-col items-center justify-center gap-4 overflow-hidden rounded-3xl bg-base-200 shadow-md hover:bg-base-300">
            <p className="z-20 hidden font-playfair text-5xl font-bold text-primary-dark drop-shadow-lg group-hover:block">
                No Product Found
            </p>
            <button className="btn-primary-light btn z-20 hidden border-none px-8 shadow-lg group-hover:block">
                EXPLORE
            </button>
        </div>
    );
};

export default function Explore() {
    const [category, setCategory] = useState<
        | "living-room"
        | "meeting-room"
        | "dining-room"
        | "office"
        | "bedroom"
        | "kitchen"
    >("living-room");
    const [products, setProducts] = useState<Product[]>([]);
    useEffect(() => {
        const getAllProducts = async () => {
            const res = await ProductApiClient.getAllProducts();
            if (!res.ok) {
                toast.error("Error fetching products");
                throw new Error("Error fetching products");
            }
            const resJson: { message: string; data: Product[] } =
                await res.json();
            setProducts(resJson.data);
            console.log(resJson.data);
        };
        getAllProducts();
    }, []);

    const mapExploreItems = (products: Product[], category: string) => {
        let filteredProducts: (Product | "notFound")[] = products.filter(
            (product: Product) => {
                return product.location.includes(category);
            },
        );

        // ensure that there's at most 4
        if (filteredProducts.length > 4) {
            filteredProducts = filteredProducts.slice(0, 4);
        }

        // ensure that there's at least 4
        while (filteredProducts.length < 4) {
            filteredProducts.push("notFound");
        }

        // dynamically add black block if items is less than 4 to make 4

        return filteredProducts.map(
            (product: Product | "notFound", i: number) => {
                if (product === "notFound")
                    return <NotFoundExploreItem key={i} />;
                return <ExploreItem key={product.id} product={product} />;
            },
        );
    };

    return (
        <div className="w-full py-10">
            <div className="px-4 lg:container">
                <h2 className="mb-6 text-center font-playfair text-5xl font-bold text-primary-dark">
                    Explore By Category
                </h2>
                <div className="flex flex-col items-center justify-center gap-4 lg:flex-row lg:gap-10">
                    {/* top menu */}
                    <div className="visible w-full lg:hidden">
                        <ul className="menu menu-horizontal mt-6 rounded-box bg-base-200">
                            <label className="input input-bordered flex w-full items-center justify-center">
                                <input
                                    type="text"
                                    className="bg-base-100"
                                    placeholder="Search"
                                />
                                <FaSearch
                                    size={20}
                                    className="cursor-pointer"
                                />
                            </label>
                            <li>
                                <div onClick={() => setCategory("living-room")}>
                                    Living Room
                                </div>
                            </li>
                            <li>
                                <div onClick={() => setCategory("dining-room")}>
                                    Dining Room
                                </div>
                            </li>
                            <li>
                                <div
                                    onClick={() => setCategory("meeting-room")}
                                >
                                    Meeting Room
                                </div>
                            </li>
                            <li>
                                <div onClick={() => setCategory("office")}>
                                    Office
                                </div>
                            </li>
                            <li>
                                <div onClick={() => setCategory("bedroom")}>
                                    Bedroom
                                </div>
                            </li>
                            <li>
                                <div onClick={() => setCategory("kitchen")}>
                                    Kitchen
                                </div>
                            </li>
                            <button className="btn-primary-light btn border-none px-8 shadow-lg">
                                All Categories <FaArrowRight size={25} />
                            </button>
                        </ul>
                    </div>

                    {/* side menu */}
                    <div className="hidden lg:block lg:w-1/4">
                        <ul className="menu menu-lg space-y-4 rounded-lg bg-base-200 text-lg text-primary-dark">
                            <label className="input input-lg input-bordered flex w-full items-center justify-center">
                                <input
                                    type="text"
                                    className="bg-base-100"
                                    placeholder="Search"
                                />
                                <FaSearch
                                    size={20}
                                    className="cursor-pointer"
                                />
                            </label>
                            <li>
                                <div onClick={() => setCategory("living-room")}>
                                    Living Room
                                </div>
                            </li>
                            <li>
                                <div onClick={() => setCategory("dining-room")}>
                                    Dining Room
                                </div>
                            </li>
                            <li>
                                <div
                                    onClick={() => setCategory("meeting-room")}
                                >
                                    Meeting Room
                                </div>
                            </li>
                            <li>
                                <div onClick={() => setCategory("office")}>
                                    Office
                                </div>
                            </li>
                            <li>
                                <div onClick={() => setCategory("bedroom")}>
                                    Bedroom
                                </div>
                            </li>
                            <li>
                                <div onClick={() => setCategory("kitchen")}>
                                    Kitchen
                                </div>
                            </li>
                            <button className="btn-primary-light btn border-none px-8 shadow-lg">
                                All Categories <FaArrowRight size={25} />
                            </button>
                        </ul>
                    </div>
                    <div className="ld:w-3/4 w-full">
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-8">
                            {mapExploreItems(products, category)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
