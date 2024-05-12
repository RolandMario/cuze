import React from 'react'
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";

export default function ContactBar() {
  return (
    <div className=" bg-blue-950 w-full h-16 flex justify-between">
        <div className='flex p-5 space-x-5'>
            <MdEmail className=' text-white'/>
            <label className='text-white'>office@cuze.ng</label>
            <BsFillTelephoneFill className='text-white hidden sm:block'/>
            <label className='text-white hidden sm:block'>+234 8089772055</label>
        </div>
        <div className='flex space-x-5 p-5'>
            <FaFacebook className='text-white'/>
            <FaInstagram  className='text-white'/>
            <FaLinkedin className='text-white'/>
            <AiOutlineYoutube className='text-white '/>

        </div>
    </div>
  )
}
