import React, { useState, useContext } from 'react'; // ✅ useContext added
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; 
import { ShopContext } from '../context/ShopContext'; // ✅ ShopContext Imported

// --- DATA UPDATED WITH REAL IDs ---
// Maine IDs ko update kiya hai taaki wo aapke 'AllProducts' list se match karein.
// Agar ID match nahi karegi, toh galat product open hoga.
const products = [
  { 
    id: 7, // (Original ID 1 tha, par Main list mein Garden Light ID 7 hai)
    name: "Moodlight LED Recess Panel", 
    price: 529, 
    mrp: 1000, 
    discount: "47% OFF",
    image: "/products/garden light.jpg",
    options: { label: "Size", items: ["10W", "15W"] },
    styles: { label: "Style", items: ["Round", "Square"] }
  },
  { 
    id: 18, // (Main list mein Industrial Light ID 18 hai)
    name: "Industrial-Light", 
    price: 1200, 
    mrp: 1800, 
    discount: "46% OFF",
    image: "/products/industrial-light.png",
    options: { label: "Wattage", items: ["50W"] },
    styles: { label: "Color", items: ["Cool White"] }
  },
  { 
    id: 5, // (Main list mein Cylinder ID 5 hai)
    name: "Ovel Cylinder Light", 
    price: 179, 
    mrp: 200, 
    discount: "11% OFF",
    image: "/products/cylinder.jpg",
    options: { label: "Size", items: ["2W"] },
    styles: { label: "Color", items: ["Warm"] }
  },
  { 
    id: 23, // (Main list mein Street Glass ID 23 hai)
    name: "Street-Light Glass Lens", 
    price: 1800, 
    mrp: 2800, 
    discount: "35% OFF",
    image: "/products/Street-Glass-Lens.jpg",
    options: { label: "Wattage", items: ["100W", "150W"] },
    styles: { label: "Color", items: ["Cool"] }
  }
];

const PopularProducts = () => {
  return (
    <section className="w-full bg-[#2a2a2a] py-10 md:py-16 px-2 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-4xl font-semibold text-white tracking-wide">Popular Products</h2>
            <p className="text-gray-400 mt-2 text-xs md:text-base font-light px-4">
                Set the perfect ambience with innovative Lighting Solutions
            </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
          {products.map((product) => (
             <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="flex justify-center mt-8 md:mt-12 gap-4">
            <Link to="/products">
                <button className="bg-[#374151] hover:bg-[#4b5563] text-white px-6 py-2 rounded shadow transition text-xs md:text-sm font-medium">
                    View all
                </button>
            </Link>
        </div>
      </div>
    </section>
  );
};

// Internal Logic Component
const ProductCard = ({ product }) => {
    const [selectedOption, setSelectedOption] = useState(product.options.items[0]);
    const [selectedStyle, setSelectedStyle] = useState(product.styles.items[0]);
    
    // ✅ 1. Get AddToCart Function
    const { addToCart } = useContext(ShopContext);

    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#dcdcdc] rounded-lg overflow-hidden flex flex-col h-full hover:shadow-xl transition-shadow duration-300"
        >
            {/* IMAGE - Clickable Link */}
            <Link to={`/product/${product.id}`} className="bg-white p-3 md:p-6 h-32 md:h-48 flex items-center justify-center relative cursor-pointer block">
                <img 
                    src={product.image} 
                    alt={product.name} 
                    className="max-h-full max-w-full object-contain hover:scale-105 transition duration-500" 
                    onError={(e) => {e.target.src = "https://via.placeholder.com/300?text=No+Image"}}
                />
            </Link>

            {/* Content Area */}
            <div className="p-2 md:p-4 flex flex-col flex-grow bg-[#d4d3d1]/30">
                
                {/* TITLE - Clickable Link */}
                <Link to={`/product/${product.id}`}>
                    <h3 className="text-gray-800 font-medium text-xs md:text-sm mb-2 md:mb-4 line-clamp-2 h-8 md:h-10 leading-tight hover:text-orange-600 transition">
                        {product.name}
                    </h3>
                </Link>
                
                {/* Options (Size/Wattage) */}
                <div className="mb-2 md:mb-3">
                    <span className="text-[10px] md:text-xs text-gray-500 block mb-1">{product.options.label}</span>
                    <div className="flex gap-1 md:gap-2 flex-wrap">
                        {product.options.items.map((item) => (
                            <button 
                                key={item} 
                                onClick={() => setSelectedOption(item)} 
                                className={`text-[10px] md:text-xs px-1.5 py-0.5 md:px-2 md:py-1 border rounded ${selectedOption === item ? 'border-orange-500 text-gray-800 bg-white' : 'border-gray-400 text-gray-500 bg-transparent'}`}
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Styles (Color/Type) */}
                <div className="mb-3 md:mb-4">
                    <span className="text-[10px] md:text-xs text-gray-500 block mb-1">{product.styles.label}</span>
                    <div className="flex gap-1 md:gap-2">
                        {product.styles.items.map((item) => (
                            product.styles.label === "Color" ? (
                                <button 
                                    key={item} 
                                    onClick={() => setSelectedStyle(item)}
                                    className={`w-4 h-4 md:w-5 md:h-5 border rounded-sm ${selectedStyle === item ? 'ring-1 ring-offset-1 ring-orange-500' : ''} ${item.includes('Warm') ? 'bg-orange-200 border-orange-400' : 'bg-blue-100 border-blue-300'}`}
                                ></button>
                            ) : (
                                <button 
                                    key={item} 
                                    onClick={() => setSelectedStyle(item)} 
                                    className={`text-[10px] md:text-xs px-1.5 py-0.5 md:px-2 md:py-1 border rounded ${selectedStyle === item ? 'border-orange-500 text-gray-800 bg-white' : 'border-gray-400 text-gray-500 bg-transparent'}`}
                                >
                                    {item}
                                </button>
                            )
                        ))}
                    </div>
                </div>

                {/* Price */}
                <div className="mt-auto mb-2 md:mb-4">
                    <div className="flex flex-wrap items-baseline gap-1 md:gap-2 text-[10px] md:text-sm">
                        <span className="text-gray-600 hidden md:inline">From</span>
                        <span className="text-gray-900 font-bold text-sm md:text-base">₹{product.price}</span>
                        <span className="text-gray-500 line-through text-[10px] md:text-xs">₹{product.mrp}</span>
                        <span className="text-green-600 font-bold text-[10px] md:text-xs">{product.discount}</span>
                    </div>
                </div>

                {/* ✅ 2. Add to Cart Button Logic */}
                <button 
                    onClick={() => addToCart(product.id)}
                    className="w-full bg-[#212529] text-white py-2 md:py-2.5 rounded text-xs md:text-sm font-medium hover:bg-black transition active:scale-95"
                >
                    Add to cart
                </button>
            </div>
        </motion.div>
    );
};

export default PopularProducts;