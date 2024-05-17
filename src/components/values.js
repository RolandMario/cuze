"use client"
import { motion } from "framer-motion"

export default function Values() {

  const items = []
    return (
      <motion.div className=' flex items-center flex-col  mt-10'
      // initial={{x:-2000}}
      // animate={{x:0}}
      transition={{duration: 5, type:"spring", stiffness:120}}
      whileInView={{originX: 0, x:10}}
      >
          <h1 className=' text-blue-900 m-10 text-xl'><strong>Our Core Values</strong></h1>
  
          
          <ul className=' px-5 md:px-56'>
            <li className='mb-5'><b>Clients oriented:</b> We strive to profer the best solution to meet our client&apos;s needs.</li>

            <li className='mb-5'><b>Trustworthy:</b> We are reliable and dependable in our service delivery.</li>

             <li className='mb-5'><b>Training:</b> We provide training to enhance the skills and competencies of our clients in 
             navigating through the complexities of Information Technology, Project Management and Privacy/Cyber Security frameworks.</li>

             <li className='mb-5'><b>High Quality Service:</b> We are keen in delivering services that match and exceeds our clients&apos; expectations.</li>

             
          </ul>

          
          
          <h1 className=' text-blue-900 my-10 text-xl mx-auto px-3'><strong>4 Reasons why Intelligent and savvy organisations choose to work with us.</strong></h1>

          <div className=" mx-auto sm:mx-3 sm:flex flex-wrap">

             <YCU 
             title={"Enhanced Knowledge"}
             desc={
              "We are constantly developing and refining our methodology. We have the solutions you want and need. "
             }
             classnameOuter={"bg-white w-80 h-auto rounded-md shadow-md mt-5  sm:w-64 sm:mx-auto lg:w-56 lg:gap-3 lg:mx-3 xl:w-64"}
             classnameInner={"text-white bg-blue-950 p-5"}
             />
      

      <YCU 
             title={"Superior Approach"}
             desc={
              "We have acquired best practice knowledge from working on large Data Protection Projects across the globe."
             }
             classnameOuter={"bg-white w-80 h-auto rounded-md shadow-md mt-5  sm:w-64 sm:mx-auto lg:w-56 lg:gap-3 lg:mx-3 xl:w-64"}
             classnameInner={"text-white bg-orange-500 p-5"}
             />
         
                  

         <YCU 
             title={"Outstanding Track Record"}
             desc={
              "Successfully delivered Privacy Projects throughout the world across a wide range of industries."
             }
             classnameOuter={"bg-white w-80 h-auto rounded-md shadow-md mt-5  sm:w-64 sm:mx-auto lg:w-56 lg:gap-3 lg:mx-3 xl:w-64"}
             classnameInner={"text-white bg-teal-600 p-5"}
             />
            
          

          <YCU 
             title={"Privacy Professionals"}
             desc={
              "We offer the most pragmatic solutions to help you achieve compliance while acheiving your business objectives."
             }
             classnameOuter={"bg-white w-80 h-auto rounded-md shadow-md mt-5  sm:w-64 sm:mx-auto lg:w-56 lg:gap-3 lg:mx-3 xl:w-64"}
             classnameInner={"text-white bg-blue-700 p-5"}
             />
            
          </div>
      </motion.div>
    )
  }




  function YCU({title, desc, classnameOuter, classnameInner}){
     return(
      <div className={classnameOuter}>
      <h2 className={classnameInner}><strong>{title}</strong></h2>
      <p className=" p-3">
        {desc}
      </p>  
    </div>
     )

  }