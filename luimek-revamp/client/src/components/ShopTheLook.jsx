import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';

const hotspots = [
  { 
    id: 1, 
    name: "Modern Pendant Light", 
    price: "₹3,500", 
    top: "32%", 
    left: "49%",
    description: "Elegant centerpiece for dining"
  },
  { 
    id: 2, 
    name: "Minimalist Floor Lamp", 
    price: "₹2,800", 
    top: "62%", 
    left: "83%",
    description: "Warm corner lighting with fabric shade"
  },
  { 
    id: 3, 
    name: "Adjustable Track Light", 
    price: "₹1,500 / head", 
    top: "12%", 
    left: "43%",
    description: "Focused lighting for art and spaces"
  },
  { 
    id: 4, 
    name: "Recessed COB Spotlight", 
    price: "₹650", 
    top: "10%", 
    left: "62%",
    description: "High-intensity, glare-free ceiling light"
  },
  { 
    id: 5, 
    name: "LED Profile Light", 
    price: "₹450 / m", 
    top: "5%", 
    left: "75%",
    description: "Seamless cove lighting for ambiance"
  },
  { 
    id: 6, 
    name: "Geometric Wall Sconce", 
    price: "₹1,800", 
    top: "35%", 
    left: "77%",
    description: "Modern accent light for walls"
  },
  { 
    id: 7, 
    name: "Under-Cabinet LED Strip", 
    price: "₹350 / m", 
    top: "53%", 
    left: "37%",
    description: "Functional task lighting for counters"
  }
];

const ShopTheLook = () => {
  const [activeId, setActiveId] = useState(null);

  return (
    <section className="w-full bg-white py-20 px-4 md:px-10">
      
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Shop The Look</h2>
        <p className="text-gray-600 mt-2">Click on the points to view products in this room</p>
        <div className="w-16 h-1 bg-yellow-500 mx-auto mt-4 rounded-full"></div>
      </div>

      {/* Main Image Container */}
      <div className="relative max-w-6xl mx-auto rounded-xl overflow-hidden shadow-2xl bg-gray-900">
        
        {/* NOTE: For now, I am using the image URL from the chat history. 
           If you have this image saved locally, you should import it! 
           Example: import shopImage from '../assets/shop-the-look.jpg';
           and then use src={shopImage}
        */}
        <img 
          src="/home/ShopTheLook.png" // This is the image you generated
          alt="Dining Room with multiple lights" 
          className="w-full h-auto object-cover"
        />

        {/* Hotspots Overlay */}
        {hotspots.map((spot) => (
          <div 
            key={spot.id}
            className="absolute"
            style={{ top: spot.top, left: spot.left }}
          >
            {/* The Pulsing Dot Button */}
            <button 
              onClick={() => setActiveId(activeId === spot.id ? null : spot.id)}
              className="relative w-8 h-8 md:w-10 md:h-10 flex items-center justify-center -translate-x-1/2 -translate-y-1/2"
            >
              {/* Ping Animation (Outer Ring) */}
              <span className="absolute inline-flex h-full w-full rounded-full bg-white opacity-50 animate-ping"></span>
              {/* Inner Circle */}
              <span className="relative inline-flex rounded-full h-4 w-4 md:h-5 md:w-5 bg-white shadow-lg items-center justify-center hover:scale-110 transition ring-2 ring-gray-900/20">
                <Plus size={12} className="text-gray-900" />
              </span>
            </button>

            {/* Product Card Tooltip (Visible on Click/Hover) */}
            <AnimatePresence>
              {activeId === spot.id && (
                <motion.div 
                  initial={{ opacity: 0, y: 10, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.9 }}
                  className="absolute z-20 bg-white p-4 rounded-lg shadow-xl w-52 md:w-60 -translate-x-1/2 mt-4 left-0"
                >
                  <h4 className="font-bold text-gray-900 text-sm md:text-base">{spot.name}</h4>
                  <p className="text-xs text-gray-500 mt-1 line-clamp-2">{spot.description}</p>
                  <div className="flex justify-between items-center mt-3">
                    <span className="font-semibold text-yellow-600">{spot.price}</span>
                    <button className="text-[10px] uppercase font-bold tracking-wider text-black border-b border-black hover:text-yellow-600 hover:border-yellow-600 transition pb-0.5">
                      View Product
                    </button>
                  </div>
                  {/* Little Arrow pointing up */}
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white transform rotate-45 border-t border-l border-gray-100"></div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        ))}
      </div>

    </section>
  );
};

export default ShopTheLook;