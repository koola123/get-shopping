import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import { App } from './App';
// import Product Provider
import { ProductProvider } from './contexts/product-context';
// import Context Provider
import { SidebarProvider } from './contexts/sidebar-context';


const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <SidebarProvider>
  <ProductProvider>
    <React.StrictMode>
        <App />
    </React.StrictMode>
  </ProductProvider>
  </SidebarProvider>
);
