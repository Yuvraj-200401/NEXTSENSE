import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import '@/app/globals.css'
import { ThemeProvider } from "@/providers/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "NestSenseAI - Your Compassionate Postpartum Guide",
  description: "Empowering new mothers with personalized care plans, expert guidance, and a supportive community for a healthier postpartum journey.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
    <body className="min-h-screen bg-background text-foreground antialiased">
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </body>
  </html>
  
  );
}
