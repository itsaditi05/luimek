import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Filter, SlidersHorizontal } from 'lucide-react';

// --- FULL DATA WITH 23 PRODUCTS ---
const allProducts = [
  { id: 1, name: "", price: 529, mrp: 1000, category: "Indoor", image: "" },
  { id: 2, name: "Alpha Light", price: 539, mrp: 1000, category: "Indoor", image: "/products/Alpha.jpg" },
  { id: 3, name: "Alpha 2", price: 450, mrp: 800, category: "Outdoor", image: "/products/alpha2.jpg" },
  { id: 4, name: "Collection 1", price: 2500, mrp: 4000, category: "Indoor", image: "/products/collection1.png" },
  { id: 5, name: "Cylinder", price: 179, mrp: 200, category: "Indoor", image: "/products/cylinder.jpg" },
  { id: 6, name: "Down Slime", price: 1200, mrp: 1800, category: "Indoor", image: "/products/Down-SLime.jpg" },
  { id: 7, name: "Garden Light", price: 529, mrp: 1000, category: "Outdoor", image: "/products/garden light.jpg" },
  { id: 8, name: "Garden Light 2", price: 539, mrp: 1000, category: "Outdoor", image: "/products/garden light2.jpg" },
  { id: 9, name: "Garden Light 3", price: 450, mrp: 800, category: "Outdoor", image: "/products/garden light3.jpg" },
  { id: 10, name: "Hanging Light", price: 2500, mrp: 4000, category: "Outdoor", image: "/products/hanging-light.png" },
  { id: 11, name: "Image 1", price: 179, mrp: 200, category: "Indoor", image: "/products/img1.jpg" },
  { id: 12, name: "Image 3", price: 1200, mrp: 1800, category: "Outdoor", image: "/products/img3.jpg" },
  { id: 13, name: "Image 4", price: 529, mrp: 1000, category: "Outdoor", image: "/products/img4.jpg" },
  { id: 14, name: "Image 5", price: 539, mrp: 1000, category: "Indoor", image: "/products/img5.jpg" },
  { id: 15, name: "Image 6", price: 450, mrp: 800, category: "Outdoor", image: "/products/img6.jpg" },
  { id: 16, name: "Image 7", price: 2500, mrp: 4000, category: "Industrial", image: "/products/img7.jpg" },
  { id: 17, name: "Image 8", price: 179, mrp: 200, category: "Indoor", image: "/products/img8.jpg" },
  { id: 18, name: "Industrial Light", price: 1200, mrp: 1800, category: "Outdoor", image: "/products/industrial-light.png" },
  { id: 19, name: "Backchowk Flood Light", price: 1500, mrp: 2500, category: "Industrial", image: "/products/Backchowk-Flood.jpg" },
  { id: 20, name: "Highway LED", price: 2200, mrp: 3500, category: "Industrial", image: "/products/highyway-led.jpg" },
  { id: 21, name: "LED Wellglass", price: 850, mrp: 1200, category: "Industrial", image: "/products/Led-Wellglass.jpg" },
  { id: 22, name: "Modular Flood Light", price: 3000, mrp: 4500, category: "Industrial", image: "/products/Modular-Flood.jpg" },
  { id: 23, name: "Street Glass Lens", price: 1800, mrp: 2800, category: "Industrial", image: "/products/Street-Glass-lens.jpg" },
];

const AllProducts = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter Logic
  const filteredProducts = selectedCategory === "All" 
    ? allProducts 
    : allProducts.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50 pt-4 pb-20">
      
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Our Products</h1>
        <p className="text-gray-500 text-sm mt-1">Explore our premium collection</p>
      </div>

      {/* Filter Tabs (Scrollable on Mobile) */}
      <div className="sticky top-20 z-40 bg-white shadow-sm py-3 mb-6">
        <div className="max-w-7xl mx-auto px-4 flex gap-3 overflow-x-auto no-scrollbar">
          {["All", "Indoor", "Outdoor", "Industrial"].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition border ${
                selectedCategory === cat 
                  ? "bg-black text-white border-black" 
                  : "bg-white text-gray-600 border-gray-200 hover:border-gray-400"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto px-2 md:px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
          {filteredProducts.map((product) => (
            <Link to={`/product/${product.id}`} key={product.id} className="group">
              <div className="bg-white rounded-lg overflow-hidden border border-gray-100 hover:shadow-lg transition">
                
                {/* --- IMAGE CONTAINER (FIXED ZOOM ISSUE) --- */}
                {/* Added 'bg-white', 'flex', 'justify-center' to center the image */}
                <div className="h-32 md:h-56 bg-white relative overflow-hidden flex items-center justify-center">
                   <img 
                     src={product.image} 
                     alt={product.name} 
                     // Added 'object-contain' and 'p-2' to prevent cutting
                     className="w-full h-full object-contain p-2 group-hover:scale-105 transition duration-500" 
                     onError={(e) => {e.target.src = "https://via.placeholder.com/300?text=No+Image"}}
                   />
                   
                   {/* Sale Tag */}
                   <span className="absolute top-2 left-2 bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-sm">SALE</span>
                </div>

                {/* Details */}
                <div className="p-3">
                  <p className="text-[10px] text-gray-500 uppercase font-semibold">{product.category}</p>
                  <h3 className="text-sm md:text-base font-medium text-gray-800 truncate">{product.name}</h3>
                  
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-sm md:text-lg font-bold">₹{product.price}</span>
                    <span className="text-xs text-gray-400 line-through">₹{product.mrp}</span>
                  </div>

                  <button className="w-full mt-3 bg-black text-white text-xs md:text-sm py-2 rounded hover:bg-gray-800 transition">
                    View Details
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

    </div>
  );
};

export default AllProducts;