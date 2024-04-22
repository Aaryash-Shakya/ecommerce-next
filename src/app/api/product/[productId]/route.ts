import prisma from "@/client";
import { NextRequest, NextResponse } from "next/server";

type ParamsType = {
	params: {
		productId: string;
	};
};

export async function GET(req: NextRequest, { params }: ParamsType) {
	return NextResponse.json({
		data: await prisma.product.findUnique({
			where: {
				id: parseInt(params.productId),
			},
		}),
	});
}
