import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { allProducts } from '../assets/assets';
import { Link, useNavigate } from 'react-router-dom'; // ✅ useNavigate import kiya
import { Trash2 } from 'lucide-react';

const Cart = () => {
  const { cartItems, removeFromCart, addToCart, updateCartItemCount, getTotalCartAmount } = useContext(ShopContext);
  const navigate = useNavigate(); // ✅ Hook for navigation

  // Calculate Total
  const totalAmount = allProducts.reduce((acc, product) => {
    if (cartItems[product.id] > 0) return acc + (product.price * cartItems[product.id]);
    return acc;
  }, 0);

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 min-h-screen">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

      {totalAmount > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* Cart Items List */}
          <div className="lg:col-span-2 space-y-6">
            {allProducts.map((product) => {
              if (cartItems[product.id] > 0) {
                return (
                  <div key={product.id} className="flex gap-4 border p-4 rounded-lg bg-white shadow-sm">
                    <img src={product.image} alt={product.name} className="w-24 h-24 object-contain bg-gray-50 rounded-md" />
                    <div className="flex-1">
                      <h3 className="font-bold text-lg">{product.name}</h3>
                      <p className="text-gray-500 text-sm mb-2">{product.category}</p>
                      <p className="font-bold text-xl">₹{product.price}</p>
                    </div>
                    <div className="flex flex-col items-end justify-between">
                      <div className="flex items-center border rounded">
                        <button onClick={() => removeFromCart(product.id)} className="px-3 py-1 hover:bg-gray-100">-</button>
                        <span className="px-3 font-medium">{cartItems[product.id]}</span>
                        <button onClick={() => addToCart(product.id)} className="px-3 py-1 hover:bg-gray-100">+</button>
                      </div>
                      <button onClick={() => updateCartItemCount(0, product.id)} className="text-red-500 hover:text-red-700">
                        <Trash2 size={20} />
                      </button>
                    </div>
                  </div>
                );
              }
            })}
          </div>

          {/* Checkout Summary */}
          <div className="bg-gray-50 p-6 rounded-lg h-fit border border-gray-200">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>₹{totalAmount}</span>
            </div>
            <div className="flex justify-between mb-4">
              <span>Shipping</span>
              <span className="text-green-600">Free</span>
            </div>
            <hr className="my-4"/>
            <div className="flex justify-between text-xl font-bold mb-6">
              <span>Total</span>
              <span>₹{totalAmount}</span>
            </div>
            
            {/* ✅ FIXED BUTTON: Ab yeh kaam karega */}
            <button 
              onClick={() => navigate('/place-order')} 
              className="w-full bg-black text-white py-3 rounded font-bold hover:bg-yellow-500 hover:text-black transition uppercase tracking-wide"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      ) : (
        <div className="text-center py-20">
          <h2 className="text-2xl font-bold text-gray-400 mb-4">Your Cart is Empty</h2>
          <Link to="/products" className="bg-black text-white px-6 py-3 rounded-lg font-bold hover:bg-yellow-500 hover:text-black transition">
            Continue Shopping
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;