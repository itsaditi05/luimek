import React, { useContext, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { allProducts } from '../assets/assets';
import { MapPin, Loader2, Navigation } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PlaceOrder = () => {
  const { cartItems, getTotalCartItems } = useContext(ShopContext);
  const navigate = useNavigate();
  
  // Form State
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', street: '',
    city: '', state: '', zipcode: '', country: 'India', phone: ''
  });
  const [loadingLoc, setLoadingLoc] = useState(false);

  // Calculate Total
  const totalAmount = allProducts.reduce((acc, product) => {
    if (cartItems[product.id] > 0) return acc + (product.price * cartItems[product.id]);
    return acc;
  }, 0);

  const deliveryFee = totalAmount > 0 ? 0 : 0; // Free delivery logic
  const grandTotal = totalAmount + deliveryFee;

  // ✅ 1. HANDLE INPUT CHANGE
  const onChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ 2. USE CURRENT LOCATION (GPS)
  const fetchLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser");
      return;
    }
    setLoadingLoc(true);
    navigator.geolocation.getCurrentPosition(async (position) => {
      const { latitude, longitude } = position.coords;
      try {
        // Free API to convert Lat/Long to Address
        const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`);
        const data = await response.json();
        
        setFormData(prev => ({
          ...prev,
          street: data.address.road || data.address.suburb || "",
          city: data.address.city || data.address.town || data.address.village || "",
          state: data.address.state || "",
          zipcode: data.address.postcode || "",
          country: "India"
        }));
      } catch (error) {
        alert("Failed to fetch address details.");
      } finally {
        setLoadingLoc(false);
      }
    }, () => {
      alert("Unable to retrieve your location");
      setLoadingLoc(false);
    });
  };

  // ✅ 3. RAZORPAY PAYMENT LOGIC
  const handlePayment = async (e) => {
    e.preventDefault();

    if(grandTotal === 0) return;

    // A. Create Order on Backend
    const response = await fetch('/create-order', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount: grandTotal }),
    });
    const data = await response.json();

    if (!data.success) {
      alert("Order creation failed");
      return;
    }

    // B. Initialize Razorpay Options
    const options = {
      key: "rzp_test_YOUR_KEY_ID_HERE", // ⚠️ Replace with your Key ID (or fetch from backend if preferred)
      amount: data.order.amount,
      currency: data.order.currency,
      name: "Luimek Lighting",
      description: "Payment for Order",
      image: "/logo/Luimek-Logo.png",
      order_id: data.order.id, // Generate by backend
      handler: async function (response) {
        // C. Verify Payment
        const verifyRes = await fetch('http://localhost:5000/verify-payment', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature
            })
        });
        const verifyData = await verifyRes.json();
        if(verifyData.success){
            alert("Payment Successful! Order Placed.");
            navigate('/orders'); // Redirect to orders page (Create later)
        } else {
            alert("Payment Verification Failed");
        }
      },
      prefill: {
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        contact: formData.phone
      },
      theme: { color: "#000000" }
    };

    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-10 pb-20 px-4">
        <form onSubmit={handlePayment} className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* --- LEFT SIDE: DELIVERY INFO --- */}
            <div>
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-900">Delivery Information</h2>
                    <button 
                        type="button" 
                        onClick={fetchLocation}
                        className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 font-medium transition"
                    >
                        {loadingLoc ? <Loader2 className="animate-spin" size={16}/> : <Navigation size={16}/>}
                        Use Current Location
                    </button>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                    <input required name="firstName" onChange={onChangeHandler} value={formData.firstName} type="text" placeholder="First name" className="border border-gray-300 rounded p-3 w-full bg-white outline-none focus:border-black"/>
                    <input required name="lastName" onChange={onChangeHandler} value={formData.lastName} type="text" placeholder="Last name" className="border border-gray-300 rounded p-3 w-full bg-white outline-none focus:border-black"/>
                </div>
                <input required name="email" onChange={onChangeHandler} value={formData.email} type="email" placeholder="Email address" className="border border-gray-300 rounded p-3 w-full mt-4 bg-white outline-none focus:border-black"/>
                <input required name="street" onChange={onChangeHandler} value={formData.street} type="text" placeholder="Street" className="border border-gray-300 rounded p-3 w-full mt-4 bg-white outline-none focus:border-black"/>
                
                <div className="grid grid-cols-2 gap-4 mt-4">
                    <input required name="city" onChange={onChangeHandler} value={formData.city} type="text" placeholder="City" className="border border-gray-300 rounded p-3 w-full bg-white outline-none focus:border-black"/>
                    <input required name="state" onChange={onChangeHandler} value={formData.state} type="text" placeholder="State" className="border border-gray-300 rounded p-3 w-full bg-white outline-none focus:border-black"/>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mt-4">
                    <input required name="zipcode" onChange={onChangeHandler} value={formData.zipcode} type="number" placeholder="Zipcode" className="border border-gray-300 rounded p-3 w-full bg-white outline-none focus:border-black"/>
                    <input required name="country" onChange={onChangeHandler} value={formData.country} type="text" placeholder="Country" className="border border-gray-300 rounded p-3 w-full bg-white outline-none focus:border-black"/>
                </div>
                <input required name="phone" onChange={onChangeHandler} value={formData.phone} type="number" placeholder="Phone" className="border border-gray-300 rounded p-3 w-full mt-4 bg-white outline-none focus:border-black"/>
            </div>

            {/* --- RIGHT SIDE: ORDER SUMMARY --- */}
            <div className="h-fit">
                <div className="bg-white p-8 shadow-sm rounded-lg border border-gray-100">
                    <h2 className="text-2xl font-bold mb-6">Cart Totals</h2>
                    
                    <div className="flex justify-between py-2 border-b">
                        <span className="text-gray-600">Subtotal</span>
                        <span className="font-medium">₹{totalAmount}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                        <span className="text-gray-600">Shipping Fee</span>
                        <span className="text-green-600 font-medium">Free</span>
                    </div>
                    <div className="flex justify-between py-4 text-xl font-bold text-gray-900">
                        <span>Total</span>
                        <span>₹{grandTotal}</span>
                    </div>

                    {/* PAYMENT METHOD BADGE */}
                    <div className="mt-4 mb-6">
                        <p className="text-xs text-gray-500 mb-2 uppercase tracking-wider font-bold">Secure Payment via</p>
                        <div className="flex gap-2 items-center border p-3 rounded bg-gray-50">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Razorpay_logo.svg" alt="Razorpay" className="h-6" />
                            <span className="text-xs text-gray-400 ml-auto">UPI, Cards, Netbanking</span>
                        </div>
                    </div>

                    <button type="submit" className="w-full bg-black text-white py-4 rounded font-bold hover:bg-yellow-500 hover:text-black transition uppercase tracking-wide">
                        Proceed to Payment
                    </button>
                </div>
            </div>

        </form>
    </div>
  );
};

export default PlaceOrder;