import React, { useEffect, useState } from "react";
import { getOrders } from "../data/cartApi";
import { FiPackage, FiClock, FiCheckCircle } from "react-icons/fi";
import { Link } from "react-router-dom";

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadOrders();
  }, []);

  async function loadOrders() {
    try {
      const data = await getOrders();
      setOrders(data || []);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  if (loading) return <div className="min-h-screen bg-black text-white pt-40 text-center">Loading Orders...</div>;

  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-20 px-4 md:px-10">
      <h1 className="text-3xl font-bold mb-8 text-yellow-500 border-l-4 border-yellow-500 pl-4">My Orders</h1>

      {orders.length === 0 ? (
        <div className="text-center py-20 bg-[#111] rounded-xl border border-gray-800">
          <h2 className="text-xl text-gray-400 mb-4">No past orders found</h2>
          <Link to="/shop" className="text-yellow-400 underline">Start Shopping</Link>
        </div>
      ) : (
        <div className="space-y-6 max-w-4xl mx-auto">
          {orders.map((order) => (
            <div key={order.id} className="bg-[#111] border border-gray-800 rounded-xl overflow-hidden shadow-md hover:border-gray-600 transition">
              
              {/* Card Header */}
              <div className="bg-[#1a1a1a] p-4 flex flex-wrap justify-between items-center border-b border-gray-700">
                <div className="flex flex-col">
                  <span className="text-xs text-gray-500 uppercase tracking-wide">Order ID</span>
                  <span className="text-sm font-mono text-white">#{order.id.slice(0, 8).toUpperCase()}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-gray-500 uppercase tracking-wide">Date placed</span>
                  <span className="text-sm text-white">
                    {new Date(order.created_at).toLocaleDateString("en-IN", {
                      day: 'numeric', month: 'long', year: 'numeric'
                    })}
                  </span>
                </div>
                <div className="flex flex-col items-end">
                   <span className="text-xs text-gray-500 uppercase tracking-wide">Total Amount</span>
                   <span className="text-lg font-bold text-yellow-400">₹{order.total_amount}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className={`p-3 rounded-full ${order.status === 'placed' ? 'bg-green-900/30 text-green-400' : 'bg-yellow-900/30 text-yellow-400'}`}>
                    {order.status === 'placed' ? <FiCheckCircle size={24} /> : <FiClock size={24} />}
                  </div>
                  <div>
                    <p className="font-semibold text-white capitalize">{order.status}</p>
                    <p className="text-sm text-gray-500">Your order is being processed</p>
                  </div>
                </div>

                <button className="text-sm text-gray-400 hover:text-white underline">
                  View Invoice
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrderHistory;