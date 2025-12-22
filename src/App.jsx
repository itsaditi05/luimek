import { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// 1. Imports
import { addTestProduct } from "./data/supabaseTest";
import Header from "./components/Header";
import Footer from "./Footer/Foot";
import ScrollToTop from "./ScrollToTop";

// Pages
import Home from "./pages/Home"; // ✅ IMPORT HOME PAGE
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Aboutus from "./pages/Aboutus";
import Wishlist from "./pages/Wishlist";
import Catalogue from "./pages/Catalogue";
import Contact from "./pages/Contact";
import Designer from "./pages/Designer";
import Location from "./pages/location";
import Categories from "./pages/Categories";
import Cart from "./pages/Cart";
import IndoorProduct from "./pages/IndoorProduct";
import OutdoorProduct from "./pages/OutdoorProduct";
import OutdoorProductDetails from "./pages/OutdoorProductDetails";
import OrderHistory from "./pages/OrderHistory";
import Shop from "./pages/Shop";
import Checkout from "./Money/Checkout";
import Login from "./pages/Login";
import IndustrialProduct from "./pages/IndustrialProduct";
import IndustrialProductDetails from "./pages/IndustrialProductDetails";
import Orders from "./Money/Orders";

// Policies
import Privacy from "./policy/Privacy";
import Refund from "./policy/Refund";
import Shipping from "./policy/Shipping";
import Terms from "./policy/Terms";
import ContactPolicy from "./policy/Contactprivacy";

const App = () => {
  useEffect(() => {
    // console.log("Attempting to add test product...");
    // addTestProduct();
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      
      {/* ✅ GLOBAL HEADER (Shows on all pages) */}
      <Header />

      <Routes>
        {/* DEFAULT ROUTE */}
        <Route path="/" element={<Navigate to="/home" />} />

        {/* ✅ HOME PAGE (Cleaned up!) */}
        <Route path="/home" element={<Home />} />

        {/* OTHER PAGES */}
        <Route path="/about" element={<Aboutus />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/catalogue" element={<Catalogue />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/designer" element={<Designer />} />
        <Route path="/location" element={<Location />} />
        <Route path="/categories" element={<Categories />} />

        {/* PRODUCTS */}
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetails />} />

        {/* INDOOR */}
        <Route path="/indoor" element={<IndoorProduct />} />
        <Route path="/indoor/:id" element={<ProductDetails />} />

        {/* OUTDOOR */}
        <Route path="/outdoor" element={<OutdoorProduct />} />
        <Route path="/outdoor/:id" element={<OutdoorProductDetails />} />

        {/* INDUSTRIAL */}
        <Route path="/industrial" element={<IndustrialProduct />} />
        <Route path="/industrial/:id" element={<IndustrialProductDetails />} />

        {/* USER & CHECKOUT */}
        <Route path="/login" element={<Login />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/order-history" element={<OrderHistory />} />

        {/* POLICIES */}
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/refund" element={<Refund />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/contactpolicy" element={<ContactPolicy />} />

      </Routes>

      {/* ✅ GLOBAL FOOTER (Shows on all pages) */}
      <Footer />
    </BrowserRouter>
  );
};

export default App;