"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiSolidQuoteLeft } from "react-icons/bi";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Testimonials() {
    return (
        <>
            <div className="w-full  py-8">
                <div className="md:container">
                    <h2 className="mb-4 text-center font-playfair text-5xl font-bold text-primary-dark">
                        Testimonials
                    </h2>
                    <h3 className="mb-4 text-center text-2xl text-primary-dark">
                        Over 10,000 happy customers
                    </h3>
                    <div className="mx-auto flex max-w-screen-xl flex-col gap-4 p-8 md:flex-row md:gap-x-6 md:p-2 lg:gap-x-16">
                        <div className="img-container relative mx-auto w-full overflow-hidden ps-12 pt-12 md:w-1/3 lg:w-1/4">
                            <Image
                                src="/testimonials/testimonial-1.jpg"
                                height={500}
                                width={500}
                                alt="random user"
                                className="rounded-3xl object-cover"
                            />
                            <BiSolidQuoteLeft className="absolute left-0 top-0 text-9xl text-faint-blue saturate-200" />
                        </div>
                        <div className="testimonial-content relative flex w-full flex-col justify-evenly pt-5 md:w-2/3 md:px-2 lg:w-3/4">
                            <div className="message mb-4 text-base text-primary-dark/85 lg:text-lg">
                                {
                                    "I stumbled upon HeartWood while browsing for furniture online, and I'm so glad I did. Not only did they have exactly what I was looking for, but the entire shopping experience was seamless and enjoyable. The website is user-friendly, the product descriptions are detailed, and the checkout process is straightforward. Plus, the furniture arrived promptly and in perfect condition. HeartWood has earned a loyal customer in me."
                                }
                            </div>

                            <div className="contact">
                                <p className="font-bold text-primary-dark">
                                    {"David Martinez"}
                                </p>
                                <p className="text-primary-light">
                                    {"Online Shopper"}
                                </p>
                            </div>

                            {/* arrow controls */}
                            <div className="controls absolute bottom-0 right-0 flex items-center gap-4 text-xs font-bold">
                                <button
                                    className="prev flex-center h-10 w-10 rounded-full bg-faint-blue hover:shadow hover:saturate-200"
                                    onClick={() => alert("prev")}
                                >
                                    <FaArrowLeft />
                                </button>
                                <button
                                    className="next flex-center h-10 w-10 rounded-full bg-faint-red hover:shadow hover:saturate-200"
                                    onClick={() => alert("next")}
                                >
                                    <FaArrowRight />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="see-more relative mt-4 h-1 w-full border-b-2 border-primary-dark">
                        <Link
                            href=""
                            className="absolute right-0 top-0 flex -translate-y-1/3 items-center bg-white px-4 font-bold text-primary-dark hover:text-primary-light"
                        >
                            View All
                            <FaArrowRightLong className="ml-4 text-xl" />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
