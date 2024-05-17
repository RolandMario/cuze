
import Image from "next/image"
import IT from "../../../public/IT.jpg"
export default function ITService() {
  return (
    <div id="it" className='mt-10 xl:px-32 2xl:px-60  '>
         <Image
            alt="Cuze image"
            src={IT}
            width={400}
            height={200}

            className='mt-5  rounded-md mx-auto sm:h-60 sm:object-cover md:float-right'
        />
        <div className='mx-auto'>
            <h1 className='  text-blue-950 mb-5 text-2xl mx-5'><strong> Information Technology </strong></h1>
            <p className=' text-xl mx-5'>IT services </p>

        <p className=" mb-3 mt-3 mx-5">
          In today&apos;s world, it is nearly impossible for any business to function without the implementation of Information Technology
          in the business, be it small, medium or multi-national companies. 
        </p>
        <p className=" mx-5">

          Cuze Integrated Services offers the following:  
        </p>

               <div className=" mt-20 w-full sm:flex flex-wrap md:justify-center lg:justify-center ">

                      <div className=" bg-white w-96 h-auto rounded-md shadow-md  mt-5 ml-10 sm:w-64 sm:ml-3 lg:w-80 ">
                              <h2 className=' text-white bg-blue-950 p-5'>Web Services</h2>
                            
                            <ol className="p-5">
                            <li>Systems Developement</li>
                              <li>Website Developement</li>
                              <li>Domain Registration and Hosting</li>
                              <li>Email Services</li> 
                            </ol> 
                              
                    
                                  
                              
                        </div>

                <div className=" bg-white w-96 h-auto rounded-md shadow-md  mt-5 ml-10 sm:w-64 sm:ml-3 lg:w-80 ">
                      <h2 className=' text-white bg-blue-950 p-5'>Network Services</h2>
                     
                     <ol className="p-5">
                     <li>Network infrastructure - LAN/WAN</li>
                     <li>Hardware installation and maintenance</li>
                     <li>Technical support and HelpDesk</li>
                     <li>Cloud Computing Services</li>
                     
                     
                    
                    </ol>     
                </div>


                <div className=" bg-white w-96 h-auto rounded-md shadow-md  mt-5 ml-10 sm:w-64 sm:ml-3 lg:w-80 ">
                      <h2 className=' text-white bg-blue-950 p-5'>Others Services</h2>
                     
                     <ol className="p-5">
                    
                     <li>Enterprise Resource Planning (ERP)</li>
                     <li>Data backup and recovery</li>
                     <li>Systems procurement</li>
                     <li>Remote Support</li>
                     <li>Managed VoIP Services</li>
                     <li>Technology Training</li>
                    </ol>     
                </div>

               </div>
        </div>
            
    </div>
  )
}
