import type { Metadata } from "next";
import { openSans, urbanist } from "@/lib/font";
import "./globals.css";

export const metadata: Metadata = {
  title: "Navegando com Profundidade pelas Marés Informativas | NewsTech",
  description: "Navegue por artigos aprofundados, atualizações em tempo real e recursos exclusivos que o manterão informado e inspirado.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${urbanist.className} ${openSans.variable} select-none antialiased`}>{children}</body>
    </html>
  );
}
