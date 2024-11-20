// Utilities
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Providers } from 'lib/providers.tsx';

// Style
import './globals.scss'
import 'bootstrap/dist/css/bootstrap.min.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Zigvy - ThanhDuy',
  description: 'Zigvy Technical Assignment Interview',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Providers>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </Providers>
  )
}
