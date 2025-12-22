import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lightbulb, Mail, Clock, ShieldCheck, Award, Zap, CheckCircle2, ChevronRight, Plus, Minus } from 'lucide-react';

// --- DATA FOR INTERACTIVE SECTION (UPDATED WITH STREET/HIGHWAY IMAGES) ---
const techModes = [
  {
    id: 'traditional',
    name: 'Traditional Systems',
    tag: 'The Old Way',
    color: 'rgba(255, 140, 0, 0.3)', // Warm/Yellowish tint for old lights
    // ✅ IMAGE CHANGED: Dim, foggy, old-style street lighting
    image: "/solution/defective.png", 
    description: "In traditional setups, authorities rely on public complaints. Streets remain dark for days or weeks before anyone notices the fault.",
    benefit: "Slow & Unreliable"
  },
  {
    id: 'luimek',
    name: 'The Luimek Solution',
    tag: 'Patented Tech',
    color: 'rgba(0, 200, 255, 0.2)', // Cool/Bright White tint for modern LED
    // ✅ IMAGE CHANGED: Bright, modern highway with white LED lights
    image: "/solution/solving.png", 
    description: "Our IoT sensors detect failure instantly. An automatic Gmail alert is sent to the control room with exact coordinates.",
    benefit: "Instant Detection"
  },
  {
    id: 'impact',
    name: 'The Impact',
    tag: '24hr Promise',
    color: 'rgba(50, 255, 50, 0.2)', // Green tint for success/reliability
    // ✅ IMAGE CHANGED: Complex highway infrastructure fully lit up
    image: "/solution/solve.png", 
    description: "Our rapid response team is dispatched immediately. We guarantee issue resolution within 24 hours of detection.",
    benefit: "100% Uptime"
  }
];

// --- DATA FOR VALUES CARDS (SAME AS BEFORE) ---
const values = [
  {
    id: 1,
    title: "Government Patent",
    subtitle: "First in Industry",
    desc: "Officially recognized technology for smart fault detection.",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop",
    tags: ["Certified", "Unique"]
  },
  {
    id: 2,
    title: "24-Hour Resolution",
    subtitle: "Speed Guarantee",
    desc: "We don't just detect; we fix. Downtime is not an option.",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop",
    tags: ["Fast", "Reliable"]
  },
  {
    id: 3,
    title: "IoT Integrated",
    subtitle: "Smart Future",
    desc: "Seamlessly connected infrastructure for modern smart cities.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
    tags: ["AI Ready", "Cloud"]
  },
  {
    id: 4,
    title: "Made in India",
    subtitle: "Local Excellence",
    desc: "Designed, engineered, and manufactured locally for the world.",
    image: "https://images.unsplash.com/photo-1595842820524-789230537a7b?auto=format&fit=crop&w=1000",
    tags: ["Indigenous", "Quality"]
  }
];

const About = () => {
  const [activeTech, setActiveTech] = useState(techModes[1]); // Default to Luimek

  return (
    <div className="bg-white min-h-screen pb-20">
      
      {/* --- 1. HERO SECTION --- */}
      <div className="relative w-full h-[450px] bg-black flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-50">
           <img 
             // ✅ HERO IMAGE CHANGED to a better highway shot
             src="https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=80&w=2064&auto=format&fit=crop" 
             className="w-full h-full object-cover" 
             alt="City Lights Highway" 
           />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl">
            <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-tight"
            >
                We keep the lights <span className="text-yellow-500">ON</span> when others fail.
            </motion.h1>
            <p className="text-gray-300 mt-6 text-lg md:text-xl">
                India's First Government Patented Smart Lighting System that talks to us before it fails.
            </p>
        </div>
      </div>

      {/* --- 2. INTERACTIVE TECH SHOWCASE (STREET LIGHT EDITION) --- */}
      <section className="relative w-full h-[700px] bg-gray-900 overflow-hidden">
          
          {/* Background Image Changer */}
          <div className="absolute inset-0 transition-all duration-700 ease-in-out">
            <img 
              src={activeTech.image} 
              alt={activeTech.name} 
              className="w-full h-full object-cover"
            />
            {/* Color Overlay for mood */}
            <div 
                className="absolute inset-0 transition-colors duration-700 mix-blend-multiply opacity-80"
                style={{ backgroundColor: activeTech.color }}
            ></div>
            {/* Dark Gradient for text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
          </div>

          {/* Content Panel (Left Side) */}
          <div className="relative z-10 h-full flex items-center px-4 md:px-10 max-w-7xl mx-auto">
            <div className="w-full md:w-[500px] text-white">
                <h2 className="text-sm font-bold text-yellow-500 tracking-widest uppercase mb-2">The Innovation</h2>
                <h3 className="text-3xl md:text-5xl font-bold mb-6">See the Difference</h3>
                
                <div className="space-y-4">
                    {techModes.map((mode) => (
                        <div 
                            key={mode.id}
                            onClick={() => setActiveTech(mode)}
                            className={`cursor-pointer border rounded-xl overflow-hidden transition-all duration-300 ${activeTech.id === mode.id ? 'bg-white text-gray-900 border-white scale-105 shadow-xl' : 'bg-transparent border-white/20 text-gray-400 hover:bg-white/10'}`}
                        >
                            <div className="p-4 flex justify-between items-center">
                                <span className="font-bold text-lg">{mode.name}</span>
                                {activeTech.id === mode.id ? <Minus size={20} /> : <Plus size={20} />}
                            </div>
                            
                            <AnimatePresence>
                                {activeTech.id === mode.id && (
                                    <motion.div 
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="px-4 pb-4 text-sm"
                                    >
                                        <div className="border-t border-gray-300 pt-3 mb-2 opacity-80">{mode.description}</div>
                                        <div className="flex items-center gap-2 font-bold text-yellow-600 mt-2">
                                            <CheckCircle2 size={16} /> {mode.benefit}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
          </div>
      </section>

      {/* --- 3. OUR CORE PILLARS --- */}
      <section className="bg-[#2a2a2a] py-20 px-4 md:px-10">
        <div className="max-w-7xl mx-auto">
            
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white">Why Luimek Leads</h2>
                <p className="text-gray-400 mt-2">Building trust through transparency and technology</p>
                <div className="w-20 h-1 bg-yellow-500 mx-auto mt-4 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {values.map((val) => (
                    <motion.div 
                        key={val.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-[#dcdcdc] rounded-xl overflow-hidden flex flex-col hover:shadow-2xl transition-all duration-300 group"
                    >
                        {/* Image Area */}
                        <div className="h-48 overflow-hidden relative">
                            <img 
                                src={val.image} 
                                alt={val.title} 
                                className="w-full h-full object-cover group-hover:scale-110 transition duration-700 filter grayscale group-hover:grayscale-0" 
                            />
                            <div className="absolute top-3 left-3 bg-yellow-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                                {val.subtitle}
                            </div>
                        </div>

                        {/* Content Area */}
                        <div className="p-6 flex flex-col flex-grow bg-white">
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{val.title}</h3>
                            <p className="text-gray-500 text-sm mb-4 leading-relaxed line-clamp-3">
                                {val.desc}
                            </p>

                            {/* Tags */}
                            <div className="flex gap-2 mb-6">
                                {val.tags.map((tag) => (
                                    <span key={tag} className="text-xs border border-gray-300 px-2 py-1 rounded text-gray-600 bg-gray-50">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Button */}
                            <button className="mt-auto w-full bg-[#212529] text-white py-3 rounded-lg font-medium hover:bg-black transition flex items-center justify-center gap-2 text-sm">
                                Learn More <ChevronRight size={16} />
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>

        </div>
      </section>

    </div>
  );
};

export default About;