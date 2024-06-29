import Link from "next/link";
import React from "react";
import IconArrowRight from "@/assets/svg/IconArrowRight";
import { Menu } from "@/types/types";

const getData = async () =>{
  const res = await fetch("http://localhost:3000/api/categories",{cache:'no-store'});
  if(!res.ok){
    throw new Error('failed to fetch categories');
  }
  return res.json()
}
export const MenuPage = async () => {
  const menu:Menu = await getData();
  return (
    <div className="p-4 lg:px-20 xl:px-40 h-[calc(100vh-6rem)] lg:h-[calc(100vh-9rem)] flex flex-col lg:flex-row items-center">
      {menu.map((category) => (
        <Link
          href={`/menu/${category.slug}`}
          key={category.id}
          className="w-full h-full bg-cover p-8 lg:h-1/2"
          style={{ backgroundImage: `url(${category.img})` }}
        >
          <div className={`text-${category.color} w-1/2`}>
            <h1 className="uppercase font-bold text-3xl">{category.title}</h1>
            <p className="text-sm my-8">{category.desc}</p>
            <button type="button" className="px-3 py-3 xs:text-xs text-sm font-medium text-center inline-flex items-center text-white bg-black rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
            <IconArrowRight/>
            En savoir plus
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
}
export default MenuPage;