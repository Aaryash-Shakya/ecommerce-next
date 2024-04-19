"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { GiWoodenChair } from "react-icons/gi";
import { HiMenuAlt1 } from "react-icons/hi";

export default function Navbar() {
    const pathname = usePathname();
    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Products", href: "/products" },
        { name: "Categories", href: "/categories" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
    ];
    return (
        <>
            <div className="glass fixed left-0 top-0 z-10 w-full">
                <div className="md:container">
                    <div className="navbar text-primary-dark">
                        <div className="navbar-start">
                            <div className="dropdown">
                                <div
                                    tabIndex={0}
                                    role="button"
                                    className="btn btn-ghost lg:hidden"
                                >
                                    <HiMenuAlt1 size={25} />
                                </div>
                                <ul
                                    tabIndex={0}
                                    className="menu dropdown-content menu-md z-[10] mt-3 w-[90vw] max-w-md rounded-box bg-base-200 p-2 text-lg underline-offset-4 shadow"
                                >
                                    {navLinks.map((link) => {
                                        const isActive = pathname === link.href;
                                        return (
                                            <li key={link.name}>
                                                <Link
                                                    href={link.href}
                                                    className={
                                                        isActive
                                                            ? "font-bold underline"
                                                            : "hover:underline"
                                                    }
                                                >
                                                    {link.name}
                                                </Link>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                            <a className="btn btn-ghost text-xl">
                                <GiWoodenChair size={25} />
                                HeartWood
                            </a>
                        </div>
                        <div className="navbar-center hidden lg:flex">
                            <ul className="menu menu-horizontal space-x-3 px-1 font-playfair text-xl underline-offset-4">
                                {navLinks.map((link) => {
                                    const isActive = pathname === link.href;
                                    return (
                                        <li key={link.name}>
                                            <Link
                                                href={link.href}
                                                className={
                                                    isActive
                                                        ? "font-bold underline"
                                                        : "hover:underline"
                                                }
                                            >
                                                {link.name}
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                        <div className="navbar-end me-4 flex gap-4 md:gap-6 xl:gap-10">
                            <a title="search">
                                <FaSearch className="cursor-pointer text-xl hover:text-primary-dark/80 md:text-2xl" />
                            </a>
                            <Link href="/cart" title="cart">
                                <FaShoppingCart className="cursor-pointer text-xl hover:text-primary-dark/80 md:text-2xl" />
                            </Link>
                            <a title="profile">
                                <FaUser className="cursor-pointer text-xl hover:text-primary-dark/80 md:text-2xl" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
