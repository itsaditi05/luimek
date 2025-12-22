import React from "react";

const DesignIdeas = () => {
  return (
    <div className="bg-[#1e1e1e] text-gray-200 py-16 px-6">
      <div className="max-w-6xl mx-auto">

        {/* 🔶 DESIGN IDEAS */}
        <h2 className="text-3xl font-semibold mb-6 text-white border-l-4 border-yellow-400 pl-3">
          Design Ideas
        </h2>
        <div className="flex flex-wrap gap-3 text-gray-300 leading-relaxed">
          {[
            "Living Room Lighting", "Bedroom Lighting", "Kitchen Lighting", "Dining Area Lighting", "Office Lighting",
            "Mirror Lights", "Wall Mount Lights", "Smart Lights", "LED Strip Designs", "Ceiling Lights", "Pendant Lights",
            "Chandelier Lighting", "Outdoor Lighting", "Balcony Lighting", "Garden Lights", "Study Room Lighting",
          ].map((item, index) => (
            <a
              key={index}
              href="#"
              className="hover:text-yellow-400 transition duration-300"
            >
              {item} |
            </a>
          ))}
        </div>

        {/* 🔶 SHOP BY PRODUCTS */}
        <h2 className="text-3xl font-semibold mt-14 mb-6 text-white border-l-4 border-yellow-400 pl-3">
          Shop By Products
        </h2>
        <div className="flex flex-wrap gap-3 text-gray-300 leading-relaxed">
          {[
            "Wall Lights", "Ceiling Lights", "LED Panels", "Smart Bulbs",
            "Rope Lights", "Cove Lights", "Track Lights", "Magnetic Lights",
            "Spot Lights", "Outdoor Flood Lights", "Decorative Lamps",
          ].map((item, index) => (
            <a
              key={index}
              href="#"
              className="hover:text-yellow-400 transition duration-300"
            >
              {item} |
            </a>
          ))}
        </div>

        {/* 🔶 POPULAR SEARCHES */}
        <h2 className="text-3xl font-semibold mt-14 mb-6 text-white border-l-4 border-yellow-400 pl-3">
          Popular Searches
        </h2>
        <div className="flex flex-wrap gap-3 text-gray-300 leading-relaxed">
          {[
            "Home Lighting Ideas", "Modern Chandeliers", "Warm Lighting Decor",
            "LED Track Systems", "Magnetic Rail Lights", "Smart Home Lights",
            "Luxury Light Fixtures", "Garden Light Design", "Balcony LED Strip",
          ].map((item, index) => (
            <a
              key={index}
              href="#"
              className="hover:text-yellow-400 transition duration-300"
            >
              {item} |
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DesignIdeas;
