import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FcGoogle } from "react-icons/fc";
import { FiMail, FiLock, FiUser, FiEye, FiEyeOff, FiArrowLeft } from "react-icons/fi";
import supabase from "../supabaseClient";

const Login = () => {
  const navigate = useNavigate();
  
  // View State: 'login' | 'signup' | 'forgot'
  const [view, setView] = useState("login"); 
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // Form Data
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  // SEO: Update Page Title
  useEffect(() => {
    document.title = view === "login" ? "Login - Luimek" : view === "signup" ? "Create Account - Luimek" : "Reset Password - Luimek";
  }, [view]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 🔐 GOOGLE LOGIN
  const handleSocialLogin = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: { redirectTo: window.location.origin },
      });
      if (error) throw error;
    } catch (error) {
      alert(error.message);
    }
  };

  // 🔐 EMAIL AUTH LOGIC
  const handleAuth = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (view === "signup") {
        // 👉 SIGN UP
        const { error } = await supabase.auth.signUp({
          email: formData.email,
          password: formData.password,
          options: { data: { full_name: formData.fullName } },
        });
        if (error) throw error;
        alert("Signup successful! Please check your email to verify.");
        setView("login");
      } else if (view === "login") {
        // 👉 LOGIN
        const { error } = await supabase.auth.signInWithPassword({
          email: formData.email,
          password: formData.password,
        });
        if (error) throw error;
        navigate("/"); 
      } else if (view === "forgot") {
        // 👉 FORGOT PASSWORD
        const { error } = await supabase.auth.resetPasswordForEmail(formData.email, {
         // New (Correct)
// If on localhost, use localhost. If live, use live URL automatically.
redirectTo: window.location.origin + "/update-password",
        });
        if (error) throw error;
        alert("Password reset link sent to your email!");
        setView("login");
      }
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-black flex items-center justify-center px-4 py-12 relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-yellow-500/20 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-orange-500/20 rounded-full blur-[100px] pointer-events-none"></div>

      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="bg-white w-full max-w-md rounded-2xl shadow-2xl overflow-hidden z-10 relative"
      >
        
        {/* HEADER SECTION */}
        <div className="bg-[#111] p-8 text-center border-b border-gray-800">
           {/* Logo with better visibility */}
           <img 
             src="/logo/Luimek-Logo.png" 
             alt="Luimek Industries Logo" 
             className="h-12 mx-auto mb-4 object-contain invert hover:scale-105 transition duration-300"
           />
           
           <h1 className="text-2xl font-bold text-white tracking-wide">
             {view === "login" && "Welcome Back"}
             {view === "signup" && "Create Account"}
             {view === "forgot" && "Reset Password"}
           </h1>
           
           <p className="text-gray-400 text-sm mt-2 font-light">
             {view === "login" && "Sign in to manage your orders."}
             {view === "signup" && "Join us for exclusive lighting deals."}
             {view === "forgot" && "Enter your email to receive a reset link."}
           </p>
        </div>

        {/* FORM SECTION */}
        <div className="p-6 sm:p-8">
          
          <form onSubmit={handleAuth} className="flex flex-col gap-5">
            
            {/* NAME FIELD (Only for Signup) */}
            <AnimatePresence>
              {view === "signup" && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="relative"
                >
                  <FiUser className="absolute left-3 top-4 text-gray-400 text-lg" />
                  <input 
                    type="text" 
                    name="fullName"
                    placeholder="Full Name" 
                    required={view === "signup"}
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3.5 text-[16px] border border-gray-300 rounded-lg focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 outline-none transition bg-gray-50 focus:bg-white"
                  />
                </motion.div>
              )}
            </AnimatePresence>

            {/* EMAIL FIELD (Always Visible) */}
            <div className="relative">
              <FiMail className="absolute left-3 top-4 text-gray-400 text-lg" />
              <input 
                type="email" 
                name="email"
                placeholder="Email Address" 
                required
                value={formData.email}
                onChange={handleChange}
                // text-[16px] prevents iOS zoom
                className="w-full pl-10 pr-4 py-3.5 text-[16px] border border-gray-300 rounded-lg focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 outline-none transition bg-gray-50 focus:bg-white"
              />
            </div>

            {/* PASSWORD FIELD (Visible for Login & Signup) */}
            {view !== "forgot" && (
              <div className="relative">
                <FiLock className="absolute left-3 top-4 text-gray-400 text-lg" />
                <input 
                  type={showPassword ? "text" : "password"} 
                  name="password"
                  placeholder="Password" 
                  required={view !== "forgot"}
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full pl-10 pr-12 py-3.5 text-[16px] border border-gray-300 rounded-lg focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 outline-none transition bg-gray-50 focus:bg-white"
                />
                <button 
                  type="button" 
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-4 text-gray-400 hover:text-gray-600 p-1"
                  aria-label="Toggle Password Visibility"
                >
                  {showPassword ? <FiEyeOff /> : <FiEye />}
                </button>
              </div>
            )}

            {/* FORGOT PASSWORD LINK */}
            {view === "login" && (
              <div className="text-right">
                <button 
                  type="button" 
                  onClick={() => setView("forgot")}
                  className="text-sm text-yellow-600 hover:text-yellow-700 font-medium hover:underline"
                >
                  Forgot Password?
                </button>
              </div>
            )}

            {/* ACTION BUTTON */}
            <button 
              type="submit" 
              disabled={loading}
              className="w-full bg-yellow-500 text-black font-bold py-3.5 rounded-lg shadow-md hover:bg-yellow-400 hover:shadow-lg transition transform active:scale-[0.98] mt-2 flex items-center justify-center gap-2"
            >
              {loading ? (
                <span className="animate-pulse">Processing...</span>
              ) : (
                view === "login" ? "Log In" : view === "signup" ? "Sign Up" : "Send Reset Link"
              )}
            </button>
          </form>

          {/* BACK TO LOGIN (Only for Forgot Password view) */}
          {view === "forgot" && (
            <button 
              onClick={() => setView("login")}
              className="w-full mt-4 flex items-center justify-center gap-2 text-gray-600 hover:text-black font-medium"
            >
              <FiArrowLeft /> Back to Login
            </button>
          )}

          {/* SOCIAL LOGIN DIVIDER (Only for Login/Signup) */}
          {view !== "forgot" && (
            <>
              <div className="flex items-center my-6">
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="px-4 text-gray-400 text-xs font-semibold tracking-wider">OR CONTINUE WITH</span>
                <div className="flex-grow border-t border-gray-300"></div>
              </div>

              <button 
                onClick={handleSocialLogin}
                className="w-full flex items-center justify-center gap-3 border border-gray-300 py-3.5 rounded-lg hover:bg-gray-50 transition font-medium text-gray-700 shadow-sm active:bg-gray-100"
              >
                <FcGoogle className="text-2xl"/> 
                <span>Google</span>
              </button>

              {/* TOGGLE LOGIN / SIGNUP */}
              <p className="text-center mt-8 text-gray-600 text-sm">
                {view === "login" ? "New to Luimek? " : "Already have an account? "}
                <button 
                  onClick={() => setView(view === "login" ? "signup" : "login")}
                  className="text-yellow-600 font-bold hover:underline ml-1"
                >
                  {view === "login" ? "Sign Up" : "Log In"}
                </button>
              </p>
            </>
          )}

        </div>
      </motion.section>
    </main>
  );
};

export default Login;