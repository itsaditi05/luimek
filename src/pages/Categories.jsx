import React from "react";
import { motion } from "framer-motion";

const categories = [
  {
    name: "Indoor Lights",
    desc: "Elegant indoor lighting solutions that bring warmth and brilliance to every corner of your space.",
    img: "https://i.pinimg.com/1200x/fb/3d/19/fb3d19712659c516d401a9c1844ea7b5.jpg",
  },
  {
    name: "Ceiling Lights",
    desc: "Modern ceiling fixtures that add brilliance and architectural charm to your interiors.",
    img: "/products/ceiling-light.png",
  },
   {
    name: "Hanging Lights",
    desc: "Suspended lights that add style and focused illumination, perfect for enhancing dining areas, bedrooms, or living spaces..",
    img: "/products/collection1.png",
  },
  {
    name: "Outdoor Lights",
    desc: "Weatherproof outdoor lighting to brighten pathways, balconies, and exteriors with style.",
    img: "https://i.pinimg.com/1200x/6d/dc/da/6ddcda63e622997d69102c311000ae7d.jpg",
  },
   {
    name: "Gate Lights",
    desc: "Stylish gate and pillar lights that give your home an inviting and luxurious entrance.",
    img: "https://i.pinimg.com/736x/da/13/15/da1315179db26ff0166e9b4ac7dc893a.jpg",
  },
  {
    name: "Garden Lights",
    desc: "Eco-friendly lights to enhance the beauty of your garden and create magical outdoor evenings.",
    img: "https://i.pinimg.com/736x/0d/95/4a/0d954a329d4ab66dc2292f9988fbec01.jpg",
  },
   {
    name: "Wall Washers",
    desc: "Lights designed to evenly spread illumination across a wall’s surface, highlighting its texture or color and creating a smooth, elegant visual effect.",
    img: "products/wall-washer.png",
  },
  {
    name: "Street-Lights",
    desc: "High-performance LED street lights built for highways and expressways",
    img: "https://i.pinimg.com/736x/16/be/48/16be48c96bddc96a309077792b354ff3.jpg",
  },
  
  {
    name: "Industrial Lights",
    desc: "High-intensity, durable lights designed for factories, warehouses, and large-scale operations.",
    img: "/products/industrial-light.png",
  },
  
  
 
 
 
];

const Categories = () => {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white py-20 px-6">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-yellow-400 mb-4">Lighting Categories</h1>
        <p className="text-gray-300 text-lg">
          Explore our wide range of lighting types for every space and occasion ✨
        </p>
      </div>

      <div className="max-w-6xl mx-auto space-y-20">
        {categories.map((cat, index) => (
          <motion.div
            key={cat.name}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`flex flex-col md:flex-row items-center gap-10 ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Text */}
            <div className="md:w-1/2">
              <h2 className="text-3xl font-semibold text-yellow-400 mb-3">
                {cat.name}
              </h2>
              <p className="text-gray-300 leading-relaxed">{cat.desc}</p>
            </div>

            {/* Image */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="md:w-1/2 overflow-hidden rounded-2xl shadow-lg border border-yellow-500/30"
            >
              <img
                src={cat.img}
                alt={cat.name}
                className="w-full h-64 object-cover hover:brightness-110 transition duration-300"
              />
            </motion.div>
          </motion.div>
        ))}
      </div>
      
    </div>
  );
};

export default Categories;
