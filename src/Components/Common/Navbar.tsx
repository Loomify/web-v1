"use client"
import { useState } from "react";
import Image from "next/image";
import Logo from "../../../public/Logo.png";
import Link from "next/link";

const navElements = [
  { text: "What we Do", url: "#whatwedo" },
  { text: "For founders", url: "#" },
  { text: "Clients", url: "#" },
  { text: "Get in Touch", url: "#getintouch" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white text-black shadow-md relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0">
            <Image src={Logo}  className="w-full h-auto md:w-[180px]" alt="Logo Image" />
          </div>

          <div className="block md:hidden">
            <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
              {isOpen ? (
                <svg
                  className="h-8 w-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              ) : (
                <svg
                  className="h-8 w-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              )}
            </button>
          </div>

          <div className="hidden md:flex space-x-8 items-center">
            {navElements.map((item) => (
              <Link
                key={item.text}
                href={item.url}
                className="text-xl text-black hover:text-gray-600"
              >
                {item.text}
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <div className="rounded-full flex justify-center items-center shadow-[0_4px_12px_rgba(0,0,0,0.5)] text-center text-xl w-40 h-12">
              India
            </div>
          </div>
        </div>
      </div>

      <div
        className={`fixed top-24 left-[100%] h-screen w-3/4 h-full bg-white shadow-md transform ${
          isOpen ? "-translate-x-full" : "translate-x-0"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="px-4 pt-16 pb-3 space-y-1 sm:px-3">
          {navElements.map((item) => (
            <Link
              key={item.text}
              href={item.url}
              className="block text-lg text-black hover:text-gray-600 py-2"
              onClick={toggleMenu}
            >
              {item.text}
            </Link>
          ))}

          <div className="px-4 py-2">
            <div className="rounded-full flex justify-center items-center shadow-[0_4px_12px_rgba(0,0,0,0.5)] text-center text-black text-xl w-40 h-12 ">
              India
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
