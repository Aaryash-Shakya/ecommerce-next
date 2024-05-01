"use client";

import Link from "next/link";
import React, { Suspense } from "react";
import Image from "next/image";
import { GiSettingsKnobs } from "react-icons/gi";
import ProductList from "./ProductList";
import Loading from "../loading";
import { useRouter } from "next/navigation";

function Products({
    searchParams,
}: {
    // very hacky way
    searchParams: { [key: string]: string | string[] | undefined };
}) {
    const router = useRouter();

    const selectedCategories = (searchParams.category as string) || "all";
    const selectedSortBy = (searchParams.sort || "default") as string;
    const selectedShow = (searchParams.show || "8") as string;

    const filters = {
        bedroomFlag:
            selectedCategories === "all" ||
            selectedCategories.includes("bedroom"),
        kitchenFlag:
            selectedCategories === "all" ||
            selectedCategories.includes("kitchen"),
        livingRoomFlag:
            selectedCategories === "all" ||
            selectedCategories.includes("living-room"),
        officeFlag:
            selectedCategories === "all" ||
            selectedCategories.includes("office"),
        studyRoomFlag:
            selectedCategories === "all" ||
            selectedCategories.includes("study-room"),
        sort: selectedSortBy,
        show: selectedShow,
    };

    const generateNewSearchParams = (): string => {
        const searchParams = new URLSearchParams({
            sort: filters.sort,
            show: filters.show,
            category: [
                filters.bedroomFlag ? "bedroom" : "",
                filters.kitchenFlag ? "kitchen" : "",
                filters.livingRoomFlag ? "living-room" : "",
                filters.officeFlag ? "office" : "",
                filters.studyRoomFlag ? "study-room" : "",
            ]
                .filter((item) => item !== "")
                .join(","),
        }).toString();
        console.log(searchParams);
        return searchParams;
    };

    return (
        <>
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
                                        defaultChecked={filters.bedroomFlag}
                                        className="checkbox"
                                        onClick={() =>
                                            (filters.bedroomFlag =
                                                !filters.bedroomFlag)
                                        }
                                    />
                                    <span className="label-text">Bedroom</span>
                                </label>
                                <label className="flex-center label cursor-pointer gap-4">
                                    <input
                                        type="checkbox"
                                        defaultChecked={filters.kitchenFlag}
                                        className="checkbox"
                                        onClick={() =>
                                            (filters.kitchenFlag =
                                                !filters.kitchenFlag)
                                        }
                                    />
                                    <span className="label-text">Kitchen</span>
                                </label>
                                <label className="flex-center label cursor-pointer gap-4">
                                    <input
                                        type="checkbox"
                                        defaultChecked={filters.livingRoomFlag}
                                        className="checkbox"
                                        onClick={() =>
                                            (filters.livingRoomFlag =
                                                !filters.livingRoomFlag)
                                        }
                                    />
                                    <span className="label-text">
                                        Living Room
                                    </span>
                                </label>
                                <label className="flex-center label cursor-pointer gap-4">
                                    <input
                                        type="checkbox"
                                        defaultChecked={filters.officeFlag}
                                        className="checkbox"
                                        onClick={() =>
                                            (filters.officeFlag =
                                                !filters.officeFlag)
                                        }
                                    />
                                    <span className="label-text">Office</span>
                                </label>
                                <label className="flex-center label cursor-pointer gap-4">
                                    <input
                                        type="checkbox"
                                        defaultChecked={filters.studyRoomFlag}
                                        className="checkbox"
                                        onClick={() =>
                                            (filters.studyRoomFlag =
                                                !filters.studyRoomFlag)
                                        }
                                    />
                                    <span className="label-text">
                                        Study Room
                                    </span>
                                </label>
                                <button
                                    onClick={() => {
                                        router.push(
                                            `?${generateNewSearchParams()}`,
                                            {
                                                scroll: false,
                                            },
                                        );
                                    }}
                                    className="btn-primary-light btn mt-2 w-full"
                                >
                                    Apply
                                </button>
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
                            value={filters.show}
                            onChange={(e) => {
                                filters.show = e.target.value;
                                router.push(`?${generateNewSearchParams()}`, {
                                    scroll: false,
                                });
                            }}
                        />
                        <span className="flex-center w-24 whitespace-nowrap">| Sort By</span>
                        <select
                            className="select select-bordered w-full max-w-44 px-3"
                            onChange={(e) => {
                                filters.sort = e.target.value;
                                router.push(`?${generateNewSearchParams()}`, {
                                    scroll: false,
                                });
                            }}
                            defaultValue={selectedSortBy}
                        >
                            <option value={"default"}>Default</option>
                            <option value={"pdesc"}>Price: High to Low</option>
                            <option value={"pasc"}>Price: Low to High</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="w-full">
                <div className="px-4 md:container md:px-0">
                    <div className="my-10 grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-8 lg:grid-cols-3 xl:grid-cols-4 xl:gap-10">
                        <Suspense fallback={<Loading />}>
                            <ProductList filters={filters} />
                        </Suspense>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Products;
