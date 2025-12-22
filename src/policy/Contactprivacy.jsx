import React from "react";

const ContactPolicy = () => {
  return (
    <div className="bg-white text-black min-h-screen pt-24 px-6 md:px-20 pb-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
        
        <p className="mb-4">For any queries or support, please contact us at:</p>

        <div className="bg-gray-100 p-6 rounded-lg border border-gray-300">
            <p className="font-bold">Trade Name:</p>
            <p className="mb-4">Luimek Industries</p>

            <p className="font-bold">Address:</p>
            <p className="mb-4">
                1106, Chaiti Block, Khudiram Ground,<br />
                Haldia, West Bengal - 721657
            </p>

            <p className="font-bold">Phone:</p>
            <p className="mb-4">+91 88666 01320</p>

            <p className="font-bold">Email:</p>
            <p className="mb-4">info.luimekindustries@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default ContactPolicy;