import ContactBar from "@/components/contactBar";
import ContactUs from "@/components/contactUs";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import MenuBar from "@/components/menuBar";
import Mission from "@/components/mission";
import Services from "@/components/services";
import Values from "@/components/values";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-gray-200">
      <ContactBar/>
      <MenuBar/>
      <Hero/>
      <Services/>
      <Mission/>
      <Values/>
      <ContactUs classname={' w-full px-5 flex-col justify-center items-center mt-10 mb-10 md:w-1/2'}/>
      <Footer/>
    </main>
  );
}
