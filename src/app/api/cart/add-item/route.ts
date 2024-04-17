import prisma from "@/client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const formData = await req.formData();
    const userId = parseInt(formData.get("userId") as string);
    const productId = parseInt(formData.get("productId") as string);
    const quantity = parseInt(formData.get("quantity") as string);

    // if item already exists in cart, update quantity
    const existingItem = await prisma.cart.findFirst({
        where: {
            userId: userId,
            productId: productId,
        },
    });
    if (existingItem) {
        await prisma.cart.update({
            where: {
                id: existingItem.id,
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
