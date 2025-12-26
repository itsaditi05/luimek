import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // ✅ Link Import kiya

// ✅ Added 'type' to match your Products Page Filters
const categories = [
  { id: 1, name: "Ceiling Lights", img: "https://i.pinimg.com/1200x/99/c3/84/99c384727bfc3fd305306ace3404163f.jpg", type: "Indoor" },
  { id: 2, name: "Wall Lights", img: "https://i.pinimg.com/1200x/9b/0a/6d/9b0a6de134969adadbfcc4d9a3a42659.jpg", type: "Indoor" },
  { id: 3, name: "Track Lights", img: "https://i.pinimg.com/1200x/26/e7/30/26e7302180bc930b6907b2c1555e2a00.jpg", type: "Indoor" },
  { id: 4, name: "Outdoor", img: "https://i.pinimg.com/736x/7d/de/4d/7dde4d6c20725490c230079fe3ddc1d9.jpg", type: "Outdoor" },
  { id: 5, name: "Street Light", img: "https://i.pinimg.com/736x/1d/9e/cf/1d9ecf68d5858c818daf14ead8555dc2.jpg", type: "Industrial" },
  { id: 6, name: "Industrial", img: "https://i.pinimg.com/1200x/d8/72/b8/d872b8c49f9677f321bdd13146db0119.jpg", type: "Industrial" },
];

const CategorySection = () => {
  return (
    <section className="w-full bg-white py-16 px-4 md:px-10">
      
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Shop By Category</h2>
        <p className="text-gray-600 text-lg">Find the perfect lighting for every space</p>
        <div className="w-20 h-1 bg-yellow-500 mx-auto mt-4 rounded-full"></div>
      </div>

      {/* Categories Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
        {categories.map((cat, i) => (
          <Link to="/products" key={cat.id} state={{ category: cat.type }}> {/* ✅ Link wrapper added */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group flex flex-col items-center cursor-pointer"
            >
              {/* Circular Image Container */}
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-gray-100 shadow-md group-hover:border-yellow-500 group-hover:shadow-xl transition-all duration-300">
                <img 
                  src={cat.img} 
                  alt={cat.name} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
                />
              </div>
              
              {/* Category Name */}
              <h3 className="mt-4 text-lg font-semibold text-gray-800 group-hover:text-yellow-600 transition">
                {cat.name}
              </h3>
            </motion.div>
          </Link>
        ))}
      </div>

    </section>
  );
};

export default CategorySection;