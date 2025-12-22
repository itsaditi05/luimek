import React, { useState } from "react";
import { motion } from "framer-motion";

const TalkToExpert = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center bg-white relative">

      {/* Title */}
      <h1 className="text-3xl sm:text-4xl tracking-[0.45em] text-gray-700 mb-16 font-light">
        TALK TO AN EXPERT
      </h1>

      {/* Floating Expert Bubble */}
      <motion.div
        initial={{ y: -8 }}
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
        onClick={() => setOpen(!open)}
        className="cursor-pointer z-50 relative"
      >
        <div
          className="
            w-36 h-36 rounded-full
            border-4
            bg-gradient-to-br from-yellow-300 via-yellow-500 to-yellow-700
            p-[3px]
            shadow-[0_0_25px_rgba(255,215,0,0.7)]
            hover:shadow-[0_0_40px_rgba(255,215,0,1)]
            transition-all duration-500
          "
        >
          <div className="w-full h-full rounded-full overflow-hidden bg-white">
            <img
              src="/expert/expert2.webp"
              alt="Expert"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </motion.div>

      {/* Glow effect */}
      <div className="absolute w-48 h-48 rounded-full blur-2xl bg-yellow-300 opacity-20 animate-pulse z-10" />

      {/* POPUP BOX */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="
            absolute bottom-10 bg-white
            shadow-xl rounded-xl p-6
            w-80 border border-yellow-400
            z-[999]
          "
        >
          <h2 className="text-xl font-semibold text-gray-700 mb-3">
            Need Help?
          </h2>

          <p className="text-gray-600 mb-5">
            Our lighting expert is ready to guide you instantly!
          </p>

          {/* Buttons */}
          <div className="flex flex-col gap-3">
            {/* 📞 CALL BUTTON */}
            <a
              href="tel:+918866601320" 
              className="bg-yellow-500 text-white px-4 py-2 rounded-lg text-center shadow hover:bg-yellow-600 transition"
            >
              📞 Call Now
            </a>

            {/* 💬 WHATSAPP BUTTON */}
            <a
              href="https://wa.me/918866601320" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-4 py-2 rounded-lg text-center shadow hover:bg-green-600 transition"
            >
              💬 WhatsApp Now
            </a>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default TalkToExpert;