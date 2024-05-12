"use client"
import Image from "next/image"
import secure_data from "../../public/secure-data.png"
import hacking from "../../public/hacking.png"
import settings from "../../public/settings.png"
import folder from "../../public/folder.png"
import hacker from "../../public/hacker.png"
import remote_access from "../../public/remote-access.png"
import project_management from "../../public/project-management.png"
import Link from "next/link";
import { motion } from "framer-motion";
export default function Services() {
  return (
    <div className=" lg:mx-1">
        <h1 className="text-blue-900 pb-5 text-xl text-center"><strong>Our Services</strong> </h1>
      
        <div className="  sm:flex flex-wrap lg:gap-3">
             <Card imageSrc={folder} caption={"Data Protection"} desc={"Gap Analysis | DPIA "}/>
             <Card imageSrc={hacker} caption={"Cyber Security"} desc={"  Risks Analysis | ISO 27001 "}/>
             <Card imageSrc={remote_access} caption={"Information Technology"} desc={" Database | Software"}/>
             <Card imageSrc={project_management} caption={"Project Management"} desc={" Agile| Scrum Master"}/>
        </div>
       


    </div>
  )
} 


function Card({imageSrc, caption, desc}){
    return(
        <motion.div className="bg-white flex flex-col justify-center items-center w-screen h-64 rounded-md shadow-md mx-auto mb-5
       sm:w-64 lg:w-56 xl:w-64
        "
        initial={{opacity: 0, y:-50, x: -25}}
        animate={{opacity: 1, y:0, x: 0}}
        transition={{duration: 4}}
        whileInView={{opacity:1, scale: 1}}
        whileHover={{scale: 1.5}}
        >

            <div>
                <label className="  text-xl">{caption}</label>
            </div>
            <div className=" pt-5 mb-5">
                <Image
                src={imageSrc}
                alt="data protection image"
                width={100}
                height={100}
                />
            </div>
           
        
            <div className=" pb-5">
                <p className="text-blue-950 text-l"><strong><Link href='/services'>Learn More ---</Link></strong></p>
            </div>

        </motion.div>
    )
}