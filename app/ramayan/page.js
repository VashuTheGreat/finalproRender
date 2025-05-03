

"use client"
import React from 'react';
import Nav from '../components/nav';
import Image from 'next/image'; // Only if you're using Next.js
import Footer from '../components/Footer';
import '../globals.css';
import { useEffect } from 'react';

const Page = () => {
   const [added,setadded]=React.useState(false);
    useEffect(() => {
      const handleScroll = () => {
        const elements = document.querySelectorAll(".pop-slide");
        elements.forEach((el) => {
          const rect = el.getBoundingClientRect();
          if (rect.top < window.innerHeight) {
            el.classList.add("show");
          } else {
            el.classList.remove("show");
          }
        });
      };
      window.addEventListener("scroll", handleScroll);
      handleScroll();
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  return (<>
  <Nav/>
    <div className="pop-slide relative min-h-screen bg-black text-white overflow-hidden">
      
      {/* Background Video */}
      <video
        src="/video/ramayan.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="pop-slide absolute top-0 left-0 w-full h-full object-cover z-0 brightness-50"
      />

      {/* Overlay content */}
      <div className="pop-slide relative z-10 px-4 py-10 flex flex-col items-center space-y-12 backdrop-blur-sm">

        {/* Heading */}
        <h1 className="pop-slide text-4xl md:text-5xl font-bold text-center font-serif tracking-wide drop-shadow-lg flex justify-center items-center gap-2 flex-wrap">
  📖 The
  <span>
    <Image src="/Ramayana.png" alt="Ramayana" width={200} height={100} />
  </span>
</h1>


        {/* Main Flipbook Viewer */}
        <div className="pop-slide w-full max-w-4xl h-[70vh] shadow-2xl border-[3px] border-gray-800 rounded-xl overflow-hidden transition-all duration-300 hover:scale-[1.01]">
          <iframe
            src="https://online.fliphtml5.com/ofisw/eunp/"
            width="100%"
            height="100%"
            frameBorder="0"
            allowFullScreen
            allowtransparency="true" 
            title="Ramayan Book"
            className="pop-slide w-full h-full"
          ></iframe>
        </div>

        {/* Description */}
        <p className="pop-slide text-gray-200 text-center max-w-2xl text-lg italic leading-relaxed">
          Experience the sacred story of Lord Ram. Turn the pages and dive into one of the greatest epics of all time.
        </p>

        {/* Divider */}
        <div className="pop-slide w-36 h-0.5 bg-gray-400 rounded-full" />

        {/* Short Intro Flipbook */}
        <h2 className="pop-slide text-2xl md:text-3xl font-semibold font-serif mb-2">
          📘 Short Introduction
        </h2>
        <div className="pop-slide w-full max-w-3xl h-[50vh] shadow-md border-[2px] border-gray-700 rounded-lg overflow-hidden transition-all duration-300 hover:scale-[1.01]">
          <iframe
            src="https://online.pubhtml5.com/gopyh/qbbr/"
            width="100%"
            height="100%"
            frameBorder="0"
            allowFullScreen
            allowtransparency="true" 
            title="Ramayan Short Intro"
            className="pop-slide w-full h-full"
          ></iframe>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Page;
