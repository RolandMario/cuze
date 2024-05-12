

import AboutUs from "@/components/about_page/aboutUs";
import ContactBar from "@/components/contactBar";
import ContactInfo from "@/components/contact_page/contactInfo";
import Footer from "@/components/footer";
import MenuBar from "@/components/menuBar";


export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-gray-200">
        <ContactBar/>
        <MenuBar/>
        <ContactInfo heading={"About Us"}/>
        <AboutUs/>
        <Footer/>
    </main>
  )
}
