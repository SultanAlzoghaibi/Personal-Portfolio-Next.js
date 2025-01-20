'use client';
import { useState } from "react";

import { cn } from "@/lib/utils";
import { div, object } from "framer-motion/client";
import { BackgroundGradientAnimation } from "./bggradientanimation";
import  Magicbutton  from "./Magicbutton";
import {GridBackgroundDemo} from "./GridBackgroundDemo"
import LinkButton from "../linkButton";

const copied = false;

const defaultOptions = {
  loop: copied,
  autoplay: copied,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
    
  },
};


export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

const leftLists = [
  { name: "HTML", icon: "/tech-logos/HTML.png" },
  { name: "CSS", icon: "/tech-logos/css.webp" },
  { name: "JavaScript", icon: "/tech-logos/javascript.png" },
  { name: "React", icon: "/tech-logos/React.png" },
  { name: "TailwindCSS", icon: "/tech-logos/TailwindCSS.png" },
  { name: "Next.js", icon: "/tech-logos/nextjs.png" },
  { name: "MongoDB", icon: "/tech-logos/MongoDB.png" },
];

const rightLists = [
  { name: "Node.js", icon: "/tech-logos/node.png" },
  { name: "TypeScript", icon: "/tech-logos/typescript.png" },
  { name: "Figma", icon: "/tech-logos/figma.png" },
  { name: "Python", icon: "/tech-logos/Python.png" },
  { name: "Java", icon: "/tech-logos/java.png" },
  { name: "Git", icon: "/tech-logos/git.png" },
  { name: "API", icon: "/tech-logos/api.png" }, 
];

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  return (
    
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        borderRadius: "19.55px",
        border: "0.85px solid rgba(54, 55, 73, 0.43)",
        background: "linear-gradient(87deg, #1B1C1E 5.54%, #000 89.86%)",
      }}
    >
      
        
      <div className={`  h-full`}>
        <div className="w-full h-full absolute">
          {img && id !== 2 && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "xs:opacity-30 lg:opacity-100 md:opacity-100 sm:opacity-100 object-cover object-center")}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${id === 4 && "w-full opacity-80"
            } `}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>
        { id === 5 && (
  <div className="relative z-1 group min-h-40 flex flex-col justify-center items-center">
    {/* Background (no hover effect applied here) */}
    <div className="absolute inset-0 w-full h-full z-0">
      <BackgroundGradientAnimation />
    </div>

    {/* Element that will be affected by hover */}
    <div className="group-hover:translate-x-2 transition duration-200 relative flex flex-col justify-center items-center px-5 p-5 lg:p-2 z-10">
      {/* Text */}
      <div
        className={cn(
          titleClassName,
          `text-white font-bold sm:px-0 md:px-2 px-2  mx-0
          text-2xl xs:text-lg sm:text-lg md:text-lg lg:text-2xl
          w-full text-center`
        )}
      >
        {title}
      </div>

      {/* Centered MagicButton */}
      <div className="mt-2">
        <LinkButton text="Github" icon="tech-logos/discord.webp" link="https://discord.com/users/h82luzn" />
      </div>
    </div>
  </div>
)}
    

    { id !== 5 && <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >

          <div className="font-sans font-extralight sm:max-w-32 md:max-w-32 md:text-xs lg:text-base text-sm text-white z-10 flex flex-col gap-2">
          <div className="font-sans font-extralight sm:max-w-32 md:max-w-32 md:text-xs lg:text-base text-sm text-white z-10">
            {description}
          </div>
          
          <div
  className={`font-sans text-lg lg:text-3xl max-w-96 font-bold z-10 ${id === 3 ? 'sm:absolute lg:absolute lg:w-60 lg:mb-5 lg:top-3 lg lg:text-2xl' : ''} ${id === 1 ? 'text-primary whitespace-nowrap' : 'text-white'}`}
>

  {title}
</div>
</div>

{id === 1 && (
  <div className=" flex gap-1 lg:gap-2 w-fit absolute -right-0 xs:mt-100 sm:mt-60 md:mt-0 lg:mt-0"> 
    <div className=" flex flex-col gap-2 md:gap-2 lg:gap-4">
      {leftLists.map((item, i) => (
        <div
          key={i}
          className="flex items-center justify-between gap-2 lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base text-white opacity-50 lg:opacity-90 rounded-lg bg-[#1B1C1E] xs:min-w-[100px] sm:min-w-[120px] md:min-w-[150px]"
        >
          <span className="flex-1 text-left">{item.name}</span>
          <img src={item.icon} alt={item.name} className="w-6 h-6" />
        </div>
      ))}
      <span className="lg:py-4 lg:px-3 py-3 px-2 rounded-lg bg-[#1B1C1E]"></span>
    </div>
    <div className="flex flex-col gap-2 md:gap-2 lg:gap-4">
      <span className="lg:py-4 lg:px-3 py-4 px-3 rounded-lg bg-[#1B1C1E]"></span>
      {rightLists.map((item, i) => (
        <div
          key={i}
          className="flex items-center justify-between gap-2 lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base text-white opacity-50 lg:opacity-90 rounded-lg bg-[#1B1C1E] xs:min-w-[100px] sm:min-w-[120px] md:min-w-[150px]"
        >
          <span className="flex-1 text-left">{item.name}</span>
          <img src={item.icon} alt={item.name} className="w-6 h-6" />
        </div>
      ))}
    </div>
  </div>
)}
{ id === 2 && 
<div >
  <img src={img} alt="img" className="w-full h-full opacity-80 sm:w-40 md:relative lg:relative lg:left-[-16] md:left-[-16] sm:absolute sm:top-0 sm:right-0 sm:opacity-80" />
  
</div>}

{ id === 3 && 
<div >
  <div className="left-[-8] top-[-90] absolute w-full h-full ">
<GridBackgroundDemo />  
</div>
 <Magicbutton link="/myprojects/2" className="absolute bottom-0 mb-4 mr-9 " text="learn more" />
</div>


}

        </div>}



      </div>
    </div>
  );
};