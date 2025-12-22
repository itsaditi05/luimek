import React, { useContext, useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { Star, Truck, ShieldCheck, Zap, ChevronDown, ChevronUp, Heart } from 'lucide-react'; // ✅ Heart added

// ✅ IMPORT DATA FROM ASSETS (Using central data file)
import { allProducts } from '../assets/assets';

const ProductDetails = () => {
  const { id } = useParams();
  
  // ✅ Get Wishlist functions from Context
  const { addToCart, addToWishlist, removeFromWishlist, wishlistItems } = useContext(ShopContext);
  
  const navigate = useNavigate();
  
  const [activeImg, setActiveImg] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);

  const productId = Number(id);
  const product = allProducts.find((p) => p.id === productId);

  // ✅ Check if product is already in wishlist
  const isInWishlist = wishlistItems[productId];

  // ✅ Toggle Wishlist Function
  const handleWishlistToggle = () => {
    if (isInWishlist) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product.id);
    }
  };

  const handleBuyNow = () => {
    addToCart(product.id);
    navigate('/cart');
  };

  const relatedProducts = product 
    ? allProducts.filter(item => item.category === product.category && item.id !== product.id).slice(0, 4)
    : [];

  useEffect(() => {
    if(product) {
        setActiveImg(product.image);
        setIsExpanded(false);
        window.scrollTo(0, 0);
    }
  }, [id, product]);

  if (!product) return <div className="p-10 text-center">Product Not Found</div>;

  const fullDescription = product.description || `Experience premium lighting with our ${product.name}. Designed for ${product.category} usage, providing high durability and energy efficiency. Perfect for modern spaces to enhance visibility and aesthetics.`;

  return (
    <div className="bg-white min-h-screen pb-20 pt-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 mb-20">
        
        {/* Left: Images */}
        <div className="flex flex-col gap-4">
          <div className="w-full h-[400px] md:h-[500px] bg-white rounded-xl overflow-hidden border border-gray-100 flex items-center justify-center relative">
            <img src={activeImg || product.image} alt={product.name} className="w-full h-full object-contain p-4 hover:scale-110 transition duration-500" />
            
            {/* Mobile-friendly floating wishlist button (Optional, mostly for mobile) */}
            <button 
                onClick={handleWishlistToggle}
                className="md:hidden absolute top-4 right-4 p-2 bg-white rounded-full shadow-md z-10 border border-gray-100"
            >
                <Heart size={20} fill={isInWishlist ? "red" : "none"} color={isInWishlist ? "red" : "gray"} />
            </button>
          </div>
        </div>

        {/* Right: Info */}
        <div>
           <p className="text-sm text-gray-500 uppercase tracking-wide font-semibold mb-2">{product.category}</p>
           
           {/* ✅ TITLE ROW WITH HEART BUTTON */}
           <div className="flex justify-between items-start mb-2">
             <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">{product.name}</h1>
             
             {/* Desktop Wishlist Button */}
             <button 
                onClick={handleWishlistToggle}
                className={`hidden md:flex p-3 rounded-full border transition-all duration-300 hover:scale-105 active:scale-95 ${
                    isInWishlist 
                    ? "bg-red-50 border-red-200 text-red-500 shadow-sm" 
                    : "bg-white border-gray-200 text-gray-400 hover:text-red-500 hover:border-red-200"
                }`}
                title={isInWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
             >
                <Heart size={24} fill={isInWishlist ? "currentColor" : "none"} />
             </button>
           </div>
           
           <div className="flex items-center gap-2 mb-6">
             <div className="flex text-yellow-400">
               {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" />)}
             </div>
             <span className="text-sm text-gray-500">(120 Reviews)</span>
           </div>

           <div className="flex items-end gap-4 mb-8">
             <span className="text-4xl font-bold text-gray-900">₹{product.price}</span>
             <span className="text-xl text-gray-400 line-through mb-1">₹{product.mrp}</span>
           </div>

           {/* Read More Section */}
           <div className="mb-8">
             <p className="text-gray-600 leading-relaxed transition-all duration-300">
               {isExpanded ? fullDescription : `${fullDescription.slice(0, 100)}...`}
             </p>
             <button 
               onClick={() => setIsExpanded(!isExpanded)} 
               className="text-black font-bold text-sm mt-2 flex items-center gap-1 hover:text-yellow-600 transition"
             >
               {isExpanded ? "Read Less" : "Read More"} 
               {isExpanded ? <ChevronUp size={16}/> : <ChevronDown size={16}/>}
             </button>
           </div>

           {/* Specifications Table */}
           {product.specs && (
             <div className="mb-8 bg-gray-50 p-4 rounded-lg border border-gray-100">
               <h3 className="font-bold text-sm mb-3 uppercase tracking-wider">Specifications</h3>
               <div className="grid grid-cols-2 gap-y-2 text-sm">
                 {Object.entries(product.specs).map(([key, value]) => (
                   <React.Fragment key={key}>
                     <span className="text-gray-500 capitalize">{key.replace('_', ' ')}</span>
                     <span className="font-medium text-gray-900">{value}</span>
                   </React.Fragment>
                 ))}
               </div>
             </div>
           )}

           {/* Buttons */}
           <div className="flex gap-4 mb-8">
             <button 
                onClick={() => addToCart(product.id)}
                className="flex-1 bg-black text-white h-14 rounded-lg font-bold hover:bg-gray-800 transition shadow-lg active:scale-95"
             >
               Add to Cart
             </button>
             
             <button 
                onClick={handleBuyNow}
                className="flex-1 bg-yellow-500 text-black h-14 rounded-lg font-bold hover:bg-yellow-400 transition shadow-lg flex items-center justify-center gap-2 active:scale-95"
             >
               <Zap size={20} fill="black" /> Buy Now
             </button>
           </div>
           
           <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
             <div className="flex items-center gap-3"><Truck size={20}/> Free Delivery</div>
             <div className="flex items-center gap-3"><ShieldCheck size={20}/> 2 Year Warranty</div>
           </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="max-w-7xl mx-auto px-4 border-t pt-12">
        <h2 className="text-2xl font-bold mb-6">You might also like</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {relatedProducts.map((item) => (
              <Link to={`/product/${item.id}`} key={item.id} className="group block">
                <div className="bg-white rounded-lg border border-gray-100 overflow-hidden hover:shadow-lg transition">
                  <div className="h-40 bg-white flex items-center justify-center overflow-hidden relative">
                     <img src={item.image} alt={item.name} className="w-full h-full object-contain p-2 group-hover:scale-105 transition duration-300" />
                  </div>
                  <div className="p-3">
                    <h3 className="font-medium text-gray-800 truncate text-sm">{item.name}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="font-bold text-sm">₹{item.price}</span>
                      <span className="text-xs text-gray-400 line-through">₹{item.mrp}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;