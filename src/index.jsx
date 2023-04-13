import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import { MyShoppingCart } from './MyShoppingCart';
// import Product Provider
import { ProductProvider } from './contexts/product-context';
// import Context Provider
import { SidebarProvider } from './contexts/sidebar-context';
// import Cart Cart Provider
import { CartProvider } from './contexts/cart-context';


const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <SidebarProvider>
  <CartProvider>
  <ProductProvider>
    <React.StrictMode>
        <MyShoppingCart/>
    </React.StrictMode>
  </ProductProvider>
  </CartProvider>
  </SidebarProvider>
);
