import React from "react";

const AboutPage = () => {
  return (
    <div className="w-full bg-[#2f2f2f] text-white py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">

        {/* Title */}
        <div className="flex items-center justify-center gap-6 mb-8">
          <span className="w-16 h-[2px] bg-gray-400"></span>
          <h2 className="text-3xl md:text-4xl font-light tracking-wide">
            About Us
          </h2>
          <span className="w-16 h-[2px] bg-gray-400"></span>
        </div>

        {/* Text */}
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
          Established in 1978, we take immense pride in offering premium lighting solutions 
          that transform homes and offices with ambiance, elegance, and functionality. 
        </p>

        <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-10">
          Our commitment to blending modern design with cutting-edge technology has made us 
          a trusted name in luxury lighting.
        </p>

        {/* Read More Button */}
        <button className="bg-white text-gray-900 px-8 py-3 rounded-md text-lg font-medium shadow hover:bg-gray-200 transition">
          Read More
        </button>

      </div>
    </div>
  );
};

export default AboutPage;
