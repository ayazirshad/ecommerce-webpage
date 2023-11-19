import React, { useContext } from 'react';
import Product from '../components/Product';
import Hero from '../components/Hero';
import { ProductContext } from '../contexts/ProductContext';
const Home = () => {
  const { products } = useContext(ProductContext);
  const filteredProducts = products.filter(item => {
    return (item.category === "men's clothing" || item.category === "women's clothing");
  });

  return (
    <div>
      <Hero />
      <section className='py-16'>
        <div className='container mx-auto'>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto sm:max-w-none sm:mx-0'>
            {filteredProducts.map(product => {
              return (
                <Product product={product} key={product.id} />
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
