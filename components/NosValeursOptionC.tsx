"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { Diamond, Heart, Users, Target } from 'lucide-react';
import Image from 'next/image';
import { useMemo, useState, useRef } from 'react';

const NosValeursOptionC = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const values = useMemo(() => [
    {
      icon: Heart,
      title: "L'écoute",
      subtitle: "Communication",
      description: "Nous prêtons une attention particulière à vos besoins et aspirations pour créer des solutions sur mesure.",
      details: [
        "Écoute active des besoins clients",
        "Analyse approfondie des objectifs",
        "Solutions personnalisées",
        "Suivi continu des projets"
      ]
    },
    {
      icon: Users,
      title: "Le respect",
      description: "Respect de vos valeurs, de votre identité de marque et de vos communautés dans chaque collaboration."
    },
    {
      icon: Target,
      title: "L'expertise",
      description: "Notre savoir-faire et notre expérience au service de vos objectifs marketing et de communication."
    },
    {
      icon: Diamond,
      title: "Le professionnalisme",
      subtitle: "Excellence",
      description: "Un engagement total vers l&apos;excellence dans la qualité de nos services et de nos relations clients.",
      details: [
        "Standards de qualité élevés",
        "Délais respectés",
        "Équipe certifiée",
        "Support client 24/7"
      ]
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
      scale: 0.9,
      rotateX: 15
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }), []);

  const lineVariants = useMemo(() => ({
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 0.8,
      transition: {
        duration: 3,
        ease: "easeInOut",
        delay: 0.5
      }
    }
  }), []);

  return (
    <section 
      ref={sectionRef}
      id="valeurs" 
      className="py-20 bg-white relative overflow-hidden"
      style={{ opacity }}
    >
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-3">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #8b5cf6 1px, transparent 1px),
                           radial-gradient(circle at 75% 75%, #8b5cf6 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
          backgroundPosition: '0 0, 40px 40px'
        }} />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-6 mb-8">
            {/* Key Icon */}
            <motion.div
              className="relative"
              initial={{ scale: 0, rotate: -45 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 relative">
                <Image src="/key.png" alt="Key Icon" fill className="object-contain drop-shadow-lg" quality={85} />
              </div>
            </motion.div>

            {/* Gradient Separator */}
            <div className="w-px h-20 bg-gradient-to-b from-purple-500 via-pink-500 to-red-500"></div>

            {/* Title */}
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              style={{ 
                fontWeight: '800',
                letterSpacing: '-0.02em',
                lineHeight: '1.1'
              }}
            >
              Nos <motion.span 
                className="text-gradient inline-block"
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
              >
                Valeurs
              </motion.span>
            </motion.h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Les fondamentaux qui guident notre approche et nos relations clients.
          </p>
        </motion.div>

        {/* Design System Cards Container */}
        <motion.div 
          className="relative max-w-6xl mx-auto"
          style={{ y }}
        >
          {/* Enhanced flowing curved line with animations */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1200 400" preserveAspectRatio="none">
            {/* Animated gradient definitions */}
            <defs>
              <linearGradient id="flowingGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <motion.stop 
                  offset="0%" 
                  stopColor="#8b5cf6"
                  animate={{ stopColor: ["#8b5cf6", "#ec4899", "#8b5cf6"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.stop 
                  offset="30%" 
                  stopColor="#a855f7"
                  animate={{ stopColor: ["#a855f7", "#f472b6", "#a855f7"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                />
                <motion.stop 
                  offset="60%" 
                  stopColor="#c084fc"
                  animate={{ stopColor: ["#c084fc", "#fb7185", "#c084fc"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                />
                <motion.stop 
                  offset="100%" 
                  stopColor="#8b5cf6"
                  animate={{ stopColor: ["#8b5cf6", "#ec4899", "#8b5cf6"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                />
              </linearGradient>
              
              <linearGradient id="flowingGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ec4899" />
                <stop offset="50%" stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="#ec4899" />
              </linearGradient>
              
              {/* Glow filter */}
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge> 
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>

            {/* Main flowing line with enhanced effects */}
            <motion.path
              d="M50,180 
                 Q150,120 250,180 
                 Q350,240 450,180 
                 Q550,120 650,180 
                 Q750,240 850,180 
                 Q950,120 1050,180 
                 Q1150,240 1200,180"
              fill="none"
              stroke="url(#flowingGradient)"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
              variants={lineVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              style={{ 
                filter: 'drop-shadow(0 4px 8px rgba(139, 92, 246, 0.4))',
                filter: 'url(#glow)'
              }}
            />
            
            {/* Secondary flowing line for depth */}
            <motion.path
              d="M80,220 
                 Q200,160 320,220 
                 Q440,280 560,220 
                 Q680,160 800,220 
                 Q920,280 1040,220 
                 Q1160,160 1200,220"
              fill="none"
              stroke="url(#flowingGradient2)"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.5 }}
              transition={{ duration: 3.5, delay: 0.8, ease: "easeInOut" }}
              viewport={{ once: true }}
              style={{ filter: 'drop-shadow(0 2px 4px rgba(139, 92, 246, 0.3))' }}
            />

            {/* Floating particles along the line */}
            {[...Array(8)].map((_, i) => (
              <motion.circle
                key={i}
                r="2"
                fill="#8b5cf6"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                  cx: [50 + i * 150, 50 + i * 150 + 20, 50 + i * 150],
                  cy: [180 + Math.sin(i) * 20, 180 + Math.sin(i) * 20 + 10, 180 + Math.sin(i) * 20]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.3,
                  ease: "easeInOut"
                }}
              />
            ))}
          </svg>

          {/* Enhanced Cards Grid with mobile optimization */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 relative z-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {values.map((value, index) => {
              const cardColors = [
                'from-purple-50 to-purple-100', // Very light purple
                'from-purple-600 to-purple-700', // Dark purple
                'from-pink-50 to-pink-100',     // Very light pink
                'from-blue-50 to-blue-100'      // Very light blue
              ];
              
              const textColors = [
                'text-purple-800', // Dark text for light background
                'text-white',      // White text for dark background
                'text-pink-800',   // Dark text for light background
                'text-blue-800'    // Dark text for light background
              ];

              // Z-index layering for 3D depth effect
              const zIndexLayers = [20, 10, 15, 25]; // Alternating depths

              return (
                <motion.div
                  key={index}
                  className="group relative cursor-pointer"
                  variants={cardVariants}
                  whileHover={{ 
                    y: -20,
                    scale: 1.02,
                    transition: { duration: 0.4, ease: "easeOut" }
                  }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setExpandedCard(expandedCard === index ? null : index)}
                  onHoverStart={() => setHoveredCard(index)}
                  onHoverEnd={() => setHoveredCard(null)}
                  style={{ zIndex: zIndexLayers[index] }}
                >
                  {/* Enhanced Floating Card with responsive height */}
                  <div 
                    className={`relative w-full rounded-2xl md:rounded-3xl overflow-hidden transition-all duration-500 bg-gradient-to-br ${cardColors[index]} ${
                      expandedCard === index ? 'h-[450px] md:h-[400px]' : 'h-[350px] md:h-[320px]'
                    }`}
                    style={{
                      boxShadow: hoveredCard === index 
                        ? '0 30px 60px rgba(139, 92, 246, 0.25), 0 15px 30px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                        : '0 20px 40px rgba(139, 92, 246, 0.12), 0 8px 16px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                      border: `1px solid ${index === 0 ? 'rgba(139, 92, 246, 0.2)' : 
                                        index === 1 ? 'rgba(139, 92, 246, 0.3)' : 
                                        index === 2 ? 'rgba(236, 72, 153, 0.2)' : 
                                        'rgba(59, 130, 246, 0.2)'}`
                    }}
                  >
                    {/* Card Content with responsive padding */}
                    <div className="relative h-full p-6 md:p-8 flex flex-col">
                      {/* Enhanced Icon with breathing animation */}
                      <motion.div
                        className="mb-6"
                        whileHover={{ 
                          scale: 1.2,
                          rotate: 5,
                          transition: { duration: 0.3 }
                        }}
                        animate={{
                          scale: [1, 1.05, 1],
                          rotate: [0, 2, 0]
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        <div className={`w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-white/40 backdrop-blur-md flex items-center justify-center border border-white/50 shadow-lg relative overflow-hidden`}>
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl"
                            animate={{
                              opacity: [0.3, 0.6, 0.3]
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          />
                          <value.icon className={`w-6 h-6 md:w-8 md:h-8 ${textColors[index]} relative z-10`} />
                        </div>
                      </motion.div>

                      {/* Enhanced Title with micro-interactions */}
                      <motion.h3 
                        className={`text-xl md:text-2xl font-bold mb-2 leading-tight ${textColors[index]} cursor-pointer`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
                        viewport={{ once: true }}
                        whileHover={{
                          scale: 1.05,
                          textShadow: `0 0 20px ${index === 0 ? 'rgba(139, 92, 246, 0.5)' : 
                                               index === 1 ? 'rgba(139, 92, 246, 0.5)' : 
                                               index === 2 ? 'rgba(236, 72, 153, 0.5)' : 
                                               'rgba(59, 130, 246, 0.5)'}`,
                          transition: { duration: 0.2 }
                        }}
                        style={{
                          fontWeight: '800',
                          letterSpacing: '-0.01em'
                        }}
                      >
                        {value.title}
                      </motion.h3>

                      {/* Subtitle for first and last cards */}
                      {(index === 0 || index === 3) && value.subtitle && (
                        <motion.div
                          className={`text-sm font-semibold mb-4 ${textColors[index]} opacity-70`}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 + 0.35, duration: 0.6 }}
                          viewport={{ once: true }}
                        >
                          {value.subtitle}
                        </motion.div>
                      )}
                      
                      {/* Description */}
                      <motion.p 
                        className={`text-sm md:text-base leading-relaxed mb-4 ${textColors[index]} opacity-90`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 + 0.4, duration: 0.6 }}
                        viewport={{ once: true }}
                      >
                        {value.description}
                      </motion.p>

                      {/* Enhanced Details list with interactive tooltips */}
                      {(index === 0 || index === 3) && value.details && (
                        <motion.div
                          className="flex-grow"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 + 0.45, duration: 0.6 }}
                          viewport={{ once: true }}
                        >
                          <ul className={`space-y-3 text-sm ${textColors[index]} opacity-80`}>
                            {value.details.map((detail, detailIndex) => (
                              <motion.li
                                key={detailIndex}
                                className="flex items-center gap-3 group/item cursor-pointer"
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                whileHover={{ 
                                  x: 5,
                                  transition: { duration: 0.2 }
                                }}
                                transition={{ 
                                  delay: index * 0.1 + 0.5 + detailIndex * 0.1, 
                                  duration: 0.4 
                                }}
                                viewport={{ once: true }}
                              >
                                <motion.div 
                                  className={`w-2 h-2 rounded-full ${
                                    index === 0 ? 'bg-purple-500' : 'bg-blue-500'
                                  }`}
                                  whileHover={{
                                    scale: 1.5,
                                    boxShadow: `0 0 10px ${index === 0 ? 'rgba(139, 92, 246, 0.6)' : 'rgba(59, 130, 246, 0.6)'}`,
                                    transition: { duration: 0.2 }
                                  }}
                                />
                                <span className="group-hover/item:font-medium transition-all duration-200">
                                  {detail}
                                </span>
                                
                                {/* Progress indicator */}
                                <motion.div
                                  className="ml-auto w-16 h-1 bg-white/20 rounded-full overflow-hidden"
                                  initial={{ opacity: 0 }}
                                  whileInView={{ opacity: 1 }}
                                  transition={{ delay: index * 0.1 + 0.6 + detailIndex * 0.1 }}
                                  viewport={{ once: true }}
                                >
                                  <motion.div
                                    className={`h-full rounded-full ${
                                      index === 0 ? 'bg-purple-400' : 'bg-blue-400'
                                    }`}
                                    initial={{ width: "0%" }}
                                    whileInView={{ width: `${(detailIndex + 1) * 25}%` }}
                                    transition={{ duration: 0.8, delay: index * 0.1 + 0.7 + detailIndex * 0.1 }}
                                    viewport={{ once: true }}
                                  />
                                </motion.div>
                              </motion.li>
                            ))}
                          </ul>
                        </motion.div>
                      )}

                      {/* Bottom accent line */}
                      <motion.div
                        className={`h-1.5 rounded-full mt-4 ${
                          index === 0 ? 'bg-purple-500' :
                          index === 1 ? 'bg-purple-300' :
                          index === 2 ? 'bg-pink-500' :
                          'bg-blue-500'
                        }`}
                        initial={{ width: "0%" }}
                        whileInView={{ width: "100%" }}
                        transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                        viewport={{ once: true }}
                      />
                    </div>

                    {/* Enhanced overlay with dynamic effects */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/10 rounded-3xl" />
                    
                    {/* Hover glow effect */}
                    <motion.div
                      className="absolute inset-0 rounded-3xl"
                      style={{
                        background: `radial-gradient(circle at 50% 50%, ${
                          index === 0 ? 'rgba(139, 92, 246, 0.1)' : 
                          index === 1 ? 'rgba(139, 92, 246, 0.15)' : 
                          index === 2 ? 'rgba(236, 72, 153, 0.1)' : 
                          'rgba(59, 130, 246, 0.1)'
                        } 0%, transparent 70%)`
                      }}
                      animate={{
                        opacity: hoveredCard === index ? [0, 1, 0] : 0,
                        scale: hoveredCard === index ? [0.8, 1.2, 0.8] : 0.8
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  </div>

                  {/* Enhanced connecting arrows with animations */}
                  {index < values.length - 1 && (
                    <motion.div
                      className="absolute top-1/2 -right-4 w-8 h-8 hidden lg:block"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      whileHover={{
                        scale: 1.2,
                        x: 5,
                        transition: { duration: 0.2 }
                      }}
                      transition={{ duration: 0.6, delay: index * 0.1 + 0.8 }}
                      viewport={{ once: true }}
                    >
                      <svg viewBox="0 0 32 32" className="w-full h-full text-purple-500">
                        <motion.path
                          d="M8 16 L24 16 M20 12 L24 16 L20 20"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          fill="none"
                          initial={{ pathLength: 0 }}
                          whileInView={{ pathLength: 1 }}
                          transition={{ duration: 0.8, delay: index * 0.1 + 0.9 }}
                          viewport={{ once: true }}
                        />
                      </svg>
                    </motion.div>
                  )}

                  {/* Click indicator */}
                  <motion.div
                    className="absolute top-4 right-4 w-2 h-2 rounded-full bg-white/60"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.6, 1, 0.6]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Enhanced bottom glow with animation */}
        <motion.div 
          className="pointer-events-none absolute left-1/2 -translate-x-1/2 bottom-10 w-72 h-72 rounded-full bg-purple-400/5 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Progress indicator */}
        <motion.div
          className="fixed top-1/2 right-8 w-1 h-32 bg-gray-200 rounded-full overflow-hidden z-50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="w-full bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"
            style={{
              height: `${scrollYProgress.get() * 100}%`
            }}
            animate={{
              height: `${scrollYProgress.get() * 100}%`
            }}
            transition={{ duration: 0.1 }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default NosValeursOptionC;
