import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import NotFound from "./pages/NotFound";
import "./index.css"
import ProductsPage from "./pages/ProductsPage";
import ProductPage from "./pages/ProductPage";

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/products" element={<ProductsPage />} />
                    <Route path="/product" element={<ProductPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="*" element={<NotFound />} /> 
                 </Routes>
            </BrowserRouter>
        </div>

    )
}

export default App;
