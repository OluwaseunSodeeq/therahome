import { sendTelegramMessage } from "@/lib/telegram";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await sendTelegramMessage(
      "🎉 Telegram Bot is successfully connected to TheraHome!",
    );
    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error("Error sending Telegram message:", error);
    return NextResponse.json(
      {
        success: false,
      },
      {
        status: 500,
      },
    );
  }
}
