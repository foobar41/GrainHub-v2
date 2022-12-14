import React from 'react';
import Product from './cartProduct';

export default function Main(props) {
  const { products, onAdd } = props;
  return (
    <main className="block col-2">
      <h2>Products</h2>
      <div className="row">
        <container className="col-2">
          <row>
        {products.map((product) => (
          <Product key={product.id} product={product} onAdd={onAdd}></Product>
        ))}
        </row>
        </container>
      </div>
    </main>
  );
}
