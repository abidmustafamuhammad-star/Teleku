export const pterodactylConfig = {
  domain: process.env.PTERODACTYL_DOMAIN || "https://jeeystore.pterokudesu.web.id",
  apiKey: process.env.PTERODACTYL_API_KEY || "",
  nests: process.env.PTERODACTYL_NESTS || "1",
  nestsGame: "2",
  egg: process.env.PTERODACTYL_EGG || "16",
  eggSamp: "16",
  location: process.env.PTERODACTYL_LOCATION || "1",
}

export const appConfig = {
  whatsappGroupLink: process.env.WHATSAPP_GROUP_LINK || "https://chat.whatsapp.com/ExhtQBtiE4n5G0xZCYYFf3",
  nameHost: process.env.NAME_HOST || "Jeeyhosting",
  siteLink: process.env.SITE_LINK || "teleku.vercel.app",
  feeMin: 50,
  feeMax: 300,
  pay: {
    api_id: process.env.TOPUPKU_API_ID || "",
    api_key: process.env.TOPUPKU_API_KEY || "",
    bank: process.env.TOPUPKU_BANK || "DA",
  },
  emailSender: {
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER || "",
      pass: process.env.EMAIL_PASS || "",
    },
    from: `Kurir Panel <${process.env.EMAIL_USER || ""}>`,
  },
  telegram: {
    botToken: process.env.TELEGRAM_BOT_TOKEN || "",
    ownerId: process.env.TELEGRAM_OWNER_ID || "",
  },
  mongodb: {
    uri: process.env.MONGODB_URI || "",
    dbName: process.env.MONGODB_DB_NAME || "Jeeyhosting",
  },
  socialMedia: {
    whatsapp: process.env.WHATSAPP_URL || "https://wa.me/6283122028438",
    tiktok: process.env.TIKTOK_URL || "https://tiktok.com/@bangjeey_dev",
    instagram: process.env.INSTAGRAM_URL || "https://www.instagram.com/bangjeey_dev",
  }
}
