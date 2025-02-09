"use client";
import React, { useEffect, useState } from "react";
import BackgroundVid1 from "./backgroundvid1";
import { Inter } from "next/font/google";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { Saira_Stencil_One } from "next/font/google";
import Magicbutton from "./ui/Magicbutton";
import LinkButton from "./linkButton";

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
    <div className="relative" id="home">
      {/* Background video */}
      <div className="absolute inset-0 -z-15">
        <BackgroundVid1 />
      </div>

      {/* Content */}
      <div className="relative flex flex-col items-start lg:max-w-[800px] md:max-w-[800px] sm:max-w-[500px] max-w-[500px]  justify-start pt-20  pl-[50px]">
        {/* Title text with generate effect */}
        <TextGenerateEffect
          className="font-stencilFont text-[70px] font-extrabold leading-none  lg: -right-[50px] "
          words="Welcome to my site! Sultan Alzoghaibi"
        />

        {/* Smaller text underneath with fade-in effect */}
        <div
          className={`max-w-[550px] transition-opacity duration-1000 ${
            fadeIn ? "opacity-100" : "opacity-0"
          }  mb-4 `}
        >
          <p
            className={`${interFont.className} text-lg text-white p-btom-4 mb-5`}
          >
            I’m a student at the University of Calgary, enrolled in Finance, but
            I love studying software and programming. My goal is to graduate
            with a Computer Science degree. ^_^ !!!
          </p>

          <span className="flex flex-wrap gap-x-4 gap-y-4 my-4">
            <Magicbutton text="Email me" link="mailto:ssultan007@icloud.com" />
            <LinkButton
              text="LinkedIn"
              icon="tech-logos/linkedin.png"
              link="https://www.linkedin.com/in/sultan-alzoghaibi-3b99a0250/"
            />
            <LinkButton
              text="Github"
              icon="tech-logos/github-white-icon.webp"
              link="https://github.com/SultanAlzoghaibi"
            />
            <LinkButton
              text="resume"
              icon="tech-logos/output-onlinepngtools.png"
              link="/Sultan-Alzoghaibi-Resume.pdf"
            />
          </span>
        </div>

        {/* Button */}
      </div>
    </div>
  );
};

export default Hero;
