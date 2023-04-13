import React from 'react';
// import React Router Dom
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Pages
import { Home } from './pages/home';
import { ProductDetails } from './pages/product-details';
// import Components
import { CartItem } from './components/cart-item';
import { Footer } from './components/footer';
import { Header } from './components/header';
import { Hero } from './components/hero';
import { Product } from './components/product';
import { Sidebar } from './components/sidebar';

export const App = () => {
  return (
    <div className="overflow-hidden">
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route
          path="/"
          element={<Home/>}
           />
           <Route
           path="/product/:id"
           element={<ProductDetails/>}
           />
        </Routes>
        <Sidebar />
        <Footer/>
      </BrowserRouter>
      </div>
  );
};
