import React from "react";
import { FaSearch } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";

export default function Explore() {
    return (
        <>
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
                                    <a>Living Room</a>
                                </li>
                                <li>
                                    <a>Dining Room</a>
                                </li>
                                <li>
                                    <a>Meeting Room</a>
                                </li>
                                <li>
                                    <a>Living Space</a>
                                </li>
                                <li>
                                    <a>Workspace</a>
                                </li>
                                <li>
                                    <a>Bedroom</a>
                                </li>
                                <li>
                                    <a>Kitchen</a>
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
                                    <a>Living Room</a>
                                </li>
                                <li>
                                    <a>Dining Room</a>
                                </li>
                                <li>
                                    <a>Meeting Room</a>
                                </li>
                                <li>
                                    <a>Living Space</a>
                                </li>
                                <li>
                                    <a>Workspace</a>
                                </li>
                                <li>
                                    <a>Bedroom</a>
                                </li>
                                <li>
                                    <a>Kitchen</a>
                                </li>
                                <button className="btn-primary-light btn border-none px-8 shadow-lg">
                                    All Categories <FaArrowRight size={25} />
                                </button>
                            </ul>
                        </div>
                        <div className="ld:w-3/4 w-full">
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-8">
                                <div className="group flex aspect-video w-full flex-col items-center justify-center gap-4 rounded-3xl bg-base-200 hover:bg-base-300">
                                    <p className="hidden font-playfair text-5xl font-bold text-primary-dark group-hover:block">
                                        Couch
                                    </p>
                                    <button className="btn-primary-light btn hidden border-none px-8 shadow-lg group-hover:block">
                                        EXPLORE
                                    </button>
                                </div>
                                <div className="group flex aspect-video w-full flex-col items-center justify-center gap-4 rounded-3xl bg-base-200 hover:bg-base-300">
                                    <p className="hidden font-playfair text-5xl font-bold text-primary-dark group-hover:block">
                                        Couch
                                    </p>
                                    <button className="btn-primary-light btn hidden border-none px-8 shadow-lg group-hover:block">
                                        EXPLORE
                                    </button>
                                </div>
                                <div className="group flex aspect-video w-full flex-col items-center justify-center gap-4 rounded-3xl bg-base-200 hover:bg-base-300">
                                    <p className="hidden font-playfair text-5xl font-bold text-primary-dark group-hover:block">
                                        Couch
                                    </p>
                                    <button className="btn-primary-light btn hidden border-none px-8 shadow-lg group-hover:block">
                                        EXPLORE
                                    </button>
                                </div>
                                <div className="group flex aspect-video w-full flex-col items-center justify-center gap-4 rounded-3xl bg-base-200 hover:bg-base-300">
                                    <p className="hidden font-playfair text-5xl font-bold text-primary-dark group-hover:block">
                                        Couch
                                    </p>
                                    <button className="btn-primary-light btn hidden border-none px-8 shadow-lg group-hover:block">
                                        EXPLORE
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
