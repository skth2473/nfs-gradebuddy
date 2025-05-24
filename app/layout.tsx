import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "NFS - Notes for Study | Your Academic Success Partner",
  description: "Complete study platform with notes, courses, and grade calculation tools",
  generator: "NFS Platform",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
