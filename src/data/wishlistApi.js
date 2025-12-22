import supabase from "../supabaseClient"; // Ensure path is correct

// Add to Wishlist
export async function addToWishlist(product) {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    alert("Please log in to use the wishlist.");
    return;
  }

  const { error } = await supabase
    .from('wishlist')
    .insert([{ 
      user_id: user.id, 
      product_id: product.id 
    }]);

  if (error) {
    // Error code 23505 means "Already exists". We ignore it.
    if (error.code === '23505') {
      alert("Item is already in your wishlist!");
    } else {
      console.error(error);
      throw new Error("Could not add to wishlist");
    }
  }
}

// Get Wishlist Items
export async function getWishlist() {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return [];

  // We select the wishlist item AND the product details related to it
  const { data, error } = await supabase
    .from('wishlist')
    .select('*, Products(*)') 
    .eq('user_id', user.id);

  if (error) {
    console.error(error);
    throw new Error("Could not load wishlist");
  }

  return data;
}

// Remove from Wishlist
export async function removeFromWishlist(id) {
  const { error } = await supabase
    .from('wishlist')
    .delete()
    .eq('id', id);

  if (error) {
    console.error(error);
    throw new Error("Could not remove item");
  }
}