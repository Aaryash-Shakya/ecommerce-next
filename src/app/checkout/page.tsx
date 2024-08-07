"use client";

import { CartApiClient } from "@/apiClients/CartApiClient";
import { OrderApiClient } from "@/apiClients/OrderApiClient";
import { UtilsService } from "@/services/utils.service";
import { CartWithProduct } from "@/types/cart";
import Image from "next/image";
import Link from "next/link";
import React, { FormEvent, useEffect, useState } from "react";
import { toast } from "react-toastify";
import crypto from "crypto";
import { useRouter } from "next/navigation";

let form: any = null;
export default function Checkout() {
    const [subtotal, setSubtotal] = useState(0);
    const [shipping, setShipping] = useState(0);
    const [grandTotal, setGrandTotal] = useState(0);
    const [paymentMethod, setPaymentMethod] = useState<"eSewa" | "mastercard">(
        "eSewa",
    );
    const router = useRouter();

    const fetchUserCartTotal = () => {
        CartApiClient.getCartItems({ userId: 1 })
            .then((res) => {
                if (res.status == 404) {
                    return;
                }
                if (!res.ok) throw new Error("Failed to fetch cart items");
                return res.json();
            })
            .then((res) => {
                if (res == null) {
                    router.push("/cart");
                }
                const cartItems: CartWithProduct[] = res.data;

                const cartTotal = cartItems.reduce((acc, item) => {
                    return acc + item.product.price;
                }, 0);
                // 10% discount
                setSubtotal(Number((0.9 * cartTotal).toFixed(2)));
                setGrandTotal(Number((0.9 * cartTotal + shipping).toFixed(2)));
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const handlePlaceOrder = () => {
        OrderApiClient.placeOrder({
            userId: 1,
            amount: subtotal + shipping,
        })
            .then((res) => {
                if (!res.ok) throw new Error("Failed to place order");
                return res.json();
            })
            .then((data) => {
                toast.success(data.message, {
                    position: "top-right",
                    autoClose: 5000,
                });
            })
            .catch((err) => {
                console.log(err);
                toast.error("Failed to place order");
            });
    };

    useEffect(() => {
        fetchUserCartTotal();
    }, []);

    // for eSewa
    const [paymentParams, setPaymentParams] = useState({
        amount: grandTotal.toString(),
        failure_url: "http://localhost:3000/checkout",
        product_delivery_charge: "0",
        product_service_charge: "0",
        product_code: "EPAYTEST",
        signature: "",
        signed_field_names: "total_amount,transaction_uuid,product_code",
        success_url: "http://localhost:3000/dashboard",
        tax_amount: "0",
        total_amount: grandTotal.toString(),
        transaction_uuid: `heartwood-${UtilsService.generateOTP(6)}`,
    });
    const generateSignature = async () => {
        const message = `total_amount=${paymentParams.total_amount},transaction_uuid=${paymentParams.transaction_uuid},product_code=${paymentParams.product_code}`;
        const secret = "8gBm/:&EnhH.1/q";

        const hash = crypto
            .createHmac("sha256", secret)
            .update(message)
            .digest("base64");
        setPaymentParams((prev) => ({ ...prev, signature: hash }));
        console.log(hash);
    };
    useEffect(() => {
        setPaymentParams((prev) => ({
            ...prev,
            total_amount: grandTotal.toString(),
            amount: grandTotal.toString(),
        }));

        generateSignature();
    }, [grandTotal]);

    useEffect(() => {
        const post = () => {
            form = document.createElement("form");
            form.setAttribute("method", "POST");
            form.setAttribute("target", "_blank");
            form.setAttribute(
                "action",
                "https://rc-epay.esewa.com.np/api/epay/main/v2/form",
            );
            form.addEventListener("submit", (e: FormEvent) => {
                e.preventDefault();
            });

            for (const key in paymentParams) {
                const hiddenField = document.createElement("input");
                hiddenField.setAttribute("type", "hidden");
                hiddenField.setAttribute("name", key);
                hiddenField.setAttribute(
                    "value",
                    paymentParams[key as keyof typeof paymentParams],
                ); // Add index signature
                form.appendChild(hiddenField);
            }

            document.body.appendChild(form);
        };

        post();
    }, [paymentParams]);

    const handleEsewaPayment = () => {
        generateSignature();
        setTimeout(() => {
            form.submit();
        }, 100);
        setTimeout(() => {
            handlePlaceOrder();
        }, 2000);
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
                        <li>
                            <Link href="/checkout">Checkout</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="container bg-white">
                <div className="mx-auto max-w-xl lg:max-w-6xl">
                    <form className="flex flex-col">
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
                                            required
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
                                            required
                                        />
                                    </label>
                                </div>
                                <div className="row-1 flex justify-evenly gap-4">
                                    <label className="form-control w-full max-w-xs">
                                        <div className="label">
                                            <span className="label-text text-base font-semibold">
                                                District
                                            </span>
                                        </div>
                                        <input
                                            type="text"
                                            placeholder="Type here"
                                            className="input input-bordered w-full max-w-xs"
                                            required
                                        />
                                    </label>
                                    <label className="form-control w-full max-w-xs">
                                        <div className="label">
                                            <span className="label-text text-base font-semibold">
                                                Postal Code
                                            </span>
                                        </div>
                                        <input
                                            type="text"
                                            placeholder="Type here"
                                            className="input input-bordered w-full max-w-xs"
                                            required
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
                                                        Rs 500
                                                    </p>
                                                </div>
                                            </span>
                                            <input
                                                type="radio"
                                                name="shipping"
                                                className="radio checked:bg-primary-dark"
                                                onClick={() => setShipping(500)}
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
                                                        Rs 200
                                                    </p>
                                                </div>
                                            </span>
                                            <input
                                                type="radio"
                                                name="shipping"
                                                className="radio checked:bg-primary-dark"
                                                onClick={() => setShipping(200)}
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
                                                        Rs 500
                                                    </p>
                                                </div>
                                            </span>
                                            <input
                                                type="radio"
                                                name="shipping"
                                                className="radio checked:bg-primary-dark"
                                                onClick={() => setShipping(500)}
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
                                                        Rs 100
                                                    </p>
                                                </div>
                                            </span>
                                            <input
                                                type="radio"
                                                name="shipping"
                                                className="radio checked:bg-primary-dark"
                                                onClick={() => setShipping(100)}
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
                                                defaultChecked={
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
                                                defaultChecked={
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
                            </div>
                        </div>
                        <div className="mt-4 flex w-full border-t bg-slate-100  p-4">
                            <h3 className="w-1/3 text-xl font-bold">
                                Order Summary
                            </h3>
                            <div className="order-summary w-2/3 flex-col">
                                <div className="flex w-80 justify-between p-2 font-semibold">
                                    <p className="text-lg ">Subtotal</p>
                                    <p className="">{subtotal}</p>
                                </div>
                                <div className="flex w-80 justify-between p-2 font-semibold">
                                    <p className="text-lg ">Shipping</p>
                                    <p className="">{shipping}</p>
                                </div>
                                <div className="flex w-80 justify-between border-t border-black p-2">
                                    <p className="text-lg font-bold">
                                        Grand Total
                                    </p>
                                    <p>{subtotal + shipping}</p>
                                </div>
                            </div>
                        </div>
                        {paymentMethod == "eSewa" ? (
                            <button
                                className="btn-primary-dark btn"
                                onClick={handleEsewaPayment}
                            >
                                Pay with eSewa
                            </button>
                        ) : (
                            <input
                                type="submit"
                                value={"Pay with card"}
                                className="btn-primary-dark btn"
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    handlePlaceOrder;
                                }}
                            />
                        )}
                    </form>
                </div>
            </div>
        </>
    );
}
