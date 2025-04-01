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
  title: "Eurega - Soluciones de Inteligencia Artificial a medida",
  description: "Consultora especializada en desarrollo e integración de soluciones de Inteligencia Artificial. Expertos en agentes de IA, chatbots inteligentes y herramientas de web scraping avanzadas.",
  keywords: "inteligencia artificial, IA, desarrollo IA, consultoría IA, agentes IA, chatbots, web scraping, soluciones tecnológicas, automatización, machine learning",
  robots: "index, follow",
  alternates: {
    canonical: "https://eurega.com",
  },
  openGraph: {
    title: "Eurega - Soluciones de Inteligencia Artificial a medida",
    description: "Consultora especializada en desarrollo e integración de soluciones de Inteligencia Artificial. Expertos en agentes de IA, chatbots inteligentes y herramientas de web scraping avanzadas.",
    url: "https://eurega.com",
    siteName: "Eurega",
    images: [
      {
        url: "https://eurega.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Eurega - Soluciones de IA",
      }
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eurega - Soluciones de Inteligencia Artificial a medida",
    description: "Consultora especializada en desarrollo e integración de soluciones de Inteligencia Artificial para empresas.",
    images: ["https://eurega.com/images/twitter-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        {/* Preconectar con orígenes críticos para mejorar la velocidad */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Schema.org para Rich Snippets */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Eurega",
              "url": "https://eurega.com",
              "logo": "https://eurega.com/images/logo.png",
              "description": "Consultora especializada en desarrollo e integración de soluciones de Inteligencia Artificial",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Calle Principal, 123",
                "addressLocality": "Madrid",
                "postalCode": "28001",
                "addressCountry": "ES"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+34 912 345 678",
                "contactType": "customer service",
                "email": "info@eurega.com"
              },
              "sameAs": [
                "https://www.linkedin.com/company/eurega/",
                "https://twitter.com/eurega",
                "https://www.facebook.com/eurega"
              ]
            }
          `}
        </script>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
