"use client";

import { motion } from 'framer-motion';
import { Lightbulb, Settings, Target, Zap, Building, MessageCircle, Wrench } from 'lucide-react';
import { useMemo } from 'react';

const QuiSommesNous = () => {
  const approaches = useMemo(() => [
    {
      icon: Target,
      title: "Stratégie",
      description: "Trouver la meilleure approche pour atteindre vos objectifs : notoriété, image de marque, drive-to-store, ventes, désirabilité..."
    },
    {
      icon: Lightbulb,
      title: "Créativité",
      description: "Les idées, mots, hashtags et images qui vont permettre à votre marque de se démarquer."
    },
    {
      icon: Settings,
      title: "Sur-mesure",
      description: "Macro, micro ou Nano ? TikTok ou Instagram ? Nos dispositifs sont adaptés à chaque problématique."
    }
  ], []);

  const services = useMemo(() => [
    {
      icon: Building,
      title: "Impact",
      description: "Brand Content, Socials Ads, Event, RP... Nous combinons les bons leviers pour maximiser la visibilité, l&apos;engagement, les visites sur votre site, etc."
    },
    {
      icon: MessageCircle,
      title: "Social Media",
      description: "De la charte éditoriale et graphique, en passant par le social média management, le community management, la modération, nos équipes vous accompagnent pour optimiser vos réseaux sociaux (Pinterest, Instagram, TikTok, Facebook etc.)"
    },
    {
      icon: Wrench,
      title: "Technologie",
      description: "Conception de site et référencement, un design moderne et une conversion optimale pour accroître vos performances."
    }
  ], []);

  const containerVariants = useMemo(() => ({
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }), []);

  const itemVariants = useMemo(() => ({
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }), []);


};

export default QuiSommesNous;
