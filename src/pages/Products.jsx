import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiSearch, FiShoppingCart, FiFilter, FiChevronDown } from "react-icons/fi";
import { motion } from "framer-motion";
import supabase from "../supabaseClient"; 

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Filter States
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [sortOption, setSortOption] = useState("Featured");

  // Load Products
  useEffect(() => {
    fetchProducts();
  }, []);

  // Filter Logic (Automatic run jab kuch bhi change ho)
  useEffect(() => {
    applyFilters();
  }, [searchQuery, selectedCategory, sortOption, products]);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase.from("Products").select("*");
      if (error) throw error;
      setProducts(data || []);
      setFilteredProducts(data || []);
    } catch (error) {
      console.error("Error fetching products:", error.message);
    } finally {
      setLoading(false);
    }
  };

  const applyFilters = () => {
    let updatedList = [...products];

    // 1. Search Filter
    if (searchQuery) {
      updatedList = updatedList.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // 2. Category Filter (Indoor, Outdoor, Industrial)
    if (selectedCategory !== "All Categories") {
      updatedList = updatedList.filter(
        (item) => item.category === selectedCategory
      );
    }

    // 3. Sorting
    if (sortOption === "Price: Low to High") {
      updatedList.sort((a, b) => a.price - b.price);
    } else if (sortOption === "Price: High to Low") {
      updatedList.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(updatedList);
  };

  // 🔹 Categories List (Yaha Industrial add kiya hai)
  const categories = ["All Categories", "Indoor", "Outdoor", "Industrial"];

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-24 pb-20 px-4 md:px-10 font-sans">
      
      {/* 🔹 CLASSY CONTROL BAR */}
      <div className="max-w-7xl mx-auto mb-10">
        <div className="bg-[#111] border border-gray-800 rounded-2xl p-4 flex flex-col md:flex-row items-center gap-4 shadow-xl">
          
          {/* 🔍 Search Input */}
          <div className="relative flex-1 w-full">
            <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#0a0a0a] text-white pl-12 pr-4 py-3 rounded-xl border border-gray-700 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 outline-none transition-all placeholder-gray-500"
            />
          </div>

          {/* 📂 Category Dropdown (Main Feature) */}
          <div className="relative w-full md:w-56">
            <div className="relative">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full appearance-none bg-[#0a0a0a] text-white pl-4 pr-10 py-3 rounded-xl border border-gray-700 focus:border-yellow-500 outline-none cursor-pointer hover:bg-[#151515] transition-colors"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
              <FiChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
            </div>
          </div>

          {/* 🔃 Sort Dropdown */}
          <div className="relative w-full md:w-48">
             <div className="relative">
              <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                className="w-full appearance-none bg-[#0a0a0a] text-white pl-4 pr-10 py-3 rounded-xl border border-gray-700 focus:border-yellow-500 outline-none cursor-pointer hover:bg-[#151515] transition-colors"
              >
                <option>Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
              <FiFilter className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
            </div>
          </div>

        </div>
      </div>

      {/* 🛍️ PRODUCT GRID (Single Grid View) */}
      {loading ? (
        <div className="text-center py-20 text-gray-400 text-lg animate-pulse">
          Loading amazing lights...
        </div>
      ) : (
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="group relative bg-[#111] border border-gray-800 rounded-2xl overflow-hidden hover:border-gray-600 hover:shadow-2xl transition-all duration-300"
              >
                {/* Image Container */}
                <Link to={`/product/${product.id}`} className="block h-64 overflow-hidden bg-white relative">
                  {product.image ? (
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-500">No Image</div>
                  )}
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all opacity-0 group-hover:opacity-100" />
                </Link>

                {/* Product Info */}
                <div className="p-5">
                  <div className="text-xs text-yellow-500 font-semibold mb-1 uppercase tracking-wider">
                    {product.category || "General"}
                  </div>
                  <Link to={`/product/${product.id}`}>
                    <h3 className="text-lg font-bold text-white mb-2 truncate hover:text-yellow-400 transition-colors">
                      {product.name}
                    </h3>
                  </Link>
                  
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-xl font-bold text-white">₹{product.price}</span>
                    
                    <Link 
                      to={`/product/${product.id}`}
                      className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-yellow-400 hover:bg-yellow-400 hover:text-black transition-all"
                    >
                      <FiShoppingCart />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full text-center py-20 bg-[#111] rounded-2xl border border-dashed border-gray-800">
              <p className="text-xl text-gray-400">No products found in "{selectedCategory}".</p>
              <button 
                onClick={() => {setSearchQuery(""); setSelectedCategory("All Categories");}}
                className="mt-4 text-yellow-400 hover:underline"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Shop;