"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useMemo } from 'react';

const ClientLogos = () => {
  // Placeholder logos - replace with actual client logos
  const logos = useMemo(() => [
    { name: "Client 1", logo: "/client1.jpg" },
    { name: "Client 2", logo: "/client2.jpg" },
    { name: "Client 3", logo: "/client3.jpg" },
    { name: "Client 4", logo: "/client4.jpg" },
    { name: "Client 5", logo: "/client5.jpg" },
    { name: "Client 6", logo: "/client6.jpg" },
    { name: "Client 7", logo: "/client7.jpg" },
    { name: "Client 8", logo: "/client8.jpg" },
    { name: "Client 9", logo: "/client9.jpg" },
  ], []);

  // Duplicate logos for seamless scrolling
  const duplicatedLogos = useMemo(() => [...logos, ...logos], [logos]);

  return (
    <section className="py-12 bg-white relative overflow-hidden">
      {/* White Gradients */}
      <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
      <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10"></div>
      
      {/* Bottom Gradient Transition */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-white via-purple-50/30 to-purple-100/50 z-5"></div>
      
      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Ils nous font <span className="text-purple-600">confiance</span>
          </h2>
          <p className="text-gray-600">
            Plus de 10 clients satisfaits nous accompagnent dans leur croissance digitale
          </p>
        </motion.div>

         {/* Auto-scrolling Logos */}
         <div className="relative">
           <motion.div
             className="flex gap-8 items-center"
             animate={{
               x: [0, -100 * logos.length],
             }}
             transition={{
               x: {
                 repeat: Infinity,
                 repeatType: "loop",
                 duration: 15,
                 ease: "linear",
               },
             }}
           >
             {duplicatedLogos.map((client, index) => (
               <motion.div
                 key={`${client.name}-${index}`}
                 className="flex-shrink-0"
                 whileHover={{ scale: 1.1 }}
                 transition={{ duration: 0.3 }}
               >
                 <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
                   <Image
                     src={client.logo}
                     alt={client.name}
                     width={96}
                     height={96}
                     className="w-full h-full object-cover transition-all duration-300"
                     quality={75}
                     loading="lazy"
                     sizes="(max-width: 640px) 96px, 112px"
                     placeholder="blur"
                     blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                   />
                 </div>
               </motion.div>
             ))}
           </motion.div>
         </div>
      </div>
    </section>
  );
};

export default ClientLogos;
