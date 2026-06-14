import { appConfig } from "@/data/config"

// Escape MarkdownV2 characters
function escapeMarkdown(str: string): string {
  return String(str).replace(/([_*\[\]()~`>#+=|{}.!\\-])/g, "\\$1")
}

export async function sendTelegramNotification(
  userId: number,
  invoiceDate: string,
  price: number,
  planName: string,
  email: string,
) {
  try {
    if (!appConfig?.telegram?.botToken || !appConfig?.telegram?.ownerId) {
      console.error("Telegram config missing")
      return { success: false, error: "Missing telegram config" }
    }

    // Mask email
    const maskedEmail = maskEmail(email)

    // Format message
    const message =
      `🔔 *New Panel Created*\n\n` +
      `👤 *User ID:* \`${escapeMarkdown(String(userId))}\`\n` +
      `📅 *Invoice Date:* ${escapeMarkdown(formatDate(invoiceDate))}\n` +
      `💰 *Price:* ${escapeMarkdown(formatRupiah(price))}\n` +
      `📦 *Plan:* ${escapeMarkdown(planName)}\n` +
      `📧 *Email:* ${escapeMarkdown(maskedEmail)}`

    const response = await fetch(
      `https://api.telegram.org/bot${appConfig.telegram.botToken}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: appConfig.telegram.ownerId,
          text: message,
          parse_mode: "MarkdownV2",
        }),
      }
    )

    const data = await response.json()

    if (!data.ok) {
      console.error("Telegram API error:", data)
      throw new Error(data.description)
    }

    return { success: true }
  } catch (error) {
    console.error("Error sending Telegram notification:", error)
    return { success: false, error }
  }
}

// Mask email for privacy
function maskEmail(email: string): string {
  const [username, domain] = email.split("@")

  if (!domain) return email

  if (username.length <= 3) {
    return `${username}***@${domain}`
  }

  const visiblePart = username.substring(0, Math.ceil(username.length / 2))
  const maskedPart = "***"

  return `${visiblePart}${maskedPart}@${domain}`
}

// Format date
function formatDate(dateString: string): string {
  const date = new Date(dateString)

  return date.toLocaleString("id-ID", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  })
}

// Format rupiah
function formatRupiah(amount: number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount)
}
