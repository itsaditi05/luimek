import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import AllProducts from './pages/AllProducts';
import Contact from './pages/Contact';
import About from './pages/About';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Wishlist from './pages/Wishlist';
import PlaceOrder from './pages/PlaceOrder'

function App() {
  return (
    <div className="min-h-screen bg-white relative">
      <Navbar />
      
    

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<AllProducts />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
<Route path="/cart" element={<Cart />} />
<Route path="/wishlist" element={<Wishlist />} />
<Route path="/place-order" element={<PlaceOrder />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;