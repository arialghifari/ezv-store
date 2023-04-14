import React from 'react';
import ProductItem from './ProductItem';

export default function ProductList() {
  const [products, setProducts] = React.useState([]);

  async function getProducts() {
    const res = await fetch('https://dummyjson.com/products');
    const data = await res.json();

    setProducts(data.products);
  }

  React.useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="max-w-5xl flex flex-col gap-8 lg:gap-5">
        {products.map((product: any) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            thumbnail={product.thumbnail}
            brand={product.brand}
            description={product.description}
            category={product.category}
            price={product.price}
            rating={product.rating}
          />
        ))}
      </div>
    </div>
  );
}
