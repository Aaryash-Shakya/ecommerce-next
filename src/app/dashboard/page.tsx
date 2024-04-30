"use client";

import { OrderApiClient } from "@/apiClients/OrderApiClient";
import { Order } from "@prisma/client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function Dashboard() {
    const [orders, setOrders] = useState<Order[]>([
        {
            id: 0,
            userId: 0,
            amount: 0,
            paymentId: 0,
            createdAt: new Date(),
            updatedAt: new Date(),
        },
    ]);
    useEffect(() => {
        // fetch orders
        OrderApiClient.getOrders()
            .then((res) => {
                if (!res.ok) throw new Error("Failed to fetch orders");
                return res.json();
            })
            .then((res) => {
                setOrders(res.data);
            })
            .catch((err) => {
                console.log(err);
                toast.error("Failed to fetch orders");
            });
    }, []);

    const mapOrders = () => {
        return orders.map((order) => {
            return (
                <tr key={order.id} className="text-lg">
                    <td>{order.id}</td>
                    <td>{order.amount}</td>
                    <td>{"2024 April 30"}</td>
                    <td>{"Shipping"}</td>
                    <td>
                        <Link href={`/order/${order.id}`} className="btn btn-primary-light">View</Link>
                    </td>
                </tr>
            );
        });
    };

    return (
        <div className="nav-margin container">
            <h2 className="py-2 text-2xl font-bold">My Orders</h2>
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
                    <tbody>
                        {/* row 1 */}
                        {mapOrders()}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
