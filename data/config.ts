export const pterodactylConfig = {
  domain: "https://jeeystore.pterokudesu.web.id",
  apiKey: "ptla_MgBjTdVVbjPgItRB5g2V7mAPykIWdnKh3UF3BByyup4",
  nests: "1",
  nestsGame: "2", // ga ubah di isi, ga perlu
  egg: "16",
  eggSamp: "16", // ga ubah di isi, ga perlu
  location: "1", // location panel 
}

export const appConfig = {
  whatsappGroupLink: "https://chat.whatsapp.com/ExhtQBtiE4n5G0xZCYYFf3", // link group
  nameHost: "Jeeyhosting", // nama host 
  siteLink: "https://jeeyhosting.my.id", // domain web nya
  feeMin: 50, //minimal fee
  feeMax: 300, // max fee 
  pay: {
    api_id: "645994a4b200", // Api id Topupku
    api_key: "d30d9ca957efc4c8081e1013b70ce8c7dcc2a74c", // Apikey Topupku
    bank: "DA", // bisa kamu ganti ke "DA", "OVO", dll
  },
  emailSender: {
    host: "smtp.gmail.com", // Gmail host
    port: 587, // ga usa di ubah, ga guna 
    secure: false, // false in
    auth: {
      user: "wbot0232@gmail.com", // Gmail buat ngirim ke Gmail buyer 
      pass: "qdoc bqdb ktse llig", // sandi aplikasi 
    },
    from: "Kurir Panel <wbot0232@gmail.com>",
  }, // Smtp email untuk mengirim data
  telegram: {
    botToken: "8663841225:AAFxKo0RQ0_MtVBmZmcLRcWIo4F1L07p4bg", // Token bot father 
    ownerId: "7804463533", // Id telegram mu
  },
  mongodb: {
       uri: "mongodb+srv://ruangotp38_db_user:nYUcrL06sUPVzzmm@cluster0.enoy9w4.mongodb.net/?appName=Cluster0", // url mongo mu
    dbName: "Jeeyhosting",
  },
  socialMedia: {
    whatsapp: "https://wa.me/6283122028438",
    tiktok: "https://tiktok.com/@bangjeey_dev",
    instagram: "https://www.intagram.com/bangjeey_dev"
  }
}
