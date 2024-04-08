import prisma from "@/client";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export async function GET(req: NextApiRequest) {
	const productId = req.query.productId as string; // Ensure productId is of type string
	console.log(productId);

	const product = await prisma.product.findFirst({ where: { id: parseInt(productId) } });

	return NextResponse.json({ product });
}
