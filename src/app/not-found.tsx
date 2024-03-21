import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";

export default function NotFound() {
	return (
		<>
			<div className="bg-primary-light">
				<Navbar />
				<div className="md:container flex flex-row w-full min-h-screen pt-20 justify-center items-center gap-10 md:gap-20">
					<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:top-0 md:left-0 md:translate-x-0 md:translate-y-0 md:relative img-container w-full image-full grid place-content-center">
						<Image
							src="/404-chair-transparent.png"
							alt="404"
							height={800}
							width={800}
							className="h-[70vh] w-auto drop-shadow-md z-0"
						/>
					</div>

					<div className="flex flex-col text-white w-full font-sans space-y-4 p-4 z-10 drop-shadow-xl">
						<h1 className="text-9xl font-extrabold mb-6">404</h1>
						<p className="text-4xl font-semibold">Something&apos;s missing.</p>
						<p className="text-xl break-words">
							This page is missing or you assembled the link incorrectly.
						</p>
						<Link href={'/'} className="btn btn-primary-dark shadow-lg border-none text-lg w-fit px-10">
							<FaArrowLeftLong className="text-2xl" />
							&nbsp; GO BACK
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}
