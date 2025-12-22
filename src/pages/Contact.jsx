import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Import framer-motion
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi"; // Import icons

const Contact = () => {
  const [sending, setSending] = useState(false); // Matches 'sending' in your JSX
  const [success, setSuccess] = useState(false); // Matches 'success' popup in your JSX
  
  // 1️⃣ Missing State added here
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // 2️⃣ Missing HandleChange function added here
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);

    const data = new FormData(e.target);

    // 👇 Aapki Key
    data.append("access_key", "3e5e7121-208e-4840-9040-e66bc99e987d"); 
    data.append("subject", "New Message from Luimek Website");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data
      });

      const result = await response.json();

      if (result.success) {
        setSuccess(true); // Show Success Popup
        setFormData({ name: "", email: "", message: "" }); // Clear Form
        
        // Hide popup after 5 seconds
        setTimeout(() => setSuccess(false), 5000);
      } else {
        console.error("Error", result);
        alert("Something went wrong.");
      }
    } catch (error) {
      console.error("Error", error);
      alert("Failed to send message.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white flex flex-col items-center justify-center px-6 pt-40 pb-20 relative overflow-hidden">
      
      {/* Glowing Backgrounds */}
      <motion.div
        className="absolute top-20 left-32 w-52 h-52 bg-yellow-500 blur-[120px] opacity-30 rounded-full"
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-72 h-72 bg-yellow-400 blur-[160px] opacity-40 rounded-full"
        animate={{ y: [0, 40, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
      />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center mb-10 z-10"
      >
        <h1 className="text-5xl font-bold tracking-wider mb-4 text-yellow-400">
          Get in Touch
        </h1>
        <p className="text-gray-300 max-w-xl mx-auto leading-relaxed">
          Have a query, feedback or project idea? Let’s connect — we love illuminating spaces and minds alike.
        </p>
      </motion.div>

      {/* Contact Info */}
      <div className="grid md:grid-cols-3 gap-10 text-center mb-16">
        <motion.div whileHover={{ scale: 1.05 }} className="bg-white/5 p-6 rounded-2xl backdrop-blur-lg shadow-lg">
          <FiPhone className="text-yellow-400 text-3xl mx-auto mb-3" />
          <h3 className="text-xl font-semibold mb-1">Call Us</h3>
          <p className="text-gray-400">8866601320</p>
        </motion.div>

        <motion.div whileHover={{ scale: 1.05 }} className="bg-white/5 p-6 rounded-2xl backdrop-blur-lg shadow-lg">
          <FiMail className="text-yellow-400 text-3xl mx-auto mb-3" />
          <h3 className="text-xl font-semibold mb-1">Email</h3>
          <p className="text-gray-400">info.luimekindustries@gmail.com</p>
        </motion.div>

        <motion.div whileHover={{ scale: 1.05 }} className="bg-white/5 p-6 rounded-2xl backdrop-blur-lg shadow-lg">
          <FiMapPin className="text-yellow-400 text-3xl mx-auto mb-3" />
          <h3 className="text-xl font-semibold mb-1">Address</h3>
          <p className="text-gray-400">Gujarat, India</p>
        </motion.div>
      </div>

      {/* Contact Form */}
      <motion.form
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white/10 p-8 rounded-2xl backdrop-blur-md shadow-xl space-y-6 z-10"
      >
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="w-full bg-white/10 text-white px-4 py-3 rounded-lg border border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="w-full bg-white/10 text-white px-4 py-3 rounded-lg border border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
          <textarea
            name="message"
            rows="4"
            required
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message..."
            className="w-full bg-white/10 text-white px-4 py-3 rounded-lg border border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 resize-none"
          />
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          disabled={sending}
          className={`w-full ${
            sending ? "bg-yellow-700" : "bg-gradient-to-r from-yellow-400 to-yellow-600"
          } text-black font-semibold py-3 rounded-lg shadow-lg hover:shadow-yellow-500 transition-all`}
        >
          {sending ? "Sending..." : "Send Message 💬"}
        </motion.button>
      </motion.form>

      {/* 🌟 SUCCESS POPUP ANIMATION */}
      <AnimatePresence>
        {success && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-50"
          >
            <motion.div
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              className="bg-gradient-to-br from-yellow-400 to-yellow-600 text-black px-10 py-8 rounded-2xl shadow-2xl text-center"
            >
              <h2 className="text-3xl font-bold mb-2">Message Sent! ✨</h2>
              <p className="text-lg text-gray-800 mb-3">
                Thank you for contacting <b>Luimek</b>.  
                Our team will get back to you soon!
              </p>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                className="mx-auto mt-3 w-12 h-12 border-4 border-yellow-800 border-t-transparent rounded-full"
              ></motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Contact;