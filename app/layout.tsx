import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
  fallback: ['system-ui', 'arial']
});

export const metadata: Metadata = {
  metadataBase: new URL('https://cliqevents.com'),
  title: 'Cliq - Agence Marketing Digital Premium en Algérie | Marketing d&apos;Influence & Communication',
  description: 'Agence 360° spécialisée en marketing d&apos;influence, communication digitale, développement web, branding et événementiel premium en Algérie. Transformez vos idées en succès digitaux.',
  keywords: 'marketing digital Algérie, marketing influence, agence communication, développement web, branding, événementiel, social media management, stratégie digitale, Algérie',
  authors: [{ name: 'Cliq Events', url: 'https://cliqevents.com' }],
  creator: 'Cliq Events',
  publisher: 'Cliq Events',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    title: 'Cliq - Agence Marketing Digital Premium en Algérie',
    description: 'Agence 360° spécialisée en marketing d&apos;influence, communication digitale, développement web, branding et événementiel premium en Algérie.',
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
    description: 'Agence 360° spécialisée en marketing d&apos;influence, communication digitale, développement web, branding et événementiel premium en Algérie.',
    images: ['/cliq-logo-bg.jpeg'],
  },
  verification: {
    google: 'your-google-verification-code',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Cliq Events",
              "url": "https://cliqevents.com",
              "logo": "https://cliqevents.com/cliq-logo-bg.jpeg",
              "description": "Agence 360° spécialisée en marketing d&apos;influence, communication digitale, développement web, branding et événementiel premium en Algérie.",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "DZ",
                "addressLocality": "Algérie"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+213-xxx-xxx-xxx",
                "contactType": "customer service"
              },
              "sameAs": [
                "https://facebook.com/cliqevents",
                "https://instagram.com/cliqevents_off",
                "https://linkedin.com/company/cliqevents",
                "https://twitter.com/cliqevents"
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Services Marketing Digital",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Marketing d&apos;influence",
                      "description": "Stratégies de marketing d&apos;influence pour augmenter votre visibilité"
                    }
                  }
                ]
              }
            })
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}