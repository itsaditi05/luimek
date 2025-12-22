import React, { createContext, useState, useEffect } from 'react';

export const ShopContext = createContext(null);

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const [wishlistItems, setWishlistItems] = useState({});
  const [user, setUser] = useState(null); // Login user info

  // --- CART LOGIC ---
  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: (prev[itemId] || 0) + 1 }));
    console.log("Added to Cart:", itemId);
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const deleteFromCart = (itemId) => {
    const newCart = { ...cartItems };
    delete newCart[itemId];
    setCartItems(newCart);
  };

  const getTotalCartAmount = (products) => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = products.find((product) => product.id === Number(item));
        if(itemInfo) totalAmount += itemInfo.price * cartItems[item];
      }
    }
    return totalAmount;
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

  // --- WISHLIST LOGIC ---
  const toggleWishlist = (itemId) => {
    setWishlistItems((prev) => ({
      ...prev,
      [itemId]: !prev[itemId] // Toggle True/False
    }));
  };

  const contextValue = { 
    cartItems, addToCart, removeFromCart, deleteFromCart, getTotalCartAmount, getTotalCartItems,
    wishlistItems, toggleWishlist,
    user, setUser 
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};