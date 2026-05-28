import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    console.log("Incoming booking:", body);

    const booking = await prisma.booking.create({
      data: {
        name: body.name,
        email: body.email,
        phone: body.phone,
        service: body.service,
        location: body.location,
        address: body.address,
        date: body.date,
        time: body.time,
        note: body.note || "",
      },
    });

    return NextResponse.json(
      {
        success: true,
        booking,
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("BOOKING API ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Something went wrong",
      },
      { status: 500 },
    );
  }
}

// import { prisma } from "@/lib/prisma";
// import { NextResponse } from "next/server";

// export async function POST(req: Request) {
//   try {
//     const body = await req.json();

//     const booking = await prisma.booking.create({
//       data: body,
//     });

//     return NextResponse.json(booking, { status: 201 });
//   } catch (error) {
//     console.error("Booking API Error:", error);

//     return NextResponse.json(
//       { error: "Failed to create booking" },
//       { status: 500 },
//     );
//   }
// }

// import { bookingsSchema } from "@/lib/validations/bookingSchema";
// import { NextResponse } from "next/server";

// export async function POST(req: Request) {
//   try {
//     const body = await req.json();
//     const validatedData = bookingsSchema.parse(body);
//     console.log(validatedData);

//     return NextResponse.json({
//       success: true,
//       message: "Booking created successfully",
//     });
//   } catch (error) {
//     console.error("Error creating booking:", error);
//     return NextResponse.json(
//       { success: false, message: "Invalid booking data" },
//       { status: 400 },
//     );
//   }
// }
