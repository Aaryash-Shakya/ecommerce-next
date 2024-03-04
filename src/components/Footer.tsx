import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa6";
import { GiWoodenChair } from "react-icons/gi";

export default function Footer() {
	return (
		<>
			<div className="w-full bg-base-200">
				<div className="md:container">
					<footer className="footer p-10 text-base-content">
						<nav>
							<h6 className="mb-2 text-primary-dark font-bold text-lg">My Account</h6>
							<a className="link link-hover">Sign in</a>
							<a className="link link-hover">Register</a>
							<a className="link link-hover">Order Status</a>
							<a className="link link-hover">My Cart</a>
						</nav>
						<nav>
							<h6 className="mb-2 text-primary-dark font-bold text-lg">Help</h6>
							<a className="link link-hover">Shipping</a>
							<a className="link link-hover">Returns</a>
							<a className="link link-hover">Sizing</a>
							<a className="link link-hover">Customer Care</a>
						</nav>
						<nav>
							<h6 className="mb-2 text-primary-dark font-bold text-lg">Shop</h6>
							<a className="link link-hover">All Products</a>
							<a className="link link-hover">Bedroom</a>
							<a className="link link-hover">Dinning Room</a>
							<a className="link link-hover">Living Room</a>
							<a className="link link-hover">Kitchen</a>
						</nav>
						<nav>
							<h6 className="mb-2 text-primary-dark font-bold text-lg">Legal</h6>
							<a className="link link-hover">Shipping & Delivery</a>
							<a className="link link-hover">Terms & Conditions</a>
							<a className="link link-hover">Privacy Policy</a>
						</nav>
					</footer>
					<footer className="footer px-10 py-4 border-t bg-base-200 text-base-content border-base-300">
						<aside className="items-center grid-flow-col">
							<GiWoodenChair size={35} className="text-primary-dark" />
							<p>
								<span className="font-semibold">Aaryash company Ltd.</span> <br />
								Providing reliable furniture since 2003
							</p>
						</aside>
						<nav className="md:place-self-center md:justify-self-end">
							<div className="grid grid-flow-col gap-4">
								<a>
									<FaTwitter size={30} />
								</a>
								<a>
									<FaInstagram size={30} />
								</a>
								<a>
									<FaFacebook size={30} />
								</a>
								<a>
									<FaYoutube size={30} />
								</a>
							</div>
						</nav>
					</footer>
				</div>
			</div>
		</>
	);
}
