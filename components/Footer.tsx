"use client";

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter, ArrowUp } from 'lucide-react';
import Image from 'next/image';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const services = [
    "Marketing d'influence",
    "Social Media", 
    "Brand Content",
    "Événementiel",
    "Développement Web"
  ];

  const socialLinks = [
    { icon: Facebook, name: "Facebook", href: "https://facebook.com/cliqevents", color: "hover:text-blue-400" },
    { icon: Instagram, name: "Instagram", href: "https://instagram.com/cliqevents_off", color: "hover:text-pink-400" },
    { icon: Linkedin, name: "LinkedIn", href: "https://linkedin.com/company/cliqevents", color: "hover:text-blue-500" },
    { icon: Twitter, name: "Twitter", href: "https://twitter.com/cliqevents", color: "hover:text-blue-300" }
  ];

  return (
    <footer id="footer" className="relative bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Company Info */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Logo */}
              <div className="w-16 h-16 rounded-xl flex items-center justify-center bg-white/10 backdrop-blur-sm">
                <Image 
                  src="/logo-without-bg.png" 
                  alt="Cliq Logo" 
                  width={64} 
                  height={64}
                  className="object-contain"
                  quality={85}
                />
              </div>

              {/* Company Description */}
              <p className="text-white text-lg leading-relaxed max-w-md">
                Agence 360° spécialisée en marketing d&apos;influence, communication et branding premium et Développement Web.
              </p>

              {/* Contact Info */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-purple-300 flex-shrink-0" />
                  <a href="mailto:cliqevents3@gmail.com" className="text-white hover:text-purple-300 transition-colors">
                    cliqevents3@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-purple-300 flex-shrink-0" />
                  <a href="tel:+213540017730" className="text-white hover:text-purple-300 transition-colors">
                    +213 540 017 730
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-purple-300 flex-shrink-0" />
                  <span className="text-white">Draria Alger, Algérie</span>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Services */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-white">Services</h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <a
                      href="#services"
                      className="text-white hover:text-purple-300 transition-colors duration-200 block text-lg"
                    >
                      {service}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-white/20">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* Copyright */}
            <motion.div
              className="flex items-center gap-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
            
              <p className="text-white text-sm">
                © 2025 Cliq events droits réservés.
              </p>
            </motion.div> 

            {/* Social Links */}
            <motion.div
              className="flex items-center gap-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <span className="text-white text-sm">Suivez-nous :</span>
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-purple-600 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>

        
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;