import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Shaky Razor Barbershop | Est. 2017 | San Ramon, CA",
  description:
    "The Shaky Razor Barbershop in San Ramon, CA. Precision haircuts, clean fades, and straight razor shaves. Appointments only. Cash only with ATM onsite. Book online through Vagaro.",
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
      <body>{children}</body>
    </html>
  );
}
