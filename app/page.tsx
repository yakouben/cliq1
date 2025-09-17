"use client";

import dynamic from 'next/dynamic';
import Header from '../components/Header';
import Hero from '../components/Hero';

// Lazy load non-critical components
const ClientLogos = dynamic(() => import('../components/ClientLogos'), {
  loading: () => <div className="h-32 bg-gray-100 animate-pulse rounded-lg" />,
  ssr: true
});

const Services = dynamic(() => import('../components/Services'), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse rounded-lg" />,
  ssr: true
});

const QuiSommesNous = dynamic(() => import('../components/QuiSommesNous'), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse rounded-lg" />,
  ssr: true
});

const Footer = dynamic(() => import('../components/Footer'), {
  loading: () => <div className="h-32 bg-gray-100 animate-pulse rounded-lg" />,
  ssr: true
});

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <ClientLogos />
      <Services />

      <QuiSommesNous />
      <Footer />
    </main>
  );
}