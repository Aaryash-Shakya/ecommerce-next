"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiSolidQuoteLeft } from "react-icons/bi";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { TestimonialType, testimonials } from "@/data/testimonials.data";

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
                    <Swiper
                        pagination={true}
                        modules={[Autoplay, Pagination]}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        className="mySwiper relative"
                    >
                        {testimonials.map((testimonial, index) => (
                            <SwiperSlide key={index}>
                                <div className="mx-auto flex max-w-screen-xl flex-col gap-4 p-8 md:flex-row md:gap-x-6 md:p-2 lg:gap-x-16">
                                    <div className="img-container relative mx-auto w-full overflow-hidden ps-12 pt-12 md:w-1/3 lg:w-1/4">
                                        <Image
                                            src={`/testimonials${testimonial.image}`}
                                            height={500}
                                            width={500}
                                            alt={testimonial.name}
                                            className="rounded-3xl object-cover"
                                        />
                                        <BiSolidQuoteLeft className="absolute left-0 top-0 text-9xl text-faint-blue saturate-200" />
                                    </div>
                                    <div className="testimonial-content relative flex w-full flex-col justify-evenly pt-5 md:w-2/3 md:px-2 lg:w-3/4">
                                        <div className="message mb-4 text-base text-primary-dark/85 lg:text-lg">
                                            {testimonial.message}
                                        </div>

                                        <div className="contact">
                                            <p className="font-bold text-primary-dark">
                                                {testimonial.name ||
                                                    "Anonymous"}
                                            </p>
                                            <p className="text-primary-light">
                                                {testimonial.company ||
                                                    "unknown"}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}

                        {/* arrow controls */}
                        <TestimonialNavButton />
                    </Swiper>
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
        </>
    );
}

// ! fix: returned mapped data didn't work
// ref https://github.com/kidjp85/react-id-swiper/issues/404
// ref https://stackoverflow.com/questions/64179647/why-does-my-map-function-break-swiperjs-component-in-react
// function TestimonialContent() {
//     const testimonialData: TestimonialType[] = testimonials;
//     return testimonialData.map((testimonial, index) => (
//         <SwiperSlide key={index}>
//             <div className="mx-auto flex max-w-screen-xl flex-col gap-4 p-8 md:flex-row md:gap-x-6 md:p-2 lg:gap-x-16">
//                 <div className="img-container relative mx-auto w-full overflow-hidden ps-12 pt-12 md:w-1/3 lg:w-1/4">
//                     <Image
//                         src={`/testimonials${testimonial.image}`}
//                         height={500}
//                         width={500}
//                         alt={testimonial.name}
//                         className="rounded-3xl object-cover"
//                     />
//                     <BiSolidQuoteLeft className="absolute left-0 top-0 text-9xl text-faint-blue saturate-200" />
//                 </div>
//                 <div className="testimonial-content relative flex w-full flex-col justify-evenly pt-5 md:w-2/3 md:px-2 lg:w-3/4">
//                     <div className="message mb-4 text-base text-primary-dark/85 lg:text-lg">
//                         {testimonial.message}
//                     </div>

//                     <div className="contact">
//                         <p className="font-bold text-primary-dark">
//                             {testimonial.name || "Anonymous"}
//                         </p>
//                         <p className="text-primary-light">
//                             {testimonial.company || "unknown"}
//                         </p>
//                     </div>
//                 </div>
//             </div>
//         </SwiperSlide>
//     ));
// }

function TestimonialNavButton() {
    const swiperMethod = useSwiper();
    return (
        <div className="controls absolute bottom-0 right-0 z-10 flex items-center gap-4 text-xs font-bold">
            <button
                className="prev flex-center h-10 w-10 rounded-full bg-faint-blue hover:shadow hover:saturate-200"
                onClick={() => swiperMethod.slidePrev()}
            >
                <FaArrowLeft />
            </button>
            <button
                className="next flex-center h-10 w-10 rounded-full bg-faint-red hover:shadow hover:saturate-200"
                onClick={() => swiperMethod.slideNext()}
            >
                <FaArrowRight />
            </button>
        </div>
    );
}
