import React, { useEffect, useState } from "react";
import supabase from "../supabaseClient";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      // User ke orders fetch karna
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      const { data, error } = await supabase
        .from("orders")
        .select("*")
        .eq("user_id", user.id)
        .order("created_at", { ascending: false });

      if (!error) setOrders(data);
      setLoading(false);
    };

    fetchOrders();
  }, []);

  // Status Color Helper
  const getStatusColor = (status) => {
    switch (status) {
      case "Pending": return "text-yellow-500 border-yellow-500";
      case "Shipped": return "text-blue-500 border-blue-500";
      case "Delivered": return "text-green-500 border-green-500";
      case "Cancelled": return "text-red-500 border-red-500";
      default: return "text-gray-500 border-gray-500";
    }
  };

  if (loading) return <div className="pt-32 text-center text-white">Loading Orders...</div>;

  return (
    <div className="min-h-screen bg-black text-white pt-32 px-4 md:px-20">
      <h1 className="text-3xl font-bold mb-8 text-white">My Orders</h1>

      {orders.length === 0 ? (
        <p className="text-gray-400">No orders found.</p>
      ) : (
        <div className="space-y-6">
          {orders.map((order) => (
            <div key={order.id} className="bg-[#111] border border-gray-800 rounded-xl p-6">
              
              {/* Order Header */}
              <div className="flex flex-col md:flex-row justify-between mb-4 border-b border-gray-800 pb-4">
                <div>
                  <p className="text-gray-400 text-sm">Order ID: <span className="text-white">#{order.id.substring(0, 8)}</span></p>
                  <p className="text-gray-400 text-sm">Date: {new Date(order.created_at).toLocaleDateString()}</p>
                </div>
                <div className="mt-2 md:mt-0">
                  <span className={`px-4 py-1 rounded-full border ${getStatusColor(order.status)} bg-opacity-10 font-bold uppercase text-xs`}>
                    {order.status}
                  </span>
                </div>
              </div>

              {/* Order Items (Abhi ke liye dummy dikha raha hu, aap JSON se nikal sakte hain) */}
              <div className="flex justify-between items-center">
                 <div>
                    <h3 className="font-bold text-lg">Total Amount: ₹{order.total_amount}</h3>
                    <p className="text-sm text-gray-400">Payment: {order.payment_method}</p>
                 </div>
              </div>

              {/* 🔥 TRACKING BAR (Amazon Style) */}
              <div className="mt-6 relative">
                 <div className="h-2 bg-gray-700 rounded-full">
                    <div 
                        className={`h-2 rounded-full ${
                            order.status === 'Delivered' ? 'w-full bg-green-500' : 
                            order.status === 'Shipped' ? 'w-1/2 bg-blue-500' : 
                            'w-1/12 bg-yellow-500'
                        }`}
                    ></div>
                 </div>
                 <div className="flex justify-between text-xs mt-2 text-gray-400">
                    <span className={order.status === 'Pending' ? 'text-yellow-400 font-bold' : ''}>Ordered</span>
                    <span className={order.status === 'Shipped' ? 'text-blue-400 font-bold' : ''}>Shipped</span>
                    <span className={order.status === 'Delivered' ? 'text-green-400 font-bold' : ''}>Delivered</span>
                 </div>
              </div>

            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Orders;