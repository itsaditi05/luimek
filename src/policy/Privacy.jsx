import React from "react";

const Privacy = () => {
  return (
    <div className="bg-white text-black min-h-screen pt-24 px-6 md:px-20 pb-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        <p className="mb-4">Last updated: December 2025</p>
        
        <h2 className="text-xl font-bold mt-6 mb-2">1. Introduction</h2>
        <p className="mb-4">Welcome to Luimek Industries. We respect your privacy and are committed to protecting your personal data.</p>

        <h2 className="text-xl font-bold mt-6 mb-2">2. Data We Collect</h2>
        <p className="mb-4">We collect information such as your name, email address, phone number, and shipping address when you place an order.</p>

        <h2 className="text-xl font-bold mt-6 mb-2">3. How We Use Your Data</h2>
        <p className="mb-4">We use your data to process orders, improve our products, and communicate with you regarding your purchases.</p>

        <h2 className="text-xl font-bold mt-6 mb-2">4. Data Security</h2>
        <p className="mb-4">We implement appropriate security measures to protect your personal data from unauthorized access.</p>
      </div>
    </div>
  );
};

export default Privacy;