import React,{useEffect ,useState} from "react";
import { motion } from "framer-motion";




const AboutUs = () => {
  const [brightness, setBrightness] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const height = document.body.scrollHeight - window.innerHeight;
      const scrollProgress = scrollY / height;

      // Adjust brightness between 0.6 (dark) and 1.2 (bright)
      const newBrightness = 0.6 + scrollProgress * 0.6;
      setBrightness(newBrightness);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="text-gray-200 transition-all duration-700 ease-out"
      style={{
        backgroundColor: `rgba(0,0,0,${1.2 - brightness / 2})`,
        filter: `brightness(${brightness})`,
      }}
    >

    
      {/* 🔶 Hero Section - 3D Vibe Intro */}
      {/* 🔶 Hero Section - Interactive 3D Lighting Intro */}
{/* Background Video Section */}
<section className="relative w-full h-screen overflow-hidden">
  <video
    src="/Video/Aboutus.mp4"
    autoPlay
    loop
    muted
    playsInline
    className="absolute top-0 left-0 w-full h-full object-cover opacity-60 z-0"
  ></video>

  <div className="absolute inset-0 bg-black/20 z-5"></div> {/* Optional overlay for better text contrast */}

  <div className="relative z-10 text-center flex flex-col items-center justify-center h-full text-white">
    <h1 className="text-5xl font-bold text-yellow-400">About Luimek</h1>
    <p className="mt-4 text-lg text-gray-200 max-w-2xl">
      Where innovation meets illumination ✨
    </p>
  </div>
</section>


      {/* 🏭 Our Innovation Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-black via-gray-900 to-black text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-semibold text-yellow-400 mb-8"
        >
          Our Innovation — India’s First Smart Patent
        </motion.h2>
        <p className="max-w-4xl mx-auto text-lg text-gray-300 leading-relaxed">
          Luimek proudly holds India’s first lighting patent — an intelligent communication
          technology that detects and reports failures in real-time.  
          Imagine — a street light goes off, and within seconds, an email notification reaches the control center.  
          That’s *Luimek innovation* — where technology meets reliability.
        </p>
      </section>

      {/* 👨‍🔬 Manufacturing and Teams */}
      <section className="grid md:grid-cols-2 gap-12 py-20 px-8 max-w-6xl mx-auto items-center">
        <motion.img
          src="/products/petant.png"
          alt="Manufacturing"
          className="rounded-2xl shadow-lg"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        />
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl text-yellow-400 mb-6 font-semibold">
            From Design to Delivery — All Under One Roof
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Our Gujarat-based facility houses a *complete manufacturing ecosystem* —
            from design, assembly, and fabrication to on-site quality verification.
          </p>
          <ul className="space-y-3 text-gray-400 text-lg">
            <li>✨ Dedicated Designing Team</li>
            <li>🛠️ Assembling & Manufacturing Experts</li>
            <li>🎨 Lighting Designers & Inventors</li>
            <li>⚙️ Inbuilt Driver Systems for Long Life</li>
          </ul>
        </motion.div>
      </section>

      {/* 💡 Product Range */}
      <section className="py-20 bg-[#111] text-center">
        <h2 className="text-4xl text-yellow-400 mb-6 font-semibold">
          Luxury Lighting — Indoors & Outdoors
        </h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-400 leading-relaxed">
          Whether it’s your home, office, or the grandest architectural projects —  
          Luimek delivers lighting that defines luxury.  
          From magnetic track systems to designer wall fixtures,  
          every product combines art, innovation, and durability.
        </p>

        <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {["Indoor Lighting", "Outdoor Lighting", "Smart Lights", "Architectural Fixtures", "Luxury Series", "Industrial Range"].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-[#1b1b1b] border border-gray-700 rounded-xl py-10 px-6 shadow-md hover:shadow-yellow-500/20 transition"
            >
              <h3 className="text-yellow-400 text-xl font-semibold">{item}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🚚 Services */}
      <section className="py-20 px-8 text-center bg-gradient-to-t from-black via-gray-900 to-black">
        <h2 className="text-4xl text-yellow-400 mb-6 font-semibold">Our Services</h2>
        <p className="max-w-4xl mx-auto text-gray-300 mb-12 text-lg leading-relaxed">
          We don’t just provide lights — we provide peace of mind.  
          Our dedicated after-sales service ensures your investment shines longer.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            "🛠️ Door-to-Door Warranties (2–5 years)",
            "🔍 On-site Technical Verification",
            "🚚 Quick & Safe Delivery",
            "🧾 Single & Bulk Order Fulfillment",
            "⚡ Custom Lighting Solutions",
            "💬 24x7 Support Team",
          ].map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-[#1a1a1a] border border-gray-800 p-6 rounded-xl text-gray-300 hover:text-yellow-400 transition"
            >
              {service}
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🌏 Ending Section */}
      <section className="text-center py-16 bg-black border-t border-gray-800">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-3xl sm:text-4xl text-yellow-400 font-semibold"
        >
          Proudly Designed & Manufactured in Gujarat, Made In India
        </motion.h2>
        <p className="mt-4 text-gray-400 text-lg">
          Luimek — Lighting up India’s Infrastructure with Elegance, Intelligence & Trust.
        </p>
      </section>
      {/* 🏗️ Our Projects Section */}
{/* 🔥 OUR PROJECTS – MODERN HOVER REVEAL SECTION */}




{/* 💬 Client Reviews Section */}
<section className="py-20 bg-black border-t border-gray-800">
  <motion.h2
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="text-center text-4xl font-semibold text-yellow-400 mb-10"
  >
    What Our Clients Say
  </motion.h2>

  <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 px-6">
    {[
      {
        name: "Rohit Sharma",
        review:
          "Luimek lights completely transformed our café interiors. Stunning quality and professional service!",
      },
      {
        name: "Aditi Designs Studio",
        review:
          "Their COB and architectural lights added a premium finish to our commercial project.",
      },
      {
        name: "Urban Infra Pvt Ltd",
        review:
          "Excellent lighting solutions for smart street applications. Reliable and great support team.",
      },
    ].map((c, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-[#111] border border-gray-800 rounded-xl p-6 shadow-lg"
      >
        <p className="text-gray-300 italic mb-4">“{c.review}”</p>
        <h4 className="text-yellow-400 font-semibold">— {c.name}</h4>
      </motion.div>
    ))}
  </div>
</section>

    </div>
  );
};

export default AboutUs;
