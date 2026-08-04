import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { sendBookingNotification } from "@/lib/sendBookingNotification";
import { bookingsSchema } from "@/lib/validations/bookingSchema";
import { ZodError } from "zod";
import { allServices } from "@/app/data";

export async function POST(req: Request) {
  try {
    const body = bookingsSchema.parse(await req.json());
    const selectedService = allServices.find(
      (service) => service.name === body.service,
    );

    const price = selectedService?.price ?? 0;

    const booking = await prisma.booking.create({
      data: {
        name: body.name,
        email: body.email,
        phone: body.phone ?? "",
        service: body.service ?? "",
        location: body.location ?? "",
        address: body.address ?? "",
        date: body.date,
        time: body.time,
        note: body.note ?? "",
        price,
      },
    });

    try {
      await sendBookingNotification({
        ...booking,
        price,
      });
    } catch (error) {
      console.error("Error sending Telegram notification:", error);
    }

    return NextResponse.json(
      {
        success: true,
        booking,
      },
      { status: 201 },
    );
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json(
        {
          success: false,
          errors: error.flatten().fieldErrors,
        },
        { status: 400 },
      );
    }

    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Something went wrong",
      },
      { status: 500 },
    );
  }
}
