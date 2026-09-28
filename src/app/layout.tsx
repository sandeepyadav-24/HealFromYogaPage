import type { Metadata } from "next";
import { Fraunces, Nunito_Sans } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "HealFromYoga — Live PCOS Yoga with Certified Instructors",
  description:
    "Live, guided yoga for PCOS with certified instructors. Safe, structured 12-week programs built around your body. Book a free intro call.",
  metadataBase: new URL("https://healfromyoga.com"),
  openGraph: {
    title: "HealFromYoga — Live PCOS Yoga with Certified Instructors",
    description:
      "Live, guided yoga for PCOS with certified instructors. Safe, structured 12-week programs built around your body. Book a free intro call.",
    url: "https://healfromyoga.com",
    siteName: "HealFromYoga",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${nunitoSans.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans text-charcoal bg-background">
        {children}
      </body>
    </html>
  );
}
