import Image from "next/image"
import itImage from "../../../public/IT3.jpg"
import dp from "../../../public/data-protection.jpeg"
import Link from "next/link"

export default function ServiceList() {
  return (
    <div id="privacy" className='
    
    mx-auto 2xl:px-60 '>
    <Image
       alt="Cuze image"
       src={dp}
       width={500}
       height={100}

       className='mt-5  rounded-md md:h-2/3 md:w-96 md:float-right lg:w-1/2 xl:w-1/3 '
   />
   <div className='md:pl-3 '>
       <h1 className=' text-left text-blue-950 mb-5 text-2xl mx-auto'><strong> Data Protection Solutions </strong></h1>
       <p className=' text-xl mb-5 mx-auto'>Data Protection as a Top Priority for Today</p>

   <p className=" mx-auto">Over the last three decades, with the advent of the internet, the availability of personal data online has increased
    significantly, and the amount of data created and stored continues 
    to grow at unprecedented rates. Hence, protecting Personal Identifiable Information (PII) from compromise and ensuring its confidentiality,
     integrity, availability and resilience is key to data privacy and security.
  </p>

          <p className=" mt-5 mx-auto">
          Cuze Integrated Services provides the best inclass data protection compliance solutions to organisations,
           ensuring that personal data is collected and processed for the specific, legitimate, and lawful purposes for which it was collected.

          </p>
          <p className="mb-5 mt-3 mx-auto">

          Our team of experts will work with you to identify and address any gaps in your current privacy practices, 
            so that you can be confident in your ability to protect your confidential and sensitive information and stay
             compliant with the Nigeria Data Protection Regulation (NDPR) and other global privacy frameworks, including the GDPR, 
             CCPA and UKDPA.
            

          </p>
          <p className="mt-5 mx-auto">
          Whether you require a solution to a specific challenge, or need help with your end-to-end compliance journey,
             our experts will deliver the right solution for your business.
          </p>

          <p className="mb-5 mt-5 mx-auto">
          Let us show you how we can help today! <u><Link href='/contact' className=" text-blue-700">Contact us</Link></u> now for more information.
           
          </p>
          <p className="mb-4"><strong className=" text-2xl text-blue-950">Data Privacy</strong></p>
          <div className=" sm:flex flex-wrap lg:justify-center">
            <div className=" bg-white w-80 h-auto rounded-md shadow-md mt-5 ml-10 sm:w-64 sm:ml-3 lg:w-80">
                  <h2 className='text-white bg-blue-950 p-5'>Audit & Advisory</h2>
                  <ol className=" p-3">
                    <li>Filing of Audit Report</li>
                      <li>Registration with NDPB</li>
                      <li>Data mapping         </li>
                      <li>Gap analysis </li>
                  </ol>
                      
                      
                  
            </div>

            <div className=" bg-white w-80 h-auto rounded-md shadow-md mt-5 ml-10 sm:w-64 sm:ml-3 lg:w-80">
                  <h2 className='text-white bg-blue-950 p-5'>Outsourced Data Protection Officer</h2>
                 <ol className="p-3">
                      <li>Data Protection as a Service</li>
                      <li>Contract Remediation</li>
                      <li>Data Breach Management</li>
                      <li>Third-party Agreement </li>
                      <li>DPIA</li>
                      <li>Data Subject Access Request</li>
                      <li>Contract Drafting</li>
                      <li>Privacy policy creation</li>
                 </ol>
                      
                  
            </div>


            <div className=" bg-white w-80 h-auto rounded-md shadow-md mt-5 ml-10 sm:w-64 sm:ml-3 lg:w-80">
                  <h2 className='text-white bg-blue-950 p-5'>Training</h2>
                  <ol className="p-3">
                    <li>Data Protection Awareness</li>
                      <li>NDPR Foundation course</li>
                      <li>NDPR Practitioner course</li>
                      <li>DPO Training</li>
                      <li>IAPP - CIPP, CIPM & CIPT</li>
                      <li>GDPR Compliance Training</li>
                  </ol>              
            </div>
          
          </div>
   </div>
       
</div>
  )
}
