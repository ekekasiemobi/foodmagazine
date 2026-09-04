"use client"
import { useState } from "react"
import Image from "next/image"

function Nav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-[#F5F5F5] w-full">
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-4 py-2 sm:px-8">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <Image 
            src="/logo.avif" 
            alt="Logo" 
            width={70} 
            height={50} 
            className="w-auto h-auto"
            priority
          />
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8 text-sm">
          <li><a className="font-bold text-gray-900 hover:text-red-700 transition-colors" href="/">Home</a></li>
          <li><a className="text-gray-700 hover:text-red-700 transition-colors" href="#">Features</a></li>
          <li><a className="text-gray-700 hover:text-red-700 transition-colors" href="/recipe">Recipe</a></li>
          <li><a className="text-gray-700 hover:text-red-700 transition-colors" href="#">Magazine</a></li>
        </ul>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-gray-700 hover:text-black focus:outline-none"
          aria-label="Toggle Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-200 bg-[#F5F5F5] px-4 py-4">
          <ul className="flex flex-col gap-3 text-sm">
            <li>
              <a 
                onClick={() => setIsOpen(false)} 
                className="block font-bold text-gray-900 py-1" 
                href="/"
              >
                Home
              </a>
            </li>
            <li>
              <a 
                onClick={() => setIsOpen(false)} 
                className="block text-gray-700 py-1" 
                href="#"
              >
                Features
              </a>
            </li>
            <li>
              <a 
                onClick={() => setIsOpen(false)} 
                className="block text-gray-700 py-1" 
                href="/recipe"
              >
                Recipe
              </a>
            </li>
            <li>
              <a 
                onClick={() => setIsOpen(false)} 
                className="block text-gray-700 py-1" 
                href="#"
              >
                Magazine
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}

export default Nav