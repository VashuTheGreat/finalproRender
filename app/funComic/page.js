



"use client";
import React from 'react';
import Image from 'next/image'; 
import Nav from '../components/nav'; 
import Link from 'next/link'; 
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

  {/* Commic */}
  <div className=" m-0 p-0 ">
      <div id="fb-root"></div>
      
      <div className=" w-full max-w-[1024px] mx-auto mt-0 text-center relative">
       
        
        <div className=" w-full">
          <div className=" w-full h-[480px] mx-auto mt-0">
            <div className=" w-[440px] h-[240px] relative top-[140px] left-[292px]">
              <Image src="/images/CH01_P00.jpg" width={440} height={240} alt="" />
            </div>
          </div>

          <div className="pop-slide w-full h-[384px]"><Image src="/images/CH01_P01a.jpg" width={1024} height={384} alt="" /></div>
          <div className="pop-slide w-full h-[384px]"><Image src="/images/CH01_P01b.jpg" width={1024} height={384} alt="" /></div>
          <div className="pop-slide w-full h-[384px]"><Image src="/images/CH01_P01c.jpg" width={1024} height={384} alt="" /></div>
          <div className="pop-slide w-full h-[384px]"><Image src="/images/CH01_P01d.jpg" width={1024} height={384} alt="" /></div>
          <div className="pop-slide w-full h-[384px]"><Image src="/images/CH01_P01e.jpg" width={1024} height={384} alt="" /></div>
          <div className="pop-slide w-[640px] h-[385px] relative left-[192px]"><Image src="/images/CH01_P01f.jpg" width={640} height={385} alt="" /></div>
          <div className="pop-slide w-[640px] h-[384px] relative left-[192px]"><Image src="/images/CH01_P01g.jpg" width={640} height={384} alt="" /></div>
          <div className="pop-slide w-full h-[768px]"><Image src="/images/CH01_P01h.jpg" width={1024} height={768} alt="" /></div>
          <div className="pop-slide w-full h-[768px]"><Image src="/images/CH01_P01i.jpg" width={1024} height={768} alt="" /></div>
          <div className="pop-slide w-full h-[120px]"><Image src="/images/CH01_P02_P03a.jpg" width={1024} height={120} alt="" /></div>
          <div className="pop-slide w-[640px] h-[120px] relative left-[192px]"><Image src="/images/CH01_P02_P03b.jpg" width={640} height={120} alt="" /></div>
          <div className="pop-slide w-[640px] h-[480px] relative left-[192px]"><Image src="/images/CH01_P02_P04.jpg" width={640} height={480} alt="" /></div>
          <div className="pop-slide w-[640px] h-[240px] relative left-[192px]"><Image src="/images/CH01_P05_P06.jpg" width={640} height={240} alt="" /></div>
          <div className="pop-slide w-[640px] h-[120px] relative left-[192px]"><Image src="/images/CH01_P07_P08a.jpg" width={640} height={120} alt="" /></div>
          <div className="pop-slide w-full h-[120px]"><Image src="/images/CH01_P07_P08b.jpg" width={1024} height={120} alt="" /></div>
          <div className="pop-slide w-full h-[768px]"><Image src="/images/CH01_P09.jpg" width={1024} height={768} alt="" /></div>
          <div className="pop-slide w-full h-[120px]"><Image src="/images/CH01_P10_P11a.jpg" width={1024} height={120} alt="" /></div>
          <div className="pop-slide w-[640px] h-[120px] relative left-[192px]"><Image src="/images/CH01_P10_P11b.jpg" width={640} height={120} alt="" /></div>
          <div className="pop-slide w-[640px] h-[240px] relative left-[192px]"><Image src="/images/CH01_P12_P13.jpg" width={640} height={240} alt="" /></div>
          <div className="pop-slide w-[640px] h-[240px] relative left-[96px]"><Image src="/images/CH01_P14_P15.jpg" width={736} height={240} alt="" /></div>
          <div className="pop-slide w-[640px] h-[360px] relative left-[192px]"><Image src="/images/CH01_P16a.jpg" width={640} height={360} alt="" /></div>
          <div className="pop-slide w-full h-[120px]"><Image src="/images/CH01_P16b.jpg" width={1024} height={120} alt="" /></div>
          <div className="pop-slide w-full h-[480px]"><Image src="/images/CH01_P17.jpg" width={1024} height={480} alt="" /></div>
          <div className="pop-slide w-full h-[120px]"><Image src="/images/CH01_P18a.jpg" width={1024} height={120} alt="" /></div>
          <div className="pop-slide w-[640px] h-[360px] relative left-[192px]"><Image src="/images/CH01_P18b.jpg" width={640} height={360} alt="" /></div>
          <div className="pop-slide w-[640px] h-[240px] relative left-[192px]"><Image src="/images/CH01_P19.jpg" width={640} height={240} alt="" /></div>
          <div className="pop-slide w-[640px] h-[240px] relative left-[192px]"><Image src="/images/CH01_P20_P21.jpg" width={736} height={240} alt="" /></div>
          <div className="pop-slide w-[640px] h-[480px] relative left-[192px]"><Image src="/images/CH01_P22.jpg" width={736} height={480} alt="" /></div>
          <div className="pop-slide w-[640px] h-[240px] relative left-[192px]"><Image src="/images/CH01_P23_P24.jpg" width={736} height={240} alt="" /></div>
          <div className="pop-slide w-[640px] h-[480px] relative left-[192px]"><Image src="/images/CH01_P25.jpg" width={640} height={480} alt="" /></div>
          <div className="pop-slide w-[640px] h-[120px] relative left-[192px]"><Image src="/images/CH01_P26a.jpg" width={736} height={120} alt="" /></div>
          <div className="pop-slide w-full h-[120px]"><Image src="/images/CH01_P26b.jpg" width={1024} height={120} alt="" /></div>
          <div className="pop-slide w-full h-[480px]"><Image src="/images/CH01_P27.jpg" width={1024} height={480} alt="" /></div>
          <div className="pop-slide w-full h-[120px]"><Image src="/images/CH01_P28a.jpg" width={1024} height={120} alt="" /></div>
          <div className="pop-slide w-[640px] h-[120px] relative left-[192px]"><Image src="/images/CH01_P28b.jpg" width={640} height={120} alt="" /></div>
          <div className="pop-slide w-[640px] h-[480px] relative left-[192px]"><Image src="/images/CH01_P29.jpg" width={640} height={480} alt="" /></div>
          <div className="pop-slide w-[640px] h-[480px] relative left-[192px]"><Image src="/images/CH01_P30.jpg" width={640} height={480} alt="" /></div>
          <div className="pop-slide w-[640px] h-[360px] relative left-[192px]"><Image src="/images/CH01_P31a.jpg" width={640} height={360} alt="" /></div>
          <div className="pop-slide w-full h-[120px]"><Image src="/images/CH01_P31b.jpg" width={1024} height={120} alt="" /></div>
          <div className="pop-slide w-full h-[600px]"><Image src="/images/CH01_P32.jpg" width={1024} height={600} alt="" /></div>
          <div className="pop-slide w-full h-[120px]"><Image src="/images/CH01_P33a.jpg" width={1024} height={120} alt="" /></div>
          <div className="pop-slide w-[640px] h-[360px] relative left-[192px]"><Image src="/images/CH01_P33b.jpg" width={640} height={360} alt="" /></div>
          <div className="pop-slide w-[640px] h-[240px] relative left-[192px]"><Image src="/images/CH01_P34.jpg" width={640} height={240} alt="" /></div>
          <div className="pop-slide w-[640px] h-[240px] relative left-[192px]"><Image src="/images/CH01_P35_P36.jpg" width={736} height={240} alt="" /></div>
          <div className="pop-slide w-[640px] h-[240px] relative left-[192px]"><Image src="/images/CH01_P37.jpg" width={736} height={240} alt="" /></div>
          <div className="pop-slide w-[640px] h-[240px] relative left-[192px]"><Image src="/images/CH01_P38_P39.jpg" width={640} height={240} alt="" /></div>
          <div className="pop-slide w-[640px] h-[240px] relative left-[192px]"><Image src="/images/CH01_P40_P41.jpg" width={736} height={240} alt="" /></div>
          <div className="pop-slide w-full h-[240px]"><Image src="/images/CH01_P42a.jpg" width={1024} height={240} alt="" /></div>
          <div className="pop-slide w-full h-[240px]"><Image src="/images/CH01_P42b.jpg" width={1024} height={240} alt="" /></div>
          <div className="pop-slide w-full h-[240px]"><Image src="/images/CH01_P43.jpg" width={1024} height={240} alt="" /></div>
          <div className="pop-slide w-full h-[240px]"><Image src="/images/CH01_P44.jpg" width={1024} height={240} alt="" /></div>
          <div className="pop-slide w-full h-[240px]"><Image src="/images/CH01_P46a.jpg" width={1024} height={240} alt="" /></div>
          <div className="pop-slide w-full h-[240px]"><Image src="/images/CH01_P46b.jpg" width={1024} height={240} alt="" /></div>
          <div className="pop-slide w-full h-[240px]"><Image src="/images/CH01_P46c.jpg" width={1024} height={240} alt="" /></div>
          <div className="pop-slide w-full h-[240px]"><Image src="/images/CH01_P46d.jpg" width={1024} height={240} alt="" /></div>
          <div className="pop-slide w-full h-[240px]"><Image src="/images/CH01_P46e.jpg" width={1024} height={240} alt="" /></div>
          <div className="pop-slide w-full h-[240px]"><Image src="/images/CH01_P46f.jpg" width={1024} height={240} alt="" /></div>
          <div className="pop-slide w-[640px] h-[240px] relative left-[96px]"><Image src="/images/CH01_P49a.jpg" width={832} height={240} alt="" /></div>
          <div className="pop-slide w-[640px] h-[120px] relative left-[96px]"><Image src="/images/CH01_P49b.jpg" width={832} height={120} alt="" /></div>
          <div className="pop-slide w-[640px] h-[240px] relative left-[192px]"><Image src="/images/CH01_P50.jpg" width={640} height={240} alt="" /></div>
          <div className="pop-slide w-[640px] h-[240px] relative left-[192px]"><Image src="/images/CH01_P51_P52.jpg" width={736} height={240} alt="" /></div>
          <div className="pop-slide w-[640px] h-[240px] relative left-[192px]"><Image src="/images/CH01_P53.jpg" width={640} height={240} alt="" /></div>
          <div className="pop-slide w-[640px] h-[480px] relative left-[192px]"><Image src="/images/CH01_P54.jpg" width={640} height={480} alt="" /></div>
          <div className="pop-slide w-[640px] h-[120px] relative left-[192px]"><Image src="/images/CH01_P55_P56a.jpg" width={640} height={120} alt="" /></div>
          <div className="pop-slide w-full h-[120px]"><Image src="/images/CH01_P55_P56b.jpg" width={1024} height={120} alt="" /></div>
          <div className="pop-slide w-full h-[240px]"><Image src="/images/CH01_P57.jpg" width={1024} height={240} alt="" /></div>
          <div className="pop-slide w-full h-[120px]"><Image src="/images/CH01_P58a.jpg" width={1024} height={120} alt="" /></div>
          <div className="pop-slide w-[640px] h-[120px] relative left-[192px]"><Image src="/images/CH01_P58b.jpg" width={640} height={120} alt="" /></div>
          <div className="pop-slide w-[640px] h-[120px] relative left-[192px]"><Image src="/images/CH01_P59_P60a.jpg" width={640} height={120} alt="" /></div>
          <div className="pop-slide w-full h-[120px]"><Image src="/images/CH01_P59_P60b.jpg" width={1024} height={120} alt="" /></div>
          <div className="pop-slide w-full h-[240px]"><Image src="/images/CH01_P61.jpg" width={1024} height={240} alt="" /></div>
          <div className="pop-slide w-full h-[120px]"><Image src="/images/CH01_P62a.jpg" width={1024} height={120} alt="" /></div>
          <div className="pop-slide w-[640px] h-[120px] relative left-[192px]"><Image src="/images/CH01_P62b.jpg" width={736} height={120} alt="" /></div>
          <div className="pop-slide w-[640px] h-[240px] relative left-[192px]"><Image src="/images/CH01_P63.jpg" width={640} height={240} alt="" /></div>
          <div className="pop-slide w-[640px] h-[480px] relative left-[192px]"><Image src="/images/CH01_P64.jpg" width={640} height={480} alt="" /></div>
          <div className="pop-slide w-[640px] h-[240px] relative left-[192px]"><Image src="/images/CH01_P65.jpg" width={640} height={240} alt="" /></div>
          <div className="pop-slide w-[640px] h-[120px] relative left-[192px]"><Image src="/images/CH01_P66a.jpg" width={640} height={120} alt="" /></div>
          <div className="pop-slide w-full h-[120px]"><Image src="/images/CH01_P66b.jpg" width={1024} height={120} alt="" /></div>
          <div className="pop-slide w-full h-[480px]"><Image src="/images/CH01_P67.jpg" width={1024} height={480} alt="" /></div>
          <div className="pop-slide w-full h-[240px]"><Image src="/images/CH01_P68.jpg" width={1024} height={240} alt="" /></div>
          <div className="pop-slide w-full h-[480px]"><Image src="/images/CH01_P69.jpg" width={1024} height={480} alt="" /></div>
          <div className="pop-slide w-full h-[120px]"><Image src="/images/CH01_P70a.jpg" width={1024} height={120} alt="" /></div>
          <div className="pop-slide w-[640px] h-[120px] relative left-[192px]"><Image src="/images/CH01_P70b.jpg" width={640} height={120} alt="" /></div>
          <div className="pop-slide w-[640px] h-[240px] relative left-[192px]"><Image src="/images/CH01_P71.jpg" width={640} height={240} alt="" /></div>
          <div className="pop-slide w-[640px] h-[240px] relative left-[192px]"><Image src="/images/CH01_P72.jpg" width={640} height={240} alt="" /></div>
          <div className="pop-slide w-[640px] h-[120px] relative left-[192px]"><Image src="/images/CH01_P73a.jpg" width={640} height={120} alt="" /></div>
          <div className="pop-slide w-full h-[120px]"><Image src="/images/CH01_P73b.jpg" width={1024} height={120} alt="" /></div>
          <div className="pop-slide w-full h-[563px]"><Image src="/images/CH01_P74a.jpg" width={1024} height={563} alt="" /></div>
          <div className="pop-slide w-full h-[682px]"><Image src="/images/CH01_P74b.jpg" width={1024} height={682} alt="" /></div>
          <div className="pop-slide w-[640px] h-[120px] relative left-[192px]"><Image src="/images/CH01_P74c.jpg" width={640} height={120} alt="" /></div>
          
       
          
          
          <div className=" w-[600px] h-[175px] mx-auto text-center">
            <div id="newsletterbox">
              <Link href="http://eepurl.com/i7Cklo">
                <Image 
                  className="pop-slide rounded-xl" 
                  src="/images/banner_newsletter.png" 
                  width={600} 
                  height={175} 
                  alt="Newsletter signup" 
                />
              </Link>
            </div>
          </div>
          
          
          <div className="pop-slide w-full h-[384px]">
            <Image src="/images/Credits_Header.jpg" width={1024} height={384} alt="Credits Header" />
          </div>
          
          
        </div>
      </div>

    </div>
    
    {/* Footer */}

   <Footer/>

    </>
  );
};

export default Page;










