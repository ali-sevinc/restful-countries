import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Search from "@/components/Search";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Countries of the World",
  description: "Countries list by RESTful api",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col gap-8 `}>
        <Header />
        <Search />
        <Suspense>{children}</Suspense>
      </body>
    </html>
  );
}
