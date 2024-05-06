import prisma from "@/client";
import { NextResponse } from "next/server";

export async function GET() {
	// await new Promise((resolve) => setTimeout(resolve, 2000));
	return NextResponse.json({
		data: await prisma.product.findMany(),
	},{status: 200});
}
