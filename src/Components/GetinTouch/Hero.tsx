import Image from "next/image";
import heroImage from "../../../public/Design.png";

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex flex-col-reverse md:grid mt-5 md:mt-20 grid-cols-1 md:grid-cols-6 h-max px-6 md:px-20 bg-white text-black"
    >
      <div id="contentDiv" className="pt-5 md:pt-20 md:col-span-3 pl-32">
        <h1 className="text-3xl md:text-4xl w-full md:w-[80%] font-semibold">
          Get in touch
        </h1>
        <p className="text-lg md:text-xl py-4">
          Have a query? Reach out to us!
        </p>
        <form action="https://api.web3forms.com/submit" method="POST">
          <input
            type="hidden"
            name="access_key"
            value="71b70095-e3d6-4e8b-8358-1053a3b01349"
          ></input>
          <div className="flex flex-col mb-5 text-[rgba(0,0,0,0.5)]">
            <label htmlFor="name" className="font-bold text-black">
              Name
            </label>
            <input
              type="text"
              className="bg-white border-2 p-1 pl-4 rounded-lg w-[70%]"
              name="name"
              placeholder="Enter your name"
            />
            Required
          </div>
          <div className="flex flex-col mb-5 text-[rgba(0,0,0,0.5)]">
            <label htmlFor="email" className="font-bold text-black">
              Email
            </label>
            <input
              type="text"
              name="name"
              className="bg-white border-2 p-1 pl-4 rounded-lg w-[70%]"
              placeholder="Enter your email"
            />
            We'll respond here
          </div>
          <button
            type="submit"
            className="py-2 px-20 bg-cyan-400 rounded-full text-white"
          >
            Send Message
          </button>
        </form>
      </div>
      <div className="mb-8 md:mb-0 md:col-span-3">
        <Image
          src={heroImage}
          alt="Hero Image"
          className="w-[75%] ml-10 h-auto object-cover"
        />
      </div>
    </section>
  );
}
