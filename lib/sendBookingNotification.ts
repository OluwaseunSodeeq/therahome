import { sendTelegramMessage } from "./telegram";
import { BookingFormData } from "./validations/bookingSchema";

function formatWhatsAppNumber(phone: string): string {
  const cleaned = phone.replace(/\D/g, "");

  let formatted = cleaned;

  if (formatted.startsWith("0")) {
    formatted = `234${formatted.slice(1)}`;
  } else if (!formatted.startsWith("234")) {
    formatted = `234${formatted}`;
  }

  // Nigerian mobile number should be exactly 13 digits (234 + 10 digits)
  if (!/^234\d{10}$/.test(formatted)) {
    throw new Error("Invalid Nigerian phone number.");
  }

  return formatted;
}

export async function sendTelegramNotification(data: BookingFormData) {
  const whatsappLink = `https://wa.me/${formatWhatsAppNumber(data.phone ?? "")}`;

  const message = `
    🔔 <b>NEW MASSAGE BOOKING</b>

━━━━━━━━━━━━━━━━━━

👤 <b>Customer</b>
${data.name}

📞 <b>Phone</b>
${data.phone}

📧 <b>Email</b>
${data.email}

💆 <b>Service</b>
${data.service}

📍 <b>Location</b>
${data.location}

🏠 <b>Address</b>
${data.address}

📅 <b>Date</b>
${data.date}

🕙 <b>Time</b>
${data.time}

📝 <b>Note</b>
${data.note || "Nil"}

━━━━━━━━━━━━━━━━━━
💬 <b>Open WhatsApp</b>
${whatsappLink}

⚡ <b>Please contact the customer within 5 minutes.</b>
`;
  await sendTelegramMessage(message);
}
