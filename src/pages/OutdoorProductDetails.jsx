import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaHeart, FaRegHeart, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

// ⚠️ DATA IMPORT
import outdoorProducts from "../data/outdoor"; 

// ⚠️ API IMPORTS
import { addToCart } from "../data/cartApi";
import { addToWishlist } from "../data/wishlistApi";

export default function OutdoorProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  // 1️⃣ Product Dhoondna
  const product = outdoorProducts.find((p) => p.id === Number(id));

  const [wishlist, setWishlist] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [readMore, setReadMore] = useState(false);

  // Agar product nahi mila
  if (!product) {
    return (
      <div className="min-h-screen bg-black text-white pt-32 text-center">
        <h2 className="text-2xl">Product Not Found</h2>
        <button onClick={() => navigate(-1)} className="text-yellow-500 underline mt-4">
          Go Back
        </button>
      </div>
    );
  }

  // ⭐ BUTTON FUNCTION: ADD TO CART
  const handleAddToCart = async () => {
    try {
      if (!product) return;
      await addToCart(product); 
      alert(`${product.name} added to cart!`);
    } catch (error) {
      console.error("Cart Error:", error);
      if (window.confirm("You need to login to add to cart. Go to login page?")) {
        navigate("/login");
      }
    }
  };

  // ⭐ BUTTON FUNCTION: BUY NOW
  const handleBuyNow = async () => {
    try {
      if (!product) return;
      await addToCart(product);
      navigate("/checkout"); 
    } catch (error) {
      console.error("Buy Error:", error);
      if (window.confirm("You need to login to buy. Go to login page?")) {
        navigate("/login");
      }
    }
  };

  const handleWishlist = async () => {
    try {
      await addToWishlist(product);
      setWishlist(true);
      alert("Added to Wishlist!");
    } catch (error) {
      console.log(error); 
    }
  };

  // 🛠️ FIXED: Safe Price Calculation Logic
  // Hum pehle check karenge ki price string hai ya number
  let oldPrice = "0";
  if (product.price) {
      // String() mein convert karne se ye number aur text dono ke liye chalega
      const numericPrice = parseInt(String(product.price).replace(/,/g, ""));
      oldPrice = Math.round(numericPrice / 0.7).toLocaleString();
  }

  return (
    <div className="bg-black min-h-screen text-white pt-32 px-10 relative">

      {/* MAIN CONTAINER */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

        {/* LEFT – IMAGE */}
        <div className="rounded-xl overflow-hidden shadow-lg bg-white/5 p-4 relative group">
           {/* Sale Badge */}
           <div className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded z-10 shadow-md">
                30% OFF
           </div>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-[550px] object-contain rounded-lg transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* RIGHT – DETAILS */}
        <div>
          {/* HEADER */}
          <div className="flex justify-between items-center">
            <h1 className="text-4xl font-bold">{product.name}</h1>
            <button onClick={handleWishlist}>
              {wishlist ? (
                <FaHeart className="text-red-500 text-3xl" />
              ) : (
                <FaRegHeart className="text-gray-400 text-3xl" />
              )}
            </button>
          </div>

          {/* PRICE SECTION */}
          <div className="mt-4 flex items-end gap-3">
             <p className="text-yellow-400 text-3xl font-semibold">₹{product.price}</p>
             <p className="text-gray-500 text-xl line-through mb-1">₹{oldPrice}</p>
             <span className="text-green-500 text-sm font-bold mb-2">Save 30%</span>
          </div>

          <p className="text-gray-300 mt-4">{product.descriptionShort}</p>

          {/* LONG DESCRIPTION */}
          {product.descriptionLong && (
            <div className="mt-3 text-gray-400 leading-7">
              {readMore ? (
                <p>{product.descriptionLong}</p>
              ) : (
                <p>{product.descriptionLong.substring(0, 120)}...</p>
              )}

              <button
                onClick={() => setReadMore(!readMore)}
                className="text-yellow-400 mt-2 underline"
              >
                {readMore ? "Read Less" : "Read More"}
              </button>
            </div>
          )}

          {/* SPECS SECTION */}
          {product.specs && (
            <div className="mt-6 bg-[#111] p-4 rounded-lg border border-gray-800">
              <h3 className="text-xl font-semibold mb-3">Specifications</h3>
              <ul className="list-disc ml-6 text-gray-300 space-y-1">
                {product.specs.map((spec, index) => (
                  <li key={index}>{spec}</li>
                ))}
              </ul>
            </div>
          )}

          {/* BUTTONS */}
          <div className="flex gap-4 mt-8">
            <button 
              onClick={handleAddToCart}
              className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold shadow hover:bg-yellow-400 transition transform active:scale-95"
            >
              Add to Cart
            </button>

            <button 
              onClick={handleBuyNow}
              className="bg-orange-600 px-6 py-3 rounded-lg font-semibold shadow hover:bg-orange-500 transition transform active:scale-95"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>

      {/* VIDEO BUTTON & POPUP LOGIC */}
      <button
        onClick={() => setShowVideo(true)}
        className="fixed right-6 top-1/2 transform -translate-y-1/2 bg-yellow-500 text-black p-4 rounded-full shadow-xl hover:scale-110 transition z-50"
      >
        ▶
      </button>

      {showVideo && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.4 }}
          className="fixed top-0 right-0 w-[420px] h-full bg-black border-l border-gray-700 p-6 z-50"
        >
          <div className="flex justify-between mb-4">
            <h2 className="text-xl font-semibold">Product Video</h2>
            <button onClick={() => setShowVideo(false)}>
              <FaTimes className="text-gray-300 text-2xl" />
            </button>
          </div>

          {product.video ? (
            <video
              controls
              className="w-full rounded-lg"
              src={product.video}
            ></video>
          ) : (
            <p className="text-gray-400 mt-20">No video uploaded.</p>
          )}
        </motion.div>
      )}

    </div>
  );
}