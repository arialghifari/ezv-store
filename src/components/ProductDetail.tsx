import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import Navigation from './Navigation';

type Product = {
  id: number;
  thumbnail: string | any;
  title: string;
  brand: string;
  description: string;
  category: string;
  price: number;
  rating: number;
  images: [string] | any;
};

export default function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;

  const [products, setProducts] = React.useState([]);
  const [product, setProduct] = React.useState<Product | undefined>();

  async function getProducts() {
    const res = await fetch('https://dummyjson.com/products');
    const data = await res.json();

    setProducts(data.products);
  }

  React.useEffect(() => {
    getProducts();
  }, []);

  React.useEffect(() => {
    const filterById = products.filter((item: any) => item.id == id)[0];
    setProduct(filterById);
  }, [products, id]);

  return (
    <>
      <Navigation />
      <div className="shadow flex flex-col">
        <div className="h-[250px] md:h-[650px] p-5 bg-white rounded-t">
          <Image
            src={product?.thumbnail}
            alt={`${product?.title} - ${product?.brand}`}
            width={800}
            height={800}
            className="object-cover h-full w-full rounded"
          />
        </div>

        <div className="flex flex-col items-center bg-white p-5 rounded-b">
          <div className="max-w-5xl w-full">
            <div className="flex justify-between">
              <p className="text-xl font-bold">
                {product?.title} - {product?.brand}
              </p>
              <p className="text-xl font-bold">${product?.price}</p>
            </div>

            <p className="my-5 text-zinc-500">{product?.description}</p>

            <div className="flex justify-between items-baseline">
              <p className="border border-zinc-300 rounded w-fit p-2 text-sm">
                {product?.category}
              </p>
              <p>⭐{product?.rating}</p>
            </div>

            <div className="mt-14 flex gap-5 w-full flex-wrap justify-evenly">
              {product?.images.map((item: string) => (
                <Image
                  key={item}
                  src={item}
                  alt={`${product?.title} - ${product?.brand}`}
                  width={200}
                  height={200}
                  className="rounded object-cover"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
