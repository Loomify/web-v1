import Image from "next/image";
import heroImage from "../../../public/ClientHero.png";

interface ClientCardProps {
  cname: string;
  review: string;
  star: number;
}

const ClientCard: React.FC<ClientCardProps> = ({ cname, review, star }) => {
  const stars = Array(star)
    .fill(0)
    .map((_, index) => (
      <span
        key={index}
        role="img"
        aria-label="star"
        className="text-yellow-400"
      >
        ⭐
      </span>
    ));

  return (
    <div className="max-w-sm rounded h-auto overflow-hidden shadow-lg bg-[rgba(0,0,0,0.05)] p-4">
      <div className="flex  justify-between gap-5 w-full items-end mb-4">
        <div className="flex">
          <div className="h-10 w-10 rounded-full bg-gray-300 mr-4"></div>
          <div className="font-bold mt-2 w-max text-base">{cname}</div>
        </div>

        <div className="mb-2">{stars}</div>
      </div>
      <p className="text-gray-700 text-base mb-4">{review}</p>
      <div className="text-2xl">
        <span role="img" aria-label="thumbs up" className="mr-2">
          👍
        </span>
        <span role="img" aria-label="clapping hands">
          👏
        </span>
      </div>
    </div>
  );
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex flex-col-reverse md:mb-40 md:grid mt-5 md:mt-16 grid-cols-1 md:grid-cols-6 h-max px-6 md:px-20 bg-white text-black"
    >
      <div id="contentDiv" className="pt-5 md:ml-20 md:pt-8 md:col-span-3">
        <h1 className="text-4xl md:text-6xl w-full md:w-[100%] font-semibold">
          Client Testimonials
        </h1>
        <p className="text-lg md:text-xl py-4">
          Discover what our clients have to say about us.
        </p>
        <div className="grid col-span-2 row-span-2 w-[50%] h-[50vh] gap-10">
            <div className="col-start-1 row-start-1">
            <ClientCard
            cname="John Doe"
            review="Amazing service! Highly recommended."
            star={4}
          />
            </div>
            <div className="col-start-1 row-start-2">
            <ClientCard
            cname="John Doe"
            review="Amazing service! Highly recommended."
            star={4}
          />
            </div>
            <div className="col-start-2 row-start-1">
            <ClientCard
            cname="John Doe"
            review="Amazing service! Highly recommended."
            star={4}
          />
            </div>
            <div className="col-start-2 row-start-2">
            <ClientCard
            cname="John Doe"
            review="Amazing service! Highly recommended."
            star={4}
          />
            </div>
          
        </div>
      </div>
      <div className="mb-8 md:mb-0 md:col-span-3">
        <Image
          src={heroImage}
          alt="Hero Image"
          className="w-[100%] pl-5 h-auto object-cover"
        />
      </div>
    </section>
  );
}
