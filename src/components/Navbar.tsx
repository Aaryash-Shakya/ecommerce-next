import React from "react";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { GiWoodenChair } from "react-icons/gi";
import { HiMenuAlt1 } from "react-icons/hi";

export default function Navbar() {
	return (
		<>
			<div className="w-full fixed top-0 left-0 bg-base-100 bg-opacity-20">
				<div className="md:container">
					<div className="navbar text-primary-dark">
						<div className="navbar-start">
							<div className="dropdown">
								<div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
									<HiMenuAlt1 size={25} />
								</div>
								<ul
									tabIndex={0}
									className="menu menu-md dropdown-content mt-3 z-[10] p-2 shadow bg-base-200 rounded-box w-[90vw] font-playfair text-lg"
								>
									<li>
										<a className="font-bold underline underline-offset-4">Home</a>
									</li>
									<li>
										<a>Products</a>
									</li>
									<li>
										<a>Categories</a>
									</li>
									<li>
										<a>About</a>
									</li>
									<li>
										<a>Contact Us</a>
									</li>
								</ul>
							</div>
							<a className="btn btn-ghost text-xl">
								<GiWoodenChair size={25} />
								logo
							</a>
						</div>
						<div className="navbar-center hidden lg:flex">
							<ul className="menu menu-horizontal px-1 font-playfair text-lg">
								<li>
									<a className="font-bold underline underline-offset-4">Home</a>
								</li>
								<li>
									<a>Products</a>
								</li>
								<li>
									<a>Categories</a>
								</li>
								<li>
									<a>About</a>
								</li>
								<li>
									<a>Contact Us</a>
								</li>
							</ul>
						</div>
						<div className="navbar-end me-4 flex gap-4 md:gap-6 xl:gap-10">
							<a title="search">
								<FaSearch className="cursor-pointer text-xl md:text-2xl" />
							</a>
							<a title="cart">
								<FaShoppingCart className="cursor-pointer text-xl md:text-2xl" />
							</a>
							<a title="profile">
								<FaUser className="cursor-pointer text-xl md:text-2xl" /> 
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
