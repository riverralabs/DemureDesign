import type { Metadata, Viewport } from "next";
import { Lora, Poppins } from "next/font/google";
import { SiteChrome } from "@/components/SiteChrome";
import "./globals.css";

const lora = Lora({
  subsets: ["latin"],
  weight: "600",
  variable: "--font-lora",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://demure.design"),
  title: {
    default: "Demure Design",
    template: "%s · Demure Design",
  },
  description:
    "Printables for quiet time and planning. Instant download, nothing ships.",
  alternates: {
    canonical: "https://demure.design",
  },
  openGraph: {
    title: "Demure Design",
    description:
      "Printables for quiet time and planning. Instant download, nothing ships.",
    url: "https://demure.design",
    siteName: "Demure Design",
    locale: "en_US",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f6f1e8",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-US" className={`${lora.variable} ${poppins.variable}`}>
      <body>
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
