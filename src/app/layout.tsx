import type { Metadata } from "next";
import "./globals.css";


// import { Metadata } from 'next';

// This object tells Next.js exactly what to put in the <head>
export const metadata: Metadata = {
  title: 'Iwebx digital solutions | home page', 
  verification: {
    other: {
      'trustpilot-one-time-domain-verification-id': '00ce61c7-ccfd-49f0-b786-cf23f1849bd4',
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        {children}
      </body>
    </html>
  );
}
