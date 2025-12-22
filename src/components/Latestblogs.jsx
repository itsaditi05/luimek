import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const blogs = [
  {
    id: 1,
    title: "Modern Bedroom Lighting Ideas to Create a Luxury Ambience",
    image: "/images/blog1.jpg",
    description: "Transform your bedroom with soft ambient lights, warm tones, and designer fixtures...",
  },
  {
    id: 2,
    title: "Best Lighting Options for Study Tables & Workspaces",
    image: "/images/blog2.jpg",
    description: "Focused, bright and eye-friendly study lights that boost productivity...",
  },
];
const LatestBlogs = () => {
  const navigate = useNavigate();

 const openBlog = () => {
  navigate("/designer");
};


  return (
    <div className="w-full bg-[#161616] py-16 px-6 md:px-16">
      <h2 className="text-center text-5xl font-extrabold tracking-wide text-white mb-10">
  Lighting Inspiration Hub
</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {blogs.map((b) => (
          <div
            key={b.id}
            onClick={() => openBlog(b.id)}
            className="cursor-pointer group overflow-hidden rounded-xl shadow-lg bg-[#202020] hover:shadow-2xl transition-all duration-500"
          >
            {/* Blog Image */}
            <div className="overflow-hidden">
              <img
                src={b.image}
                className="w-full h-64 object-cover group-hover:scale-105 transition-all duration-500"
              />
            </div>

            {/* Text Section */}
            <div className="p-6">
              <h2 className="text-white text-2xl font-semibold group-hover:text-orange-400 transition-colors duration-300">
                {b.title}
              </h2>
              <p className="text-gray-300 text-sm mt-2">
                {b.description}
              </p>

          <Link 
  to="/designer" 
  className="text-[#f7a600] font-semibold hover:underline text-lg"
>
  Explore More →
</Link>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestBlogs;
