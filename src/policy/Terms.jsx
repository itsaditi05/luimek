import React from "react";

const Terms = () => {
  return (
    <div className="bg-white text-black min-h-screen pt-24 px-6 md:px-20 pb-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>
        
        <h2 className="text-xl font-bold mt-6 mb-2">1. Overview</h2>
        <p className="mb-4">By accessing this website, you agree to be bound by these Terms and Conditions.</p>

        <h2 className="text-xl font-bold mt-6 mb-2">2. Product Information</h2>
        <p className="mb-4">We strive to display product colors and specifications accurately, but actual product colors may vary slightly.</p>

        <h2 className="text-xl font-bold mt-6 mb-2">3. Governing Law</h2>
        <p className="mb-4">These terms shall be governed by the laws of India.</p>
      </div>
    </div>
  );
};

export default Terms;