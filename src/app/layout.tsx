import localFont from "next/font/local";
import "./globals.css";

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
      <body className={`${robotoFont.className} antialiased`}>{children}</body>
    </html>
  );
}
