import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { FiShoppingCart, FiHeart, FiPlay, FiCheck, FiTruck, FiShield, FiArrowLeft } from "react-icons/fi";
import supabase from "../supabaseClient"; 

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [product, setProduct] = useState(null);
  const [similarProducts, setSimilarProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [adding, setAdding] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (id) fetchProductDetails();
  }, [id]);

  const fetchProductDetails = async () => {
    try {
      setLoading(true);
      console.log("Fetching Product ID:", id); // Debugging ke liye

      // 1. Fetch Product
      const { data, error } = await supabase
        .from("Products") // Table ka naam check karein
        .select("*")
        .eq("id", id)
        .single();

      if (error) {
        console.error("Supabase Error:", error);
        throw error;
      }
      
      setProduct(data);

      // 2. Fetch Similar Products
      if (data) {
        const { data: related } = await supabase
          .from("Products")
          .select("*")
          .eq("category", data.category)
          .neq("id", data.id)
          .limit(4);
        setSimilarProducts(related || []);
      }

    } catch (error) {
      console.error("Error fetching details:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddToCart = async () => {
    setAdding(true);
    try {
      // 1. Check User
      const { data: { session } } = await supabase.auth.getSession();
      const user = session?.user;

      if (!user) {
        alert("Please login to add items to cart!");
        navigate("/login");
        return;
      }

      // 2. Add to Database
      const { error } = await supabase.from("cart_items").insert({
        user_id: user.id,
        product_id: product.id,
        quantity: 1,
        product_name: product.name,
        price: product.price,
        image: product.image
      });

      if (error) throw error;
      alert("✅ Added to Cart Successfully!");
      
    } catch (err) {
      console.error("Cart Error:", err);
      alert("Could not add to cart. Try again.");
    } finally {
      setAdding(false);
    }
  };

 const handleWishlist = async () => {
    try {
      // 1. Check Login
      const { data: { session } } = await supabase.auth.getSession();
      if (!session?.user) {
        alert("Please Login to use Wishlist");
        navigate("/login");
        return;
      }

      // 2. Check Duplicate
      const { data: existing } = await supabase
        .from("wishlist")
        .select("*")
        .eq("user_id", session.user.id)
        .eq("product_id", product.id)
        .single();

      if (existing) {
        alert("Already in your Wishlist! ❤️");
        return;
      }

      // 3. Add to Wishlist
      const { error } = await supabase.from("wishlist").insert({
        user_id: session.user.id,
        product_id: product.id
      });

      if (error) {
        console.error("Wishlist Error:", error);
        throw error;
      }

      alert("Added to Wishlist Successfully! ❤️");

    } catch (error) {
      alert("Something went wrong. Check console.");
      console.error(error);
    }
  };

  // Loading State
  if (loading) return (
    <div className="min-h-screen bg-[#050505] text-white flex items-center justify-center">
      <div className="text-xl animate-pulse">Loading Product Details...</div>
    </div>
  );

  // Error State
  if (!product) return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col items-center justify-center pt-20">
      <h1 className="text-3xl font-bold mb-4 text-red-500">Product Not Found</h1>
      <p className="text-gray-400 mb-6">The product ID "{id}" does not exist in the database.</p>
      <button 
        onClick={() => navigate("/shop")}
        className="text-yellow-400 underline flex items-center gap-2 text-lg hover:text-yellow-300"
      >
        <FiArrowLeft /> Go Back to Shop
      </button>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-28 pb-20 font-sans">
      
      {/* 🔹 MAIN PRODUCT SECTION */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* LEFT: Image Gallery */}
        <div className="space-y-4">
          <div className="bg-white rounded-2xl h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden p-6 relative group border border-gray-800">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
            />
             <button 
               onClick={handleWishlist}
               className="absolute top-4 right-4 bg-gray-100 hover:bg-red-50 text-gray-600 hover:text-red-500 p-3 rounded-full transition-all shadow-md"
             >
               <FiHeart size={24} />
             </button>
          </div>
        </div>

        {/* RIGHT: Details & Actions */}
        <div className="space-y-8">
          <div>
            <span className="text-yellow-500 text-sm font-bold tracking-wider uppercase bg-yellow-500/10 px-3 py-1 rounded-full">
              {product.category}
            </span>
            <h1 className="text-4xl font-bold mt-4 leading-tight">{product.name}</h1>
            <div className="flex items-center gap-4 mt-3">
              <span className="bg-green-600 text-xs font-bold px-2 py-1 rounded text-white flex items-center gap-1">
                4.5 <FiCheck size={10} />
              </span>
              <span className="text-gray-400 text-sm">Verified Quality</span>
            </div>
          </div>

          <div className="border-t border-b border-gray-800 py-6">
            <div className="flex items-end gap-3">
              <span className="text-5xl font-bold text-white">₹{product.price}</span>
              {/* Fake MRP logic for show */}
              <span className="text-xl text-gray-500 line-through">₹{Number(product.price) + (Number(product.price) * 0.2)}</span>
              <span className="text-green-500 text-lg font-bold">20% OFF</span>
            </div>
            <p className="text-sm text-gray-400 mt-2">Inclusive of all taxes</p>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">Description</h3>
            <p className="text-gray-400 leading-relaxed text-lg">
              {product.description || "Elevate your space with our premium lighting collection. Designed for modern aesthetics and built with high-quality materials for long-lasting performance."}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button 
              onClick={handleAddToCart}
              disabled={adding}
              className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all text-lg shadow-[0_0_20px_rgba(250,204,21,0.3)]"
            >
              <FiShoppingCart /> {adding ? "Adding..." : "Add to Cart"}
            </button>
            <button 
              onClick={() => navigate("/checkout")}
              className="bg-orange-600 hover:bg-orange-500 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all text-lg shadow-[0_0_20px_rgba(234,88,12,0.3)]"
            >
              <FiCheck /> Buy Now
            </button>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-3 gap-4 pt-4">
            <div className="flex flex-col items-center text-center p-4 bg-[#111] rounded-xl border border-gray-800">
              <FiTruck className="text-yellow-500 text-2xl mb-2"/>
              <span className="text-xs text-gray-300 font-bold">Free Delivery</span>
            </div>
            <div className="flex flex-col items-center text-center p-4 bg-[#111] rounded-xl border border-gray-800">
              <FiCheck className="text-yellow-500 text-2xl mb-2"/>
              <span className="text-xs text-gray-300 font-bold">1 Year Warranty</span>
            </div>
            <div className="flex flex-col items-center text-center p-4 bg-[#111] rounded-xl border border-gray-800">
              <FiShield className="text-yellow-500 text-2xl mb-2"/>
              <span className="text-xs text-gray-300 font-bold">Secure Payment</span>
            </div>
          </div>
        </div>
      </div>

      {/* 🔹 VIDEO & SIMILAR PRODUCTS */}
      <div className="max-w-7xl mx-auto px-6 mt-24">
        
        {/* Video Section */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-yellow-500">
             <FiPlay /> Product Demo Video
          </h2>
          <div className="w-full h-[300px] md:h-[500px] bg-[#111] rounded-2xl border border-gray-800 flex items-center justify-center relative group overflow-hidden">
             {/* Placeholder for Video */}
             <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
             <div className="z-10 flex flex-col items-center">
                <div className="w-20 h-20 bg-yellow-500 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform shadow-[0_0_30px_rgba(250,204,21,0.5)]">
                  <FiPlay size={30} className="text-black ml-1 fill-black" />
                </div>
                <p className="mt-4 text-gray-300 font-semibold tracking-wide">Watch Installation Guide</p>
             </div>
          </div>
        </div>

        {/* Similar Products */}
        <div>
          <h2 className="text-2xl font-bold mb-8 border-l-4 border-yellow-500 pl-4">Similar Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {similarProducts.length > 0 ? (
              similarProducts.map((item) => (
                <Link 
                  to={`/product/${item.id}`} 
                  key={item.id}
                  onClick={() => window.scrollTo(0,0)} // Scroll top on click
                  className="group bg-[#111] border border-gray-800 rounded-2xl overflow-hidden hover:border-gray-600 hover:shadow-xl transition-all"
                >
                  <div className="h-48 bg-white p-4 overflow-hidden relative">
                    <img src={item.image} alt={item.name} className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-white truncate">{item.name}</h3>
                    <p className="text-yellow-500 font-bold mt-1">₹{item.price}</p>
                  </div>
                </Link>
              ))
            ) : (
              <p className="text-gray-500">No similar products found.</p>
            )}
          </div>
        </div>
      </div>

    </div>
  );
};

export default ProductDetails;