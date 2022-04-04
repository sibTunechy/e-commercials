import React, { useState, useEffect } from 'react';
import { commerce } from './lib/commerce';

import { Products, Navbar } from './components';


const App = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  }

  useEffect(() => {
    fetchProducts();
  }, []);  // this useEffect has a dependency array set to empty which means its only going to run at the start of the render.

  console.log(products);

  return (
    <div>
        <Navbar/>
        <Products/>
    </div>
  )
}

export default App;