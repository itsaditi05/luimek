import React, { useEffect, useState } from "react";
import { getCartItems, removeFromCart, updateCartQuantity } from "../data/cartApi"; 
import { FiTrash2, FiMinus, FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  // Cart Fetch karna
  const fetchCart = async () => {
    const items = await getCartItems();
    setCartItems(items || []);
    setLoading(false);
  };

  useEffect(() => {
    fetchCart();
  }, []);

  // ✅ QUANTITY CHANGE LOGIC
  const handleQuantity = async (id, currentQty, type) => {
    let newQty = type === "inc" ? currentQty + 1 : currentQty - 1;
    if (newQty < 1) return;

    // UI me turant update
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity: newQty } : item))
    );

    // Backend me update
    await updateCartQuantity(id, newQty);
  };

  const handleRemove = async (id) => {
    await removeFromCart(id);
    fetchCart();
  };

  // Total Calculation
  const totalAmount = cartItems.reduce((acc, item) => {
    // Safety check agar product null ho
    if (!item.product) return acc;
    return acc + item.product.price * item.quantity;
  }, 0);

  if (loading) return <div className="pt-32 text-center text-white">Loading Cart...</div>;

  return (
    <div className="min-h-screen bg-black text-white pt-32 px-4 md:px-20">
      <h1 className="text-3xl font-bold mb-8 text-yellow-500">Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <div className="text-center mt-10">
            <p className="text-gray-400">Your cart is empty.</p>
            <Link to="/products" className="text-yellow-500 underline mt-4 inline-block">Shop Now</Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items List */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              item.product && ( // Check if product exists
              <div key={item.id} className="bg-[#111] p-4 rounded-xl flex items-center justify-between border border-gray-800">
                <div className="flex items-center gap-4">
                  <img src={item.product.image} alt={item.product.name} className="w-20 h-20 object-cover rounded-lg bg-white" />
                  <div>
                    <h3 className="font-bold text-lg">{item.product.name}</h3>
                    <p className="text-yellow-400">₹{item.product.price * item.quantity}</p>
                  </div>
                </div>

                {/* PLUS MINUS BUTTONS */}
                <div className="flex items-center gap-3 bg-black border border-gray-700 rounded-lg px-2 py-1">
                  <button onClick={() => handleQuantity(item.id, item.quantity, "dec")} className="p-1 hover:text-yellow-500">
                    <FiMinus />
                  </button>
                  <span className="font-bold w-4 text-center">{item.quantity}</span>
                  <button onClick={() => handleQuantity(item.id, item.quantity, "inc")} className="p-1 hover:text-yellow-500">
                    <FiPlus />
                  </button>
                </div>

                <button onClick={() => handleRemove(item.id)} className="bg-red-500/10 text-red-500 p-2 rounded-full hover:bg-red-500 hover:text-white transition">
                  <FiTrash2 />
                </button>
              </div>
              )
            ))}
          </div>

          {/* Checkout Box */}
          <div className="bg-[#111] p-6 rounded-xl h-fit border border-gray-800">
            <h3 className="text-xl font-bold mb-4">Order Summary</h3>
            <div className="flex justify-between text-xl font-bold text-yellow-400 mb-6">
              <span>Total</span>
              <span>₹{totalAmount}</span>
            </div>
            <Link to="/checkout">
              <button className="w-full bg-yellow-500 text-black py-3 rounded-lg font-bold hover:bg-yellow-400 transition">
                Proceed to Checkout
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;