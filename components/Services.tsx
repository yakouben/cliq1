"use client";

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { useMemo } from 'react';

const Services = () => {
  const services = useMemo(() => [
    {
      title: "Marketing d'influence",
      description: "Accompagnement ponctuel ou annuel avec nos équipes de gestion de projet et planning stratégique pour des campagnes créatives.",
      icon: "/baff.png",
      gradient: "linear-gradient(135deg, #8b5cf6 0%, #ffffff 100%)"
    },
    {
      title: "Social Media",
      description: "Charte éditoriale, social média management, community management et modération pour optimiser vos réseaux sociaux.",
      icon: "/social.png",
      gradient: "linear-gradient(135deg, #8b5cf6 0%, #ffffff 100%)"
    },
    {
      title: "Brand Content",
      description: "Accompagnement dans vos productions de contenus photos et vidéos pour renforcer votre identité de marque.",
      icon: "/medal.png",
      gradient: "linear-gradient(135deg, #8b5cf6 0%, #ffffff 100%)"
    },
    {
      title: "L'organisation d'événement",
      description: "Organisation complète d'événements, gestion logistique, coordination des prestataires et mise en place d'expériences mémorables.",
      icon: "/calendar.png",
      gradient: "linear-gradient(135deg, #8b5cf6 0%, #ffffff 100%)"
    },
    {
      title: "Expérience de marque",
      description: "Organisation d'événements locaux, set design, recherche de prestataires et logistique pour des événements impactants.",
      icon: "/target.png",
      gradient: "linear-gradient(135deg, #8b5cf6 0%, #ffffff 100%)"
    },
    {
      title: "Stratégie et formations",
      description: "Accompagnement dans vos réflexions stratégiques et création de guidelines locales Influence/Social Média.",
      icon: "/key.png",
      gradient: "linear-gradient(135deg, #8b5cf6 0%, #ffffff 100%)"
    },
    {
      title: "Développement Web",
      description: "Création de sites web modernes, applications web et solutions digitales sur mesure pour votre entreprise.",
      icon: "/dev.png",
      gradient: "linear-gradient(135deg, #8b5cf6 0%, #ffffff 100%)"
    }
  ], []);

  const containerVariants = useMemo(() => ({
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }), []);

  const cardVariants = useMemo(() => ({
    hidden: { 
      y: 60, 
      opacity: 0,
      scale: 0.8,
      rotateX: -15
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      rotateX: 0,
    },
  }), []);

  return (
    <section id="services" className="py-20 bg-white relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #8b5cf6 2px, transparent 2px),
                           radial-gradient(circle at 75% 75%, #8b5cf6 2px, transparent 2px)`,
          backgroundSize: '60px 60px',
          backgroundPosition: '0 0, 30px 30px'
        }} />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-700 rounded-full font-medium mb-6"
            whileHover={{ scale: 1.05 }}
          >
          
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nos <span className="text-gradient">Offres</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez nos services complets pour transformer votre présence digitale et atteindre vos objectifs.
          </p>
        </motion.div>

        {/* Modern Responsive Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="relative"
              variants={cardVariants}
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
            >
              {/* Modern Card Container with Glassmorphism */}
              <div 
                className="relative w-full h-[320px] rounded-3xl overflow-hidden backdrop-blur-sm"
                style={{
                  background: `linear-gradient(135deg, 
                    rgba(139, 92, 246, 0.1) 0%, 
                    rgba(255, 255, 255, 0.2) 50%, 
                    rgba(139, 92, 246, 0.05) 100%)`,
                  boxShadow: `
                    0 25px 50px rgba(139, 92, 246, 0.15),
                    0 12px 24px rgba(0, 0, 0, 0.1),
                    0 4px 8px rgba(0, 0, 0, 0.05),
                    inset 0 1px 0 rgba(255, 255, 255, 0.3),
                    inset 0 -1px 0 rgba(139, 92, 246, 0.1)
                  `,
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  transformStyle: 'preserve-3d'
                }}
              >
              {/* Content */}
                <div className="relative h-full p-6 flex">
                  {/* Left Content */}
                  <div className="flex-1 flex flex-col justify-between pr-6">
                    {/* Title */}
                    <motion.h3 
                      className="text-xl font-bold text-gray-900 mb-4 leading-tight drop-shadow-sm"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
                      viewport={{ once: true }}
                      style={{ 
                        textShadow: '0 2px 4px rgba(0,0,0,0.1)',
                        fontWeight: '700'
                      }}
                    >
                {service.title}
                    </motion.h3>
                    
                    {/* Description */}
                    <motion.p 
                      className="text-gray-700 leading-relaxed text-sm flex-grow mb-6"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 + 0.4, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                      {service.description}
                    </motion.p>

                    {/* Demander un devis Button with Enhanced Effects */}
              <motion.button
                      className="w-full px-4 py-3 bg-gray-900 text-white font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 text-sm relative overflow-hidden"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ 
                        delay: index * 0.1 + 0.6, 
                        duration: 0.6 
                      }}
                      viewport={{ once: true }}
                      style={{ 
                        transformStyle: 'preserve-3d',
                        boxShadow: `
                          0 8px 16px rgba(0, 0, 0, 0.2),
                          0 4px 8px rgba(0, 0, 0, 0.1),
                          inset 0 1px 0 rgba(255, 255, 255, 0.1)
                        `
                      }}
                    >
                       devis
                      <ArrowRight className="w-4 h-4 relative z-10" />
              </motion.button>
                  </div>


                  {/* Right Side - Enhanced Icon with Pulse */}
                  <div className="flex justify-center items-center w-32">
                    <motion.div
                      className="relative"
                      initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                      transition={{ 
                        delay: index * 0.1 + 0.5, 
                        duration: 0.8,
                        ease: [0.25, 0.46, 0.45, 0.94]
                      }}
                      viewport={{ once: true }}
                      style={{ transformStyle: 'preserve-3d' }}
                    >
                      <div className="w-36 h-36 sm:w-36 sm:h-36 relative">
                        <Image
                          src={service.icon}
                          alt={service.title}
                          fill
                          className="object-contain drop-shadow-2xl"
                          quality={75}
                          loading="lazy"
                          sizes="(max-width: 640px) 144px, 144px"
                          placeholder="blur"
                          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                        />
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Static Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-purple-100/5 rounded-3xl" />
                
                {/* Floating Particles Effect */}
                <div className="absolute inset-0 overflow-hidden rounded-3xl">
                  <div className="absolute top-4 left-4 w-2 h-2 bg-purple-400/20 rounded-full animate-pulse" />
                  <div className="absolute top-8 right-8 w-1 h-1 bg-white/30 rounded-full animate-ping" />
                  <div className="absolute bottom-6 left-8 w-1.5 h-1.5 bg-purple-300/30 rounded-full animate-pulse" />
                  <div className="absolute bottom-4 right-4 w-1 h-1 bg-white/20 rounded-full animate-ping" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
         
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
