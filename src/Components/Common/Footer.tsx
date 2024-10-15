import Image from "next/image";
import { CiMail } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import Link from "next/link";

const navElements = [
  { text: "Home", url: "/" },
  { text: "What we Do", url: "/what-we-do" },
  { text: "For founders", url: "#" },
  { text: "Clients", url: "/clients" },
  { text: "Get in Touch", url: "/get-in-touch" },
];

export default function Footer() {
  return (
    <section id="footer" className="flex flex-col h-fit md:h-fit items-center px-4 md:px-10 pb-5 justify-between">
      {/* Top Section */}
      {/* <div className="flex flex-col text-[#3d3933] justify-center items-center pt-20 md:pt-44">
        <h1 className="text-2xl md:text-3xl font-semibold">Got a Project?</h1>
        <p className="text-lg md:text-xl flex">
          <CiMail className="mt-1" /> &nbsp; info@lumify.co.in
        </p>
      </div> */}

      {/* Middle Section with Logo and Socials */}
      <div className="flex flex-col md:flex-row w-full justify-between items-center mt-20 md:pt-0 md:mt-10 text-center md:text-left">
        {/* Logo and Social Icons */}
        <div className="flex flex-col items-center md:items-start">
          <Image
            src={"/LogoWhite.png"}
            width={150}  // Resized for mobile
            height={150}
            alt="Logo Not Found"
          />
          <div id="socials" className="flex gap-5 mt-4 justify-center">
            <FaTwitter size={25} />
            <FaLinkedin size={25} />
            <AiFillInstagram size={25} />
          </div>
          <p className="text-sm mt-6">
            © 2024 Lumify Software Technologies. All rights reserved.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="pt-10 md:pt-0">
          <ul className="flex flex-col gap-2 md:gap-5 items-center md:items-start">
            {navElements.map((e) => (
              <li key={e.text} className="my-2">
                <Link href={e.url} className="text-lg md:text-xl hover:text-gray-600">
                  {e.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
