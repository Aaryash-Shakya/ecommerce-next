import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";

export default function NotFound() {
    return (
        <>
            <div className="bg-primary-light">
                <div className="flex min-h-screen w-full flex-row items-center justify-center gap-10 pt-20 md:container md:gap-20">
                    <div className="img-container image-full absolute left-1/2 top-1/2 grid w-full -translate-x-1/2 -translate-y-1/2 place-content-center md:relative md:left-0 md:top-0 md:translate-x-0 md:translate-y-0">
                        <Image
                            src="/404-chair-transparent.png"
                            alt="404"
                            height={800}
                            width={800}
                            className="z-0 h-[70vh] w-auto drop-shadow-md"
                        />
                    </div>

                    <div className="z-10 flex w-full flex-col space-y-4 p-4 font-sans text-white drop-shadow-xl">
                        <h1 className="mb-6 text-9xl font-extrabold">404</h1>
                        <p className="text-4xl font-semibold">
                            Something&apos;s missing.
                        </p>
                        <p className="break-words text-xl">
                            This page is missing or you assembled the link
                            incorrectly.
                        </p>
                        <Link
                            href={"/"}
                            className="btn-primary-dark btn w-fit border-none px-10 text-lg shadow-lg"
                        >
                            <FaArrowLeftLong className="text-2xl" />
                            &nbsp; GO BACK
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
