import React, { useContext, useState, useEffect } from 'react';
import { Search, ShoppingCart, User, Menu, Download, Heart, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
// ✅ Import Data for Search
import { allProducts } from '../assets/assets';

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]); // Store matching products
  
  const { getTotalCartItems } = useContext(ShopContext);
  const navigate = useNavigate();

  // ✅ Live Search Logic
  useEffect(() => {
    if (searchQuery.length > 0) {
      const filtered = allProducts.filter(product => 
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchResults(filtered);
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  const handleProductClick = (id) => {
    setShowSearch(false);
    setSearchQuery("");
    setSearchResults([]);
    navigate(`/product/${id}`);
  };

  return (
    <nav className="w-full bg-white shadow-md sticky top-0 z-50">
      
      {/* Top Bar */}
      <div className="bg-black text-white text-xs py-2 px-4 md:px-8 flex justify-between items-center">
        <p className="hidden md:block text-gray-400">Premium Lighting Solutions for Modern Spaces</p>
        <div className="flex items-center space-x-6 w-full md:w-auto justify-between md:justify-end">
          <a href="/catalogue/CATALOGUE.pdf" download className="flex items-center gap-2 text-yellow-500 hover:text-white transition cursor-pointer font-bold uppercase tracking-wider">
            <Download size={14} /> <span>Download Catalogue</span>
          </a>
          <div className="flex space-x-4 text-gray-400">
            <span>Support</span><span>Track Order</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-between items-center h-20">
          
          <Link to="/" className="flex-shrink-0 flex items-center cursor-pointer">
            <img src="/logo/Luimek-Logo.png" alt="LUIMEK" className="h-12 md:h-20 w-auto object-contain" />
          </Link>

          <div className="hidden md:flex space-x-8 items-center">
            <Link to="/" className="text-gray-700 hover:text-black font-medium text-sm uppercase tracking-wide transition">Home</Link>
            <Link to="/products" className="text-gray-700 hover:text-black font-medium text-sm uppercase tracking-wide transition">Products</Link>
            <Link to="/contact" className="text-gray-700 hover:text-black font-medium text-sm uppercase tracking-wide transition">Get in Touch</Link>
            <Link to="/about" className="text-gray-700 hover:text-black font-medium text-sm uppercase tracking-wide transition">About Us</Link>
          </div>

          <div className="flex items-center space-x-6">
            <div onClick={() => setShowSearch(!showSearch)} className="cursor-pointer hover:text-yellow-600 transition">
                <Search size={22} color="black" />
            </div>
            <Link to="/wishlist" className="cursor-pointer hover:text-yellow-600 transition">
                <Heart size={22} color="black" />
            </Link>
            <Link to="/login" className="cursor-pointer hover:text-yellow-600 transition">
                <User size={22} color="black" />
            </Link>
            <Link to="/cart" className="cursor-pointer hover:text-yellow-600 transition relative">
                <ShoppingCart size={22} color="black" />
                <span className="absolute -top-2 -right-2 bg-yellow-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {getTotalCartItems()}
                </span>
            </Link>
            <div className="md:hidden cursor-pointer"><Menu size={24} color="black" /></div>
          </div>
        </div>

        {/* --- LIVE SEARCH DROPDOWN --- */}
        {showSearch && (
            <div className="absolute top-20 left-0 w-full bg-white shadow-xl z-50 border-t border-gray-100 animate-fadeIn p-4">
                <div className="max-w-3xl mx-auto">
                    {/* Input Field */}
                    <div className="flex items-center gap-2 border border-gray-300 rounded-full px-4 py-3 bg-gray-50 focus-within:bg-white focus-within:ring-2 focus-within:ring-yellow-400 transition">
                        <Search size={20} className="text-gray-400"/>
                        <input 
                            type="text" 
                            placeholder="Type to search (e.g., Alpha, Garden)..." 
                            className="w-full outline-none text-gray-700 bg-transparent"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            autoFocus
                        />
                        <X size={20} className="text-gray-400 cursor-pointer hover:text-red-500" onClick={() => {setShowSearch(false); setSearchQuery("")}} />
                    </div>

                    {/* Recommendations List */}
                    {searchQuery && (
                        <div className="mt-4 max-h-64 overflow-y-auto bg-white rounded-lg border border-gray-100 shadow-inner scrollbar-thin">
                            {searchResults.length > 0 ? (
                                searchResults.map((product) => (
                                    <div 
                                        key={product.id}
                                        onClick={() => handleProductClick(product.id)}
                                        className="flex items-center gap-4 p-3 hover:bg-gray-50 cursor-pointer border-b last:border-none transition"
                                    >
                                        <img src={product.image} alt={product.name} className="w-12 h-12 object-contain rounded bg-gray-100" />
                                        <div>
                                            <h4 className="font-bold text-gray-800 text-sm">{product.name}</h4>
                                            <p className="text-xs text-gray-500">{product.category}</p>
                                        </div>
                                        <span className="ml-auto font-bold text-sm text-yellow-600">₹{product.price}</span>
                                    </div>
                                ))
                            ) : (
                                <div className="p-4 text-center text-gray-500 text-sm">No products found for "{searchQuery}"</div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;