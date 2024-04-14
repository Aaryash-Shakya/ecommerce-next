import prisma from "@/client";
import { NextResponse } from "next/server";

export async function GET() {
	return NextResponse.json({
		data: await prisma.product.findMany(),
	});
}
