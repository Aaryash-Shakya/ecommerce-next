"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import React, { useState } from "react";
import ProductCard from "./ProductCard";
import Image from "next/image";
import { GiSettingsKnobs } from "react-icons/gi";
import { Product } from "@prisma/client";

function Products() {
    const [livingRoomFlag, setLivingRoomFlag] = useState(true);
    const [studyRoomFlag, setStudyRoomFlag] = useState(true);
    const [bedroomFlag, setBedroomFlag] = useState(true);
    const [kitchenFlag, setKitchenFlag] = useState(true);
    const [officeFlag, setOfficeFlag] = useState(true);
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

    const fetchData = () => {
        fetch("http://localhost:3000/api/products")
            .then((res) => res.json())
            .then((data) => {
                setProducts(data.data);
            })
            .catch((err) => console.error(err));
        return mapProducts();
    };

    const mapProducts = () => {
        return products.map((item) => {
            if (item.location.indexOf("living-room") != -1 && livingRoomFlag) {
                return <ProductCard key={item.id} product={item} />;
            } else if (
                item.location.indexOf("study-room") != -1 &&
                studyRoomFlag
            ) {
                return <ProductCard key={item.id} product={item} />;
            } else if (item.location.indexOf("kitchen") != -1 && kitchenFlag) {
                return <ProductCard key={item.id} product={item} />;
            } else if (item.location.indexOf("office") != -1 && officeFlag) {
                return <ProductCard key={item.id} product={item} />;
            } else if (item.location.indexOf("bedroom") != -1 && bedroomFlag) {
                return <ProductCard key={item.id} product={item} />;
            }
            return <ProductCard key={item.id} product={item} />;
        });
    };
    return (
        <>
            <Navbar />
            <div className="nav-margin h-44 w-full overflow-hidden text-sm text-primary-dark md:h-64">
                <Image
                    src="/banners/banner-1.jpg"
                    height={500}
                    width={2000}
                    alt="Banner"
                    className="w-full object-cover"
                />
                <div className="flex-center absolute left-0 top-[64px] h-44 w-full flex-col bg-black/40 text-white md:h-64 lg:top-[78px]">
                    <div className="text-6xl font-bold">Products</div>
                    <div className="breadcrumbs text-base">
                        <ul>
                            <li>
                                <Link href="/">Home</Link>
                            </li>
                            <li>
                                <Link href="#">Products</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* filter bar */}
            <div className="w-full bg-primary-light/40">
                <div className="flex flex-col items-center justify-between px-4 py-2 text-black md:container md:flex-row md:px-0">
                    <div className="left flex-center">
                        <details className="dropdown">
                            <summary className="btn btn-ghost text-lg">
                                <GiSettingsKnobs /> Filter
                            </summary>
                            <ul className="dropdown-content form-control z-[1] w-44 items-start rounded-box bg-base-100 p-2 shadow">
                                <label className="flex-center label cursor-pointer gap-4">
                                    <input
                                        type="checkbox"
                                        defaultChecked
                                        className="checkbox"
                                        onClick={() => {
                                            setBedroomFlag(!bedroomFlag);
                                            window.location.reload();
                                        }}
                                    />
                                    <span className="label-text">Bedroom</span>
                                </label>
                                <label className="flex-center label cursor-pointer gap-4">
                                    <input
                                        type="checkbox"
                                        defaultChecked
                                        className="checkbox"
                                        onClick={() =>
                                            setKitchenFlag(!kitchenFlag)
                                        }
                                    />
                                    <span className="label-text">Kitchen</span>
                                </label>
                                <label className="flex-center label cursor-pointer gap-4">
                                    <input
                                        type="checkbox"
                                        defaultChecked
                                        className="checkbox"
                                        onClick={() =>
                                            setLivingRoomFlag(!livingRoomFlag)
                                        }
                                    />
                                    <span className="label-text">
                                        Living Room
                                    </span>
                                </label>
                                <label className="flex-center label cursor-pointer gap-4">
                                    <input
                                        type="checkbox"
                                        defaultChecked
                                        className="checkbox"
                                        onClick={() =>
                                            setOfficeFlag(!officeFlag)
                                        }
                                    />
                                    <span className="label-text">Office</span>
                                </label>
                                <label className="flex-center label cursor-pointer gap-4">
                                    <input
                                        type="checkbox"
                                        defaultChecked
                                        className="checkbox"
                                        onClick={() =>
                                            setStudyRoomFlag(!studyRoomFlag)
                                        }
                                    />
                                    <span className="label-text">
                                        Study Room
                                    </span>
                                </label>
                            </ul>
                        </details>
                        | Showing 1-8 of {products.length} results
                    </div>
                    <div className="right flex-center gap-2">
                        <span>Show</span>
                        <input
                            type="text"
                            placeholder="8"
                            className="input input-bordered aspect-square"
                        />
                        <span className="flex-center w-20">| Sort By</span>
                        <select className="select select-bordered w-full max-w-40">
                            <option>Default</option>
                            <option>Price: High to Low</option>
                            <option>Price: Low to High</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="w-full">
                <div className="px-4 md:container md:px-0">
                    <div className="my-10 grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-8 lg:grid-cols-3 xl:grid-cols-4 xl:gap-10">
                        {fetchData()}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Products;
