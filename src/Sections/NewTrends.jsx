import React from "react";
import { Link } from "react-router-dom"; // This was missing!
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { FaStar, FaShoppingCart, FaHeart, FaEye } from "react-icons/fa";

const NewTrends = () => {
  // Mock Data
  const lights = [
    { 
      name: "Ovel Spot Light", 
      img: "/indoor/ovel.jpg", 
      link: "/product/6",
      price: "730",
      mrp: "1,043",
      discount: "30% OFF",
      rating: 4.5,
      reviews: 120
    },
    { 
      name: "Orbit Ceiling Panel", 
      img: "/indoor/panel.jpg", 
      link: "/product/3",
      price: "599",
      mrp: "856",
      discount: "30% OFF",
      rating: 4.2,
      reviews: 85
    },
    { 
      name: "ConiQ Designer", 
      img: "/indoor/Coniq.jpg", 
      link: "/product/4",
      price: "1,299",
      mrp: "1,850",
      discount: "30% OFF",
      rating: 4.8,
      reviews: 210
    },
    { 
      name: "Zolar Street Pro", 
      img: "/Outdoor/streetlight-p.jpg", 
      link: "/product/301",
      price: "2,499",
      mrp: "3,500",
      discount: "28% OFF",
      rating: 4.6,
      reviews: 45
    },
    { 
      name: "3-in-1 Slime Panel", 
      img: "/indoor/3-in-1-Slime.jpg", 
      link: "/product/1",
      price: "899",
      mrp: "1,200",
      discount: "25% OFF",
      rating: 4.3,
      reviews: 67
    },
    { 
      name: "Track Lux System", 
      img: "/indoor/TrackLux.jpg", 
      link: "/product/9",
      price: "1,800",
      mrp: "2,500",
      discount: "28% OFF",
      rating: 4.7,
      reviews: 92
    },
    { 
      name: "Royal Linear Track", 
      img: "/indoor/Track-Line.jpg", 
      link: "/product/8",
      price: "2,100",
      mrp: "3,000",
      discount: "30% OFF",
      rating: 4.9,
      reviews: 150
    },
    { 
      name: "Rotar Gate Light", 
      img: "/Outdoor/img5.jpg", 
      link: "/product/304",
      price: "600",
      mrp: "857",
      discount: "30% OFF",
      rating: 4.4,
      reviews: 30
    },
  ];

  return (
    <section className="bg-white py-16 relative font-sans">
      
      {/* Header */}
      <div className="flex justify-between items-end px-4 md:px-16 mb-8 max-w-[1400px] mx-auto">
        <div>
           <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Trending Products</h2>
           <p className="text-gray-500 text-sm mt-1">Top picks for your home & office</p>
        </div>
        <Link to="/products" className="hidden md:block bg-yellow-500 text-black px-5 py-2 rounded-full font-bold text-sm hover:bg-yellow-400 transition">
            View All
        </Link>
      </div>

      {/* Swiper Slider */}
      <div className="px-4 md:px-12 lg:px-16 max-w-[1400px] mx-auto">
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          navigation={true} 
          modules={[Navigation, Autoplay]}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          className="!pb-10"
        >
          {lights.map((product, i) => (
            <SwiperSlide key={i}>
              <div className="bg-white border border-gray-100 rounded-xl hover:shadow-xl transition-all duration-300 group overflow-hidden">
                
                {/* Image */}
                <div className="relative h-64 bg-gray-50 p-6 flex items-center justify-center">
                    <img src={product.img} alt={product.name} className="h-full w-auto object-contain transition-transform duration-500 group-hover:scale-110" />
                    
                    {/* Hover Actions */}
                    <div className="absolute right-4 top-4 flex flex-col gap-2 translate-x-10 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                        <button className="bg-white p-2 rounded-full shadow hover:text-red-500"><FaHeart /></button>
                        <button className="bg-white p-2 rounded-full shadow hover:text-blue-500"><FaEye /></button>
                    </div>

                    {/* Badge */}
                    <span className="absolute top-4 left-4 bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded-md">
                        {product.discount}
                    </span>
                </div>

                {/* Details */}
                <div className="p-4">
                    <h3 className="font-semibold text-gray-800 truncate">{product.name}</h3>
                    <div className="flex items-center gap-2 mt-1 mb-3">
                         <span className="text-yellow-500 flex text-xs">★★★★☆</span>
                         <span className="text-xs text-gray-400">({product.reviews})</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                        <div>
                            <span className="text-lg font-bold text-black">₹{product.price}</span>
                            <span className="text-xs text-gray-400 line-through ml-2">₹{product.mrp}</span>
                        </div>
                        <button className="bg-black text-white p-2 rounded-lg hover:bg-yellow-500 hover:text-black transition">
                            <FaShoppingCart />
                        </button>
                    </div>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* CSS Override for Swiper Arrows */}
      <style>{`
        .swiper-button-next, .swiper-button-prev {
            color: #000;
            background: white;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }
        .swiper-button-next:after, .swiper-button-prev:after {
            font-size: 18px;
            font-weight: bold;
        }
      `}</style>
    </section>
  );
};

export default NewTrends;