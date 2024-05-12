import { MdOutlineMenu } from "react-icons/md";
import Link from "next/link"
export default function Hamburger() {
  return (
   <div className=" h-screen w-full bg-inherit  absolute">
        
        <ol >
        <MdOutlineMenu className=" text-white float-right"/>
        <li className='text-white cursor-pointer'><Link href='/'>Home</Link></li>
        <li className='text-white cursor-pointer'><Link href='/services'>Services</Link></li>
        <li className='text-white cursor-pointer'><Link href='/about'>About Us</Link></li>
        
        <div className="">
            <li className='text-white cursor-pointer'><Link href='/contact'className="h-full w-full cursor-pointer">Get in Touch</Link></li>
        </div>
    </ol>

</div>

  )
}


function name(params) {
    return(
        <ol className=' bg-blue-950 w-auto p-5 top-0 right-0 h-screen'>
        <li className='text-white cursor-pointer'><Link href='/'>Home</Link></li>
        <li className='text-white cursor-pointer'><Link href='/services'>Services</Link></li>
        <li className='text-white cursor-pointer'><Link href='/about'>About Us</Link></li>
        
        <div className=" w-28 h-8 bg-fuchsia-800 pr-15 rounded-md shadow-sm flex justify-center items-center">
            <li className='text-white cursor-pointer'><Link href='/contact'className="h-full w-full cursor-pointer">Get in Touch</Link></li>
        </div>
    </ol>
    )
}