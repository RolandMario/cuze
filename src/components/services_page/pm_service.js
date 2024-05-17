
import Image from "next/image"
import pm from "../../../public/pmp.jpg"
export default function PMservice() {
  return (
    <div  id="pmt" className=' lg:px-20 xl:px-32 2xl:px-60'>
         <Image
            alt="Cuze image"
            src={pm}
            width={400}
            height={200}

            className='mt-5  rounded-md mx-auto md:float-right object-contain md:h-96 shadow-md '
        />
        <div className=' mx-auto px-3'>
            <h1 className='mt-10 text-left text-blue-950 mb-5 text-2xl'><strong> Project Management </strong></h1>
          
        <p className="mb-3 mt-3">Our Project management experts emphasises on organisations achieving project goals and objectives within scope, time, and budgetary constraints. 
          We can also help optimise the allocation of resources and integrate the inputs that will drive the completion of the project&apos;s 
          objectives.</p>


               <p className="mb-3">

               Based on the type of project, we will choose the right project framework to successfully meet the business expectations
                within the given time, cost and quality.
               </p>
        </div>
            
    </div>
  )
}
