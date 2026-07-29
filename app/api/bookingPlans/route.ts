import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { sendPlanNotification } from "@/lib/sendBookingNotification";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const bookingPlan = await prisma.bookingPlan.create({
      data: {
        name: body.name,
        phone: body.phone,
        plan: body.plan,
        location: body.location,
        address: body.address,
        note: body.note || "",
      },
    });

    try {
      await sendPlanNotification(bookingPlan);
    } catch (error) {
      console.error("Error sending Telegram notification:", error);
    }
    return NextResponse.json(
      {
        success: true,
        bookingPlan,
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("BOOKING PLAN ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Something went wrong",
      },
      { status: 500 },
    );
  }
}
