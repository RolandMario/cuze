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
               Cuze Integrated Services is a leading IT company that provides advanced solutions for businesses and individuals in UK, 
               Europe and Nigeria.                            Our mission is to provide tailored solutions that address the specific needs and 
               challenges that our clients comes to us and also to train and equip them with some of our valued traits and also give our support
                when necessary. We offer a wide range of services including Data protection, Cybersecurity, Information Technology, 
                Project Management. Our team of experts is committed to providing the highest quality services to our clients.
                 Our values of client oriented, trustworthy, training, high quality service and legal support guide our work
                  and are reflected in everything we do. Our team of highly skilled professionals has a combined experience of over 20 years
                   in the IT industry. 
               They are committed to staying up-to-date with the latest technologies and trends to ensure our clients get the best possible service.

              
              </p>
              
            
             

      </div>
      
      <div>

        <Mission/>
        <Values/>
      </div>
    </>
  
  )
}
