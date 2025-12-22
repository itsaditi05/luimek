import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiTrash2, FiShoppingCart } from "react-icons/fi";
import supabase from "../supabaseClient"; // Path check kar lena

const Wishlist = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadWishlist();
  }, []);

  async function loadWishlist() {
    try {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session?.user) {
        setLoading(false);
        return;
      }

      // Fetch Wishlist + Product Details
      const { data, error } = await supabase
        .from("wishlist")
        .select(`
          id,
          product_id,
          Products ( * ) 
        `) // Note: 'Products' table ka naam Capital 'P' se hai SQL mein
        .eq("user_id", session.user.id);

      if (error) throw error;
      setItems(data || []);

    } catch (error) {
      console.error("Error loading wishlist:", error);
    } finally {
      setLoading(false);
    }
  }

  const handleRemove = async (id) => {
    if (!window.confirm("Remove from Wishlist?")) return;
    await supabase.from("wishlist").delete().eq("id", id);
    loadWishlist(); // Reload list
  };

  if (loading) return <div className="min-h-screen bg-black text-white pt-40 text-center">Loading...</div>;

  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-20 px-4 md:px-10">
      <h1 className="text-3xl font-bold mb-8 text-center text-yellow-500">My Wishlist ❤️</h1>

      {items.length === 0 ? (
        <div className="text-center text-gray-400 mt-20">
          <p className="text-xl">Your wishlist is empty.</p>
          <Link to="/shop" className="text-yellow-400 underline mt-4 inline-block">Explore Products</Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item) => {
            const product = item.Products; 
            if (!product) return null; // Agar product delete ho gaya ho

            return (
              <div key={item.id} className="bg-[#111] border border-gray-800 rounded-xl overflow-hidden group relative">
                
                <button 
                  onClick={() => handleRemove(item.id)}
                  className="absolute top-2 right-2 bg-black/60 text-white p-2 rounded-full hover:bg-red-600 transition z-10"
                >
                  <FiTrash2 />
                </button>

                <Link to={`/product/${product.id}`} className="block h-60 bg-white">
                  <img src={product.image} alt={product.name} className="w-full h-full object-contain p-4 group-hover:scale-110 transition" />
                </Link>

                <div className="p-4">
                  <h2 className="text-white font-bold truncate">{product.name}</h2>
                  <p className="text-yellow-400 font-bold">₹{product.price}</p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Wishlist;