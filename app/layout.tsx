import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '🎌 Klook 日本特惠偵測器',
  description: '即時追蹤 Klook 日本最新優惠活動',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-TW">
      <body>{children}</body>
    </html>
  )
}
