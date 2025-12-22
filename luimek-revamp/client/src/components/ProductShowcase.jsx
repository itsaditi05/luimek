import React from 'react';
import { ShoppingCart, Heart, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const products = [
  { 
    id: 1, 
    name: "Lumina Pendant Light", 
    price: 1200, 
    originalPrice: 2000, 
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?q=80&w=1935&auto=format&fit=crop" 
  },
  { 
    id: 2, 
    name: "Urban Wall Sconce", 
    price: 850, 
    originalPrice: 1200, 
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=2070&auto=format&fit=crop" 
  },
  { 
    id: 3, 
    name: "Modern Chandelier", 
    price: 4500, 
    originalPrice: 6500, 
    rating: 5.0,
    image: "https://images.unsplash.com/photo-1543198126-a8ad8e47fb22?q=80&w=1974&auto=format&fit=crop" 
  },
  { 
    id: 4, 
    name: "Industrial Table Lamp", 
    price: 1800, 
    originalPrice: 2500, 
    rating: 4.2,
    image: "https://images.unsplash.com/photo-1513506003013-d33d43497c1b?q=80&w=2070&auto=format&fit=crop" 
  }
];

const ProductShowcase = () => {
  return (
    <section className="w-full bg-gray-50 py-10 md:py-20 px-2 md:px-10">
      
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-end mb-6 md:mb-10 px-2">
            <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Trending Now</h2>
                <div className="w-12 md:w-16 h-1 bg-yellow-500 mt-2 rounded-full"></div>
            </div>
            <button className="text-sm md:text-base text-gray-600 hover:text-yellow-600 font-medium transition">View All →</button>
        </div>

        {/* Product Grid - MAJOR CHANGE HERE */}
        {/* grid-cols-2 (mobile par 2) | gap-3 (kam gap mobile par) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8">
          {products.map((product) => {
            const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

            return (
              <motion.div 
                key={product.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-lg md:rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group relative border border-gray-100"
              >
                {/* Sale Badge (Smaller on mobile) */}
                <div className="absolute top-2 left-2 bg-red-500 text-white text-[10px] md:text-xs font-bold px-2 py-1 rounded-full z-10">
                  {discount}% OFF
                </div>

                {/* Wishlist Button */}
                <button className="absolute top-2 right-2 bg-white/80 p-1.5 md:p-2 rounded-full shadow-md text-gray-400 hover:text-red-500 transition z-10 backdrop-blur-sm">
                  <Heart size={16} className="md:w-[18px] md:h-[18px]" />
                </button>

                {/* Image (Height reduced for mobile) */}
                <div className="h-40 md:h-64 overflow-hidden relative">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  />
                  
                  {/* Quick Add Button (Desktop Only Hover) */}
                  <button className="hidden md:flex absolute bottom-0 left-0 w-full bg-black text-white py-3 translate-y-full group-hover:translate-y-0 transition duration-300 items-center justify-center gap-2 font-medium">
                    <ShoppingCart size={18} /> Add to Cart
                  </button>
                </div>

                {/* Details (Compact padding for mobile) */}
                <div className="p-3 md:p-4">
                  <div className="flex items-center space-x-1 mb-1">
                    <Star size={12} className="text-yellow-400 fill-yellow-400 md:w-[14px] md:h-[14px]" />
                    <span className="text-[10px] md:text-xs text-gray-500">({product.rating})</span>
                  </div>
                  
                  {/* Title (Smaller on mobile to prevent overflow) */}
                  <h3 className="text-sm md:text-lg font-semibold text-gray-800 truncate">{product.name}</h3>
                  
                  <div className="flex items-center mt-1 md:mt-2 space-x-2 flex-wrap">
                    <span className="text-base md:text-xl font-bold text-gray-900">₹{product.price}</span>
                    <span className="text-xs md:text-sm text-gray-400 line-through">₹{product.originalPrice}</span>
                  </div>

                  {/* Mobile Only: Add to Cart Button (Always visible) */}
                  <button className="md:hidden w-full mt-3 bg-black text-white text-xs py-2 rounded-md font-medium">
                    Add to Cart
                  </button>
                </div>

              </motion.div>
            );
          })}
        </div>
      </div>

    </section>
  );
};

export default ProductShowcase;