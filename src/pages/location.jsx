import React from "react";

const Location = () => {
  return (
    <div className="min-h-screen bg-[#111] text-white flex flex-col items-center justify-center px-6 py-22">
      <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-8">
        Visit Our Location
      </h1>
      <p className="text-gray-300 text-lg mb-8 text-center max-w-2xl">
        Experience the brilliance of Luimek lights in person.  
        Drop by our office or showroom to explore our latest lighting collections!
      </p>

      {/* Google Map Embed */}
      <div className="w-full max-w-4xl rounded-2xl overflow-hidden shadow-lg border border-yellow-500">
        <iframe
          title="Luimek Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.3!2d72.6420!3d23.2632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9a787d6651fd%3A0x123456789abcdef0!2sShri Ram Industrial Estate Block No. 2221 Paiki 06, Santej-Khatraj Road, Opp Shah Alloy, Kalol Gandhi Nagar Gujarat 382721!5e0!3m2!1sen!2sin!4v0000000000000!5m2!1sen!2sin
"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="mt-8 text-center text-gray-400">
        <p>
          📍 <span className="text-yellow-400 font-semibold">REGD Office:</span>  
          : BLOCK NO. 2221, PAIKI 06, SHRI RAM INDUSTRIAL ESTATE, SANTEJ KHATRAJ ROAD,
 OPP. SHAH ALLOY, KALOL, GANDHI NAGAR,
        </p>
        <p>📞 8866601320</p>
        <p>✉️ info.luimekindustries@gmail.com</p>
      </div>
    </div>
  );
};

export default Location;
