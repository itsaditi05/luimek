import React, { createContext, useState } from "react";

// NOTE: Ensure you have your product list imported here or defined to access prices/images
// For simplicity, we assume we just manage IDs here, and pages map IDs to real data.
import { allProducts } from "../assets/assets"; // Make sure you have a central data file or pass data

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 0; i < 300; i++) { // Assuming max 300 products
    cart[i] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const [wishlistItems, setWishlistItems] = useState({}); // New Wishlist State

  // --- CART FUNCTIONS ---
  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const getTotalCartAmount = () => {
    // Note: This requires access to your product price list inside context
    // We will handle total calculation in Cart Page for simplicity if data isn't global
    return 0; 
  };

  const getTotalCartItems = () => {
    let totalItem = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item];
      }
    }
    return totalItem;
  };

  // --- WISHLIST FUNCTIONS ---
  const addToWishlist = (itemId) => {
    setWishlistItems((prev) => ({ ...prev, [itemId]: true }));
  };

  const removeFromWishlist = (itemId) => {
    setWishlistItems((prev) => {
        const copy = { ...prev };
        delete copy[itemId];
        return copy;
    });
  };

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    updateCartItemCount,
    getTotalCartItems,
    wishlistItems,
    addToWishlist,
    removeFromWishlist,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;