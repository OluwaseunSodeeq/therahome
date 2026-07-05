import { NextResponse } from "next/server";
import { sendOrderNotification } from "@/lib/telegram";
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { customer, order } = body;
    await sendOrderNotification(customer, order);
    return NextResponse.json(
      {
        success: true,
      },
      { status: 201 },
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        error: "Failed to create order",
      },
      { status: 500 },
    );
  }
}
