import React from 'react';
// import react router dom
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import pages
import { Home } from './pages/home';
import { ProductDetails } from './pages/product-details';
// import components
import { Footer } from './components/footer';
import { Header } from './components/header';
import { Sidebar } from './components/sidebar';

export const MyShoppingCart = () => {
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
