import { formatPrice } from "@/lib/formatPrice";

export async function sendTelegramMessage(message: string) {
  const chatId = process.env.TELEGRAM_CHAT_ID;
  const botToken = process.env.TELEGRAM_BOT_TOKEN;

  if (!chatId || !botToken) {
    throw new Error("Telegram environment variables are missing.");
  }

  const response = await fetch(
    `https://api.telegram.org/bot${botToken}/sendMessage`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: "HTML",
      }),
    },
  );

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Failed to send message: ${errorText}`);
  }
  return response.json();
}

function formatWhatsAppNumber(phone: string) {
  const digits = phone.replace(/\D/g, "");

  if (digits.startsWith("234")) {
    return digits;
  }

  if (digits.startsWith("0")) {
    return `234${digits.slice(1)}`;
  }

  return `234${digits}`;
}

type TelegramCustomer = {
  name: string;
  phone: string;
  email?: string | null;
  address: string;
  note?: string | null;
};

type TelegramOrderItem = {
  name: string;
  quantity: number;
  price: number;
};

type TelegramOrder = {
  items: TelegramOrderItem[];
  subtotal: number;
};

export async function sendOrderNotification(
  customer: TelegramCustomer,
  order: TelegramOrder,
) {
  const whatsappLink = `https://wa.me/${formatWhatsAppNumber(customer.phone)}`;

  const items = order.items
    .map(
      (item: TelegramOrderItem) =>
        `• ${item.name} x ${item.quantity} — ${formatPrice(item.price * item.quantity)}`,
    )
    .join("\n");

  console.log(items);
  const message = `
🛍️ <b>NEW PRODUCT ORDER</b>
━━━━━━━━━━━━━━━━━━

👤 <b>Customer</b>
${customer.name}

📞 <b>Phone</b>
${customer.phone}

📧 <b>Email</b>
${customer.email || "Not Provided"}

━━━━━━━━━━━━━━━━━━

📦 <b>Items Ordered</b>

${items}

━━━━━━━━━━━━━━━━━━

🏠 <b>Delivery Address</b>

${customer.address}

━━━━━━━━━━━━━━━━━━

📝 <b>Order Notes</b>

${customer.note || "None"}

━━━━━━━━━━━━━━━━━━

💰 <b>Total</b>

${formatPrice(order.subtotal)}

━━━━━━━━━━━━━━━━━━

💬 <b>Chat with Customer</b>

${whatsappLink}
`;

  await sendTelegramMessage(message);
}
