import React from 'react';
import { Instagram, Facebook, Twitter, Linkedin, MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- Top Section: 4 Columns --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 border-b border-gray-800 pb-12">
          
          {/* 1. Brand & Logo */}
          <div className="space-y-6">
            <Link to="/">
              <img 
                src="/logo/Luimek-Logo.png" 
                alt="LUIMEK" 
                className="h-25 w-auto object-contain brightness-0 invert" 
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Illuminating spaces with modern design and energy-efficient technology. We bring the art of light to your home.
            </p>
            
            <div className="flex space-x-4">
              <SocialIcon icon={<Instagram size={20} />} />
              <SocialIcon icon={<Facebook size={20} />} />
              <SocialIcon icon={<Twitter size={20} />} />
              <SocialIcon icon={<Linkedin size={20} />} />
            </div>
          </div>

          {/* 2. Shop Links */}
          <div>
            <h3 className="text-yellow-500 font-bold text-lg mb-6">Shop</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <FooterLink to="/products">Living Room</FooterLink>
              <FooterLink to="/products">Bedroom Lights</FooterLink>
              <FooterLink to="/products">Outdoor & Garden</FooterLink>
              <FooterLink to="/products">Smart Lighting</FooterLink>
              <FooterLink to="/products">Industrial Series</FooterLink>
            </ul>
          </div>

          {/* 3. Support Links */}
          <div>
            <h3 className="text-yellow-500 font-bold text-lg mb-6">Support</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="hover:text-white transition cursor-pointer">Track Order</li>
              <li className="hover:text-white transition cursor-pointer">Warranty Policy</li>
              <li className="hover:text-white transition cursor-pointer">Installation Guide</li>
              <li className="hover:text-white transition cursor-pointer">Returns & Exchange</li>
              <Link to="/contact" className="hover:text-white transition block">Contact Us</Link>
            </ul>
          </div>

          {/* 4. Contact Info */}
          <div>
            <h3 className="text-yellow-500 font-bold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-6 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-yellow-500 flex-shrink-0 mt-1" />
                <span>
                  BLOCK NO. 2221, PAIKI 06, SHRI RAM INDUSTRIAL ESTATE, SANTEJ KHATRAJ ROAD, KALOL, GANDHI NAGAR
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-yellow-500 flex-shrink-0" />
                <span>+8866601320</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-yellow-500 flex-shrink-0" />
                <a href="mailto:info.luimekindustries@gmail.com" className="hover:text-white transition">
                  info.luimekindustries@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* --- Bottom Section: Copyright & Developer Credit --- */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          
          <p>© 2025 Luimek Lighting Solutions. All rights reserved.</p>

          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-white transition">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition">Terms of Service</Link>
          </div>

        </div>

        {/* ✅ UPDATED DEVELOPER CREDIT SECTION */}
        <div className="mt-8 pt-6 border-t border-gray-900 text-center">
            <p className="text-xs text-gray-600 flex items-center justify-center gap-1">
                Designed & Developed by 
                <a 
                    href="mailto:upadhyayaditi664@gmail.com" 
                    className="text-gray-400 font-bold hover:text-yellow-500 transition flex items-center gap-1 ml-1 tracking-wider"
                    title="Contact Developer"
                >
                    A<sup>2</sup>Digital Studio
                </a>
            </p>
        </div>

      </div>
    </footer>
  );
};

// Helper Components
const SocialIcon = ({ icon }) => (
  <div className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-gray-400 hover:bg-yellow-500 hover:text-black transition cursor-pointer">
    {icon}
  </div>
);

const FooterLink = ({ to, children }) => (
  <li>
    <Link to={to} className="hover:text-white transition block">
      {children}
    </Link>
  </li>
);

export default Footer;