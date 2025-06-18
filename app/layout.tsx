import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { AInutritionist } from "@/components/ai-nutritionist"
import { WhatsAppBot } from "@/components/whatsapp-bot"
import { FoodImageAnalyzer } from "@/components/food-image-analyzer"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Aahara - Personalized Nutrition for Holistic Well-being",
  description:
    "AI-powered meal planning and food delivery platform for personalized nutrition based on health conditions",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <AInutritionist />
          <WhatsAppBot />
          <FoodImageAnalyzer />
        </ThemeProvider>
      </body>
    </html>
  )
}
