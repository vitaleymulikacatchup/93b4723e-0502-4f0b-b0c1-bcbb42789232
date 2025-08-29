import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import type { Metadata } from "next";
import { Inter_Tight, Montserrat } from "next/font/google";
import "./globals.css";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "NebulaLens Photography",
  description: "Showcase futuristic photography portfolio and capture inquiries; provide pricing/licensing info in a simple lightbox; provide booking process"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <SiteThemeProvider theme={{ styleVariant: 'futuristicAndOutOfBox', colorTemplate: 2, textAnimation: 'slide' }}>
        <body className={`${interTight.variable} ${montserrat.variable} antialiased`}>
          {children}
        </body>
      </SiteThemeProvider>
    </html>
  );
}