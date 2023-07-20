import Link from 'next/link'
import './globals.css'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'My Movies',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header>
          <Link href="/">My Movie Library</Link>
        </header>
        <main>{children}</main>
      </body>
    </html>
  )
}
