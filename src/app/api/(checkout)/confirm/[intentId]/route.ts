import { prisma } from "@/utils/connect";
import { NextRequest, NextResponse } from "next/server";

export const PUT = async (
  req: NextRequest,
  { params }: { params: { intentId: string } }
) => {
  const { intentId } = params;
console.log(intentId)
  try {
    await prisma.order.update({
      where: {
        intent_id: intentId,
      },
      data: { status: 'Being Prepared' },
    });
    return new NextResponse(
      JSON.stringify({ message: "Order has been updated!" }),
      { status: 200 }
    );
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: `Payment Intent with ID ${intentId} is not found!` }),
      { status: 500 }
    );
  }
};