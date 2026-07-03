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
