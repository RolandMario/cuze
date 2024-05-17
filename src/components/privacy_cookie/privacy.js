import Link from "next/link";
import ContactInfo from "../contact_page/contactInfo";
import Footer from "../footer";
import MenuBar from "../menuBar";
import { IoMdArrowDroprightCircle } from "react-icons/io";

export default function Privacy_Policy() {
  return (
    <div >
        <MenuBar/>
        <ContactInfo heading={"Privacy Policy"}/>
        <div className=" mx-auto px-10 2xl:px-28">
      <h1 className=" mt-5 text-xl sm:text-3xl"><strong>Privacy Statement</strong></h1>
              <h1><strong>Last Updated: 17 May, 2024</strong></h1>
                <h2 className=" mt-5 text-xl sm:text-3xl"><strong>Introduction</strong></h2>
              <p>
              Cuze Integrated Services is committed to protecting your privacy.
              We are an IT and privacy consultancy firm that provides the best solutions for businesses, including small, medium to multinational companies.
                We collect and use personal information in order to deliver our services well, as outlined in this privacy policy.
                We are transparent and ethical in handling personal information, and we respect the rights of our users. 
                This privacy policy applies to all websites (https://www.cuze.ng), services, and applications operated by Cuze Integrated Services Limited.
                </p>


                <h2 className="mt-5 text-xl sm:text-3xl"><strong>Definitions</strong></h2>

                <div className="flex mt-5">
                  <IoMdArrowDroprightCircle/>
                  <p className=" ml-2">
                  <b>Personal information:</b> This includes any information that identifies you as an individual, 
                  such as your name, email address, phone number etc.
                  </p>

                </div>
                <div className="flex mt-5">

                    <IoMdArrowDroprightCircle/>
                    <p className=" ml-2">
                      <b>IP Address:</b> This is a unique number assigned to your device when you connect to the internet. 
                    We may collect IP addresses in order to provide and improve our services.
                    </p>
                </div>

                <h1 className=" mt-5 text-xl sm:text-3xl"><strong>Types of Data we collect</strong></h1>

                <p>
                We only collect personal information that we know we will genuinely use and in accordance with the Data Protection Law. 
                The type of personal information that we collect about you, from third party websites or that you have voluntarily
                 provided to us on this website or from enquiry/contact forms or other contact methods includes:
                </p>

               <Bullet desc="Your name;"/>

               <Bullet desc="Telephone number(s);"/>

                <Bullet desc="Email address;"/>

                <Bullet desc="CV;"/>

               <Bullet desc="Cookies; and/or"/>

                <Bullet desc="IP address, etc."/>

                <p className="mt-5 text-xl sm:text-3xl">
                <strong>How we collect your data</strong>
                </p>

                <p className="mt-5">
                  We collect information in order to provide superior level of service to our clients,
                   web users employees and even our job applicants.
                </p>

                <p className="mt-5">
                The various channels which we collect your Personal Data are as follows:
                </p>

                <Bullet
                 desc="Information we receive from you when you create a new account with us   in any of our online platforms."
                 
                 />

                <Bullet
                 desc="Personal Information you fill when you write to us via our contact us page."
                 
                 />

                <Bullet
                 desc="Information we may collect through “cookies” "
                
                 
                 />
                 <Bullet
                 desc="Information you used when you contact us for enquiries and/or complaints."
                 
                 />
                 <Bullet
                 desc="Information in your CV and the forms completed during job application in our organisation."
                 
                 />

                <Bullet
                 desc="As an employee of Cuze Integrated Service Limited, the information you provided in the process of employment documentation."
                 
                 />
                 <Bullet
                 desc="Personal Information clients provide as a result of trying to provides IT services."
                 
                 />



                <p className="mt-5 text-xl sm:text-3xl">
                <strong>How we use your personal data</strong>
                </p>
                

                <p>
                The responsible use and disclosure of the personally identifiable information we collect is crucial for our ability
                 to provide you with the services that you expect, and may occur under a variety of different circumstances.
                   For example, we may:
                </p>

                <Bullet
                 desc="Use personally identifiable information internally for the purposes of furthering our business,
                  which may include analysing information we receive from you, maintaining accounts, and verifying your identity."
                 
                 />
                  <Bullet
                 desc="Disclose personally identifiable information when required by law, such as requests
                  for personally identifiable information in connection with a judicial, administrative or investigative matter."
                 
                 />
                  <Bullet
                 desc="The information, we get via cookie - we use that to know your preferences so as to bring you great contents."
                 
                 />
                  <Bullet
                 desc="We use some of your information to respond to your request, complaints and to deliver better services."
                 
                 />

                
              <p className="mt-5 text-xl sm:text-3xl">
                <strong>Sharing your personal data</strong>
                </p>
                <p>

                We may share information about you with our sister companies, Costado Global Ltd, Lifeline IT Solutions as part of our engagements,
                 to meet our legal and regulatory obligations. Other parts of the Cuze organization are also used to provide services to us and you, for example
                   hosting and supporting IT applications, provision of certain forms of insurance for Cuze firms and their clients,
                    performing client conflicts checks and Anti-Money Laundering checks, assisting with client engagement services
                     and otherwise as required in order to continue to run Cuze Integrated business.
                </p>

                    
                <p className="mt-5 text-xl sm:text-3xl">
                <strong>Our data retention policy</strong>
                </p>
                <p className="mt-5">
                We will retain your Personal Data as needed to fulfil the purposes for which it was collected.
                 We will retain and use your Personal Data as necessary to comply with our business requirements and legal obligations.
                </p>

                <p className="mt-2">
                We will not retain Personal Data in identifiable form when the purpose(s) for which the Personal Data was collected
                 have been achieved and there is no legal or business need to retain such Personal Data. Thereafter,
                  the data will either be destroyed, deleted, anonymized, and/or removed from our systems.
                </p>

                <p className="mt-5 text-xl sm:text-3xl">
                <strong>International data transfer</strong>
                </p>

                <p>
                Cuze Integrated Service Ltd may transfer certain personal information outside your home country, 
                companies working with us or on our behalf for the purposes described in this Privacy Statement.
                 Cuze will also typically process personal information internationally. If we do this, your personal 
                 information will continue to be protected by means of contracts we have in place with those organizations outside, 
                 containing approved standard contractual clauses (SCC).
                </p>

                <p>
                Cuze will not transfer the personal information you provide to any third parties for their own direct marketing use.
                </p>

                <p className="mt-5 text-xl sm:text-3xl">
                <strong>Your data subjects rights</strong>
                </p>
                <p>To fulfil our obligations with the Nigeria Data Protection Regulation, the following are your rights:</p>

                <h2><b>The right to be informed</b> </h2>
                <p>
                You have the right to be informed about the collection and use of your personal data.
                 We ensure we do this with our internal data protection policies and through our external website notice. 
                 These are regularly reviewed and updated to ensure these are accurate and reflect our data processing activities.
                </p>

                <h2><b>Right of Access</b></h2>
                <p>
                You have the right to access the personal information that we hold about you. 
                </p>

                <h2><b>Right to Rectification </b></h2>
                <p>
                If any of the personal information we hold about you is inaccurate, incomplete or out of date, you may ask us to correct it.
                If you would like to exercise this right, please contact us as set out below.

                </p>

                <h2><b>Right to Object</b></h2>
                <p>
                You have the right to object to us processing your personal information for particular purposes, 
                if we are keeping it too long or have its processing restricted in certain circumstances.
                </p>

                <h2><b>Right to Erasure</b></h2>

                    <p>
                    You have the right to have your personal data erased. This is also known as the <b>right to be forgotten</b>. 
                    The right is not absolute and only applies in certain circumstances.
                    </p>

                  <h2><b>Right to data Portability</b></h2>
                    <p>The right to portability gives you the right to receive personal data you have provided to a controller in a structured,
                       commonly used and machine readable format. It also gives you the right to request that a controller transmits this data 
                       directly to another controller.
                    </p>

                    <p>
                    <b>Other rights are:</b> Automated Decision Making, Profiling and Right to Restrict Processing
                    </p>

                    <p className="mt-5 text-xl sm:text-3xl">
                    <strong>Cookies</strong>
                    </p>

                        <p>
                        The information your browser sends to one of Cuze Integrated Services websites is used for authentication
                         and identification of your session and allows Cuze to display the correct information on the website. 
                         Cuze matches the cookie against your details so it can distinguish you from other users as you browse the site,
                          which helps it to provide you with a good user experience. 
                        </p>
                        <p className="mt-5 text-xl sm:text-3xl">
                        <strong>Data security</strong>
                        </p>

                        <p>These rules describe how and where data should be safely stored.</p>

                        <Bullet
                         desc="Cuze Integrated shall ensure that personal data is stored securely using modern software that is kept up-to-date."
                        
                        />
                         <Bullet
                         desc="When data is stored on paper, it will be kept in a secure place where unauthorized people cannot see it. 
                         These guidelines also apply to data that is usually stored electronically but has been printed out for
                         some reasons:
                         "
                        
                        />
                         <Bullet
                         desc="When not required, the paper or files will be kept in a locked drawer or filing cabinet."
                        
                        />
                         <Bullet
                         desc="Staff and volunteers always make sure paper and printouts are not left where unauthorized people could see them, like on a printer."
                        
                        />
                         <Bullet
                         desc="Data printouts is always shredded and disposed of securely when no longer required."
                        
                        />
                         <Bullet
                         desc="When data is stored electronically, it must be protected from unauthorized access, accidental deletion
                         and malicious hacking attempts:
                         "
                        
                        />
                         <Bullet
                         desc="Data in Cuze Integrated Services is always protected by strong passwords that are changed regularly and never shared
                         between employees.
                         "
                        
                        />
                         <Bullet
                         desc="If data is stored on removable media (like a CD or DVD), these are  kept locked away securely when not being used."
                        
                        />
                         <Bullet
                         desc="Cuze Integrated, stored data on designated drives and servers, and always uploaded to an approved cloud computing services."
                        
                        />
                         <Bullet
                         desc="Servers containing personal data is sited in a secure location"
                        
                        />

                        <p className="mt-5 text-xl sm:text-3xl">
                        <strong>Data modifications/changes</strong>
                        </p>
                        
                          <p>
                          We may modify user data in order to maintain accuracy, relevance, and compliance with applicable regulations. 
                          Modification of user data may occur under the following circumstances:
                          </p>

                          <p>
                          <b>User-Initiated Updates: </b>Users may update their personal information, such as their name, email address, or phone number,
                           through their account settings. These changes will be reflected in our systems after verification.
                          </p>

                          <p>
                          <b>System Maintenance: </b>In order to maintain the integrity of our systems and ensure optimal performance,
                           we may periodically perform data modifications, such as removing duplicate entries, correcting formatting 
                           inconsistencies, or updating outdated information.
                          </p>

                          <p>
                          <b>Legal Compliance: </b>We may modify user data to comply with legal or regulatory requirements,
                           such as updating records to reflect changes in applicable laws or fulfilling requests from law enforcement authorities.
                          </p>

                          <p>
                          <b>Security Measures:</b> In the event of a security breach or suspicious activity, we may modify user data to 
                          protect the integrity of our systems and the privacy of our users.
                          </p>

                          <p>
                          We assure you that all data modifications will be carried out in compliance with applicable laws and regulations
                           and in accordance with industry best practices. Users will be notified of any significant changes to their data whenever feasible
                          </p>

                          <p className="mt-5 text-xl sm:text-3xl">
                        <strong>Making data protection complaints</strong>
                        </p>

                        <p>
                        If you have concerns about how we handle your personal information,
                         you have the right to make a complaint about us to the privacy regulatory authorities, the <Link href={"https://ndpc.gov.ng/"} className="text-blue-700"><u>Nigeria Data Protection Commission, (NDPC)</u></Link>
                        </p>

                        <p className="mt-5 text-xl sm:text-3xl">
                        <strong>How to contact us</strong>
                        </p>

                        <p>
                        If you have any questions about this notice or our privacy practices, you can contact us by mail, telephone, or e-mail:
                        </p>

                        <p>
                        Cuze Integrated Services Ltd<br/>
                        14 Salvation Road, <br/>
                        Ikeja, Lagos,<br/>
                        Nigeria<br/>
                        +234 8089772055<br/>
                        office@cuze.ng<br/>
                       

                        </p>
                        

                    
        </div>
       
          
        
    </div>
  )
}


const Bullet = ({desc, reference})=>{

  return(
    <div className="flex mt-5">

          <IoMdArrowDroprightCircle/>
          <p className=" ml-2">
           
          {desc}


          </p>
    </div>
  )
}