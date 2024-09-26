import Image from "next/image";
import heroImage from "../../../public/heroImage.png";

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex flex-col-reverse md:grid mt-5 md:mt-20 grid-cols-1 md:grid-cols-6 h-max px-6 md:px-20 bg-white text-black"
    >
      <div id="contentDiv" className="pt-5 md:pt-40 md:col-span-3">
        <h1 className="text-3xl md:text-4xl w-full md:w-[80%] font-semibold">
          Empowering Businesses with Cutting-Edge IT Solutions
        </h1>
        <p className="text-lg md:text-xl py-4">
          Transform your digital experience with our industry-leading managed IT
          services, cybersecurity, and cloud solutions.
        </p>
        <button
          id="Get In Touch"
          className="p-3 px-8 md:px-16 rounded-full text-lg md:text-xl text-white bg-[#00DBBD]"
        >
          Get in Touch
        </button>
      </div>
      <div className="mb-8 md:mb-0 md:col-span-3">
        <Image
          src={heroImage}
          alt="Hero Image"
          className="w-full h-auto object-cover"
        />
      </div>
    </section>
  );
}
