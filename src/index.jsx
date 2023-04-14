import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import { MyShoppingCart } from './MyShoppingCart';
// import product provider
import { ProductProvider } from './contexts/product-context';
// import context provider
import { SidebarProvider } from './contexts/sidebar-context';
// import cart provider
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
