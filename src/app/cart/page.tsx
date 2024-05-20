"use client";

import { CartApiClient } from "@/apiClients/CartApiClient";
import { CartWithProduct } from "@/types/cart";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaExternalLinkAlt, FaMinus, FaPlus } from "react-icons/fa";
import { ImBin } from "react-icons/im";
import { toast } from "react-toastify";

const Cart = () => {
    const [cart, setCart] = useState<CartWithProduct[]>([]);
    const [subtotal, setSubtotal] = useState(0);
    const [total, setTotal] = useState(0);

    const fetchUserCart = () => {
        CartApiClient.getCartItems({ userId: 1 })
            .then((res) => {
                if (res.status == 404) {
                    setCart([]);
                    return;
                }
                if (!res.ok) throw new Error("Failed to fetch cart items");
                return res.json();
            })
            .then((res) => {
                setCart(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        fetchUserCart();
    }, []);

    useEffect(() => {
        const calculateOrderSummary = () => {
            const sumOfItemTotal = cart.reduce(
                (acc, cartItem) =>
                    acc + cartItem.product.price * cartItem.quantity,
                0,
            );
            setSubtotal(sumOfItemTotal);
            setTotal(sumOfItemTotal - 0.1 * sumOfItemTotal);
        };

        calculateOrderSummary();
    }, [cart]);

    const handleRemoveFromCart = (productId: number) => {
        if (!confirm("Are you sure you want to remove this item from cart?"))
            return;
        CartApiClient.removeFromCart({ userId: 1, productId })
            .then((res) => {
                if (!res.ok) throw new Error("Failed to remove item from cart");
            })
            .then(() => {
                toast.success("Item removed from cart", {
                    position: "top-right",
                    autoClose: 2000,
                    closeOnClick: true,
                    pauseOnHover: false,
                });
                fetchUserCart();
            })
            .catch((err) => {
                toast.error("Failed to remove item from cart", {
                    position: "top-right",
                    autoClose: 2000,
                    closeOnClick: true,
                    pauseOnHover: false,
                });
                console.log(err);
            });
    };

    // implement increment and decrement quantity
    const handleQuantityChange = (
        type: "inc" | "dec",
        quantity: number,
        productId: number,
    ) => {
        if (type == "inc") {
            quantity = quantity + 1;
        } else if (type == "dec" && quantity > 1) {
            quantity = quantity - 1;
        } else {
            return;
        }
        CartApiClient.addToCart({
            userId: 1,
            productId,
            quantity: quantity,
        })
            .then((res) => {
                if (!res.ok)
                    throw new Error(`Failed to ${type}rement quantity`);
                fetchUserCart();
                toast.success(`Quantity ${type}remented`, {
                    position: "top-right",
                    autoClose: 1500,
                    closeOnClick: true,
                    pauseOnHover: false,
                });
            })
            .catch((err) => {
                console.log(err);
                toast.error(`Failed to ${type}rement quantity`, {
                    position: "top-right",
                    autoClose: 1500,
                    closeOnClick: true,
                    pauseOnHover: false,
                });
            });
    };

    const mapCartItems = () => {
        if (cart.length == 0)
            return (
                <p className="flex-center h-56 w-full text-center text-5xl font-semibold text-primary-light">
                    Cart is empty
                </p>
            );

        return cart.map((cartItem) => {
            const itemTotal = cartItem.product.price * cartItem.quantity;
            return (
                <>
                    <div className="my-4 flex w-full flex-col items-start justify-between gap-2 bg-gray-50 shadow-md sm:my-8 sm:flex-row sm:gap-4">
                        <div className="h-50 mx-auto aspect-square w-full rounded bg-gray-200 p-2 sm:h-64 sm:w-64 sm:p-4">
                            <Image
                                height={600}
                                width={600}
                                src={`/furniture/${cartItem.product.image}-1.avif`}
                                alt={cartItem.product.name}
                                className="h-full w-full shrink-0 rounded-lg object-contain"
                            />
                        </div>
                        <div className="relative flex h-40 w-full flex-col p-2 sm:h-64 sm:p-4">
                            <Link
                                href={`/product/${cartItem.productId}`}
                                className="flex gap-2 text-2xl font-bold text-primary-dark hover:underline hover:brightness-75"
                            >
                                {cartItem.product.name}
                                <FaExternalLinkAlt />
                            </Link>
                            <h4 className="mt-2 text-lg font-bold text-primary-light">
                                Rs {cartItem.product.price}
                            </h4>
                            <div className="bottom mb-0 mt-auto flex flex-col items-end justify-between sm:flex-row sm:items-center">
                                <div className="flex-center w-fit gap-0">
                                    <button
                                        className={`flex-center h-7 w-7 rounded-bl-md rounded-tl-md border hover:bg-slate-200 sm:h-10 sm:w-10 ${
                                            cartItem.quantity == 1 &&
                                            "cursor-not-allowed"
                                        }`}
                                        onClick={() =>
                                            handleQuantityChange(
                                                "dec",
                                                cartItem.quantity,
                                                cartItem.productId,
                                            )
                                        }
                                    >
                                        <FaMinus />
                                    </button>
                                    <input
                                        type="text"
                                        value={cartItem.quantity}
                                        className="h-7 w-7 border text-center text-xl sm:h-10 sm:w-10"
                                    />
                                    <button
                                        className="flex-center h-7 w-7 rounded-br-md rounded-tr-md border hover:bg-slate-200 sm:h-10 sm:w-10"
                                        onClick={() =>
                                            handleQuantityChange(
                                                "inc",
                                                cartItem.quantity,
                                                cartItem.productId,
                                            )
                                        }
                                    >
                                        <FaPlus />
                                    </button>
                                </div>
                                <div className="itemTotal text-2xl font-bold text-primary-dark">
                                    Rs {itemTotal}
                                </div>
                            </div>
                            <ImBin
                                className="absolute right-4 top-4 cursor-pointer text-3xl text-red-500"
                                title="remove"
                                onClick={() =>
                                    handleRemoveFromCart(cartItem.productId)
                                }
                            />
                        </div>
                    </div>
                </>
            );
        });
    };

    return (
        <>
            {/* breadcrumbs */}
            <div className="nav-margin w-full bg-primary-light/40">
                <div className="breadcrumbs py-4 text-sm md:container">
                    <ul>
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/cart">Cart</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="bg-white">
                <div className="container">
                    <h2 className="pt-4 text-3xl font-extrabold text-[#333]">
                        Shopping Cart
                    </h2>
                    <div className="grid items-start gap-8 lg:grid-cols-3">
                        <div className="divide-y lg:col-span-2">
                            {/* data here */}
                            {mapCartItems()}
                        </div>
                        <div className="my-10 bg-gray-100 p-8">
                            <h3 className="text-2xl font-bold text-[#333]">
                                Order summary
                            </h3>
                            <ul className="mt-6 divide-y text-[#333]">
                                <li className="text-md flex flex-wrap gap-4 py-3">
                                    Subtotal{" "}
                                    <span className="ml-auto font-bold">
                                        Rs {subtotal}
                                    </span>
                                </li>
                                <li className="text-md flex flex-wrap gap-4 py-3">
                                    Discount %{" "}
                                    <span className="ml-auto font-bold">
                                        10%
                                    </span>
                                </li>
                                <li className="text-md flex flex-wrap gap-4 py-3">
                                    Discount Amount{" "}
                                    <span className="ml-auto font-bold">
                                        {0.1 * subtotal}
                                    </span>
                                </li>
                                <li className="text-md flex flex-wrap gap-4 py-3 font-bold">
                                    Total{" "}
                                    <span className="ml-auto">Rs {total}</span>
                                </li>
                            </ul>
                            <Link
                                type="button"
                                className="btn-primary-light btn border-none px-8 shadow-lg"
                                href={`/checkout`}
                            >
                                Check out
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Cart;
