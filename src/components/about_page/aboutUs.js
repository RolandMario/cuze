import Image from "next/image";

import costado from '../../../public/Costado.jpg'
import Mission from "../mission";
import Values from "../values";
export default function AboutUs() {
  return (
    <>
    
        <div className=' mb-20
         mx-auto px-3 xl:px-32 2xl:px-60  '>
              <Image
              alt="Cuze image"
              src={costado}
              width={500}
              height={500}

              className='mt-5 ml-5 rounded-md object-contain md:float-right md:h-80'
              />
            
               <p className=' mt-10 '>
               Cuze Integrated Services is a leading ICT consultancy company that provides advanced solutions for businesses and individuals in the UK, 
               Europe and Nigeria. Our mission is to provide tailored solutions that address the specific needs and 
               challenges that our clients brings to us, we proffer solutions, train and equip them, and provide supports and consultancy.
               We offer a wide range of services including Data protection, Cybersecurity, Information Technology, and 
                Project Management. Our team of experts are committed to providing the highest quality of service to our clients.
                 Our values are client oriented, trustworthy, providing high quality service and privacy support. These guide our work
                  and are reflected in everything we do.
               We are committed to staying up-to-date with the best technologies and trends to ensure the best solution for our clients.

              
              </p>
              
            
             

      </div>
      
      <div>

        <Mission/>
        <Values/>
      </div>
    </>
  
  )
}
