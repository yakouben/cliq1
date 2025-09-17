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
  title: 'Cliq - Agence Marketing Digital Premium en Algérie',
  description: 'Agence 360° spécialisée en marketing d\'influence, communication, développement web, branding et événementiel premium en Algérie.',
  keywords: 'marketing digital, influence, social media, développement web, agence marketing, Algérie',
  authors: [{ name: 'Cliq' }],
  robots: 'index, follow',
  openGraph: {
    title: 'Cliq - Agence Marketing Digital Premium en Algérie',
    description: 'Agence 360° spécialisée en marketing d\'influence, communication, développement web, branding et événementiel premium en Algérie.',
    type: 'website',
    locale: 'fr_FR',
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
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}