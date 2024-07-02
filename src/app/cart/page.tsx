"use client"
import Image from "next/image";
import React, { useEffect } from "react";
import IconDelete from "@/assets/svg/IconDelete";
import { useCartStore } from "@/utils/store";
import Link from "next/link";

const CartPage = () => {
  const {products,totalItems,totalPrice,removeFromCart} = useCartStore()
  useEffect(() => {
    useCartStore.persist.rehydrate();
  }, []);
  console.log(products)
  return (
    <div className="h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col text-red-500 lg:flex-row">
      <div className="h-1/2 p-4 flex flex-col justify-center lg:h-full lg:w-2/3 2xl:w-1/2 lg:px-20 xl:px-40">
        {products.length ? (products.map((product)=><div key={product.id} className="flex items-center justify-between mb-4">
        (x{product.quantity})
          {product.img && (<Image src={product.img} alt="" width={100} height={100} />)}
          <div className="">
            <h1 className="uppercase text-xl font-bold">{product.title}</h1>
            <span>{product.optionTitle}</span>
          </div>
          <h2 className="font-bold">MAD {Number(product.price).toFixed(2)}</h2>
          <div onClick={()=>removeFromCart(product)}><IconDelete/></div>
        </div>))
        :
        (<span>Your Cart is empty! <Link href="/" className="font-bold">Commandez des produits</Link> </span>)
        }
      </div>
      {totalPrice > 0 ? (<div className="h-1/2 p-4 bg-fuchsia-50 flex flex-col gap-4 justify-center lg:h-full lg:w-1/3 2xl:w-1/2 lg:px-20 xl:px-40 2xl:text-xl 2xl:gap-6">
        <div className="flex justify-between">
          <span className="">Subtotal ({totalItems})</span>
          <span className="">MAD {Number(totalPrice).toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span className="">Service Cost</span>
          <span className="">MAD 0.00</span>
        </div>
        <div className="flex justify-between">
          <span className="">Delivery Cost</span>
          <span className="text-green-500">FREE!</span>
        </div>
        <hr className="my-2" />
        <div className="flex justify-between">
          <span className="">TOTAL(INCL. VAT)</span>
          <span className="font-bold">MAD {Number(totalPrice).toFixed(2)}</span>
        </div>
        <button className="bg-red-500 text-white p-3 rounded-md w-1/2 self-end">
          CHECKOUT
        </button>
      </div>):(<div className='w-full flex-1 relative'>
            <Image className='object-cover' src="/slide1.png" alt="" fill/>
        </div>)}
    </div>
  );
};

export default CartPage;