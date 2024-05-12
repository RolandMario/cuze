import Image from "next/image"
import placeholder from '../../../public/placeholder.png'
import message from '../../../public/message.png'
import customer_service from '../../../public/customer-service.png'
import ContactUs from "../contactUs"

export default function Contact_card() {
  return (
    <div >
    
     <div className=' md:flex flex-grow justify-center items-center'>
            <Card icon={placeholder}  desc={" 14 Salvation Road, off Opebi Road, Ikeja, Lagos"}/>
            <Card icon={message}  desc={" office@cuze.ng"}/>
            <Card icon={customer_service}  desc={" +234 8089772055, +447956628000"}/>
    </div>
            <ContactUs classname={' flex-col justify-center items-center mt-10 mb-10 md:mx-64'}/>
    </div>
   
   
  )
}


function Card({icon, desc}){
    return(

    <div className='min-w-60 min-h-64 m-5 bg-white flex flex-col rounded-md shadow-md justify-center items-center  md:max-w-60 max-h-64  '>
    <Image
     src={icon}
     alt="Location Icon"
    width={100}
    height={100}
    className=' ml-3 mt-3'
    />
    
    <p className=' mt-5 px-10'>{desc}</p>
    </div>
    )
    
    


}