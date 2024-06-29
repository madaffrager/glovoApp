import React from 'react';
import Image from "next/image";
import { Product } from '@/types/types';
const getData = async () =>{
  const res = await fetch("http://localhost:3000/api/products",{cache:'no-store'});
  if(!res.ok){
    throw new Error('failed to fetch products');
  }
  return res.json()
}
const Featured = async() => {
  const featuredProducts:Product[] = await getData();

  return (
    <div className="flex flex-col items-center justify-center px-20 pt-20 text-red-500">
      <h1 className='text-xl font-bold uppercase xl:text-2xl 2xl:text-3xl pb-20'>Our Best Selling</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {featuredProducts.map((item) => (
          <div
            key={item.id}
            className="h-full flex flex-col hover:bg-fuchsia-50"
          >
            {item.img && (
              <div className="flex justify-center items-center">
                <Image src={item.img} alt='' width={300} height={300}/>
              </div>
            )}
            <div className="mb-20 flex flex-col items-center justify-center text-center gap-4">
              <h1 className="text-xl font-bold uppercase xl:text-2xl 2xl:text-3xl">{item.title}</h1>
              <p className="p-4 2xl:p-8">{item.desc}</p>
              <span className="text-xl font-bold">MAD {item.price}</span>
              <button className="bg-red-500 text-white p-2 rounded-md">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
