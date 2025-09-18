"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Home, Briefcase, Phone } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Accueil', href: '#hero', icon: Home },
    { name: 'Services', href: '#services', icon: Briefcase },
    { name: 'Contact', href: '#footer', icon: Phone },
  ];

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      suppressHydrationWarning
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className={`mt-4 mx-4 bg-white border-2 border-purple-500 rounded-full transition-all duration-300 ${
            isMounted && isScrolled ? '' : ''
          }`}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex items-center justify-between h-16 px-6">
            
            {/* Logo */}
            <Link href="#hero" className="group flex items-center">
              <div className="w-16 h-16 flex items-center justify-center">
                <Image 
                  src="/logo-without-bg.png" 
                  alt="Cliq - Agence Marketing Digital Premium" 
                  width={80} 
                  height={80}
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-purple-600 font-medium transition-all duration-300 relative group"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <span>{item.name}</span>
                </motion.a>
              ))}
            </nav>

            {/* Mobile Navigation Icons */}
            <nav className="lg:hidden flex items-center space-x-4">
              {navItems.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className="p-2 rounded-full hover:bg-purple-50 text-gray-700 hover:text-purple-600 transition-all duration-300 group"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <IconComponent className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </nav>

            {/* Desktop CTA Button */}
            <motion.a
              href="#services"
              className="hidden lg:flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:shadow-purple-500/25 transition-all duration-300 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Demander un devis</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;