import prisma from "@/client";
import {  NextResponse } from "next/server";

export async function POST(req: Request) {
    // const formData = await req.formData();
    // const userId = parseInt(formData.get("userId") as string);
    // const productId = parseInt(formData.get("productId") as string);
    // const quantity = parseInt(formData.get("quantity") as string);
    const reqJson = await req.json();
    const userId = reqJson.userId;
    const productId = reqJson.productId;
    const quantity = reqJson.quantity;

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
    const existingItem = await prisma.cart.findFirst({
        where: {
            userId: userId,
            productId: productId,
            orderId: null,
        },
    });
    if (existingItem) {
        await prisma.cart.update({
            where: {
                id: existingItem.id,
                orderId: null,
            },
            data: {
                quantity: quantity,
            },
        });
    } else {
        await prisma.cart.create({
            data: {
                userId: userId,
                productId: productId,
                quantity: quantity,
            },
        });
    }
    return NextResponse.json({ message: "Item added to cart" });
}
