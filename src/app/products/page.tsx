"use client"

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import React, { Suspense } from "react";
import Image from "next/image";
import { GiSettingsKnobs } from "react-icons/gi";
import ProductList from "./ProductList";
import Loading from "../loading";

function Products({
    searchParams,
}: {
    // very hacky way
    searchParams: { [key: string]: string | string[] | undefined };
}) {
    const selectedCategories = (searchParams.category || "all" as string);
    const selectedSortBy = (searchParams.sort || "default") as string;
    const selectedShow = (searchParams.show || "8") as string;
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
                            <li>{selectedCategories}</li>
                            <li>{selectedSortBy}</li>
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
                                        onClick={()=>{

                                        }}
                                    />
                                    <span className="label-text">Bedroom</span>
                                </label>
                                <label className="flex-center label cursor-pointer gap-4">
                                    <input
                                        type="checkbox"
                                        defaultChecked
                                        className="checkbox"
                                    />
                                    <span className="label-text">Kitchen</span>
                                </label>
                                <label className="flex-center label cursor-pointer gap-4">
                                    <input
                                        type="checkbox"
                                        defaultChecked
                                        className="checkbox"
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
                                    />
                                    <span className="label-text">Office</span>
                                </label>
                                <label className="flex-center label cursor-pointer gap-4">
                                    <input
                                        type="checkbox"
                                        defaultChecked
                                        className="checkbox"
                                    />
                                    <span className="label-text">
                                        Study Room
                                    </span>
                                </label>
                            </ul>
                        </details>
                        | Showing 1-{selectedShow} of {12} results
                    </div>
                    <div className="right flex-center gap-2">
                        <span>Show</span>
                        <input
                            type="text"
                            placeholder={selectedShow}
                            className="input input-bordered w-14 text-center"
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
                        <Suspense fallback={<Loading />}>
                            <ProductList />
                        </Suspense>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Products;
