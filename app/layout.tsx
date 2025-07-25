import type React from "react"
import type { Metadata } from "next"
import { JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { ScrollToTop } from "@/components/scroll-to-top"
import QueryProvider from "@/components/query-provider"

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
})

export const metadata: Metadata = {
  title: "CyberTip Malawi - Report Security Issues. Protect Malawi's Web.",
  description:
    "A secure platform where local developers and ethical hackers can safely report security flaws in banks, telecoms, schools, and government systems.",
  generator: "v0.dev",
  icons: {
    icon: "/logo.svg",
  },
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${jetbrainsMono.variable} font-mono`}>
        <QueryProvider>                                       
          {children}
          <ScrollToTop />
        </QueryProvider>
      </body>
    </html>
  )
}
