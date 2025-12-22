import React from "react";
import { FaHeart, FaShoppingBag, FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../data/cartApi";
import { addToWishlist } from "../data/wishlistApi";

// ⚠️ MAPPED TO YOUR REAL PRODUCT IDs
const products = [
  { 
    id: 1, // Matches '3 in 1 Slime' in Indoor
    name: "3 in 1 Slime",
    price: 549,
    img: "/bestseller/best1.jpg", // Make sure this image exists or use "/indoor/3-in-1-Slime.jpg"
    tag: "HOT SALE",
    category: "indoor"
  },
  { 
    id: 2, // Matches 'Alpha Pro' in Indoor
    name: "Alpha Pro",
    price: 980,
    img: "/bestseller/best2.jpg", // Make sure this image exists
    tag: "TRENDING",
    category: "indoor"
  },
  { 
    id: 304, // Matches 'Flood Light' or similar in Outdoor
    name: "Street Light",
    price: 2100,
    img: "/products/streetlight1.jpg", 
    tag: "HEAVY DUTY",
    category: "outdoor" 
  },
];

const BestSeller = () => {
  const navigate = useNavigate();

  // 🛒 Handle Add to Cart
  const handleAddToCart = async (e, product) => {
    e.stopPropagation(); // Prevent clicking the card itself
    try {
      await addToCart(product);
      alert(`${product.name} added to cart!`);
    } catch (error) {
      if (window.confirm("Please login to add to cart. Go to login?")) {
        navigate("/login");
      }
    }
  };

  // ❤️ Handle Wishlist
  const handleWishlist = async (e, product) => {
    e.stopPropagation();
    try {
      await addToWishlist(product);
      alert("Added to Wishlist!");
    } catch (error) {
      console.log(error);
    }
  };

  // 🔍 Handle View Details
  const handleViewDetails = (product) => {
    navigate(`/${product.category}/${product.id}`);
  };

  return (
    <div className="w-full py-16 bg-white">
      
      {/* Section Title */}
      <h2 className="text-3xl md:text-4xl tracking-[0.3em] font-semibold text-center mb-12 text-gray-900">
        BEST SELLER
      </h2>

      {/* Grid Layout - Responsive */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">

        {products.map((item) => (
          <div
            key={item.id}
            onClick={() => handleViewDetails(item)}
            className="relative group overflow-hidden rounded-xl cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            {/* Product Tag */}
            <span className="absolute top-4 right-4 bg-yellow-500 text-black px-3 py-1 text-[10px] font-bold tracking-wider rounded uppercase z-20">
              {item.tag}
            </span>

            {/* Image */}
            <div className="overflow-hidden h-[400px] md:h-[450px]">
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-full object-cover duration-700 group-hover:scale-110"
              />
            </div>

            {/* Overlay - Hover Icons */}
            {/* On Mobile: Tap image to trigger. On Desktop: Hover to trigger */}
            <div className="
              absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100
              flex items-center justify-center gap-4 transition-all duration-300
            ">
              
              {/* ❤️ Wishlist Button */}
              <button 
                onClick={(e) => handleWishlist(e, item)}
                className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-yellow-500 hover:text-white transition transform hover:scale-110"
                title="Add to Wishlist"
              >
                <FaHeart className="text-lg" />
              </button>

              {/* 🛍️ Add to Cart Button */}
              <button 
                onClick={(e) => handleAddToCart(e, item)}
                className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-yellow-500 hover:text-white transition transform hover:scale-110"
                title="Add to Cart"
              >
                <FaShoppingBag className="text-lg" />
              </button>

              {/* 🔍 View Details Button */}
              <button 
                onClick={(e) => { e.stopPropagation(); handleViewDetails(item); }}
                className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-yellow-500 hover:text-white transition transform hover:scale-110"
                title="View Details"
              >
                <FaSearch className="text-lg" />
              </button>

            </div>

            {/* Product Info (Visible at bottom) */}
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-white text-xl font-bold">{item.name}</h3>
                <p className="text-yellow-400 font-medium">₹{item.price}</p>
            </div>

          </div>
        ))}

      </div>
    </div>
  );
};

export default BestSeller;