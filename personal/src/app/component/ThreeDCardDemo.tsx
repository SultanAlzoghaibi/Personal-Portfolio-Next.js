"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { CardBody, CardContainer, CardItem } from "./ui/Card3d";
import MagicButton from "./ui/Magicbutton";
import LinkButton from "./linkButton";

export function ThreeDCardDemo({
  idd,
  title,
  description,
  video,
  imgtechstack = [], // Default to an empty array if not provided
  githublink,
}: {
  id: number;
  idd: number;
  title: string;
  description: string;
  video: string;
  githublink: string; // Optional
  imgtechstack?: string[]; // Optional
  learnMorelink: string; // Optional
}) {
  const [isHovering, setIsHovering] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleMouseEnter = () => {
    setIsHovering(true);
    console.log("Mouse Entered");
    if (videoRef.current) {
      videoRef.current.play(); // Play the video when hovering
    }
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    console.log("Mouse Left");
    if (videoRef.current) {
      videoRef.current.currentTime = 0; // Reset video to the start
      videoRef.current.pause(); // Pause the video when mouse leaves
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
            autoPlay={isHovering}
            muted
            loop
            className="h-60 w-full object-cover rounded-xl"
          />
        </CardItem>

        <div className="flex justify-between items-center mt-10 ">
          <CardItem
            translateZ="40"
            className="flex flex-wrap gap-[-5px] items-center"
          >
            {/* Title */}
            <h2 className="text-white/50 text-sm text-nowrap absolute left-0 top-[-20px] mb-2">
              Tech Stack
            </h2>

            {/* Tech Stack Icons */}
            <div className="relative flex items-center space-x-[-10px]">
              {imgtechstack?.map((tech, index) => (
                <div
                  key={index}
                  className="group relative border border-white/[.2] rounded-full bg-black lg:w-8 lg:h-8 w-8 h-8 flex justify-center items-center transition-transform duration-300 ease-in-out hover:scale-125"
                  onMouseEnter={(e) => {
                    const items = e.currentTarget.parentElement?.children;
                    if (items) {
                      [...items].forEach((item, idx) => {
                        const distance = Math.abs(idx - index);
                        const scale =
                          distance === 0 ? 1.5 : distance === 1 ? 1.2 : 1;
                        (
                          item as HTMLElement
                        ).style.transform = `scale(${scale})`;
                        // Set z-index to 10 on hover to bring the hovered item to the front
                        (item as HTMLElement).style.zIndex =
                          distance === 0 ? "10" : "1";
                      });
                    }
                  }}
                  onMouseLeave={(e) => {
                    const items = e.currentTarget.parentElement?.children;
                    if (items) {
                      [...items].forEach((item) => {
                        (item as HTMLElement).style.transform = "scale(1)";
                        (item as HTMLElement).style.zIndex = "1"; // Reset z-index on mouse leave
                      });
                    }
                  }}
                >
                  {/* Icon */}
                  <Image
                    src={tech}
                    alt={tech}
                    width={25}
                    height={25}
                    className="object-cover rounded-xl"
                  />
                </div>
              ))}
            </div>
          </CardItem>
          <CardItem
            translateZ={40}
            as="div"
            className="px-0 py-0 rounded-xl dark:text-black text-white text-xs font-bold"
          >
            <span className="flex flex-wrap gap-x-4 gap-y-4 my-4">
              <LinkButton
                text="Github"
                icon="tech-logos/github-white-icon.webp"
                link={githublink}
              />
              <MagicButton text="learn more" link={`/myprojects/${idd}`} />{" "}
            </span>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
