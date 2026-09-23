import type { Metadata, Viewport } from "next";
import { Outfit } from "next/font/google";
import { SiteChrome } from "@/components/SiteChrome";
import { SITE_URL } from "@/lib/shop";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Demure Design · Printables for quiet time and planning",
    template: "%s · Demure Design",
  },
  description:
    "Undated planners and kids printables. Instant download on Etsy and Gumroad.",
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Printables for quiet time and planning",
    description:
      "Undated planners and kids printables from Demure Design. Download instantly. Print at home.",
    url: SITE_URL,
    siteName: "Demure Design",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Printables for quiet time and planning",
    description:
      "Undated planners and kids printables from Demure Design. Download instantly. Print at home.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f7f3ec",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-US" className={outfit.variable} data-scroll-behavior="smooth">
      <body>
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
