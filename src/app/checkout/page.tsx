"use client";

import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { useState } from "react";

export default function Checkout() {
    const searchParams = useSearchParams();
    const searchTotal = searchParams.get("total") || "1000";
    const [subtotal, setSubtotal] = useState(parseInt(searchTotal));
    const [shipping, setShipping] = useState(0);
    const [paymentMethod, setPaymentMethod] = useState<"eSewa" | "mastercard">(
        "mastercard",
    );

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
                        <li>
                            <Link href="/checkout">Checkout</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="container bg-white">
                <div className="mx-auto max-w-xl lg:max-w-6xl">
                    <div className="flex flex-col">
                        <h2 className="text-2xl font-extrabold">Checkout</h2>
                        <div className="mt-4 flex w-full p-4">
                            <h3 className="w-1/3 text-xl font-bold">
                                Shipping Details
                            </h3>
                            <div className="shipping-form w-2/3">
                                <div className="row-1 flex justify-evenly gap-4">
                                    <label className="form-control w-full max-w-xs">
                                        <div className="label">
                                            <span className="label-text text-base font-semibold">
                                                Street address
                                            </span>
                                        </div>
                                        <input
                                            type="text"
                                            placeholder="Type here"
                                            className="input input-bordered w-full max-w-xs"
                                        />
                                    </label>
                                    <label className="form-control w-full max-w-xs">
                                        <div className="label">
                                            <span className="label-text text-base font-semibold">
                                                City
                                            </span>
                                        </div>
                                        <input
                                            type="text"
                                            placeholder="Type here"
                                            className="input input-bordered w-full max-w-xs"
                                        />
                                    </label>
                                </div>
                                <div className="row-1 flex justify-evenly gap-4">
                                    <label className="form-control w-full max-w-xs">
                                        <div className="label">
                                            <span className="label-text text-base font-semibold">
                                                Zip Code
                                            </span>
                                        </div>
                                        <input
                                            type="text"
                                            placeholder="Type here"
                                            className="input input-bordered w-full max-w-xs"
                                        />
                                    </label>
                                    <label className="form-control w-full max-w-xs">
                                        <div className="label">
                                            <span className="label-text text-base font-semibold">
                                                Country
                                            </span>
                                        </div>
                                        <input
                                            type="text"
                                            placeholder="Type here"
                                            className="input input-bordered w-full max-w-xs"
                                        />
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="mt-4 flex w-full border-t p-4">
                            <h3 className="w-1/3 text-xl font-bold">
                                Shipping Method
                            </h3>
                            <div className="shipping-form w-2/3">
                                <div className="row-1 flex justify-evenly gap-5">
                                    <div className="form-control w-1/2 max-w-xs border-2 border-gray-300 p-2 hover:border-black hover:bg-slate-50">
                                        <label className="label cursor-pointer">
                                            <span className="label-text flex gap-2">
                                                <Image
                                                    src={"/upaya.png"}
                                                    height={80}
                                                    width={120}
                                                    alt={"upaya logo"}
                                                />
                                                <div>
                                                    <p className="text-lg font-semibold">
                                                        Upaya
                                                    </p>
                                                    <p>Delivery: Tomorrow</p>
                                                    <p className="mt-2 text-lg font-semibold">
                                                        Rs 5000
                                                    </p>
                                                </div>
                                            </span>
                                            <input
                                                type="radio"
                                                name="shipping"
                                                className="radio checked:bg-primary-dark"
                                                onClick={() =>
                                                    setShipping(5000)
                                                }
                                            />
                                        </label>
                                    </div>
                                    <div className="form-control w-1/2 max-w-xs border-2 border-gray-300 p-2 hover:border-black hover:bg-slate-50">
                                        <label className="label cursor-pointer">
                                            <span className="label-text flex gap-2">
                                                <Image
                                                    src={"/upaya.png"}
                                                    height={80}
                                                    width={120}
                                                    alt={"upaya logo"}
                                                />
                                                <div>
                                                    <p className="text-lg font-semibold">
                                                        Upaya
                                                    </p>
                                                    <p>Delivery: 3-4 days</p>
                                                    <p className="mt-2 text-lg font-semibold">
                                                        Rs 2000
                                                    </p>
                                                </div>
                                            </span>
                                            <input
                                                type="radio"
                                                name="shipping"
                                                className="radio checked:bg-primary-dark"
                                                onClick={() =>
                                                    setShipping(2000)
                                                }
                                            />
                                        </label>
                                    </div>
                                </div>
                                <div className="row-2 mt-6 flex justify-evenly gap-5">
                                    <div className="form-control w-1/2 max-w-xs border-2 border-gray-300 p-2 hover:border-black hover:bg-slate-50">
                                        <label className="label cursor-pointer">
                                            <span className="label-text flex gap-2">
                                                <Image
                                                    src={"/zapp.webp"}
                                                    className="my-auto h-10"
                                                    height={80}
                                                    width={120}
                                                    alt={"upaya logo"}
                                                />
                                                <div>
                                                    <p className="text-lg font-semibold">
                                                        Zapp
                                                    </p>
                                                    <p>Delivery: Tomorrow</p>
                                                    <p className="mt-2 text-lg font-semibold">
                                                        Rs 5000
                                                    </p>
                                                </div>
                                            </span>
                                            <input
                                                type="radio"
                                                name="shipping"
                                                className="radio checked:bg-primary-dark"
                                                onClick={() =>
                                                    setShipping(5000)
                                                }
                                            />
                                        </label>
                                    </div>
                                    <div className="form-control w-1/2 max-w-xs border-2 border-gray-300 p-2 hover:border-black hover:bg-slate-50">
                                        <label className="label cursor-pointer">
                                            <span className="label-text flex gap-2">
                                                <Image
                                                    src={"/zapp.webp"}
                                                    className="my-auto h-10"
                                                    height={80}
                                                    width={120}
                                                    alt={"zapp logo"}
                                                />
                                                <div>
                                                    <p className="text-lg font-semibold">
                                                        Zapp
                                                    </p>
                                                    <p>Delivery: 1 week</p>
                                                    <p className="mt-2 text-lg font-semibold">
                                                        Rs 1000
                                                    </p>
                                                </div>
                                            </span>
                                            <input
                                                type="radio"
                                                name="shipping"
                                                className="radio checked:bg-primary-dark"
                                                onClick={() =>
                                                    setShipping(1000)
                                                }
                                            />
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* payment method */}
                        <div className="mt-4 flex w-full border-t p-4">
                            <h3 className="w-1/3 text-xl font-bold">
                                Payment Method
                            </h3>
                            <div className="shipping-form w-2/3">
                                <div className="row-1 flex justify-evenly gap-5">
                                    <div className="form-control w-1/2 max-w-xs border-2 border-gray-300 p-2 hover:border-black hover:bg-slate-50">
                                        <label className="label cursor-pointer">
                                            <span className="label-text flex items-center gap-2">
                                                <Image
                                                    src={"/esewa.png"}
                                                    height={80}
                                                    width={80}
                                                    alt={"esewa logo"}
                                                />
                                                <div>
                                                    <p className="text-lg font-semibold">
                                                        eSewa
                                                    </p>
                                                </div>
                                            </span>
                                            <input
                                                type="radio"
                                                name="payment"
                                                className="radio checked:bg-primary-dark"
                                                onClick={() =>
                                                    setPaymentMethod("eSewa")
                                                }
                                                checked={
                                                    paymentMethod === "eSewa"
                                                }
                                            />
                                        </label>
                                    </div>
                                    <div className="form-control w-1/2 max-w-xs border-2 border-gray-300 p-2 hover:border-black hover:bg-slate-50">
                                        <label className="label cursor-pointer">
                                            <span className="label-text flex items-center gap-2">
                                                <Image
                                                    src={"/mastercard.jpg"}
                                                    height={80}
                                                    width={80}
                                                    alt={"mastercard logo"}
                                                />
                                                <p className="text-lg font-semibold">
                                                    mastercard
                                                </p>
                                            </span>
                                            <input
                                                type="radio"
                                                name="payment"
                                                className="radio checked:bg-primary-dark"
                                                checked={
                                                    paymentMethod ===
                                                    "mastercard"
                                                }
                                                onClick={() =>
                                                    setPaymentMethod(
                                                        "mastercard",
                                                    )
                                                }
                                            />
                                        </label>
                                    </div>
                                </div>
                                <div className="row-2 flex-center w-full">
                                    {paymentMethod === "eSewa" ? (
                                        <Image
                                            src={"/esewa-qr.png"}
                                            height={300}
                                            width={300}
                                            alt={"esewa qr"}
                                        />
                                    ) : (
                                        <>form</>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="mt-4 flex w-full border-t bg-slate-100  p-4">
                            <h3 className="w-1/3 text-xl font-bold">
                                Order Summary
                            </h3>
                            <div className="order-summary w-2/3 flex-col">
                                <div className="flex p-2 w-80 justify-between font-semibold">
                                    <p className="text-lg ">Subtotal</p>
                                    <p className="">{subtotal}</p>
                                </div>
                                <div className="flex p-2 w-80 justify-between font-semibold">
                                    <p className="text-lg ">Shipping</p>
                                    <p className="">{shipping}</p>
                                </div>
                                <div className="flex p-2 w-80 justify-between border-t border-black">
                                    <p className="text-lg font-bold">
                                        Grand Total
                                    </p>
                                    <p>{subtotal + shipping}</p>
                                </div>
                            </div>
                        </div>
                        <div className="btn-primary-dark btn">Pay</div>
                    </div>
                </div>
            </div>
        </>
    );
}
