import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createOrder } from "../services/shiprocket"; // 👈 Import kiya

const Checkout = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "", lastName: "", email: "", phone: "",
    address: "", city: "", pincode: "", state: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = async (e) => {
    e.preventDefault();
    setLoading(true);

    // 📦 Order Details (Shiprocket Format)
    const orderPayload = {
      order_id: "ORD" + Date.now(),
      order_date: new Date().toISOString().split("T")[0],
      pickup_location: "Primary",
      billing_customer_name: formData.firstName,
      billing_last_name: formData.lastName,
      billing_address: formData.address,
      billing_city: formData.city,
      billing_pincode: formData.pincode,
      billing_state: formData.state,
      billing_country: "India",
      billing_email: formData.email,
      billing_phone: formData.phone,
      shipping_is_billing: true,
      order_items: [
        {
          name: "Luimek Light",
          sku: "LUI-ITEM",
          units: 1,
          selling_price: "1500",
          discount: "",
          tax: "",
          hsn: ""
        }
      ],
      payment_method: "Prepaid",
      sub_total: 1500,
      length: 10, breadth: 10, height: 10, weight: 0.5
    };

    // 🚀 Shiprocket ko bhejo
    const result = await createOrder(orderPayload);

    if (result && result.order_id) {
      alert("✅ Order Placed! Tracking ID: " + result.order_id);
      // Yahan aap Success page par redirect kar sakte hain
    } else {
      alert("❌ Order Failed! Details check karein.");
      console.log(result);
    }
    setLoading(false);
  };

  return (
    <div className="pt-32 px-4 flex justify-center bg-gray-50 min-h-screen">
      <form onSubmit={handlePlaceOrder} className="bg-white p-8 rounded shadow-lg max-w-lg w-full flex flex-col gap-4">
        <h2 className="text-2xl font-bold mb-4">Checkout</h2>
        <div className="flex gap-4">
            <input name="firstName" placeholder="First Name" required onChange={handleChange} className="border p-2 rounded w-1/2" />
            <input name="lastName" placeholder="Last Name" required onChange={handleChange} className="border p-2 rounded w-1/2" />
        </div>
        <input name="email" type="email" placeholder="Email" required onChange={handleChange} className="border p-2 rounded" />
        <input name="phone" type="tel" placeholder="Phone" required onChange={handleChange} className="border p-2 rounded" />
        <input name="address" placeholder="Address" required onChange={handleChange} className="border p-2 rounded" />
        <div className="flex gap-4">
            <input name="city" placeholder="City" required onChange={handleChange} className="border p-2 rounded w-1/3" />
            <input name="state" placeholder="State" required onChange={handleChange} className="border p-2 rounded w-1/3" />
            <input name="pincode" placeholder="Pincode" required onChange={handleChange} className="border p-2 rounded w-1/3" />
        </div>
        <button type="submit" disabled={loading} className="bg-yellow-500 text-black font-bold py-3 rounded mt-4 hover:bg-yellow-400">
          {loading ? "Processing..." : "Place Order (COD)"}
        </button>
      </form>
    </div>
  );
};

export default Checkout;