import localFont from "next/font/local";
import "./globals.css";
import SiteHeader from "@/components/navigation/header/site-header";

const robotoFont = localFont({
  src: "../fonts/Roboto-VariableFont_wdth,wght.ttf",
  variable: "--font-roboto",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${robotoFont.className} antialiased bg-background`}>
        <SiteHeader />
        <div className="mt-16">{children}</div>
      </body>
    </html>
  );
}
