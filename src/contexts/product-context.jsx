import React, { createContext, useState, useEffect } from 'react';

// create Context
export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
// products State
const [products, setProducts] = useState([]);
// fetch Products
useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProducts(data)
    }
    fetchProducts();
}, []);



  return (
   <ProductContext.Provider value={{products}}>{children}</ProductContext.Provider>
  );
};
