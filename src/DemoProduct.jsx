import React, { useState, useEffect } from 'react';
import axios from './api/axios';
const DemoProduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('/api/hello')
      .then(response => {
        setProducts(response.data.products);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map(product => (
          <li key={product.ProductID}>
            <strong>{product.ProductID}</strong> - {product.Description} - ${product.Price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DemoProduct;