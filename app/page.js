"use client";
import React, { useEffect } from 'react';
import Image from 'next/image';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Link from 'next/link';

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

  return (
    <div className=" text-white pop-slide ">
      <div className="relative h-[80vh]">
        {/* Background Video */}
        <video
          src='/video/bacimg.mp4'
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        
        <div className='absolute inset-0 bg-black opacity-70'></div>

        <Navbar />

        {/* video ki upper ka content*/}
        <div className="flex flex-col items-center justify-center text-center gap-6 px-8 h-[calc(100%-62px)] z-10 relative font-['Martel_Sans']">
          <span className="font-black text-4xl md:text-5xl">Unlimited Stories, Anime</span>
          <span className="text-xl font-normal">shows and more</span>
          <span className="text-lg font-normal">Starts at ₹149. Cancel at any time.</span>
          <span>Ready to watch? Enter your email to create or restart your membership.</span>
          <div className="flex items-center justify-center gap-4 flex-wrap">
          <input
  type="text"
  placeholder="Enter email"
  className="py-2 px-4 text-sm rounded bg-opacity-70 bg-neutral-900 border border-gray-300 text-white w-64 transition duration-300 hover:border-white hover:shadow-[0_0_12px_rgba(255,255,255,0.8)]"
/>


            <button className="bg-red-600 text-white px-6 py-2 font-bold rounded hover:text-white hover:shadow-[0_0_20px_rgba(220,38,38,0.7)] hover:border-red-50">Get Started</button>
          </div>
        </div>
      </div>

      <div className="h-[7px] bg-neutral-800 "></div>

      <div className=" sections "
  style={{ backgroundImage: "url('https://www.harrypotter.com/images/home/horizons_mobile_village.png')" }}
>

        {/* SECTION 1 */}
        <Link href={"/ramayan"}> <section className="pop-slide flex flex-col md:flex-row items-center justify-center max-w-[70vw] mx-auto py-10 gap-8 bg-cover bg-center"
  
  >
          <div className="text-center md:text-left space-y-4">
            <h1 className="text-4xl font-bold">Read Ramayan</h1>
            <p className="text-lg">Read on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
          </div>
          <div className="relative flex justify-center items-center">
           <Image
  src="/bk.png"
  alt="TV"
  width={500}
  height={300}
  className="transition-transform duration-300 hover:scale-105"
/>
  <Image
    src="/click.gif"
    alt="TV"
    width={100}
    height={100}
    className="absolute top-40 left-40 w-16 h-16"
  />
</div>

        </section></Link>
  
        <div className="h-[7px] bg-neutral-800"></div>
  
        {/* SECTION 2 */}
        <Link href={'/funComic'}>  <section className="pop-slide flex flex-col-reverse md:flex-row items-center justify-center max-w-[70vw] mx-auto py-10 gap-8">
          <div className="relative flex justify-center items-center">
        <Image
  src="/bk.png"
  alt="TV"
  width={500}
  height={300}
  className="transition-transform duration-300 hover:scale-105"
/>
  <Image
    src="/click.gif"
    alt="TV"
    width={100}
    height={100}
    className="absolute top-40 left-45 w-16 h-16"
  />
            
          </div>
          <div className="text-center md:text-left space-y-4">
            <h1 className="text-4xl font-bold">Read fun Comic</h1>
            <p className="text-lg">Save your favorites easily and always have something to Read.</p>
          </div>
        </section></Link>
  
        <div className="h-[7px] bg-neutral-800"></div>
  
        {/* SECTION 3 */}
        <section className="pop-slide flex flex-col md:flex-row items-center justify-between max-w-[90vw] mx-auto py-10 gap-8">
  <div className="flex-1 text-center md:text-left space-y-4">
    <h1 className="text-4xl font-bold">Watch Anywhere</h1>
    <p className="text-lg">
      Stream on your phone, tablet, laptop, and TV without paying more.
    </p>
  </div>

  {/* TV Image + Video Section */}
  <div className="flex-1 relative flex justify-center items-center w-full max-w-[500px]">
    {/* Responsive TV image */}
    <Image
      src="/tv.jpg"
      alt="TV"
      width={500}
      height={300}
      className="w-full h-auto"
    />

    {/*making iframe and tv responsive here*/}
    <div
      className="absolute"
      style={{
        top: '18%',//19
        left: '14%',
        width: '74%',
        height: '56%',
      }}
    >
      <iframe
        className="w-full h-full"
        src="https://www.youtube.com/embed/Ay9nxw1vuXo?autoplay=1&mute=1&controls=0"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  </div>
</section>

  
        <div className="h-[7px] bg-neutral-800"></div>
  
        {/* FAQ SECTION */}
        <section className="pop-slide bg-black text-white py-10">
        <h2 className="text-4xl text-center mb-8">Frequently Asked Questions</h2>
        
        <div
          onClick={() => setadded(!added)}
          className="relative max-w-[100vh] mx-auto bg-gray-700 p-6 flex justify-between items-center hover:bg-neutral-800 transition-colors duration-300 cursor-pointer"
        >
          <span>What is Vstory?</span>
        {!added ? (
        <svg
                 xmlns="http://www.w3.org/2000/svg"
                 fill="none"
                 role="img"
                 viewBox="0 0 24 24"
                 width="24"
                 height="24"
               >
                 <path
                   fillRule="evenodd"
                   clipRule="evenodd"
                   d="M11 11V2H13V11H22V13H13V22H11V13H2V11H11Z"
                   fill="currentColor"
                 ></path>
               </svg>
        ) : (
          <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          role="img"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2 11H22V13H2V11Z"
            fill="currentColor"
          ></path>
        </svg>
        
        )}
        </div>

        {/* answer of FaQ */}
  
        {added && (
          <div className="max-w-[100vh] mx-auto bg-neutral-800 p-6 mt-2 text-white transition-all duration-300">
            Vstory is a streaming platform that brings you unlimited access to a wide range of original stories, anime, shows, and entertainment. Watch anywhere, anytime on any internet-connected device. Vstory is designed to immerse you in the world of storytelling like never before.
          </div>
        )}
      </section>
  
      </div>
      <div className="h-[7px] bg-neutral-800"></div>

      <Footer />
    </div>
  );
};

export default Page;
