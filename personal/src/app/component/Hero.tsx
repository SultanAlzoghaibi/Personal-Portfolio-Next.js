'use client';
import React, { useEffect, useState } from "react";
import BackgroundVid1 from "./backgroundvid1";
import { Inter } from "next/font/google";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { Saira_Stencil_One } from "next/font/google";

const stencilFont = Saira_Stencil_One({
  variable: "--font-saira",
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

const interFont = Inter({
  variable: "--font-saira",
  subsets: ["latin"],
});


const Hero = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeIn(true); // Trigger the fade-in effect after 2 seconds
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <BackgroundVid1 />
      
      {/* Outer container to move both elements away from the left */}
      <div className="absolute inset-0 flex items-start justify-start pt-20 pl-[50px] overflow-visible">
        
        {/* Title text with generate effect */}
        <TextGenerateEffect
          className={`font-stencil text-[70px] font-extrabold leading-none absolute max-w-[750px] min-w-[749px]`}
          words="Welcome to my site! Sultan Alzoghaibi"
        />
        
        <br />
        <br />
  
        {/* Smaller text underneath with fade-in effect */}
        <div
          className={`absolute top-[250px] left-5 max-w-[550px] mt-4 transition-opacity duration-1000 ${
            fadeIn ? "opacity-100" : "opacity-0"
          } bg-black bg-opacity-10 backdrop-blur-2xl p-4 rounded-md`}
        >
          <p className={`${interFont.className} text-lg text-white`}>
            I'm a student at the University of Calgary, studying Natural Science with
            a concentration in Computer Science. My goal is to graduate as a Computer
            Science student ^_^
          </p>
        </div>
  
      </div>
    </div>
  );
};

export default Hero;