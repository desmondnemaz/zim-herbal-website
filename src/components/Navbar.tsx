"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="px-6 py-4 shadow-sm bg-primary text-white sticky top-0 z-50">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image 
            src="/logo.png" 
            alt="Zim Herbal Repo Logo" 
            width={56} 
            height={56} 
            className="rounded-full"
          />
          <h1 className="font-bold text-xl md:text-2xl font-poppins truncate">
            Zim Herbal Repo
          </h1>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-sm font-poppins font-medium">
          <Link href="/" className="hover:text-secondary transition-colors">Home</Link>
          <Link href="/herbs" className="hover:text-secondary transition-colors">Herbs</Link>
          <Link href="/safety" className="hover:text-secondary transition-colors">Safety</Link>
          <Link href="/about" className="hover:text-secondary transition-colors">About</Link>
        </nav>

        {/* Mobile Hamburger Button */}
        <button 
          className="md:hidden p-2 text-white hover:text-secondary transition-colors focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      {isOpen && (
        <nav className="md:hidden mt-4 pt-4 pb-2 space-y-2 text-center text-base font-poppins font-medium border-t border-white/20">
          <Link href="/" className="block py-2 px-4 rounded-lg hover:bg-white/10 hover:text-secondary transition-colors" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/herbs" className="block py-2 px-4 rounded-lg hover:bg-white/10 hover:text-secondary transition-colors" onClick={() => setIsOpen(false)}>Herbs</Link>
          <Link href="/safety" className="block py-2 px-4 rounded-lg hover:bg-white/10 hover:text-secondary transition-colors" onClick={() => setIsOpen(false)}>Safety</Link>
          <Link href="/about" className="block py-2 px-4 rounded-lg hover:bg-white/10 hover:text-secondary transition-colors" onClick={() => setIsOpen(false)}>About</Link>
        </nav>
      )}
    </header>
  );
}
