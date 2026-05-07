import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1a1a1a",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.theshakyrazorbarbershop.com"),
  title: "The Shaky Razor Barbershop | Est. 2017 | San Ramon, CA",
  description:
    "The Shaky Razor Barbershop in San Ramon, CA. Precision haircuts, clean fades, and straight razor shaves. Appointments only. Cash only with ATM onsite. Book online through Vagaro.",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "The Shaky Razor Barbershop | San Ramon, CA",
    description:
      "Precision haircuts, clean fades, and straight razor shaves. Appointments only. Book online through Vagaro.",
    url: "https://www.theshakyrazorbarbershop.com",
    siteName: "The Shaky Razor Barbershop",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 1200,
        alt: "The Shaky Razor Barbershop logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Shaky Razor Barbershop | San Ramon, CA",
    description:
      "Precision haircuts, clean fades, and straight razor shaves. Book online through Vagaro.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&family=Cinzel:wght@400;600;700&family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
