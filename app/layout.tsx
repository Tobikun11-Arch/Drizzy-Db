
import { Inter } from "next/font/google";
import "./globals.css";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Drizyy Movie",
  description: "Generated by create next app",
  icons: "https://cdn-icons-png.flaticon.com/512/1137/1137143.png",
};

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
