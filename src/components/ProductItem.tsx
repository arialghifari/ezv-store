import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Product = {
  id: number;
  thumbnail: string;
  title: string;
  brand: string;
  description: string;
  category: string;
  price: number;
  rating: number;
};

export default function ProductItem({
  id,
  thumbnail,
  title,
  brand,
  description,
  category,
  price,
  rating,
}: Product) {
  return (
    <Link href={`/product/${id}`}>
      <div className="grid grid-cols-12 gap-5 bg-white rounded p-5 shadow w-full border border-white hover:-translate-y-1 hover:border hover:border-blue-300 duration-150">
        <div className="col-span-full sm:col-span-2 h-[150px]">
          <Image
            src={thumbnail}
            alt={`${title} - ${brand}`}
            width={200}
            height={200}
            className="object-cover h-full w-full rounded"
          />
        </div>

        <div className="col-span-full md:col-span-10 flex flex-col justify-between w-full">
          <div>
            <div className="flex justify-between">
              <p className="font-bold text-xl">{title}</p>
              <p className="font-bold text-xl">${price}</p>
            </div>

            <p className="mt-4 mb-5 text-zinc-500">{description}</p>
          </div>

          <div className="flex justify-between items-baseline">
            <p className="border border-zinc-300 rounded w-fit p-2 text-sm">
              {category}
            </p>
            <p>⭐{rating}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
