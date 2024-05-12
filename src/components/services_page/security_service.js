import Image from "next/image"
// import info_security from "../../../public/info-security.jpeg"
import itImage from "../../../public/IT2.jpeg"

export default function SecurityService() {
  return (
    <div className='
    mt-10 xl:px-32 2xl:px-60
    '>
    <Image
       alt="Cuze image"
       src={itImage}
       width={500}
       height={100}

       className='mt-5 ml-5 rounded-md md:max-w-md float-left mr-10'
   />
   <div className=' p-3'>
       <h1 className=' text-left text-blue-950 mb-5 text-2xl'><strong> Cyber Security</strong></h1>
       

   <p className="mb-10">
In today&apos;s digital age, information security has become a paramount concern for organisations across industries.
 With the increasing frequency and sophistication of cyber threats, businesses are seeking effective ways to protect 
 their sensitive data and ensure the integrity of their systems. One approach that many companies are adopting is 
 implementing information security frameworks such as PCI DSS, SOC2, HIPPA, ISO 27001, COBIT/ISACA standards and cybersecurity risks Management.</p>

        
          <p className=" mb-3">

          Our team of experts can train your organisation in the following areas:
           
          </p>
          <div className=" sm:flex flex-wrap md:justify-center">
              <div className="  bg-white w-auto h-auto rounded-md shadow-md mt-5 ml-5 sm:w-64">
                      <h2 className='text-white bg-blue-950 p-5'>ISO series</h2>
                      <ol className=" p-3">
                          <li>ISO 27001/22 Foundation</li>
                          <li>ISO 27001/22 Lead Auditor</li>
                          <li>ISO 27001/22 Lead Implementer</li>
                          <li>ISO 27017 Information security controls</li>
                          <li>ISO 22301</li>
                          <li>ISO 9001</li>

                      </ol>
                         
                      
                </div>

                <div className="  bg-white w-auto h-auto rounded-md shadow-md mt-5 ml-5 sm:w-64">
                      <h2 className='text-white bg-blue-950 p-5'>Others</h2>
                      <ol className=" p-3">
                         <li>ITIL Service Management</li>
                          <li>PCI DSS</li>
                          <li>CISA </li>
                          <li>CISM</li>
                          <li>Cybersecurity Risk Management</li>
                          <li>Security Governance and Compliance</li>
                          
                      </ol>
                         
                         
                          
                      
                </div>
          </div>
   </div>
       
</div>
  )
}
