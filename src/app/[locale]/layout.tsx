import localFont from "next/font/local";
import "./globals.css";
import SiteHeader from "@/components/navigation/header/site-header";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { setRequestLocale } from "next-intl/server";

const robotoFont = localFont({
  src: "../../fonts/Roboto-VariableFont_wdth,wght.ttf",
  variable: "--font-roboto",
});

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html lang={locale}>
      <body className={`${robotoFont.className} antialiased bg-background`}>
        <NextIntlClientProvider>
          <SiteHeader />
          <div className="mt-16">{children}</div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
