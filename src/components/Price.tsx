"use client";

import React, { useEffect, useState } from "react";
import IconArrowRight from "@/assets/svg/IconArrowRight";
import IconArrowLeft from "@/assets/svg/IconArrowLeft";
import { Product } from "@/types/types";


const Price = ({ product }: {product:Product}) => {
  const [total, setTotal] = useState(product.price);
  const [quantity, setQuantity] = useState(1);
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if(product.options?.length){
      setTotal(
        quantity * (product.price + product.options[selected].additionalPrice)
      );
    }
  }, [quantity, selected, product.options, product.price]);

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold">MAD {total}</h2>
      {/* OPTIONS CONTAINER */}
      {product.options?.length ===0 ?<span>No options available</span>:
      <div className="flex gap-4">
        {product.options?.map((option, index) => (
          <button
            key={option.title}
            className="min-w-[6rem] p-2 ring-1 ring-red-400 rounded-md"
            style={{
              background: selected === index ? "rgb(248 113 113)" : "white",
              color: selected === index ? "white" : "red",
            }}
            onClick={() => setSelected(index)}
          >
            {option.title}
          </button>
        ))}
      </div>}
      {/* QUANTITY AND ADD BUTTON CONTAINER */}
      <div className="flex justify-between items-center">
        {/* QUANTITY */}
        <div className="flex justify-between w-full p-3 ring-1 ring-red-500">
          <span>Quantity</span>
          <div className="flex gap-4 items-center">
            <button
              onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
            >
              <IconArrowLeft/>
            </button>
            <span>{quantity}</span>
            <button
              onClick={() => setQuantity((prev) => (prev < 9 ? prev + 1 : 9))}
            >
              <IconArrowRight/>
            </button>
          </div>
        </div>
        {/* CART BUTTON */}
        <button className="uppercase w-56 bg-red-500 text-white p-3 ring-1 ring-red-500">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Price;