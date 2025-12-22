import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Building2, Users, Loader2 } from 'lucide-react';

const Contact = () => {
  // --- STATE FOR FORM LOGIC ---
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    mobile: '',
    queryType: 'Bulk Purchase (Projects)',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'error' | null

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    // Combine extra fields into one message string for the backend
    // (Since our backend currently expects name, email, and message)
    const finalData = {
      name: formData.name,
      email: formData.email,
      message: `
        Query Type: ${formData.queryType}
        Company: ${formData.company}
        Mobile: ${formData.mobile}
        -------------------------
        Message: ${formData.message}
      `
    };

    try {
      const response = await fetch('/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(finalData),
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        setFormData({ name: '', company: '', email: '', mobile: '', queryType: 'General Inquiry', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      
      {/* --- Hero / Header Section --- */}
      <div className="bg-black text-white py-16 md:py-24 px-4 text-center">
        <h1 className="text-3xl md:text-5xl font-light tracking-tight mb-4">Partner with Luimek</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
          Looking for bulk lighting solutions or dealership opportunities? 
          Connect with our enterprise team for customized quotes and partnership details.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-10 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
        
        {/* --- LEFT: Contact Info --- */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Whether you are an architect designing a new space, a contractor needing bulk supplies, or a retailer looking to partner with us, we are here to assist you.
          </p>

          <div className="space-y-6">
            <ContactItem 
              icon={<Phone size={20} />} 
              title="Call Us (Mon-Sat, 10am-7pm)" 
              value="+8866601320" 
            />
            <ContactItem 
              icon={<Mail size={20} />} 
              title="For Business Inquiries" 
              value="info.luimekindustries@gmail.com" 
            />
            <ContactItem 
              icon={<Building2 size={20} />} 
              title="OFFICE" 
              value=": BLOCK NO. 2221, PAIKI 06, SHRI RAM INDUSTRIAL ESTATE, SANTEJ KHATRAJ ROAD, OPP. SHAH ALLOY, KALOL, GANDHI NAGAR" 
            />
          </div>

          {/* Trust Badge */}
          <div className="mt-12 bg-gray-50 p-6 rounded-xl border border-gray-100 flex items-start gap-4">
            <div className="bg-yellow-100 p-3 rounded-full text-yellow-700">
                <Users size={24} />
            </div>
            <div>
                <h4 className="font-bold text-gray-900">Dedicated B2B Support</h4>
                <p className="text-xs text-gray-500 mt-1">
                    Our team provides priority support, GST invoices, and volume discounts for our business partners.
                </p>
            </div>
          </div>
        </div>

        {/* --- RIGHT: Inquiry Form --- */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 md:p-8">
          <h3 className="text-xl font-bold mb-6">Send us a Query</h3>
          
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <InputGroup 
                    label="Your Name" 
                    placeholder="John Doe" 
                    type="text" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                />
                <InputGroup 
                    label="Company / Firm Name" 
                    placeholder="ABC Interiors" 
                    type="text" 
                    name="company" 
                    value={formData.company} 
                    onChange={handleChange} 
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <InputGroup 
                    label="Email Address" 
                    placeholder="john@company.com" 
                    type="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                />
                <InputGroup 
                    label="Mobile Number" 
                    placeholder="+91 99999 88888" 
                    type="tel" 
                    name="mobile" 
                    value={formData.mobile} 
                    onChange={handleChange} 
                />
            </div>

            {/* Dropdown for Query Type */}
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">I am interested in</label>
                <select 
                    name="queryType"
                    value={formData.queryType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-yellow-500 focus:bg-white focus:ring-0 transition outline-none text-sm"
                >
                    <option>Bulk Purchase (Projects)</option>
                    <option>Dealership / Franchise</option>
                    <option>Architect / Interior Designer Collaboration</option>
                    <option>General Inquiry</option>
                </select>
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message / Requirements</label>
                <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4" 
                    required
                    placeholder="Tell us about your project requirements..." 
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-yellow-500 focus:bg-white focus:ring-0 transition outline-none text-sm resize-none"
                ></textarea>
            </div>

            <button 
                type="submit" 
                disabled={loading}
                className="w-full bg-black text-white font-bold py-4 rounded-lg hover:bg-gray-800 transition flex items-center justify-center gap-2 disabled:opacity-50"
            >
                {loading ? <Loader2 className="animate-spin" /> : <Send size={18} />}
                {loading ? "Sending..." : "Send Message"}
            </button>

            {/* Success/Error Messages */}
            {status === 'success' && (
              <p className="text-green-600 text-center text-sm font-medium mt-2 bg-green-50 py-2 rounded">✅ Inquiry sent successfully! Our team will contact you soon.</p>
            )}
            {status === 'error' && (
              <p className="text-red-500 text-center text-sm font-medium mt-2 bg-red-50 py-2 rounded">❌ Failed to send. Please check your connection.</p>
            )}

          </form>
        </div>

      </div>
    </div>
  );
};

// Helper Component for Contact Items
const ContactItem = ({ icon, title, value }) => (
    <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-full bg-yellow-50 flex items-center justify-center text-yellow-600 flex-shrink-0">
            {icon}
        </div>
        <div>
            <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">{title}</p>
            <p className="text-gray-900 font-medium text-sm md:text-base">{value}</p>
        </div>
    </div>
);

// Helper Component for Inputs (Updated to accept props)
const InputGroup = ({ label, placeholder, type, name, value, onChange }) => (
    <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
        <input 
            type={type} 
            name={name}
            value={value}
            onChange={onChange}
            required
            placeholder={placeholder} 
            className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-yellow-500 focus:bg-white focus:ring-0 transition outline-none text-sm"
        />
    </div>
);

export default Contact;