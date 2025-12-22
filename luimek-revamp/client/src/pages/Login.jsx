import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [state, setState] = useState("Login");

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
        
        {/* Header */}
        <div className="bg-black p-6 text-center">
          <h2 className="text-2xl font-bold text-white">LUIMEK<span className="text-yellow-500">.</span></h2>
          <p className="text-gray-400 text-sm mt-1">{state === "Login" ? "Welcome Back!" : "Join the Innovation"}</p>
        </div>

        {/* Form */}
        <div className="p-8">
          <form className="space-y-5">
            {state === "Sign Up" && (
              <div>
                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                <input type="text" className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-yellow-500 focus:border-yellow-500" placeholder="John Doe" />
              </div>
            )}
            
            <div>
              <label className="block text-sm font-medium text-gray-700">Email Address</label>
              <input type="email" className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-yellow-500 focus:border-yellow-500" placeholder="you@example.com" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input type="password" className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-yellow-500 focus:border-yellow-500" placeholder="••••••••" />
            </div>

            <button className="w-full bg-yellow-500 text-black font-bold py-3 rounded-lg hover:bg-yellow-400 transition">
              {state === "Login" ? "Sign In" : "Create Account"}
            </button>
          </form>

          {/* Toggle Login/Signup */}
          <div className="mt-6 text-center text-sm text-gray-600">
            {state === "Login" ? (
              <p>New to Luimek? <span onClick={() => setState("Sign Up")} className="text-blue-600 font-semibold cursor-pointer">Create an account</span></p>
            ) : (
              <p>Already have an account? <span onClick={() => setState("Login")} className="text-blue-600 font-semibold cursor-pointer">Login here</span></p>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Login;