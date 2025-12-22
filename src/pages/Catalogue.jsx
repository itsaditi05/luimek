import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

// 🔥 LOCAL IMAGES FROM PUBLIC FOLDER
// Make sure images are inside: public/catalogue/
const catalogueImages = [
  "/catalogue/cat1.png",
  "/catalogue/cat2.png",
  "/catalogue/cat3.png",
  "/catalogue/cat4.png",
  "/catalogue/cat5.png",
  "/catalogue/cat6.png",
  "/catalogue/cat7.png"
];

const Catalogue = () => {
  // We duplicate the array to create the seamless infinite loop effect
  const duplicatedImages = [...catalogueImages, ...catalogueImages];

  return (
    <div className="min-h-screen bg-black text-white pt-28 pb-20 overflow-hidden">
      
      {/* 1️⃣ Header Section */}
      <div className="text-center px-6 mb-16">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent"
        >
          Our 2025 Catalogue
        </motion.h1>
        <p className="text-gray-400 mt-4 text-lg max-w-2xl mx-auto">
          Explore our latest collection of industrial and contemporary lighting designs.
          Swipe through the pages below.
        </p>
      </div>

      {/* 2️⃣ The Infinite Animation Container */}
      <div className="relative w-full py-10">
        
        {/* Gradient Fades for smooth edges (Left & Right) */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

        {/* Moving Track */}
        <div className="flex overflow-hidden">
          <motion.div
            className="flex gap-8 pl-8"
            animate={{
              x: ["0%", "-50%"], // Move halfway (the length of one full set)
            }}
            transition={{
              ease: "linear",
              duration: 20, // Speed adjust karein (jitna bada number, utna slow)
              repeat: Infinity,
            }}
          >
            {duplicatedImages.map((img, index) => (
              <div 
                key={index} 
                className="relative w-[300px] md:w-[400px] h-[400px] md:h-[500px] flex-shrink-0 rounded-2xl overflow-hidden shadow-2xl border border-white/10"
              >
                <img
                  src={img}
                  alt={`Catalogue page ${index}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                
                {/* Page Number Badge */}
                <div className="absolute bottom-4 right-4 bg-black/60 px-3 py-1 rounded-full text-sm backdrop-blur-md">
                  Page {(index % catalogueImages.length) + 1}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* 3️⃣ Bottom Section & PDF Download Button */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-center mt-16 px-6"
      >
        <h3 className="text-2xl font-semibold mb-6">Want the full experience?</h3>
        
        {/* Opens PDF in new Tab */}
        <a 
          href="/catalogue/CATALOGUE.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block"
        > 
          <button className="group relative inline-flex items-center gap-3 bg-yellow-500 text-black px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-yellow-400 transition-all duration-300 hover:scale-105 hover:shadow-yellow-500/50">
            See Full Catalogue <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>
        </a>
        
        <p className="text-gray-500 mt-4 text-sm">
          Available in PDF format for offline viewing.
        </p>
      </motion.div>

    </div>
  );
};

export default Catalogue;