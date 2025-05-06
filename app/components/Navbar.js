'use client';

import React, { useState } from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const { data: session, status } = useSession(); 
  const [language, setLanguage] = useState("English");
  const [showDropdown, setShowDropdown] = useState(false);
  const [showUserDropdown, setShowUserDropdown] = useState(false); 

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    setShowDropdown(false);
  };

  return (
    <nav className="max-w-[80vw] mx-auto flex justify-between items-center h-[62px] relative z-10">
      {/* Logo */}
      <Link href={"/"}>
        <Image src="/logo.svg" alt="logo" width={200} height={60} />
      </Link>

      <div className="flex gap-4 items-center relative">
        {/* Language Selector */}
        <div className="relative">
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className="px-3 py-1 font-bold text-white border border-white bg-opacity-0.1 rounded transition-all duration-300 ease-in-out hover:bg-opacity-40 hover:shadow-[0_0_15px_rgba(255,255,255,0.6)]"
          >
            {language}
          </button>

          {showDropdown && (
            <div className="absolute right-0 mt-1 w-[100px] bg-white bg-opacity-20 border border-white rounded shadow-md backdrop-blur-md z-50">
              <ul>
                <li
                  onClick={() => handleLanguageChange("English")}

                  className={`px-3 py-1 cursor-pointer hover:bg-white hover:bg-opacity-30 hover:text-black hover:underline ${
                    language === 'English' ? "font-bold text-black" : "text-black"
                  }`}
                >
                  English
                </li>
                <li
                  onClick={() => handleLanguageChange("Hindi")}

                  className={`px-3 py-1 cursor-pointer hover:bg-white hover:bg-opacity-30 hover:text-black hover:underline ${
                    language === "Hindi" ? "font-bold text-black" : "text-black"
                  }`}
                >
                  Hindi
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Sign In handling */}

        {session ? (
          <div className="relative">
            <button
              onClick={() => setShowUserDropdown(!showUserDropdown)}
              className="px-4 py-2 text-white bg-gray-800 rounded hover:bg-gray-700 font-semibold"
            >
              {session.user.name?.split(' ')[0] || 'User'}  //sign in ki jagah name render karna
            </button>

            {showUserDropdown && (
              <div className="absolute right-0 mt-2 w-32 bg-white rounded shadow-md z-50 hover:bg-gray-800"  >
              
               <button
                 onClick={() => signOut()}
                 className="block w-full text-black text-left px-4 py-2 hover:bg-gray-200 hover:underline cursor-pointer"
                 >
                  Sign out
                </button>
              </div>
            )}
          </div>
        ) : (
          <Link href={"/login"}><button
          className="px-6 py-2 text-white bg-red-600 rounded text-lg font-semibold border border-transparent transition-all duration-300 ease-in-out hover:bg-red-700 hover:border-red-700 max-sm:text-sm  cursor-pointer"
        >
          Sign in
        </button></Link>
        )}
      </div>
    </nav>
  );

};
export default Navbar;
