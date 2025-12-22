// src/services/shiprocket.js

const SHIPROCKET_EMAIL = "info.luimekindustries@gmail.com"; 
const SHIPROCKET_PASSWORD = "Luimek@2911"; 

export const loginShiprocket = async () => {
  try {
    // 👇 URL Change kiya hai (Direct link ki jagah proxy use kar rahe hain)
    const response = await fetch("/api-shiprocket/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: SHIPROCKET_EMAIL, password: SHIPROCKET_PASSWORD }),
    });
    const data = await response.json();
    return data.token;
  } catch (error) {
    console.error("Login Error:", error);
    return null;
  }
};

export const createOrder = async (orderData) => {
  const token = await loginShiprocket();
  if (!token) {
    alert("Login Failed! Please check console.");
    return;
  }

  try {
    // 👇 Yahan bhi URL Change kiya hai
    const response = await fetch("/api-shiprocket/orders/create/adhoc", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
      body: JSON.stringify(orderData),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Order Error:", error);
  }
};