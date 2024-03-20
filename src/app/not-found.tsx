import Navbar from "@/components/Navbar";
import Image from "next/image";
import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";

export default function NotFound() {
	return (
		<>
			<div className="bg-primary-light">
				<Navbar />
				<div className="md:container flex flex-col md:flex-row w-full min-h-screen pt-20 justify-center items-center gap-10">
					<div className="img-container w-full md:w-1/3 image-full grid place-content-center">
						<Image
							src="/404-chair-transparent.png"
							alt="404"
							height={800}
							width={800}
							className="h-[70vh] w-auto drop-shadow-md"
							style={{}}
						/>
					</div>

					<div className="flex flex-col text-white w-full md:w-1/3 font-sans space-y-4">
						<h1 className="text-9xl font-extrabold mb-6 drop-shadow-sm">404</h1>
						<p className="text-4xl font-semibold">Something&apos;s missing.</p>
						<p className="text-xl break-words">
							This page is missing or you assembled the link incorrectly.
						</p>
						<button className="btn btn-primary-dark shadow-lg border-none text-lg w-fit px-10">
							<FaArrowLeftLong />
							GO BACK
						</button>
					</div>
				</div>
			</div>
		</>
	);
}
