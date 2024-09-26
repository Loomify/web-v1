import Image from "next/image";
const cardContent = [
  {
    image: "/itserv.png",
    title: "Managed IT Services",
    text: "Proactive management and monitoring to ensure seamless business operations.",
  },
  {
    image: "/CyberServ.png",
    title: "Cybersecurity",
    text: "Top-notch protection for your business from cyber threats and vulnerabilities.",
  },
  {
    image: "/CloudServ.png",
    title: "Cloud Solutions",
    text: "Flexible, scalable cloud solutions tailored for your business needs.",
  },
  {
    image: "/NetworkServ.png",
    title: "Network Infrastructure",
    text: "Optimize and enhance your IT network for maximum performance and security.",
  },
  {
    image: "/SDEserv.png",
    title: "Software Development",
    text: "Customized software development that drives business growth and efficiency.",
  },
];

export default function CarouselContent() {
  return (
    <section
      id="whatwedo"
      className="bg-white pt-28 h-fit flex flex-col items-center"
    >
      <div className="flex flex-col items-center justify-center w-[60%]">
        <h1 className="text-black text-4xl font-medium">What we do?</h1>
        <p className="text-wrap text-xl pt-2 text-black text-center">
          At Lumify, we specialize in delivering tailored IT solutions that
          drive efficiency, security, and growth. Our comprehensive suite of
          services ensures your technology aligns seamlessly with your business
          goals.
        </p>
      </div>

      {/* CardContainer */}
      <div
        id="CardContainer"
        className="flex flex-wrap justify-center w-full px-10 md:px-20 mt-10 mb-15 gap-8"
      >
        {cardContent.map((con) => (
          <div
            key={con.title}
            className="flex flex-col items-center justify-center h-fit w-full sm:w-[40%] md:w-[18%] m-2"
          >
            <div
              id="imageDiv"
              className="h-fit w-fit p-4 bg-[#E9E6FF] rounded-full"
            >
              <Image src={con.image} alt={"Card Image"} height={40} width={40} />
            </div>
            <h1 className="text-xl pt-4 text-black font-semibold">
              {con.title}
            </h1>
            <p className="text-lg pt-4 px-4 text-center text-black">
              {con.text}
            </p>
          </div>
        ))}
      </div>

      <button className="bg-[#775Df2] px-20 py-4 rounded-full">
        Know More
      </button>
    </section>
  );
}
