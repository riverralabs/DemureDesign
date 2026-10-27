import type { Metadata, Viewport } from "next";
import { Outfit } from "next/font/google";
import { SiteChrome } from "@/components/SiteChrome";
import { HOME_URL, SITE_URL } from "@/lib/shop";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Demure Design · Wedding menu printables",
    template: "%s · Demure Design",
  },
  description:
    "Wedding menus, undated planners, and kids printables. Instant download on Etsy and Gumroad.",
  alternates: {
    canonical: HOME_URL,
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
    title: "Wedding menus, planners, and kids printables",
    description:
      "Wedding menus, undated planners, and kids printables from Demure Design. Download instantly. Print at home.",
    url: HOME_URL,
    siteName: "Demure Design",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wedding menus, planners, and kids printables",
    description:
      "Wedding menus, undated planners, and kids printables from Demure Design. Download instantly. Print at home.",
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
