import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { sendOrderNotification } from "@/lib/telegram";
import { customerOrderSchema } from "@/lib/validations/orderSchema";
import {
  OrderItem,
  orderPayloadSchema,
} from "@/lib/validations/orderPayloadSchema";
import { ZodError } from "zod";
import { Prisma } from "@prisma/client";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Validate customer
    const customer = customerOrderSchema.parse(body.customer);

    // Validate order
    const order = orderPayloadSchema.parse(body.order);

    if (order.items.length === 0) {
      return NextResponse.json(
        {
          success: false,
          error: "Your cart is empty.",
        },
        {
          status: 400,
        },
      );
    }

    console.log("Creating Order...");
    console.dir(
      {
        customer: customer.name,
        phone: customer.phone,
        email: customer.email,
        address: customer.address,
        total: order.subtotal,
      },
      { depth: null },
    );

    /**
     * ------------------------------------------
     * Create Order
     * ------------------------------------------
     */

    const createdOrder = await prisma.order.create({
      data: {
        customer: customer.name,
        phone: customer.phone,
        email: customer.email || null,
        address: customer.address,
        note: customer.note || null,
        total: order.subtotal,
      },
    });

    console.log("Order created:", createdOrder.id);

    /**
     * ------------------------------------------
     * Save Order Items
     * ------------------------------------------
     */

    await prisma.orderItem.createMany({
      data: order.items.map((item: OrderItem) => ({
        orderId: createdOrder.id,
        name: item.name,
        quantity: item.quantity,
        price: item.price,
        image: item.image || null,
      })),
    });

    console.log(`${order.items.length} order item(s) saved.`);

    /**
     * ------------------------------------------
     * Telegram Notification
     * ------------------------------------------
     */

    try {
      await sendOrderNotification(customer, order);

      console.log("Telegram notification sent.");
    } catch (telegramError) {
      console.error(
        `Telegram notification failed for order ${createdOrder.id}:`,
        telegramError,
      );

      // Do NOT fail the order if Telegram is unavailable
    }

    /**
     * ------------------------------------------
     * Success Response
     * ------------------------------------------
     */

    return NextResponse.json(
      {
        success: true,
        orderId: createdOrder.id,
        message: `Your order has been received successfully.
          We'll contact you shortly.`,
      },
      {
        status: 201,
      },
    );
  } catch (error) {
    console.error("ORDER API ERROR:", error);

    // Zod validation error
    if (error instanceof ZodError) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid order details.",
          issues: error.flatten(),
        },
        {
          status: 400,
        },
      );
    }

    // Prisma errors
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      switch (error.code) {
        case "P1001":
          return NextResponse.json(
            {
              success: false,
              error:
                "We're having trouble connecting to our server. Please try again in a few seconds.",
            },
            {
              status: 503,
            },
          );

        case "P2002":
          return NextResponse.json(
            {
              success: false,
              error: "A duplicate record was detected.",
            },
            {
              status: 409,
            },
          );

        default:
          return NextResponse.json(
            {
              success: false,
              error: `Database error (${error.code}).`,
            },
            {
              status: 500,
            },
          );
      }
    }

    // Any other unexpected error
    return NextResponse.json(
      {
        success: false,
        error:
          error instanceof Error
            ? error.message
            : "Something went wrong while creating the order.",
      },
      {
        status: 500,
      },
    );
  }

  // } catch (error) {
  //   console.error("ORDER API ERROR:", error);

  //   if (error instanceof ZodError) {
  //     return NextResponse.json(
  //       {
  //         success: false,
  //         error: "Invalid order details.",
  //         issues: error.flatten(),
  //       },
  //       {
  //         status: 400,
  //       },
  //     );
  //   }

  //   return NextResponse.json(
  //     {
  //       success: false,
  //       error:
  //         error instanceof Error
  //           ? error.message
  //           : "Something went wrong while creating the order.",
  //     },
  //     {
  //       status: 500,
  //     },
  //   );
  // }
}

// import { NextResponse } from "next/server";
// import { prisma } from "@/lib/prisma";
// import { sendOrderNotification } from "@/lib/telegram";
// import { customerOrderSchema } from "@/lib/validations/orderSchema";
// import {
//   OrderItem,
//   orderPayloadSchema,
// } from "@/lib/validations/orderPayloadSchema";
// import { ZodError } from "zod";

// export async function POST(req: Request) {
//   try {
//     const body = await req.json();

//     // Validate customer data
//     const customer = customerOrderSchema.parse(body.customer);

//     // Validate order data
//     const order = orderPayloadSchema.parse(body.order);

//     if (!order?.items?.length) {
//       return NextResponse.json(
//         {
//           success: false,
//           error: "Your cart is empty.",
//         },
//         { status: 400 },
//       );
//     }
//     console.log("ORDER TO SAVE");
//     console.dir(
//       {
//         customer: customer.name,
//         phone: customer.phone,
//         email: customer.email,
//         address: customer.address,
//         note: customer.note,
//         total: order.subtotal,
//       },
//       { depth: null },
//     );
//     // Save order and items in one transaction
//     const createdOrder = await prisma.$transaction(async (tx) => {
//       const newOrder = await tx.order.create({
//         data: {
//           customer: customer.name,
//           phone: customer.phone,
//           email: customer.email || null,
//           address: customer.address,
//           note: customer.note || null,
//           total: order.subtotal,
//         },
//       });

//       await tx.orderItem.createMany({
//         data: order.items.map((item) => ({
//           orderId: newOrder.id,
//           name: item.name,
//           quantity: item.quantity,
//           price: item.price,
//           image: item.image,
//         })),
//       });

//       return newOrder;
//     });

//     // Telegram notification (don't fail the order if Telegram is unavailable)
//     try {
//       // Adapt order items to match TelegramOrder types (price as string)
//       const telegramOrder = {
//         ...order,
//         items: order.items.map((item: OrderItem) => ({
//           ...item,
//           price: item.price,
//         })),
//       };

//       await sendOrderNotification(customer, telegramOrder);
//     } catch (telegramError) {
//       console.error(
//         `Telegram notification failed for order ${createdOrder.id}:`,
//         telegramError,
//       );
//     }

//     return NextResponse.json(
//       {
//         success: true,
//         message:
//           "Your order has been received successfully. We'll contact you shortly.",
//         orderId: createdOrder.id,
//       },
//       { status: 201 },
//     );
//   } catch (error: unknown) {
//     console.error("ORDER API ERROR:", error);

//     if (error instanceof ZodError) {
//       return NextResponse.json(
//         {
//           success: false,
//           error: "Invalid order details.",
//           issues: error.flatten(),
//         },
//         { status: 400 },
//       );
//     }

//     return NextResponse.json(
//       {
//         success: false,
//         error: "Something went wrong while creating the order.",
//       },
//       { status: 500 },
//     );
//   }
// }
