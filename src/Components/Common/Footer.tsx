import Image from "next/image";
import { CiMail } from "react-icons/ci";
import { FaTwitter, FaLinkedin } from "react-icons/fa";
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
    <footer
      className="relative min-h-[400px] text-white sm:px-6 lg:px-8 py-8 sm:py-12 bg-cover bg-center bg-no-repeat   bg-[#0C0833] px-10"
      
    >
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col items-center sm:items-start sm:flex-row sm:justify-between">
          {/* Logo and Social Icons */}
          <div className="flex flex-col items-center sm:items-start mb-8 sm:mb-0">
            <Image
              src="/LogoWhite.png"
              width={150}
              height={50}
              alt="Lumify Logo"
              className="w-32 sm:w-36 h-auto mb-4"
            />
            <div className="flex gap-4 mb-4">
              <Link
                href="#"
                className="hover:opacity-80 transition-opacity"
                aria-label="Twitter"
              >
                <FaTwitter size={20} />
              </Link>
              <Link
                href="#"
                className="hover:opacity-80 transition-opacity"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </Link>
              <Link
                href="#"
                className="hover:opacity-80 transition-opacity"
                aria-label="Instagram"
              >
                <AiFillInstagram size={22} />
              </Link>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="mb-8 sm:mb-0">
            <ul className="flex flex-col items-center sm:items-start gap-3">
              {navElements.map((e) => (
                <li key={e.text}>
                  <Link
                    href={e.url}
                    className="text-base sm:text-lg hover:opacity-80 transition-opacity"
                  >
                    {e.text}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact Information */}
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-white/20 text-center sm:text-left">
          <p className="text-sm">
            © 2024 Lumify Software Technologies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
