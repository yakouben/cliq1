"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState, useMemo } from 'react';

const Hero = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const words = useMemo(() => ['stratégies', 'campagnes', 'solutions', 'innovations'], []);
  
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -50]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.8]);

  useEffect(() => {
    setIsClient(true);
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [words.length]);

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

  const itemVariants = useMemo(() => ({
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }), []);

  const imageVariants = useMemo(() => ({
    hidden: { scale: 0.8, opacity: 0, rotateY: -15 },
    visible: {
      scale: 1,
      opacity: 1,
      rotateY: 0,
    transition: {
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }), []);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center hero-background pt-32 sm:pt-36 lg:pt-20 pb-4 sm:pb-8 lg:pb-8 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-purple-200 rounded-full opacity-20"
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-24 h-24 bg-purple-300 rounded-full opacity-15"
          animate={{
            y: [0, 15, 0],
            x: [0, -15, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        <motion.div
          className="absolute bottom-40 left-1/4 w-16 h-16 bg-purple-400 rounded-full opacity-10"
          animate={{
            y: [0, -25, 0],
            x: [0, 20, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="flex flex-col lg:grid lg:grid-cols-2 gap-px lg:gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Content Section */}
          <div className="text-center lg:text-left order-1 lg:sticky lg:top-20 mb-px sm:mb-6 lg:mb-0">
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
              variants={itemVariants}
              style={{ y, opacity }}
            >
              Un cliq, est votre{' '}
              <span className="relative inline-block align-baseline">
                <motion.span
                  className="text-gradient inline-block relative z-10"
                  animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  style={{ backgroundSize: "200% 200%" }}
                >
                  projet
                  {/* Gradient sheen */}
                  <motion.span
                    aria-hidden
                    className="pointer-events-none absolute inset-0 bg-[linear-gradient(75deg,transparent,rgba(255,255,255,0.7),transparent)] bg-[length:200%_100%] opacity-60 mix-blend-screen"
                    animate={{ backgroundPositionX: ["-100%", "100%"] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 2, ease: "easeInOut" }}
                  />
                </motion.span>
                {/* Hand-drawn underline */}
                <motion.svg
                  viewBox="0 0 300 40"
                  preserveAspectRatio="none"
                  className="absolute left-0 right-0 -bottom-2 w-full h-6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  <motion.path
                    d="M5 25 C 80 5, 220 5, 295 25"
                    fill="none"
                    stroke="url(#grad)"
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeDasharray="400"
                    strokeDashoffset="400"
                    animate={{ strokeDashoffset: [400, 0] }}
                    transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
                  />
                  <defs>
                    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#8b5cf6" />
                      <stop offset="100%" stopColor="#ec4899" />
                    </linearGradient>
                  </defs>
                </motion.svg>
              </span>{' '}
              est a{' '}
              <motion.span
                className="text-gradient"
                animate={{ 
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{
                  backgroundSize: "200% 200%",
                }}
              >
                porté de main .
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl text-gray-700 mb-8 max-w-2xl mx-auto lg:mx-0 font-medium leading-relaxed"
              variants={itemVariants}
            >
              Agence 360° spécialisée en marketing d'influence, communication, development web et branding premium. 
            </motion.p>

            {/* CTA Buttons - Desktop Only */}
            <motion.div
              className="hidden lg:flex flex-row gap-6 justify-center lg:justify-start"
              variants={itemVariants}
            >
              <motion.button
                className="group px-8 py-4 gradient-purple text-white font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-3 text-base"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  boxShadow: '0 20px 40px rgba(106, 13, 173, 0.3)',
                }}
              >
                Découvrir nos services
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                className="group px-8 py-4 bg-white/90 backdrop-blur-sm text-purple-600 font-bold rounded-xl border-2 border-purple-600 hover:bg-purple-600 hover:text-white transition-all duration-300 flex items-center justify-center gap-3 text-base shadow-lg"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <Play className="w-5 h-5" />
                Voir nos réalisations
              </motion.button>
            </motion.div>
          </div>

          {/* Right Content - Enhanced Hero Logo */}
          <motion.div
            className="relative order-2 flex items-center justify-center  sm:mt-0 lg:mt-0"
            variants={imageVariants}
          >
            <motion.div
              className="relative"
                animate={{ 
                y: [0, -20, 0],
                rotate: [0, 3, -3, 0]
                }}
                transition={{ 
                duration: 8, 
                  repeat: Infinity,
                  ease: "easeInOut" 
                }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
            >
              <div className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] lg:w-[400px] lg:h-[400px]">
                <Image
                  src="/hero.png"
                  alt="Cliq Digital Marketing Logo"
                  fill
                  className="object-contain drop-shadow-2xl"
                  priority
                  sizes="(max-width: 768px) 280px, (max-width: 1200px) 320px, 400px"
                  quality={85}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                />
              </div>
              
             

              <motion.div
                className="absolute -bottom-4 -left-4 w-12 h-12 sm:w-16 sm:h-16 bg-white/90 backdrop-blur-sm rounded-xl shadow-xl flex items-center justify-center border-2 border-purple-100"
                animate={{ 
                  scale: [1, 1.15, 1],
                  rotate: [0, -8, 8, 0] 
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1 
                }}
              >
                <Play className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600" />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* CTA Buttons - After Image on Mobile */}
        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center lg:hidden mt-8 sm:mt-12"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.button
            className="group px-8 py-4 gradient-purple text-white font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-3 text-base"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            style={{
              boxShadow: '0 20px 40px rgba(106, 13, 173, 0.3)',
            }}
          >
            Découvrir nos services
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>

          <motion.button
            className="group px-8 py-4 bg-white/90 backdrop-blur-sm text-purple-600 font-bold rounded-xl border-2 border-purple-600 hover:bg-purple-600 hover:text-white transition-all duration-300 flex items-center justify-center gap-3 text-base shadow-lg"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <Play className="w-5 h-5" />
            Voir nos réalisations
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-gray-600 cursor-pointer"
          >
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;