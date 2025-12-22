import supabase from "../supabaseClient";

// 1. Cart Items lana (JOIN ke saath)
export const getCartItems = async () => {
  const { data: { user } } = await supabase.auth.getUser();
  
  if (!user) {
    console.log("User not logged in");
    return [];
  }

  // 👇 Yahan dhyan dein: 'product:Products(*)' likha hai (Capital P)
  const { data, error } = await supabase
    .from("cart_items")
    .select("*, product:Products(*)") 
    .eq("user_id", user.id);

  if (error) {
    console.error("Error fetching cart:", error.message);
    return [];
  }

  return data;
};

// 2. Add to Cart Function
export const addToCart = async (product) => {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error("User not logged in");

  // Pehle check karein ki item already cart me hai ya nahi
  const { data: existingItem } = await supabase
    .from("cart_items")
    .select("*")
    .eq("user_id", user.id)
    .eq("product_id", product.id)
    .single();

  if (existingItem) {
    // Agar hai, to Quantity +1 karein
    return await updateCartQuantity(existingItem.id, existingItem.quantity + 1);
  } else {
    // Agar nahi hai, to naya insert karein
    const { data, error } = await supabase
      .from("cart_items")
      .insert([
        {
          user_id: user.id,
          product_id: product.id,
          quantity: 1,
        },
      ]);
      
    if (error) throw error;
    return data;
  }
};

// 3. Remove from Cart
export const removeFromCart = async (itemId) => {
  const { error } = await supabase
    .from("cart_items")
    .delete()
    .eq("id", itemId);
    
  if (error) console.error(error);
};

// 4. Update Quantity (Jo humne add kiya tha)
export const updateCartQuantity = async (itemId, newQuantity) => {
  if (newQuantity < 1) return;

  const { data, error } = await supabase
    .from("cart_items")
    .update({ quantity: newQuantity })
    .eq("id", itemId)
    .select();

  if (error) {
    console.error("Error updating quantity:", error);
    return null;
  }
  return data;
};
// src/data/cartApi.js

// ... (Keep all your existing cart functions like addToCart, getCartItems etc.)

// 👇 ADD THIS NEW FUNCTION AT THE BOTTOM
export const getOrders = async () => {
  // 1. Get current user
  const { data: { user } } = await supabase.auth.getUser();
  
  if (!user) {
    console.log("User not logged in");
    return [];
  }

  // 2. Fetch orders for this user
  const { data, error } = await supabase
    .from("orders")
    .select("*")
    .eq("user_id", user.id)
    .order("created_at", { ascending: false }); // Newest first

  if (error) {
    console.error("Error fetching orders:", error.message);
    return [];
  }

  return data;
};