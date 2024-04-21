import type { Metadata } from "next";
import { openSans, urbanist } from "@/lib/font";
import { NextIntlClientProvider, useMessages } from "next-intl";
import "./globals.css";

export const metadata: Metadata = {
  title: "Navegando com Profundidade pelas Marés Informativas | NewsTech",
  description: "Navegue por artigos aprofundados, atualizações em tempo real e recursos exclusivos que o manterão informado e inspirado.",
};

export default function LocaleLayout({
  children,
  params: {locale}
}: Readonly<{
  children: React.ReactNode;
  params: {locale: string};
}>) {

  const messages = useMessages();

  return (
    <html lang={locale}>
      <body className={`${urbanist.className} ${openSans.variable} antialiased`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
