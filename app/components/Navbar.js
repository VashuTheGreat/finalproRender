"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link';

const Navbar = () => {
  const [language, setLanguage] = useState("English");
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLanguageChange = (lang) => {
    console.log("Language selected:", lang); // Log the language when clicked
    setLanguage(lang);
    setShowDropdown(false); // Close the dropdown after selection
  };

  return (
    <nav className="max-w-[80vw] mx-auto flex justify-between items-center h-[62px] relative z-10">
      <Link href={"/"} ><Image src="/logo.svg" alt="logo" width={200} height={60} /></Link>

      <div className="flex gap-4 items-center relative">
        {/* Language Selector Dropdown */}
        <div className="relative">
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className="px-3 py-1 font-bold text-white border border-white bg-opacity-0.1 rounded transition-all duration-300 ease-in-out hover:bg-opacity-40 hover:shadow-[0_0_15px_rgba(255,255,255,0.6)]"
          >
            {language}
          </button>

          {showDropdown && (
            <div
              className="absolute right-0 mt-1 w-[100px] bg-white bg-opacity-20 border border-white rounded shadow-md backdrop-blur-md z-50"
              onClick={(e) => e.stopPropagation()} // prevent bubble
            >
              <ul>
                {/* English option */}
                <li
                  onClick={() => {
                    handleLanguageChange("English");
                    console.log("clicked English");
                  }}
                  className={`px-3 py-1 cursor-pointer hover:bg-white hover:bg-opacity-30 hover:text-black ${
                    language === 'English' ? "font-bold text-black" : "text-black"
                  }`}
                >
                  English
                </li>
                {/* Hindi option */}
                <li
                  onClick={() => {
                    handleLanguageChange("Hindi");
                    console.log("clicked Hindi");
                  }}
                  className={`px-3 py-1 cursor-pointer hover:bg-white hover:bg-opacity-30 hover:text-black ${
                    language === "Hindi" ? "font-bold text-black" : "text-black"
                  }`}
                >
                  Hindi
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Sign In Button */}
        <Link href="/login">
  <button className="px-6 py-2 text-white bg-red-600 rounded text-lg font-semibold border border-transparent transition-all duration-300 ease-in-out hover:bg-red-700 hover:text-white hover:border-red-700 max-sm:text-sm">
    Sign in
  </button>
</Link>


      </div>
    </nav>
  )
}

export default Navbar
