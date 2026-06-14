import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { appConfig } from "@/data/config"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: `${appConfig.nameHost}`,
  description:
    "Penyedia panel Pterodactyl terbaik — murah, cepat aktif, cocok untuk developer & reseller.",
  keywords: [
    "pterodactyl panel",
    "beli panel murah",
    "pteroku",
    "panel hosting",
    "panel pterodactyl terbaik",
    "reseller panel",
  ],
  openGraph: {
    title: `${appConfig.nameHost}`,
    description:
      "Penyedia panel Pterodactyl terbaik — murah, cepat aktif, cocok untuk developer & reseller.",
    url: `${appConfig.siteLink}`,
    siteName: `${appConfig.nameHost}`,
    images: [
      {
        url: `${appConfig.siteLink}/thumbnail.jpg`,
        width: 1200,
        height: 630,
        alt: "thumbnail",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${appConfig.nameHost}`,
    description:
      "Panel Pterodactyl murah, cepat aktif, cocok untuk dev & reseller.",
    images: [`${appConfig.siteLink}/thumbnail.jpg`],
  },
  icons: {
    icon: "/favicon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <head>
        {/* FontAwesome */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        />

        {/* Favicon */}
        <link rel="icon" href="/favicon.png" type="image/png" />
      </head>
      <body className={poppins.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
