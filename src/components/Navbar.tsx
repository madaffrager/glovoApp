import React from 'react'
import Menu from './Menu';
import Link from 'next/link';
import CartIcon from './CartIcon';
import Image from 'next/image';
import UserLinks from './UserLinks';
import IconLoading from '@/assets/svg/IconLoading';
export const Navbar = () => {
  const user=false
  return (
    <div className='h-12 text-red-500 p-4 items-center flex justify-between border-b-2 border-b-red-500 uppercase md:h-24'>
       <div className='hidden md:flex gap-4 flex-1'>
       <Link href="/">Home</Link>
       <Link href="/menu">Menu</Link>
       <Link href="/contact">Contact</Link>
       </div>
       <div className='text-xl md:font-bold flex-1 md:text-center'>
        <Link href="/">Glovo</Link>
        </div> 
      <div className='md:hidden'><Menu/></div>
      <div className='hidden md:flex gap-4 items-center justify-end flex-1'>
        <div className='md:absolute top-3 lg:static flex items-center gap-2 cursor-pointer bg-orange-300 px-1 rounded-md'>
          <Image src="/phone.png" alt="" width={20} height={20}/>
        <span className='text-sm'>06 77 55 22 00</span></div>
      <UserLinks/>
<CartIcon/>           
        </div>  
    </div>
  )
}
export default Navbar;