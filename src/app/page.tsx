import AboutSection from "./_components/aboutsection";
import ContactSection from "./_components/contact";
import ShortSection from "./_components/shortsection";
import Footer from "./_components/footer";
import Hero from "./_components/hero";
import Navbar from "./_components/navbar";
import Overlays from "./_components/overlays";
import { ServicesSection } from "./_components/services";
import ThumbsSection from "./_components/thumbs";
import YoutubeSection from "./_components/youtubesection";

export default function Home (){
  return(
    <main>
      <Navbar/>
      <Hero/>
      <ServicesSection/>
      <AboutSection/>
      <YoutubeSection/>
      <ShortSection/>
      <Overlays/>
      <ThumbsSection/>
      <ContactSection/>
      <Footer/>
    </main>
  )
}