import ContactBar from "@/components/contactBar";
import ContactInfo from "@/components/contact_page/contactInfo";
import Contact_card from "@/components/contact_page/contact_card";
import Footer from "@/components/footer";
import MenuBar from "@/components/menuBar";


export default function page() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-gray-200">
       
        <MenuBar/>
        <ContactInfo heading={"Contact Information"}/>
        <Contact_card/>
        <Footer/>
    </main>
  )
}
