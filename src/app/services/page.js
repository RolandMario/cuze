import ContactBar from '@/components/contactBar'
import ContactInfo from '@/components/contact_page/contactInfo'
import Footer from '@/components/footer'
import MenuBar from '@/components/menuBar'
import ITService from '@/components/services_page/it_service'
import PMservice from '@/components/services_page/pm_service'
import SecurityService from '@/components/services_page/security_service'
import ServiceList from '@/components/services_page/service_list'


export default function Services() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-gray-200">

        <ContactBar/>
        <MenuBar/>
        <ContactInfo heading={"Our Services"}/>
        <ServiceList/>
        <ITService/>
        <SecurityService/>
        <PMservice/>
        
        <Footer/>
    </main>
  )
}
