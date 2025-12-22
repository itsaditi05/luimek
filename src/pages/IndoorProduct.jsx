import React, { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaFilter, FaSortAmountDown, FaHeart, FaRegHeart, FaShoppingCart, FaTimes } from "react-icons/fa";

// ⚠️ DATA & API IMPORTS
import indoorProducts from "../data/indoor"; 
import { addToCart } from "../data/cartApi";
import { addToWishlist } from "../data/wishlistApi";

// ----------------------------------------------------------------------
// 🔧 HELPER: PRODUCT CARD COMPONENT
// ----------------------------------------------------------------------
const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [wishlisted, setWishlisted] = useState(false);

  // Price Logic (Handles strings "4,500" and numbers 4500)
  const priceString = String(product.price).replace(/,/g, "");
  const numericPrice = parseInt(priceString);
  const mrp = Math.round(numericPrice / 0.7).toLocaleString(); // Fake 30% markup

  const handleAddToCart = async (e) => {
    e.preventDefault(); // Prevent link click
    try {
      await addToCart(product);
      alert(`${product.name} added to cart!`);
    } catch (error) {
      alert("Please login to add to cart.");
    }
  };

  const toggleWishlist = (e) => {
    e.preventDefault();
    setWishlisted(!wishlisted);
    addToWishlist(product);
  };

  return (
    <Link to={`/indoor/${product.id}`} className="block h-full">
      <div 
        className="group relative bg-[#151515] border border-gray-800 rounded-xl overflow-hidden hover:shadow-[0_0_20px_rgba(255,215,0,0.15)] transition-all duration-300 h-full flex flex-col"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        
        {/* IMAGE SECTION */}
        <div className="relative h-64 overflow-hidden bg-white/5">
          <span className="absolute top-2 left-2 bg-yellow-500 text-black text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider z-10">
            30% OFF
          </span>
          
          <button 
            onClick={toggleWishlist}
            className="absolute top-2 right-2 z-10 p-2 bg-black/50 rounded-full hover:bg-red-500 hover:text-white transition backdrop-blur-sm text-gray-300"
          >
            {wishlisted ? <FaHeart className="text-white" /> : <FaRegHeart />}
          </button>

          <img
            src={product.image}
            alt={product.name}
            className={`w-full h-full object-contain transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}
          />

          {/* Quick Add Button (Visible on Hover for Desktop, Always for Mobile) */}
          <div className={`absolute bottom-0 left-0 w-full p-2 transition-all duration-300 ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'} hidden lg:block`}>
            <button 
              onClick={handleAddToCart}
              className="w-full bg-white text-black font-bold py-2 rounded shadow-lg hover:bg-yellow-400 flex items-center justify-center gap-2"
            >
              <FaShoppingCart /> Quick Add
            </button>
          </div>
        </div>

        {/* DETAILS SECTION */}
        <div className="p-4 flex flex-col flex-grow">
          <h3 className="text-white font-medium text-lg truncate" title={product.name}>
            {product.name}
          </h3>
          <p className="text-gray-400 text-sm mt-1 line-clamp-2 text-xs flex-grow">
            {product.descriptionShort}
          </p>

          <div className="mt-4 flex items-end gap-2">
            <span className="text-yellow-400 font-bold text-xl">₹{product.price}</span>
            <span className="text-gray-600 text-sm line-through">₹{mrp}</span>
            <span className="text-green-500 text-xs font-bold">(30% off)</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

// ----------------------------------------------------------------------
// 🚀 MAIN PAGE COMPONENT
// ----------------------------------------------------------------------
const IndoorProduct = () => {
  const [isMobileFilterOpen, setMobileFilterOpen] = useState(false);
  const [sortOption, setSortOption] = useState("recommended"); // recommended, lowHigh, highLow
  const [priceFilter, setPriceFilter] = useState("all"); // all, under1000, 1000to3000, above3000

  // 🌍 SEO: Update Title
  useEffect(() => {
    document.title = "Indoor Lighting Collection | Luimek";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Shop premium Indoor Lights. Chandeliers, Wall Lamps, and Profile Lights at best prices.");
    }
  }, []);

  // 🔄 FILTER & SORT LOGIC
  const filteredProducts = useMemo(() => {
    let data = [...indoorProducts];

    // 1. Filter by Price
    if (priceFilter !== "all") {
      data = data.filter((item) => {
        const price = parseInt(String(item.price).replace(/,/g, ""));
        if (priceFilter === "under1000") return price < 1000;
        if (priceFilter === "1000to3000") return price >= 1000 && price <= 3000;
        if (priceFilter === "above3000") return price > 3000;
        return true;
      });
    }

    // 2. Sort Data
    if (sortOption === "lowHigh") {
      data.sort((a, b) => parseInt(String(a.price).replace(/,/g, "")) - parseInt(String(b.price).replace(/,/g, "")));
    } else if (sortOption === "highLow") {
      data.sort((a, b) => parseInt(String(b.price).replace(/,/g, "")) - parseInt(String(a.price).replace(/,/g, "")));
    }

    return data;
  }, [sortOption, priceFilter]);

  return (
    <div className="bg-black min-h-screen text-white pt-24 pb-20">
      
      {/* 📱 MOBILE TOP BAR (Filter & Sort) */}
      <div className="lg:hidden fixed top-20 left-0 w-full bg-[#111] z-40 border-b border-gray-800 flex">
        <button 
          onClick={() => setMobileFilterOpen(true)}
          className="flex-1 py-3 flex items-center justify-center gap-2 border-r border-gray-800 active:bg-gray-800"
        >
          <FaFilter className="text-yellow-500" /> Filters
        </button>
        <div className="flex-1 py-3 flex items-center justify-center gap-2 relative">
          <FaSortAmountDown className="text-yellow-500" />
          <select 
            onChange={(e) => setSortOption(e.target.value)} 
            className="bg-transparent outline-none appearance-none text-white text-sm font-medium"
            value={sortOption}
          >
            <option value="recommended" className="bg-black">Sort By</option>
            <option value="lowHigh" className="bg-black">Price: Low to High</option>
            <option value="highLow" className="bg-black">Price: High to Low</option>
          </select>
        </div>
      </div>

      <div className="container mx-auto px-4 flex gap-8">
        
        {/* 🖥️ DESKTOP SIDEBAR (Filters) */}
        <aside className="hidden lg:block w-64 sticky top-24 h-[80vh] overflow-y-auto pr-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Filters</h2>
            <span className="text-xs text-gray-500">{filteredProducts.length} Items</span>
          </div>

          {/* Price Filter */}
          <div className="mb-8">
            <h3 className="text-sm font-bold uppercase text-gray-400 mb-3 tracking-wider">Price</h3>
            <div className="space-y-2">
              {[
                { label: "All Prices", val: "all" },
                { label: "Under ₹1,000", val: "under1000" },
                { label: "₹1,000 - ₹3,000", val: "1000to3000" },
                { label: "Above ₹3,000", val: "above3000" }
              ].map((opt) => (
                <label key={opt.val} className="flex items-center gap-3 cursor-pointer group">
                  <div className={`w-4 h-4 rounded-full border border-gray-500 flex items-center justify-center ${priceFilter === opt.val ? 'border-yellow-500' : ''}`}>
                    {priceFilter === opt.val && <div className="w-2 h-2 bg-yellow-500 rounded-full" />}
                  </div>
                  <input 
                    type="radio" 
                    name="price" 
                    value={opt.val} 
                    checked={priceFilter === opt.val} 
                    onChange={() => setPriceFilter(opt.val)} 
                    className="hidden" 
                  />
                  <span className={`text-sm ${priceFilter === opt.val ? 'text-white' : 'text-gray-400 group-hover:text-white'}`}>
                    {opt.label}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Sort Filter (Desktop) */}
          <div className="mb-8">
            <h3 className="text-sm font-bold uppercase text-gray-400 mb-3 tracking-wider">Sort By</h3>
            <select 
              value={sortOption} 
              onChange={(e) => setSortOption(e.target.value)}
              className="w-full bg-[#111] border border-gray-700 text-gray-300 rounded p-2 text-sm outline-none focus:border-yellow-500"
            >
              <option value="recommended">Recommended</option>
              <option value="lowHigh">Price: Low to High</option>
              <option value="highLow">Price: High to Low</option>
            </select>
          </div>
        </aside>

        {/* 📦 PRODUCT GRID AREA */}
        <div className="flex-1">
          {/* Header (Desktop Only) */}
          <div className="hidden lg:flex justify-between items-end mb-6">
            <div>
              <h1 className="text-3xl font-bold text-yellow-400">Indoor Collection</h1>
              <p className="text-gray-400 mt-1">Premium lighting for modern interiors</p>
            </div>
          </div>

          {/* Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 mt-14 lg:mt-0">
              {filteredProducts.map((item) => (
                <ProductCard key={item.id} product={item} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <h2 className="text-2xl font-bold text-gray-500">No products found.</h2>
              <button 
                onClick={() => setPriceFilter("all")} 
                className="mt-4 text-yellow-500 underline"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>

      </div>

      {/* 📱 MOBILE FILTER DRAWER (Slide Up) */}
      <AnimatePresence>
        {isMobileFilterOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 z-50 lg:hidden"
              onClick={() => setMobileFilterOpen(false)}
            />
            <motion.div 
              initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "100%" }} transition={{ type: "spring", damping: 25, stiffness: 500 }}
              className="fixed bottom-0 left-0 w-full bg-[#151515] z-50 rounded-t-2xl p-6 lg:hidden border-t border-gray-700"
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">Filters</h2>
                <button onClick={() => setMobileFilterOpen(false)}><FaTimes className="text-xl" /></button>
              </div>

              <h3 className="text-sm font-bold uppercase text-gray-400 mb-3">Price Range</h3>
              <div className="space-y-3 mb-8">
                {[
                  { label: "All Prices", val: "all" },
                  { label: "Under ₹1,000", val: "under1000" },
                  { label: "₹1,000 - ₹3,000", val: "1000to3000" },
                  { label: "Above ₹3,000", val: "above3000" }
                ].map((opt) => (
                  <label key={opt.val} className="flex items-center gap-3 p-3 bg-black rounded-lg border border-gray-800">
                    <input 
                      type="radio" 
                      name="mobilePrice" 
                      checked={priceFilter === opt.val} 
                      onChange={() => setPriceFilter(opt.val)} 
                      className="accent-yellow-500 w-5 h-5" 
                    />
                    <span className="text-white">{opt.label}</span>
                  </label>
                ))}
              </div>

              <button 
                onClick={() => setMobileFilterOpen(false)}
                className="w-full bg-yellow-500 text-black font-bold py-3 rounded-lg"
              >
                Apply Filters
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>

    </div>
  );
};

export default IndoorProduct;