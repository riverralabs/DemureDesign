import type { Metadata, Viewport } from "next";
import { Outfit } from "next/font/google";
import { SiteChrome } from "@/components/SiteChrome";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://demure.design"),
  title: {
    default: "Demure Design",
    template: "%s · Demure Design",
  },
  description:
    "Printables for quiet time, planning, and little hands. Instant download, nothing ships.",
  alternates: {
    canonical: "https://demure.design",
  },
  openGraph: {
    title: "Demure Design",
    description:
      "Printables for quiet time, planning, and little hands. Instant download, nothing ships.",
    url: "https://demure.design",
    siteName: "Demure Design",
    locale: "en_US",
    type: "website",
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
    <html lang="en-US" className={outfit.variable}>
      <body>
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
