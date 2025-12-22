import React from "react";

const Shipping = () => {
  return (
    <div className="bg-white text-black min-h-screen pt-24 px-6 md:px-20 pb-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Shipping & Delivery Policy</h1>
        
        <h2 className="text-xl font-bold mt-6 mb-2">1. Shipping Areas</h2>
        <p className="mb-4">We ship across India to all major pin codes served by our courier partners.</p>

        <h2 className="text-xl font-bold mt-6 mb-2">2. Dispatch Time</h2>
        <p className="mb-4">Orders are typically dispatched within 1-2 business days.</p>

        <h2 className="text-xl font-bold mt-6 mb-2">3. Delivery Time</h2>
        <p className="mb-4">Standard delivery time is 5-7 business days depending on your location.</p>
      </div>
    </div>
  );
};

export default Shipping;