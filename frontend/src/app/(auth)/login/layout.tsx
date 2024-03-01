import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Login - Blog',
  description: 'Login of Blog',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
