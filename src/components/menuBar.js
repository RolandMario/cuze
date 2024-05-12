"use client"

import Image from 'next/image'
import logo from '../../public/cuze_original.jpg'
import Link from 'next/link'
import { MdOutlineMenu } from "react-icons/md";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import Hamburger from './hamburger';
import { useState } from 'react';


export default function MenuBar() {
    const [isOpen, setIsOpen] = useState("hidden")

    const openMenu = ()=>{
        setIsOpen("block")
    }

    const closeMenu = ()=>{
        setIsOpen("hidden")
    }
  return (
    <div className="bg-blue-900 w-full h-20 flex justify-between items-center md:px-10">
        
        <div className="md:flex lg:flex justify-center items-center">
            <Link href='/'>
                <Image
            alt='Cuze Logo'
            src={logo}
            className='p-3 rounded-md'
            width={150}
            height={150}
            
            />
            </Link>
            
            <label className='text-white hidden lg:flex'><i>Empowering your data defence</i></label>
        </div>
        <div className=" hidden p-5 md:flex">
           
            <ol className=' md:flex space-x-5'>
                <li className='text-white cursor-pointer' ><Link href='/' >Home</Link></li>
                <li className='text-white cursor-pointer'><Link href='/services'>Services</Link></li>
                <li className='text-white cursor-pointer'><Link href='/about'>About Us</Link></li>
               
                <div className=" w-28 h-8 bg-fuchsia-800 pr-15 rounded-md shadow-sm flex justify-center items-center">
                <li className='text-white cursor-pointer h-ful'><Link href='/contact' className='h-full'>Get in Touch</Link></li>
                </div>
            </ol>
            
        </div>
        <div className=' relative'>  
         <MdOutlineMenu
          onClick={openMenu}
          className=' text-white text-xl cursor-pointer mr-10 md:hidden'
          />
        <div className={`${isOpen} fixed right-0 top-0 p-5 bg-blue-950 text-center h-full z-100 w-full`}>
        <MdOutlineRestaurantMenu 
          onClick={closeMenu}
          className=' text-white text-xl cursor-pointer mr-10 absolute right-0 top-0 mt-5'
          />
           <ol className='mt-5 md:flex justify-center items-center space-x-5'>
               <li className='text-white cursor-pointer mb-5 hover:bg-blue-400 'onClick={closeMenu} ><Link href='/'>Home</Link></li>
               <li className='text-white cursor-pointer mb-5 hover:bg-blue-400' onClick={closeMenu} ><Link href='/services'>Services</Link></li>
               <li className='text-white cursor-pointer mb-5 hover:bg-blue-400' onClick={closeMenu} ><Link href='/about'>About Us</Link></li>
              
               <div className=" w-full h-20  pr-15 rounded-md shadow-sm  mx-auto mb-5">
               <li className='text-white cursor-pointer h-full hover:bg-blue-400' onClick={closeMenu} ><Link href='/contact'
                className='h-full bg-fuchsia-800 w-40'>Get in Touch</Link></li>
               </div>
           </ol>
           
       </div>
        </div>
    </div>
  )
}
