import DefaultLayout from '@/components/layout/DefaultLayout'
import { Inter } from 'next/font/google'
import './globals.css'
import StoreProvider from './StoreProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Posts Application',
    description: 'A simple web application that displays a list of posts',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <StoreProvider>
                    <DefaultLayout>
                        {children}
                    </DefaultLayout>
                </StoreProvider>
            </body>
        </html>
    )
}
