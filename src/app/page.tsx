import Navbar from "@/Components/Common/Navbar";
import Hero from "@/Components/Landing/Hero";
import CarouselContent from "@/Components/Landing/CarouselSection";
import About from "@/Components/Landing/AboutLumify";
import Footer from "@/Components/Common/Footer";

export default function Home() {
  return (
    <>
      {/* <Navbar/> */}
      <Hero />
      <CarouselContent />
      <About />
      {/* <Footer/> */}
    </>
  );
}
