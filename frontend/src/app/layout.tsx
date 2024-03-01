import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import StyledJsxRegistry from './registry';

import './globals.css';
import 'react-toastify/dist/ReactToastify.css';
import ToastProvider from '@/components/Providers/ToastProvider';
import ReduxProvider from '@/components/Providers/ReduxProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Homepage - Blog',
  description: 'Homepage of Blog',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <ReduxProvider>
          <StyledJsxRegistry>
            <ToastProvider>{children}</ToastProvider>
          </StyledJsxRegistry>
        </ReduxProvider>
      </body>
    </html>
  );
}
