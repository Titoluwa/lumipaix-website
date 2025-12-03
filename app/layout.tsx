import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

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
      <body className={`${inter.className} font-sans antialiased`}>
        <main className="min-h-screen bg-background">
          <Navigation/>
          {children}
          <Footer/>
        </main>
        <Analytics />
      </body>
    </html>
  )
}
