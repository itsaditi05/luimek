import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const DesignIdeas = () => {
  // 1️⃣ HERO SECTION DATA (Your Original Images + Connected Luimek Products)
  const spaces = [
    {
      name: "Bedroom",
      // Your Original Image
      img: "https://images.unsplash.com/photo-1753505889211-9cfbac527474?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1154",
      desc: "Warm ambient lights for cozy Nights.",
      // Connected Luimek Product
      productName: "Profile Light",
      productImg: "/indoor/profilelight.jpg", 
      link: "/indoor"
    },
    {
      name: "Dining Area",
      // Your Original Image
      img: "https://images.unsplash.com/photo-1703565426315-4209c2e88eea?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074",
      desc: "Pendant lights that make every dinner special.",
      // Connected Luimek Product
      productName: "Hanging Light",
      productImg: "/indoor/hanging-light.png",
      link: "/indoor"
    },
    {
      name: "Office Space",
      // Your Original Image
      img: "https://plus.unsplash.com/premium_photo-1661915759180-210f2f58cc41?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1331",
      desc: "Modern magnetic lights for perfect focus.",
      // Connected Luimek Product
      productName: "Magnetic Track",
      productImg: "/indoor/Magnetic track.jpg",
      link: "/indoor"
    },
    {
      name: "Outdoor Garden",
      // Your Original Image
      img: "https://images.unsplash.com/photo-1658692051708-519fbdac7e8f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
      desc: "Rope and tree lights to bring nature alive.",
      // Connected Luimek Product
      productName: "Bollux Light",
      productImg: "/Outdoor/Bollux.jpg",
      link: "/outdoor"
    },
    {
      name: "Street-LIGHTS",
      // Your Original Image
      img: "https://images.unsplash.com/photo-1703861624492-4cc1fbeb3b02?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=764",
      desc: "Lighting up every street safely..",
      // Connected Luimek Product
      productName: "LED Street Light",
      productImg: "/Outdoor/streetlight-p.jpg",
      link: "/industrial"
    },
  ];

  // 2️⃣ KELVIN MOODS (Kept exactly as you had them)
  const moods = [
    {
      kelvin: "3000K",
      name: "Warm White",
      gradient: "from-amber-200 via-orange-100 to-yellow-100",
      border: "border-orange-200",
      shadow: "shadow-[0_0_40px_rgba(251,146,60,0.3)]",
    },
    {
      kelvin: "4000K",
      name: "Neutral White",
      gradient: "from-yellow-50 via-orange-50 to-white",
      border: "border-orange-100",
      shadow: "shadow-[0_0_40px_rgba(253,186,116,0.2)]",
    },
    {
      kelvin: "5000K",
      name: "Daylight",
      gradient: "from-white via-slate-100 to-gray-200",
      border: "border-gray-300",
      shadow: "shadow-[0_0_40px_rgba(255,255,255,0.5)]",
    },
    {
      kelvin: "6000K",
      name: "Cool Daylight",
      gradient: "from-blue-200 via-sky-200 to-cyan-100",
      border: "border-blue-300",
      shadow: "shadow-[0_0_40px_rgba(56,189,248,0.5)]",
    },
  ];

  const tips = [
    "💡 Combine warm and cool lights for perfect balance.",
    "✨ Layer your light: ambient, accent, and task.",
    "🏠 Keep wall washers 1.5 ft away for even glow.",
    "🌿 Use dimmers to control mood lighting.",
  ];

  // 3️⃣ GALLERY MAPPED TO YOUR PRODUCTS (Pinterest Images + Local Products)
  const galleryItems = [
    {
      url: "https://i.pinimg.com/1200x/a6/79/4a/a6794ad025d1a87291fc23deca5af069.jpg",
      productName: "Magnetic Track",
      productImg: "/indoor/Magnetic track.jpg",
      link: "/indoor"
    },
    {
      url: "https://i.pinimg.com/736x/f3/ac/75/f3ac75f991fed97e5a83ad499cb948d1.jpg",
      productName: "Profile Light",
      productImg: "/indoor/profilelight.jpg",
      link: "/indoor"
    },
    {
      url: "https://i.pinimg.com/1200x/52/0e/72/520e72cf9462f3ec8bcf301535109cac.jpg",
      productName: "Wall Washer",
      productImg: "/Outdoor/washer.jpg",
      link: "/outdoor"
    },
    {
      url: "https://i.pinimg.com/736x/69/ff/d7/69ffd71ebaa5a422ccde7eb3aedac856.jpg",
      productName: "Cylinder Light",
      productImg: "/indoor/cylinder.jpg",
      link: "/indoor"
    },
    {
      url: "https://i.pinimg.com/736x/ea/f9/42/eaf9421b859b7ab6fbac7ee0ca53bf0a.jpg",
      productName: "Alpha Focus",
      productImg: "/indoor/Alpha.jpg",
      link: "/indoor"
    },
    {
      url: "https://i.pinimg.com/1200x/1c/92/4d/1c924d66974616720ae75a517b0e4558.jpg",
      productName: "Castel Outdoor",
      productImg: "/Outdoor/Castel.jpg",
      link: "/outdoor"
    },
    {
      url: "https://i.pinimg.com/736x/2d/c2/5b/2dc25b181372669ecf6dfba79d01745d.jpg",
      productName: "Rope Light",
      productImg: "/Outdoor/Ropelight.jpg",
      link: "/outdoor"
    },
    {
      url: "https://i.pinimg.com/736x/c4/41/e5/c441e55dfa994aceb56acff6a5c33cc7.jpg",
      productName: "Hanging Light",
      productImg: "/indoor/hanging-light.png",
      link: "/indoor"
    },
    {
      url: "https://i.pinimg.com/736x/b4/21/d9/b421d95a23c63dcdc591d797c2200ec4.jpg",
      productName: "Panel Light",
      productImg: "/indoor/panel.jpg",
      link: "/indoor"
    },
    {
      url: "https://i.pinimg.com/736x/d2/7d/b7/d27db70bddf45ab3f75c9656e6c813aa.jpg",
      productName: "Track Light",
      productImg: "/indoor/Track-Line.jpg",
      link: "/indoor"
    },
    {
      url: "https://i.pinimg.com/1200x/1c/3f/e0/1c3fe080939189432b6985c90abcb27f.jpg",
      productName: "Bollux Light",
      productImg: "/Outdoor/Bollux.jpg",
      link: "/outdoor"
    },
    {
      url: "https://i.pinimg.com/736x/2c/4b/43/2c4b4316582e9543a90e879276b17a25.jpg",
      productName: "Revon Light",
      productImg: "/indoor/revon.jpg",
      link: "/indoor"
    },
  ];

  return (
    <div className="bg-black text-white font-sans overflow-x-hidden">
      
      {/* HERO SECTION */}
      <section
        className="relative h-[80vh] flex items-center justify-center text-center bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80')`,
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <motion.div
          className="relative z-10 px-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-yellow-400 mb-4">
            Illuminate Your Imagination
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Explore how light transforms spaces — where every glow tells a story.
          </p>
        </motion.div>
      </section>

      {/* LIGHTING BY SPACE (Interactive with Your Products) */}
      <section className="py-16 px-6 md:px-20">
        <h2 className="text-4xl text-yellow-400 font-semibold text-center mb-12">
          Lighting by Space
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {spaces.map((space, index) => (
            <Link to={space.link} key={index}>
              <motion.div
                className="relative group overflow-hidden rounded-2xl shadow-lg cursor-pointer"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Your Original Image */}
                <img
                  src={space.img}
                  alt={space.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/80 transition-all flex flex-col items-center justify-center">
                  
                  {/* Default Text */}
                  <div className="group-hover:translate-y-[-20px] transition-transform duration-300 flex flex-col items-center">
                    <h3 className="text-xl font-semibold text-yellow-400">
                      {space.name}
                    </h3>
                    <p className="text-sm text-gray-300 mt-2">{space.desc}</p>
                  </div>

                  {/* Hover Product Reveal */}
                  <div className="absolute bottom-[-100px] group-hover:bottom-4 transition-all duration-500 flex flex-col items-center">
                        <p className="text-yellow-400 text-xs font-bold uppercase mb-2">Get This Look</p>
                        <div className="flex items-center gap-3 bg-white/10 px-4 py-2 rounded-xl backdrop-blur-md border border-white/20">
                            <img src={space.productImg} alt="product" className="w-12 h-12 object-contain bg-white rounded-lg" />
                            <span className="text-white font-semibold text-sm">{space.productName}</span>
                        </div>
                  </div>

                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </section>

      {/* LIGHTING MOODS */}
      <div className="py-20 bg-[#0f0f0f] text-white">
        <h1 className="text-5xl font-bold text-center text-yellow-400 drop-shadow-lg mb-14">
          Lighting Moods
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto px-6">
          {moods.map((mood, index) => (
            <div
              key={index}
              className={`
              relative rounded-3xl p-8 h-56
              bg-gradient-to-br ${mood.gradient}
              backdrop-blur-xl bg-opacity-40
              border ${mood.border}
              ${mood.shadow}
              transition-all duration-500
              hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]
              hover:brightness-110
              overflow-hidden
            `}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-10"></div>
              <div className="absolute -top-20 -left-20 w-40 h-40 bg-white/20 blur-3xl rounded-full mix-blend-overlay"></div>

              <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-gray-900">
                <h2 className="text-3xl font-bold tracking-wide mb-2">
                  {mood.kelvin}
                </h2>
                <p className="text-lg opacity-90 font-medium">{mood.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* INSPIRATION GALLERY (Pinterest Images + Connected Products) */}
      <div className="py-20 px-6 bg-neutral-900">
        <h2 className="text-4xl text-yellow-400 font-semibold text-center mb-16">
            Inspiration Gallery
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryItems.map((item, i) => (
            <Link to={item.link} key={i}>
                <div
                className="relative overflow-hidden rounded-xl shadow-lg group cursor-pointer h-72"
                >
                {/* Your Original Pinterest Image */}
                <img
                    src={item.url}
                    alt={`Lighting Design ${i + 1}`}
                    className="w-full h-full object-cover object-center rounded-xl transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay with Your Product */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/70 transition-all flex flex-col items-center justify-center opacity-0 group-hover:opacity-100">
                    <p className="text-yellow-400 font-semibold mb-2 text-sm uppercase tracking-widest">
                    Used Here
                    </p>
                    <div className="flex items-center gap-3 bg-black/60 px-4 py-2 rounded-lg border border-yellow-500/50">
                        <img 
                            src={item.productImg} 
                            alt={item.productName} 
                            className="w-10 h-10 object-contain bg-white rounded" 
                        />
                        <span className="text-white font-bold">{item.productName}</span>
                    </div>
                </div>
                </div>
            </Link>
          ))}
        </div>
      </div>

      {/* TIPS SECTION */}
      <section className="py-16 px-6 bg-[#111]">
        <h2 className="text-4xl text-yellow-400 font-semibold text-center mb-12">
          Design Tips
        </h2>
        <div className="max-w-2xl mx-auto space-y-4 text-center text-gray-300">
          {tips.map((tip, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-lg"
            >
              {tip}
            </motion.p>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center bg-black">
        <h2 className="text-3xl text-yellow-400 font-semibold mb-4">
          Loved an Idea? Let’s Make It Real ✨
        </h2>
        <p className="text-gray-400 mb-6">
          Get a free consultation and bring your lighting dreams to life.
        </p>
        <a
          href="/contact"
          className="bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 transition-all shadow-md"
        >
          Get in Touch
        </a>
      </section>
    </div>
  );
};

export default DesignIdeas;