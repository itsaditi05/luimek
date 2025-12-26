require("dotenv").config();
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const Razorpay = require("razorpay");
const crypto = require("crypto");

const app = express();

// ✅ Render ke liye PORT (mandatory)
const PORT = process.env.PORT || 5000;

// ✅ Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ------------------------------------
// 🔽 YAHAN tumhare API routes rahenge
// Email, Razorpay, etc.
// ------------------------------------

// ✅ Health check / test route
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

app.post("/send-mail", (req, res) => {
  res.json({ success: true });
});

