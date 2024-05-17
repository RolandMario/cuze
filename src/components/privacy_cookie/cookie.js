import ContactInfo from "../contact_page/contactInfo";
import Footer from "../footer";
import MenuBar from "../menuBar";
import { IoMdArrowDroprightCircle } from "react-icons/io";

export default function Cookie_policy() {
  return (
    <div>
        <MenuBar/>
        <ContactInfo heading={"Cookie Policy"}/>

       <div className=" mx-auto px-10 2xl:px-28">

          <p className=" mt-5">This Cookie Policy explains how Cuze Integrated Services, &apos;we&apos; use cookies on our website. By using the Service, you consent to the use of cookies.</p>
            <h2 className=" mt-5 text-xl sm:text-3xl"><b>What are cookies? </b></h2>
            <p>Cookies are small pieces of text sent by your web browser by a website you visit. A cookie file is stored in your web browser and allows the Service or a third-party to recognize you and make your next visit easier and the Service more useful to you.</p>
            <h2 className="mt-5 text-xl sm:text-3xl"><b>Purposes of cookies:</b></h2>
            <p>When you use and access the Service, we may place a number of cookies files in your web browser. We use cookies for the following purposes:</p>


            <div className="flex mt-5">

                <IoMdArrowDroprightCircle/>
                <p className=" ml-2">
                To store your preferences
                </p>
            </div>

            <div className="flex mt-5">

                <IoMdArrowDroprightCircle/>
                <p className=" ml-2">
                To provide analytics

                </p>
            </div>

            <div className="flex mt-5">

                <IoMdArrowDroprightCircle/>
                <p className=" ml-2">
                To enable advertisements delivery, including behavioural advertising.
                </p>
            </div>


            <h2 className=" mt-5 text-xl sm:text-3xl"><b>The types of cookies we use:</b></h2> 
              <p>
              The types of cookies we use are as follows:
              </p>

        <div className="flex mt-5">

          <IoMdArrowDroprightCircle/>
          <p className=" ml-2">
          <b>Technical Cookies-</b>These cookies are essential for the correct functioning of our website and to provide the service required to our users.
          </p>
      </div>

      <div className="flex mt-5">

          <IoMdArrowDroprightCircle/>
          <p className=" ml-2">
          <b>Profiling Cookies-</b> These cookies are used to create user profiles based on personal choices and preferences in order to send advertising messages to your device. 
          The information obtained from these cookies will be shared with third parties.
          </p>
      </div>

      <div className="flex mt-5">

          <IoMdArrowDroprightCircle/>
          <p className=" ml-2">
          <b>Third party Cookies-</b> While using our website, you may receive cookies from sites managed by third parties.
          </p>
      </div>




            <p className=" mt-5">
            <b>What are your choices regarding cookies?</b> If you&apos;d like to delete cookies, or instruct your web browser to delete or refuse cookies, visit the help pages of your web browser.
          

            </p>

            <p>Please note, however, if you delete cookies or refuse to accept them, you might not be able to use all of the features we offer and may not be able to store your preferences.
           Hence, some of our pages might not display properly.</p>
       </div>


        
    
    </div>
  )
}
