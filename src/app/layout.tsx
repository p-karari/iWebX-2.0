import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "iWebX - Innovative Web Solutions",
  description: "iWebX Technologies",
};

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
