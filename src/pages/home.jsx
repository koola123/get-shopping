import React, { useContext } from 'react';
// import product context
import { ProductContext } from '../contexts/product-context';
// import components
import { Product } from '../components/product';
import { Hero } from '../components/hero';

export const Home = () => {
  // get products from product context
  const {products} = useContext(ProductContext);
  // get only men & women's clothing category
  const filteredProducts = products.filter(item => {
    return (
      item.category === "men's clothing" || item.category === "women's clothing" || item.category === "jewelery"
    );
  });

  return (
    <div>
      <Hero />
      <section className="py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
            {filteredProducts.map((product) => {
              return (
                <Product product={product} key={product.id}/>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
