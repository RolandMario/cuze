import Link from "next/link";

export default function Footer() {
  return (
    <div className='flex-col justify-center items-center mt-10 mb-10'>
       <label className='text-blue-950 mx-20'><Link href='/privacy'  className=" text-blue-700"> <u>Privacy Policy</u>|</Link><Link href='/cookie' className=" text-blue-700"><u>Cookie Policy</u></Link></label>
        <h2 className='text-blue-950'>All right reserved @2024 Cuze Integrated Services Ltd.</h2>

    </div>
  )
}
