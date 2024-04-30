import prisma from "@/client";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const reqJson = await req.json();
    const userId = reqJson.userId;
    const amount = reqJson.amount;

    // if user doesn't exist
    const existingUser = await prisma.user.findUnique({
        where: {
            id: userId,
        },
    });
    if (!existingUser) {
        return NextResponse.json(
            { message: "User not found" },
            { status: 404 },
        );
    }

    // if item already exists in cart, update quantity
    const order = await prisma.order.create({
        data: {
            userId: userId,
            amount: amount,
        },
    });
    if (order) {
        await prisma.cart.updateMany({
            where: {
                orderId: null,
            },
            data: {
                orderId: order.id,
            },
        });
    }
    return NextResponse.json({ message: "Order Placed" });
}
