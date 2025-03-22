"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"

const navElements = [
  { text: "What we Do", url: "/what-we-do" },
  { text: "For founders", url: "#" },
  { text: "Clients", url: "/clients" },
  { text: "Get in Touch", url: "/get-in-touch" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="bg-white text-black shadow-md relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0">
            <Link href="/">
              <Image src="/Logo.png" width={180} height={40} className="w-auto h-8 md:h-10" alt="Logo" />
            </Link>
          </div>

          <div className="hidden md:flex space-x-8 items-center">
            {navElements.map((item) => (
              <Link
                key={item.text}
                href={item.url}
                className="text-lg text-black hover:text-gray-600 transition-colors"
              >
                {item.text}
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <div className="rounded-full flex justify-center items-center shadow-[0_4px_12px_rgba(0,0,0,0.1)] text-center text-lg w-32 h-10">
              India
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-200 rounded-md p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-50 bg-white transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="flex justify-between items-center h-20 px-4 sm:px-6">
          <Link href="/" onClick={() => setIsOpen(false)}>
            <Image src="/Logo.png" width={180} height={40} className="w-auto h-8" alt="Logo" />
          </Link>
          <button
            onClick={toggleMenu}
            className="text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-200 rounded-md p-2"
            aria-label="Close menu"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        <div className="px-4 pt-8 pb-3 space-y-4">
          {navElements.map((item) => (
            <Link
              key={item.text}
              href={item.url}
              className="block text-xl text-black hover:text-gray-600 py-2"
              onClick={() => setIsOpen(false)}
            >
              {item.text}
            </Link>
          ))}
          <div className="pt-4">
            <div className="rounded-full flex justify-center items-center shadow-[0_4px_12px_rgba(0,0,0,0.1)] text-center text-lg w-32 h-10 mx-auto">
              India
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

