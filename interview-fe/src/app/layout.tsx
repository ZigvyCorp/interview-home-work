'use client'
import "./globals.css";
import { AuthConsumer, AuthProvider } from "@/contexts/auth/jwt-context";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en">
      <body >
        <AuthProvider>
          <AuthConsumer>
            {(auth) => {
              const showSlashScreen = !auth.isInitialized;
              return <>{showSlashScreen ? <></> : <> {children}</>}</>;
            }}
          </AuthConsumer>
        </AuthProvider>
      </body>
    </html>
  );
}
