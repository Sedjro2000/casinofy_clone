import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import SideNav from "@/components/ui/sidenav";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'The Casinofy Game ',
  description: 'Play the Great Casinofy and Earn',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <SideNav />
        {children}
      
      </body>
    </html>
  )
}
