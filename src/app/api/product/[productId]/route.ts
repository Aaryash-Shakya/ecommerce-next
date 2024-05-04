import prisma from "@/client";
import { NextRequest, NextResponse } from "next/server";

type ParamsType = {
    params: {
        productId: string;
    };
};

export async function GET(req: NextRequest, { params }: ParamsType) {
    const product = await prisma.product.findUnique({
        where: {
            id: parseInt(params.productId),
        },
    });
    if (!product) {
        return NextResponse.json(
            { error: "Product not found" },
            { status: 404 },
        );
    }
    return NextResponse.json(
        {
            data: product,
            message: "Product fetched successfully",
        },
        { status: 200 },
    );
}
