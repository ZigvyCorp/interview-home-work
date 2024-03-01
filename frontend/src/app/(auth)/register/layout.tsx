import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Register - Blog',
  description: 'Register of Blog',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
