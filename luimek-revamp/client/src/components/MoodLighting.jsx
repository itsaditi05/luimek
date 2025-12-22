import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Check, ArrowRight } from 'lucide-react';

const lightingModes = [
  {
    id: 'warm',
    name: 'Warm White',
    temp: '3000K',
    color: 'rgba(255, 147, 41, 0.4)', // Warm Orange Tint
    description: "Cozy and inviting. Perfect for bedrooms and living rooms where relaxation is key.",
    benefit: "Relaxation & Comfort"
  },
  {
    id: 'neutral',
    name: 'Neutral White',
    temp: '4000K',
    color: 'rgba(255, 255, 255, 0.1)', // Natural Clear Tint
    description: "Clean and natural. Mimics daylight, making it ideal for grooming and dressing areas.",
    benefit: "True Color Rendering"
  },
  {
    id: 'cool',
    name: 'Cool White',
    temp: '6500K',
    color: 'rgba(200, 230, 255, 0.4)', // Cool Blue Tint
    description: "Bright and crisp. enhances concentration, making it great for study desks and kitchens.",
    benefit: "Focus & Clarity"
  }
];

const MoodLighting = () => {
  const [activeMode, setActiveMode] = useState(lightingModes[0]);

  return (
    <section className="relative w-full h-[600px] md:h-[700px] bg-gray-900 overflow-hidden">
      
      {/* 1. Background Image with Dynamic Overlay */}
      <div className="absolute inset-0 transition-all duration-700 ease-in-out">
        <img 
          src="https://jrtinteriors.com/wp-content/uploads/2025/02/The-Importance-of-Lighting-in-Interior-Design.jpg" 
          alt="Room Interior" 
          className="w-full h-full object-cover"
        />
        
        {/* Dynamic Color Overlay (Magic happens here) */}
        <div 
            className="absolute inset-0 transition-colors duration-700 mix-blend-multiply"
            style={{ backgroundColor: activeMode.color }}
        ></div>
        
        {/* Extra Brightness Adjustment for Cool/Neutral */}
        <div className={`absolute inset-0 bg-black/10 transition-opacity duration-700 ${activeMode.id === 'cool' ? 'opacity-0' : 'opacity-20'}`}></div>
      </div>

      {/* 2. Floating Control Panel */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center px-4 md:px-20 pointer-events-none">
        <div className="w-full max-w-lg bg-white/10 backdrop-blur-md border border-white/20 p-6 md:p-8 rounded-2xl shadow-2xl pointer-events-auto text-white">
          
          <h2 className="text-3xl font-bold mb-2">Set The Mood</h2>
          <p className="text-gray-200 text-sm mb-8">Explore our 3CCT lighting with adjustable colour temperatures.</p>

          {/* Buttons for Modes */}
          <div className="space-y-4">
            {lightingModes.map((mode) => (
              <div 
                key={mode.id}
                onClick={() => setActiveMode(mode)}
                className={`cursor-pointer border rounded-xl overflow-hidden transition-all duration-300 ${activeMode.id === mode.id ? 'bg-white text-gray-900 border-white scale-105 shadow-lg' : 'bg-transparent border-white/30 hover:bg-white/10 text-white'}`}
              >
                <div className="p-4 flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <Sun size={20} className={activeMode.id === mode.id ? "text-yellow-500" : "text-gray-400"} />
                        <span className="font-semibold text-lg">{mode.name}</span>
                    </div>
                    {activeMode.id === mode.id && <span className="text-xs font-bold bg-black/10 px-2 py-1 rounded">{mode.temp}</span>}
                </div>

                {/* Expanded Details (Accordion Effect) */}
                <AnimatePresence>
                    {activeMode.id === mode.id && (
                        <motion.div 
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="bg-gray-100 text-gray-800 px-4 pb-4 text-sm"
                        >
                            <hr className="border-gray-300 mb-3" />
                            <p className="mb-2">{mode.description}</p>
                            <div className="flex items-center gap-2 font-medium text-yellow-700">
                                <Check size={14} /> {mode.benefit}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <button className="w-full mt-8 bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition">
            View Smart Products <ArrowRight size={18} />
          </button>

        </div>
      </div>

    </section>
  );
};

export default MoodLighting;