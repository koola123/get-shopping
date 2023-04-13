import React, { useContext } from 'react';
// import product context
import { ProductContext } from '../contexts/product-context';

export const Home = () => {
  // get products from product context
  const {products} = useContext(ProductContext);
  // get only men & women's clothing category
  const filteredProducts = products.filter(item => {
    return (
      item.category === "men's clothing" || item.category === "women's clothing" || item.category === "jewelery"
    )
  });

  return (
    <div>
      Homepage
    </div>
  );
};
