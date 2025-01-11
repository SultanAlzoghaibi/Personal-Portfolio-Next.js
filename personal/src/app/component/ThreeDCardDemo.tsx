"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { CardBody, CardContainer, CardItem } from "./ui/Card3d";
import MagicButton from "./ui/Magicbutton";
import LinkButton from "./linkButton";


export function ThreeDCardDemo({
  title,
  description,
  video,
  imgtechstack = [], // Default to an empty array if not provided
  githublink,
  learnMorelink,
}: {
  title: string;
  description: string;
  video: string;
  githublink: string; // Optional
  imgtechstack?: string[]; // Optional
  learnMorelink: string; // Optional
}){
  const [isHovering, setIsHovering] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleMouseEnter = () => {
    setIsHovering(true);
    console.log("Mouse Entered");
    if (videoRef.current) {
      videoRef.current.play();  // Play the video when hovering
    }
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    console.log("Mouse Left");
    if (videoRef.current) {
      videoRef.current.currentTime = 0;  // Reset video to the start
      videoRef.current.pause();  // Pause the video when mouse leaves
    }
  };

  return (
    <CardContainer className="inter-var">
      <CardBody
        className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-primary/[0.1] bg-gradient-to-r from-[#1B1C1E] to-[#000] dark:bg-black dark:border-white/[0.2]  border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {description}
        </CardItem>

        {/* Video or Image */}
        <CardItem translateZ="100" className="w-full mt-6">
          <video
            ref={videoRef}
            src={video}
            autoPlay={isHovering} // If isHovering is true, autoPlay will be true; otherwise, it will be false.
            muted
            loop
            className="h-60 w-full object-cover rounded-xl"
          />
        </CardItem>

        <div className="flex justify-between items-center mt-10 ">
        

        <CardItem translateZ="40" className="flex flex-wrap gap-[-5px] items-center">
  {imgtechstack?.map((tech, index) => (
    <div
    key={index}
    className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-10 h-10 flex justify-center items-center"
    style={{
      transform: `translateX(-${5 * index + 2}px)`,
    }}
  >
      <Image
        src={tech}
        alt={`Technology ${index}`}
        width={30}
        height={30}
        className="object-cover rounded-xl"
      />
    </div>
  ))}
</CardItem>
        
      


          <CardItem
            translateZ={40}
            as="div"
            className="px-0 py-0 rounded-xl bg-black dark:text-black text-white text-xs font-bold"
          >
            <span className="flex flex-wrap gap-x-4 gap-y-4 my-4">
              <LinkButton
                text="Github"
                icon="tech-logos/github-white-icon.webp"
                link="https://github.com/SultanAlzoghaibi"
              />
              <MagicButton text="sign up" />
            </span>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}