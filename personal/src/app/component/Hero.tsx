"use client";
import React, { useEffect, useState } from "react";
import BackgroundVid1 from "./backgroundvid1";
import { Inter } from "next/font/google";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import Magicbutton from "./ui/Magicbutton";
import LinkButton from "./linkButton";

// Removed unused stencilFont variable

const interFont = Inter({
  variable: "--font-saira",
  subsets: ["latin"],
});

const Hero = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeIn(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-[85vh]" id="home">
      {/* Background video */}
      <div className="absolute  inset-0 -z-15">
        <BackgroundVid1 />
      </div>

      {/* Content */}
      <div className="relative flex flex-col items-start justify-start pt-20 pl-[50px] max-w-[500px] sm:max-w-[500px] md:max-w-[800px] lg:max-w-[800px]">
        <TextGenerateEffect
          className="font-stencilFont text-[70px] font-extrabold leading-none"
          words="Welcome to my site! Sultan Alzoghaibi"
        />

        <div
          className={`max-w-[550px] transition-opacity duration-1000 ${
            fadeIn ? "opacity-100" : "opacity-0"
          } mb-4`}
        >
          <p className={`${interFont.className} text-lg text-white mb-5`}>
            🇨🇦 From Vancouver | 🏫 Computer Science student at the University of
            Calgary. Interested in distributed systems, scalable architecture,
            cloud infrastructure, and API design.
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
              text="Resume"
              icon="tech-logos/output-onlinepngtools.png"
              link="/Sultan-Alzoghaibi-Resume.pdf"
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
