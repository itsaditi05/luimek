require('dotenv').config();
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const Razorpay = require('razorpay');
const crypto = require('crypto');
const path = require('path'); // ✅ 1. Path Import kiya

const app = express();
// Port Hostinger ke hisaab se set hoga, ya fir 5000
const PORT = process.env.PORT || 5000; 

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ... (Aapka Email aur Razorpay Setup Code Same Rahega) ...

// ✅ 2. REACT FRONTEND SERVE KARNA (Sabse Niche Add Karein)
// Ye line React ke 'dist' folder ko public bana degi
app.use(express.static(path.join(__dirname, 'dist')));

// Ye line kisi bhi route par React ka index.html bhejegi (Routing fix ke liye)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});