import React from 'react';
import { Truck, ShieldCheck, RefreshCw, Headphones } from 'lucide-react';

const features = [
  {
    id: 1,
    icon: <Truck size={40} className="text-yellow-500" />,
    title: "Free Shipping",
    desc: "On all orders above ₹999"
  },
  {
    id: 2,
    icon: <ShieldCheck size={40} className="text-yellow-500" />,
    title: "2 Year Warranty",
    desc: "On all LED products"
  },
  {
    id: 3,
    icon: <RefreshCw size={40} className="text-yellow-500" />,
    title: "Easy Returns",
    desc: "7-day hassle free policy"
  },
  {
    id: 4,
    icon: <Headphones size={40} className="text-yellow-500" />,
    title: "Expert Support",
    desc: "Free lighting consultation"
  }
];

const ServiceHighlights = () => {
  return (
    <section className="w-full bg-white py-12 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x-0 md:divide-x divide-gray-100">
          {features.map((feature) => (
            <div key={feature.id} className="flex flex-col items-center group cursor-pointer">
              <div className="mb-4 transform group-hover:scale-110 transition duration-300 bg-yellow-50 p-4 rounded-full">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900">{feature.title}</h3>
              <p className="text-sm text-gray-500 mt-1">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceHighlights;