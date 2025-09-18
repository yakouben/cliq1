import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ 
  subsets: ['latin'],
  weights: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial']
});

export const metadata: Metadata = {
  metadataBase: new URL('https://cliqevents.com'),
  title: 'Cliq - Agence Marketing Digital Premium en Algérie | Marketing d\'Influence & Communication',
  description: 'Agence 360° spécialisée en marketing d\'influence, communication digitale, développement web, branding et événementiel premium en Algérie. Transformez vos idées en succès digitaux.',
  keywords: 'marketing digital Algérie, marketing influence, agence communication, développement web, branding, événementiel, social media management, stratégie digitale, Algérie',
  authors: [{ name: 'Cliq Events', url: 'https://cliqevents.com' }],
  creator: 'Cliq Events',
  publisher: 'Cliq Events',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://cliqevents.com',
  },
  openGraph: {
    title: 'Cliq - Agence Marketing Digital Premium en Algérie',
    description: 'Agence 360° spécialisée en marketing d\'influence, communication digitale, développement web, branding et événementiel premium en Algérie.',
    type: 'website',
    locale: 'fr_FR',
    siteName: 'Cliq Events',
    url: 'https://cliqevents.com',
    images: [
      {
        url: '/cliq-logo-bg.jpeg',
        width: 1200,
        height: 630,
        alt: 'Cliq - Agence Marketing Digital Premium',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cliq - Agence Marketing Digital Premium en Algérie',
    description: 'Agence 360° spécialisée en marketing d\'influence, communication digitale, développement web, branding et événementiel premium en Algérie.',
    images: ['/cliq-logo-bg.jpeg'],
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <link rel="icon" href="/logo-without-bg.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo-without-bg.png" />
        <meta name="theme-color" content="#6a0dad" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Cliq Events",
              "description": "Agence 360° spécialisée en marketing d'influence, communication digitale, développement web, branding et événementiel premium en Algérie.",
              "url": "https://cliqevents.com",
              "logo": "https://cliqevents.com/logo-without-bg.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+213-540-017-730",
                "contactType": "customer service",
                "email": "cliqevents3@gmail.com",
                "areaServed": "DZ",
                "availableLanguage": ["French", "Arabic", "English"]
              },
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Alger",
                "addressCountry": "DZ"
              },
              "sameAs": [
                "https://facebook.com/cliqevents",
                "https://instagram.com/cliqevents",
                "https://linkedin.com/company/cliqevents",
                "https://twitter.com/cliqevents"
              ],
              "service": [
                {
                  "@type": "Service",
                  "name": "Marketing d'influence",
                  "description": "Stratégies de marketing d'influence pour augmenter votre visibilité"
                },
                {
                  "@type": "Service", 
                  "name": "Développement Web",
                  "description": "Création de sites web et applications digitales"
                },
                {
                  "@type": "Service",
                  "name": "Communication Digitale",
                  "description": "Stratégies de communication digitale et branding"
                }
              ]
            })
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}