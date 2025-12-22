import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Use simple, clear images for categories
const categories = [
  { id: 1, name: "Ceiling Lights", img: "/Animation/ceiling-light.png", link: "/c/ceiling" },
  { id: 2, name: "Wall Lights", img: "/products/collection3.png", link: "/c/wall" },
  { id: 3, name: "Track Lights", img: "/Animation/track-light.png", link: "/c/track" },
  { id: 4, name: "Street Lights", img: "/Animation/street-light.png", link: "/c/street" },
  { id: 5, name: "Smart Home", img: "/Animation/focus-light.png", link: "/c/smart" },
  { id: 6, name: "Industrial", img: "/Outdoor/streetlight-p.jpg", link: "/c/industrial" },
];

export default function ShopByCategory() {
  return (
    <section className="w-full bg-white py-16 px-4 md:px-10 font-sans">
      
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Explore Categories</h2>
        <p className="text-gray-600 text-lg">Find the perfect lighting for every space</p>
        <div className="w-20 h-1 bg-yellow-500 mx-auto mt-4 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
        {categories.map((cat, i) => (
          <Link key={i} to={cat.link} className="group flex flex-col items-center text-center">
            
            <motion.div
              whileHover={{ scale: 1.08, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
              // CHANGE: bg-white hatakar bg-yellow-50 (warm tint) lagaya. Border hatakar shadow di.
              className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-yellow-50 shadow-md flex items-center justify-center p-6 overflow-hidden mb-4 group-hover:shadow-xl group-hover:bg-yellow-100 transition-all duration-300 relative"
            >
              {/* Optional: Subtle inner glow on hover */}
              <div className="absolute inset-0 bg-yellow-200 opacity-0 group-hover:opacity-20 rounded-full transition-opacity duration-300"></div>
              <img src={cat.img} alt={cat.name} className="w-full h-full object-contain z-10" />
            </motion.div>
            
            <h3 className="font-bold text-gray-900 text-base md:text-lg group-hover:text-yellow-600 transition-colors">
              {cat.name}
            </h3>
          </Link>
        ))}
      </div>

      {/* Shop by Room Strip */}
      <div className="mt-24 max-w-7xl mx-auto">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 px-2">Shop by Room</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <Link to="/r/living" className="relative h-72 rounded-2xl overflow-hidden cursor-pointer group shadow-lg">
                <img src="/images/living-room.jpg" className="w-full h-full object-cover transition duration-700 group-hover:scale-105" alt="Living Room"/>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-8">
                    <div>
                      <h4 className="text-white text-3xl font-bold mb-2">Living Room</h4>
                      <p className="text-yellow-300 font-medium flex items-center gap-2 group-hover:gap-4 transition-all">
                        Shop Now <span className="text-xl">→</span>
                      </p>
                    </div>
                </div>
             </Link>
             <Link to="/r/office" className="relative h-72 rounded-2xl overflow-hidden cursor-pointer group shadow-lg">
                <img src="/images/office-light.jpg" className="w-full h-full object-cover transition duration-700 group-hover:scale-105" alt="Office"/>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-8">
                    <div>
                      <h4 className="text-white text-3xl font-bold mb-2">Workspace</h4>
                      <p className="text-yellow-300 font-medium flex items-center gap-2 group-hover:gap-4 transition-all">
                        Shop Now <span className="text-xl">→</span>
                      </p>
                    </div>
                </div>
             </Link>
        </div>
      </div>

    </section>
  );
}