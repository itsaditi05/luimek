import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom'; // ✅ Import Link

const slides = [
  {
    id: 1,
    image: "https://images.squarespace-cdn.com/content/v1/615e86087d5295659a809307/fe42b14c-846a-498e-83f0-c6dbc2c421b8/Upper-Cheyne-Row-LR-2-copy.jpg",
    title: "Lighting That Defines Luxury",
    subtitle: "Explore our premium indoor collection",
    color: "text-white"
  },
  {
    id: 2,
    image: "https://tse3.mm.bing.net/th/id/OIP._pBT3Fj0Ibq_SbaOliw2NwHaEK?w=2000&h=1125&rs=1&pid=ImgDetMain&o=7&rm=3",
    title: "Industrial Strength & Style",
    subtitle: "High-performance lighting for modern workspaces",
    color: "text-white"
  },
  {
    id: 3,
    image: "https://m.media-amazon.com/images/I/71CX4a30i0L.jpg",
    title: "Smart Garden Illumination",
    subtitle: "Transform your outdoors with Luimek",
    color: "text-white"
  }
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  // Auto-slide effect (5 seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [current]);

  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  return (
    <div className="relative w-full h-[600px] md:h-[85vh] overflow-hidden bg-black">
      
      {/* Slides Container */}
      <AnimatePresence mode='wait'>
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }} // Smooth fade transition like Orient
          className="absolute inset-0"
        >
          {/* Background Image */}
          <div 
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[current].image})` }}
          >
            {/* Dark Overlay for better text visibility */}
            <div className="absolute inset-0 bg-black/40"></div>
          </div>

          {/* Text Content (Animation) */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
            <motion.h2 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-xl md:text-2xl font-light uppercase tracking-widest text-yellow-400 mb-4"
            >
              {slides[current].subtitle}
            </motion.h2>
            
            <motion.h1 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight"
            >
              {slides[current].title}
            </motion.h1>

            {/* ✅ Wrapped Button in Link */}
            <Link to="/products">
                <motion.button 
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 1.2, duration: 0.5 }}
                  className="bg-white text-black px-10 py-4 rounded-full font-bold text-lg hover:bg-yellow-500 hover:text-white transition duration-300 shadow-lg"
                >
                  Shop Now
                </motion.button>
            </Link>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Left Arrow */}
      <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 p-2 rounded-full hover:bg-white/40 transition text-white">
        <ChevronLeft size={30} />
      </button>

      {/* Right Arrow */}
      <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 p-2 rounded-full hover:bg-white/40 transition text-white">
        <ChevronRight size={30} />
      </button>

      {/* Bottom Dots Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <div 
            key={index} 
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${current === index ? 'bg-yellow-500 w-8' : 'bg-white/50'}`}
          ></div>
        ))}
      </div>

    </div>
  );
};

export default HeroSlider;