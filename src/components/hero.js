"use client"
import Image from "next/image";

import security from "../../public/cuze2.jpg"
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() { 
  return (
    <div className=" h-auto bg-gray-200 max-w-auto md:grid grid-cols-2 md:mx-0
 
     ">
        <motion.div className="px-10 py-10 min-w-sm md:px-0 md:float-right xl:pl-20"
        initial={{y:-500, scale:1}}
        animate={{y:0}}
        transition={{duration: 0.5, type:"spring", stiffness: 120}}
        whileInView={{opacity:1, scale: 1}}
        >
            <p className=" py-10 px-10 md:pl-3 md:py-3 md:w-full">
             <b className="text-blue-800">Cuze Integrated Services Ltd</b> is a leading consulting company
             adept in providing Cyber Security,
             Data Privacy, Regulatory compliance, and IT services. We provide bespoke solutions tailored to our client&apos;s unique needs.
           We prioritise understanding the business needs of the client, in order to provide practical and efficient solutions to a wide
            range of organisations, 
           from startups to Multi-National companies in various industries across the globe.

            </p>
            <p className=" px-10 md:pl-3 md:w-full">
            Our world class consultants are recognised globally as leaders in Data Privacy, Cyber Security, Information Technology
             and Project Management.
             You can be confident that our award winning experts will offer the most pragmatic and best-practice solution to meet the challenges of the business.
              
            </p>
            <div className=" w-32 h-10 bg-blue-900 rounded-sm shadow-md my-10 mx-36 text-white flex justify-center items-center">
                
                <label><Link href={"/about"}>Learn More</Link></label>
            </div>
        </motion.div>

        <motion.div className=" w-full px-20 md:pt-16"
        initial={{opacity: 0.5, scale:0.1}}
        transition={{duration: 3}}
        whileInView={{opacity:1, scale: 1}}
        >
            <Image
            src={security}
            alt="Security image"
            width={500}
            height={500}
            style={{maxWidth: "100%", height: "auto"}}
            
            />
        </motion.div>

    </div>
  )
}
