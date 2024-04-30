import prisma from "@/client";
import { NextResponse } from "next/server";

export async function GET() {
    const orderItems = await prisma.order.findMany();

    // if cart is empty
    if (orderItems.length === 0) {
        return NextResponse.json(
            {
                message: "No order",
            },
            {
                status: 404,
            },
        );
    }

    return NextResponse.json({
        data: orderItems,
        message: "Orders fetched",
    });
}
