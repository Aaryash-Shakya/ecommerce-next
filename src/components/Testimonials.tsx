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
					<h2 className="font-playfair text-5xl text-primary-dark font-bold mb-4 text-center">
						Testimonials
					</h2>
					<h3 className="text-2xl text-primary-dark mb-4 text-center">Over 10,000 happy customers</h3>
					<div className="flex flex-col md:flex-row gap-4 md:gap-x-6 lg:gap-x-16 max-w-screen-xl mx-auto p-8 md:p-2">
						<div className="img-container w-full md:w-1/3 lg:w-1/4 overflow-hidden relative ps-12 pt-12 mx-auto">
							<Image
								src="/testimonials/testimonial-1.jpg"
								height={500}
								width={500}
								alt="random user"
								className="object-cover rounded-3xl"
							/>
							<BiSolidQuoteLeft className="text-9xl text-faint-blue saturate-200 absolute top-0 left-0" />
						</div>
						<div className="testimonial-content md:px-2 w-full md:w-2/3 lg:w-3/4 flex flex-col justify-evenly pt-5 relative">
							<div className="message text-primary-dark/85 text-base lg:text-lg mb-4">
								{
									"I stumbled upon HeartWood while browsing for furniture online, and I'm so glad I did. Not only did they have exactly what I was looking for, but the entire shopping experience was seamless and enjoyable. The website is user-friendly, the product descriptions are detailed, and the checkout process is straightforward. Plus, the furniture arrived promptly and in perfect condition. HeartWood has earned a loyal customer in me."
								}
							</div>

							<div className="contact">
								<p className="text-primary-dark font-bold">{"David Martinez"}</p>
								<p className="text-primary-light">{"Online Shopper"}</p>
							</div>

							{/* arrow controls */}
							<div className="controls absolute bottom-0 right-0 flex items-center gap-4 text-xs font-bold">
								<button
									className="prev bg-faint-blue hover:saturate-200 hover:shadow rounded-full flex-center h-10 w-10"
									onClick={() => alert("prev")}
								>
									<FaArrowLeft />
								</button>
								<button
									className="next bg-faint-red hover:saturate-200 hover:shadow rounded-full flex-center h-10 w-10"
									onClick={() => alert("next")}
								>
									<FaArrowRight />
								</button>
							</div>
						</div>
					</div>
					<div className="see-more mt-4 w-full h-1 border-b-2 border-primary-dark relative">
						<Link
							href=""
							className="text-primary-dark hover:text-primary-light font-bold bg-white absolute top-0 right-0 px-4 -translate-y-1/3 flex items-center"
						>
							View All
							<FaArrowRightLong className="text-xl ml-4" />
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}
