import prisma from "@/client";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    // const formData = await req.formData();
    // const userId = parseInt(formData.get("userId") as string);
    // const productId = parseInt(formData.get("productId") as string);
    const resJson = await req.json();
    const userId = resJson.userId;
    const productId = resJson.productId;


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

    const deletedItem = await prisma.cart.deleteMany({
        where: { userId: userId, productId: productId },
    });
    if (deletedItem.count === 0) {
        return NextResponse.json(
            {
                message: "Item not found in cart",
            },
            { status: 404 },
        );
    }
    return NextResponse.json(
        { message: "Item removed from cart" },
        { status: 200 },
    );
}
