// src/components/AuthForm.jsx
import React, { useState } from "react";
import {
  auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "../firebase";

export default function AuthForm({ mode = "login" /* or "signup" */ }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const onSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      if (mode === "login") {
        await signInWithEmailAndPassword(auth, email, password);
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-3 p-4">
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="email"
        className="w-full p-2 rounded bg-gray-800 text-white"
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
        type="password"
        className="w-full p-2 rounded bg-gray-800 text-white"
      />
      <button className="bg-yellow-500 text-black px-4 py-2 rounded">
        {mode === "login" ? "Sign in" : "Create account"}
      </button>
      {error && <div className="text-red-400">{error}</div>}
    </form>
  );
}
