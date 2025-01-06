'use client';
import React, { useEffect, useState } from "react";
import BackgroundVid1 from "./backgroundvid1";
import { Inter } from "next/font/google";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { Saira_Stencil_One } from "next/font/google";
import Magicbutton from "./Magicbutton";

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
    <div className="relative">
  {/* Background video */}
  <div className="absolute inset-0 -z-10">
    <BackgroundVid1 />
  </div>

  {/* Content */}
  <div className="relative flex flex-col items-start justify-start pt-20 pl-[50px]">
    {/* Title text with generate effect */}
    <TextGenerateEffect
      className="font-stencil text-[70px] font-extrabold leading-none max-w-[750px] min-w-[749px]"
      words="Welcome to my site! Sultan Alzoghaibi"
    />

    {/* Smaller text underneath with fade-in effect */}
    <div
      className={`max-w-[550px] transition-opacity duration-1000 ${
        fadeIn ? "opacity-100" : "opacity-0"
      }  mb-4 `}
    >
      <p className={`${interFont.className} text-lg text-white p-btom-4 mb-5`}>
        I'm a student at the University of Calgary, studying Natural Science with
        a concentration in Computer Science. My goal is to graduate as a Computer
        Science student ^_^ !!!!
      </p>
      <Magicbutton text="Contact me" />
    </div>

    {/* Button */}
 
  </div>
</div>
  );
};

export default Hero;