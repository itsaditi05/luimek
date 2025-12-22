import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

// Swiper Styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    id: 1,
    image: "https://i.pinimg.com/736x/2b/d7/8d/2bd78d00cc9ef819722a0e58740aced8.jpg", 
    title: "Minimalist Magnetic Tracks",
    subtitle: "Ultra-modern, sleek lighting for contemporary spaces.",
    align: "left", 
  },
  {
    id: 2,
    image: "https://i.pinimg.com/736x/a5/a5/a3/a5a5a3509f7edf8ffea71ce87b02228f.jpg",
    title: "Versatile Surface COB Lights",
    subtitle: "Perfect focused illumination for dining and work areas.",
    align: "left", 
  },
  {
    id: 3,
    image: "https://i.pinimg.com/1200x/ad/b2/74/adb27430127e96166d92b6ddb0379bd6.jpg",
    title: "Architectural Linear Lighting",
    subtitle: "Define your space with clean lines and powerful brightness.",
    align: "left",
  }
];

export default function HeroSlider() {
  return (
    <section className="relative w-full h-[600px] md:h-[700px] bg-[#050505] font-sans overflow-hidden">
      <Swiper
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        effect="fade"
        fadeEffect={{ crossFade: true }} // ✅ THIS WAS MISSING. IT FIXES THE TEXT OVERLAP.
        speed={1000}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        navigation={true}
        pagination={{ clickable: true }}
        loop={true}
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="relative w-full h-full flex items-center justify-center">
            
            {/* --- LAYER 1: BLURRED BACKGROUND --- */}
            <div className="absolute inset-0 z-0">
              <img
                src={slide.image}
                alt="blur-bg"
                className="w-full h-full object-cover blur-2xl scale-110 opacity-50"
              />
              <div className="absolute inset-0 bg-black/60"></div>
            </div>

            {/* --- LAYER 2: SHARP FOREGROUND IMAGE --- */}
            <div className="absolute inset-0 z-10 flex items-center justify-center p-6 md:p-12 md:justify-end lg:pr-32">
                 <motion.img
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    src={slide.image}
                    alt={slide.title}
                    className="w-auto h-auto max-w-full max-h-[70%] md:max-h-[85%] object-contain rounded-lg shadow-2xl hidden md:block"
                  />
            </div>

            {/* --- LAYER 3: TEXT CONTENT --- */}
            <div className={`absolute inset-0 container mx-auto px-6 md:px-12 flex flex-col justify-center z-20 ${
                slide.align === "left" ? "items-start text-left" : "items-center text-center"
            }`}>
              
              <div className="max-w-xl text-white p-4 md:p-0 rounded-xl backdrop-blur-sm md:backdrop-blur-none bg-black/20 md:bg-transparent">
                {/* Badge */}
                <motion.span 
                   initial={{ opacity: 0, y: 20 }} 
                   whileInView={{ opacity: 1, y: 0 }} 
                   transition={{ duration: 0.6 }}
                   className="inline-block px-3 py-1 mb-4 border border-yellow-500/30 bg-yellow-500/10 rounded-full text-xs font-bold tracking-widest uppercase text-yellow-400"
                >
                  Premium Collection
                </motion.span>

                {/* Title */}
                <motion.h1 
                  initial={{ opacity: 0, y: 30 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 drop-shadow-lg"
                >
                  {slide.title}
                </motion.h1>

                {/* Subtitle */}
                <motion.p 
                  initial={{ opacity: 0, y: 30 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-lg text-gray-200 mb-8 font-light leading-relaxed drop-shadow-md max-w-md"
                >
                  {slide.subtitle}
                </motion.p>

                {/* Button */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }} 
                  whileInView={{ opacity: 1, scale: 1 }} 
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <Link to="/products">
                    <button className="bg-yellow-500 text-black font-bold px-8 py-4 rounded-full flex items-center gap-3 hover:bg-white transition-all shadow-lg hover:shadow-yellow-500/50">
                      Shop Now <FiArrowRight />
                    </button>
                  </Link>
                </motion.div>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style>{`
        .swiper-button-next, .swiper-button-prev {
          color: #EAB308;
          background: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(5px);
          width: 50px;
          height: 50px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.1);
          transition: all 0.3s;
        }
        .swiper-button-next:hover, .swiper-button-prev:hover {
          background: #EAB308;
          color: black;
        }
        .swiper-pagination-bullet {
          background: white;
          opacity: 0.4;
        }
        .swiper-pagination-bullet-active {
          opacity: 1;
          background: #EAB308;
        }
      `}</style>
    </section>
  );
}