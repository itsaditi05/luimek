import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { allProducts } from '../assets/assets';; 
import { Link } from 'react-router-dom';
import { Trash2, ShoppingCart } from 'lucide-react';

const Wishlist = () => {
  const { wishlistItems, removeFromWishlist, addToCart } = useContext(ShopContext);

  const hasItems = Object.keys(wishlistItems).length > 0;

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 min-h-screen">
      <h1 className="text-3xl font-bold mb-8">My Wishlist</h1>
      
      {hasItems ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
           {allProducts.map((product) => {
             if (wishlistItems[product.id]) {
               return (
                 <div key={product.id} className="border p-4 rounded-lg relative group bg-white shadow-sm hover:shadow-lg transition">
                    <button onClick={() => removeFromWishlist(product.id)} className="absolute top-2 right-2 p-2 bg-white rounded-full shadow hover:bg-red-50 text-red-500 z-10">
                        <Trash2 size={16} />
                    </button>
                    <Link to={`/product/${product.id}`}>
                        <div className="h-48 flex items-center justify-center bg-gray-50 mb-4 rounded overflow-hidden">
                            <img src={product.image} alt={product.name} className="h-full object-contain" />
                        </div>
                        <h3 className="font-bold truncate">{product.name}</h3>
                        <p className="text-gray-500 text-sm">₹{product.price}</p>
                    </Link>
                    <button 
                        onClick={() => addToCart(product.id)}
                        className="w-full mt-3 bg-black text-white py-2 rounded text-sm font-bold flex items-center justify-center gap-2 hover:bg-yellow-500 hover:text-black transition"
                    >
                        <ShoppingCart size={16} /> Add to Cart
                    </button>
                 </div>
               );
             }
           })}
        </div>
      ) : (
        <div className="text-center py-20">
            <h2 className="text-2xl font-bold text-gray-400">Wishlist is Empty</h2>
        </div>
      )}
    </div>
  );
};

export default Wishlist;