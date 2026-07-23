import type { Metadata } from "next";
import { Archivo, Inter } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://foodtalk.in"),
  title: {
    default: "Food Talk India — We Eat. We Drink. We Talk.",
    template: "%s · Food Talk India",
  },
  description:
    "India's go-to for food, cocktails and culture with flavour. A digital media house born out of a simple love for food, drinks and all the conversations that follow around it.",
  keywords: [
    "Food Talk India",
    "food media",
    "restaurant reviews",
    "cocktails",
    "food culture",
    "India dining",
  ],
  openGraph: {
    title: "Food Talk India — We Eat. We Drink. We Talk.",
    description:
      "India's go-to for food, cocktails and culture with flavour.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg text-fg">{children}</body>
    </html>
  );
}
