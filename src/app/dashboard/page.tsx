"use client";

import { OrderApiClient } from "@/apiClients/OrderApiClient";
import { Order } from "@prisma/client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function Dashboard() {
    const [orders, setOrders] = useState<Order[]>([]);
    useEffect(() => {
        // fetch orders
        OrderApiClient.getOrders()
            .then((res) => {
                console.log(res);
                if (!res.ok) throw new Error("No orders found");
                return res.json();
            })
            .then((res) => {
                setOrders(res.data);
            })
            .catch((err) => {
                console.log(err);
                toast.error("No orders found");
            });
    }, []);

    const mapOrders = () => {
        console.log(orders.length);
        if (orders.length == 0)
            return (
                <tr className="text-lg">
                    <td colSpan={5} className="text-center">
                        No orders found
                    </td>
                </tr>
            );
        return orders.map((order) => {
            return (
                <tr key={order.id} className="text-lg">
                    <td>{order.id}</td>
                    <td>{order.amount}</td>
                    <td>{"2024 April 30"}</td>
                    <td>{"Shipping"}</td>
                    <td>
                        <Link
                            href={`/order/${order.id}`}
                            className="btn-primary-light btn"
                        >
                            View
                        </Link>
                    </td>
                </tr>
            );
        });
    };

    const handleSignOut = () => {
        if (typeof window !== "undefined") {
            localStorage.removeItem("isAuthenticated");
            window.location.href = "/login";
        }
    };

    return (
        <div className="nav-margin container">
            <div className="flex items-center justify-between py-4">
                <h2 className="py-2 text-2xl font-bold">My Orders</h2>
                <div
                    className="btn btn-info text-white"
                    onClick={handleSignOut}
                >
                    Sign Out
                </div>
            </div>
            <div className="mx-auto mb-60 max-w-screen-xl overflow-x-auto border">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="bg-slate-100 text-xl font-semibold text-primary-dark">
                            <th>Order ID</th>
                            <th>Amount</th>
                            <th>Date</th>
                            <th>Status</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>{mapOrders()}</tbody>
                </table>
            </div>
        </div>
    );
}
