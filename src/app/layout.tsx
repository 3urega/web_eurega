import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "eurega | Soluciones Digitales a Medida",
  description: "Desarrollo web y aplicaciones que transforman ideas en productos digitales exitosos, con enfoque en resultados medibles para tu negocio.",
  keywords: ["desarrollo web", "aplicaciones", "programación", "freelance", "soluciones digitales"],
  authors: [{ name: "eurega" }],
  creator: "eurega",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
