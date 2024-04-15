import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa6";
import { GiWoodenChair } from "react-icons/gi";

export default function Footer() {
    return (
        <>
            <div className="w-full bg-base-200">
                <div className="md:container">
                    <footer className="footer grid-flow-row grid-cols-2 p-10 text-base-content sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
                        <nav>
                            <h6 className="mb-2 text-lg font-bold text-primary-dark">
                                My Account
                            </h6>
                            <a className="link-hover link">Sign in</a>
                            <a className="link-hover link">Register</a>
                            <a className="link-hover link">Order Status</a>
                            <a className="link-hover link">My Cart</a>
                        </nav>
                        <nav>
                            <h6 className="mb-2 text-lg font-bold text-primary-dark">
                                Help
                            </h6>
                            <a className="link-hover link">Shipping</a>
                            <a className="link-hover link">Returns</a>
                            <a className="link-hover link">Sizing</a>
                            <a className="link-hover link">Customer Care</a>
                        </nav>
                        <nav>
                            <h6 className="mb-2 text-lg font-bold text-primary-dark">
                                Shop
                            </h6>
                            <a className="link-hover link">All Products</a>
                            <a className="link-hover link">Bedroom</a>
                            <a className="link-hover link">Dinning Room</a>
                            <a className="link-hover link">Living Room</a>
                            <a className="link-hover link">Kitchen</a>
                        </nav>
                        <nav>
                            <h6 className="mb-2 text-lg font-bold text-primary-dark">
                                Legal
                            </h6>
                            <a className="link-hover link">
                                Shipping & Delivery
                            </a>
                            <a className="link-hover link">
                                Terms & Conditions
                            </a>
                            <a className="link-hover link">Privacy Policy</a>
                        </nav>
                        <nav>
                            <h6 className="mb-2 text-lg font-bold text-primary-dark">
                                Contact Us
                            </h6>
                            <a className="link-hover link">Sanepa, Kathmandu</a>
                            <a className="link-hover link">+977 9841223344</a>
                        </nav>
                    </footer>
                    <footer className="footer border-t border-base-300 bg-base-200 px-10 py-4 text-base-content">
                        <aside className="grid-flow-col items-center">
                            <GiWoodenChair
                                size={35}
                                className="text-primary-dark"
                            />
                            <p>
                                <span className="font-semibold">
                                    HeartWood Ltd.
                                </span>{" "}
                                <br />
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
