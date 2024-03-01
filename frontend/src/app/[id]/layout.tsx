import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Detail - Blog',
  description: 'Detail of Blog',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
