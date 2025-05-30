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

export default async function LocaleLayout({
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
      <body
        className={`${robotoFont.className} antialiased bg-background-dark`}
      >
        <NextIntlClientProvider>
          <SiteHeader />
          <div className="mt-16 h-[3000px]">{children}</div>
        </NextIntlClientProvider>
        <script
          defer
          src="https://unpkg.com/tailwindcss-intersect@2.x.x/dist/observer.min.js"
        ></script>
      </body>
    </html>
  );
}
