import React from 'react';
import { motion } from 'framer-motion';

// NOTE: Replace these placeholder URLs with your actual local video paths
// Example: import video1 from '../assets/videos/kitchen-light.mp4';
const videos = [
  {
    id: 1,
    
    src: "videos/video1.mp4", 
    alt: "Adjusting linear light"
  },
  {
    id: 2,
    
    src: "videos/video2.mp4",
    alt: "Cozy bedroom lighting"
  },
  {
    id: 3,
  
    src: "videos/video3.mp4",
    alt: "Modern kitchen lighting"
  }
];

const VideoHighlight = () => {
  return (
    <section className="w-full bg-white py-16 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Text */}
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-light text-gray-900 leading-tight"
          >
            Lighting up spaces, enhancing your <br className="hidden md:block" /> everyday life
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-gray-500 mt-4 text-base md:text-lg tracking-wide"
          >
            Specially curated lights for your contemporary interiors
          </motion.p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="relative rounded-3xl overflow-hidden h-[400px] md:h-[550px] shadow-lg group"
            >
              {/* Video Element */}
              <video
                src={video.src}
                className="w-full h-full object-cover transform group-hover:scale-105 transition duration-1000 ease-out"
                autoPlay
                loop
                muted
                playsInline // Mobile pe autoplay ke liye zaruri hai
              />
              
              {/* Optional: Dark Overlay on Hover */}
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition duration-500"></div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default VideoHighlight;