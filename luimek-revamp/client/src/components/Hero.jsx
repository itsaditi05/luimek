import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="relative w-full h-[85vh] bg-black overflow-hidden flex items-center justify-center">
      
      {/* 1. Background Image (Optional: Dark Interior) */}
      <div 
        className="absolute inset-0 opacity-40 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=2070&auto=format&fit=crop')" }} 
      ></div>

      {/* 2. The "Beam of Light" Animation */}
      <motion.div 
        initial={{ opacity: 0, scaleY: 0 }}
        animate={{ opacity: 1, scaleY: 1 }}
        transition={{ duration: 2.5, ease: "easeOut" }}
        className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[600px] h-full bg-gradient-to-b from-yellow-100/20 via-yellow-500/5 to-transparent blur-3xl origin-top"
      />

      {/* 3. Text Content */}
      <div className="relative z-10 text-center text-white px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="text-lg md:text-xl font-light tracking-[0.3em] uppercase text-gray-300 mb-4"
        >
          Premium Lighting Solutions
        </motion.h2>

        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="text-5xl md:text-8xl font-bold tracking-tighter mb-8"
        >
          LUIMEK<span className="text-yellow-500">.</span>
        </motion.h1>

        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5, duration: 1 }}
        >
            <button className="bg-white text-black px-8 py-3 rounded-full font-medium text-lg hover:bg-yellow-500 hover:text-white transition duration-300">
            Explore Collection
            </button>
        </motion.div>
      </div>

      {/* Shadow Overlay at bottom to blend with next section */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent"></div>
    </div>
  );
};

export default Hero;