import React from "react";

const Refund = () => {
  return (
    <div className="bg-white text-black min-h-screen pt-24 px-6 md:px-20 pb-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Cancellation & Refund Policy</h1>
        
        <h2 className="text-xl font-bold mt-6 mb-2">1. Cancellation</h2>
        <p className="mb-4">You can cancel your order within 24 hours of placing it. Once shipped, orders cannot be canceled.</p>

        <h2 className="text-xl font-bold mt-6 mb-2">2. Refunds</h2>
        <p className="mb-4">We offer refunds only for damaged or defective products. Please report the issue within 48 hours of delivery with video proof.</p>

        <h2 className="text-xl font-bold mt-6 mb-2">3. Processing Time</h2>
        <p className="mb-4">Refunds are processed within 5-7 working days back to the original payment method.</p>
      </div>
    </div>
  );
};

export default Refund;