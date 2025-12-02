import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "LumiPaix Global Inc - Turnkey Solutions",
  description:
    "Professional turnkey solutions for AI, Training, Office Automation, Financial Services, and Procurement. Transform your business with innovative solutions.",
  keywords: "AI solutions, training services, office automation, financial services, procurement, business solutions",
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  openGraph: {
    title: "LumiPaix Global Inc - Turnkey Solutions",
    description: "Professional turnkey solutions for your business transformation",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
