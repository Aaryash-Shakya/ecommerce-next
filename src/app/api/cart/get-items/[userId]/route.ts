import prisma from "@/client";
import { NextRequest, NextResponse } from "next/server";

type ParamsType = {
    params: {
        userId: string;
    };
};

export async function GET(req: NextRequest, { params }: ParamsType) {
    const userId = parseInt(params.userId);
    const cartItems = await prisma.cart.findMany({
        where: {
            userId: userId,
        },
    });

    // if cart is empty
    if (cartItems.length === 0) {
        return NextResponse.json({
            data: cartItems,
            message: "Cart is empty",
        });
    }

    return NextResponse.json({
        data: cartItems,
        message: "Cart items fetched",
    });
}
