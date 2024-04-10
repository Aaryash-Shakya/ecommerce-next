import Link from "next/link";
import React from "react";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { GiWoodenChair } from "react-icons/gi";
import { HiMenuAlt1 } from "react-icons/hi";

export default function Navbar() {
	return (
		<>
			<div className="w-full fixed top-0 left-0 glass z-10">
				<div className="md:container">
					<div className="navbar text-primary-dark">
						<div className="navbar-start">
							<div className="dropdown">
								<div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
									<HiMenuAlt1 size={25} />
								</div>
								<ul
									tabIndex={0}
									className="menu menu-md dropdown-content mt-3 z-[10] p-2 shadow bg-base-200 rounded-box w-[90vw] max-w-md text-lg underline-offset-4"
								>
									<li>
										<Link href="/" className="font-bold underline">
											Home
										</Link>
									</li>
									<li>
										<Link href="/products" className="hover:underline">
											Products
										</Link>
									</li>
									<li>
										<Link href="#" className="hover:underline">
											Categories
										</Link>
									</li>
									<li>
										<Link href="#" className="hover:underline">
											About
										</Link>
									</li>
									<li>
										<Link href="#" className="hover:underline">
											Contact
										</Link>
									</li>
								</ul>
							</div>
							<a className="btn btn-ghost text-xl">
								<GiWoodenChair size={25} />
								HeartWood
							</a>
						</div>
						<div className="navbar-center hidden lg:flex">
							<ul className="menu menu-horizontal px-1 font-playfair text-xl space-x-3 underline-offset-4">
								<li>
									<Link href="/" className="font-bold underline">
										Home
									</Link>
								</li>
								<li>
									<Link href="/products" className="hover:underline">
										Products
									</Link>
								</li>
								<li>
									<Link href="#" className="hover:underline">
										Categories
									</Link>
								</li>
								<li>
									<Link href="#" className="hover:underline">
										About
									</Link>
								</li>
								<li>
									<Link href="#" className="hover:underline">
										Contact
									</Link>
								</li>
							</ul>
						</div>
						<div className="navbar-end me-4 flex gap-4 md:gap-6 xl:gap-10">
							<a title="search">
								<FaSearch className="cursor-pointer text-xl md:text-2xl hover:text-primary-dark/80" />
							</a>
							<Link href="/cart" title="cart">
								<FaShoppingCart className="cursor-pointer text-xl md:text-2xl hover:text-primary-dark/80" />
							</Link>
							<a title="profile">
								<FaUser className="cursor-pointer text-xl md:text-2xl hover:text-primary-dark/80" />
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
