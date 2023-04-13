import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import { App } from './App';
// import Product Provider
import { ProductProvider } from './contexts/product-context';


const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <ProductProvider>
    <React.StrictMode>
        <App />
    </React.StrictMode>
  </ProductProvider>
);
