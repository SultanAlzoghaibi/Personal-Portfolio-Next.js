"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/Card3d";
import Link from "next/link";
import MagicButton  from "./ui/Magicbutton";
import LinkButton from "./linkButton";

export function ThreeDCardDemo() {
  return (
    <>
    <CardContainer className="inter-var">
<CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-primary/[0.5] bg-gradient-to-r from-[#1B1C1E] to-[#000] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          Make things float in air
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          Hover over this card to unleash the power of CSS perspective
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-6">
          {false && <video>
            <source src="/videos/backroundVid.mp4" type="video/mp4" />
          </video>}
          
          <Image
            src="/tech-logos/git.png"
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-10">
          <CardItem
            translateZ={40}
            as={Link}
            href="https://twitter.com/mannupaaji"
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            Try now →
          </CardItem>

          <CardItem
            translateZ={40}
            as="div"
            className="px-0 py-0 rounded-xl bg-black dark:text-black text-white text-xs font-bold"
          >       
          <span className="flex flex-wrap gap-x-4 gap-y-4 my-4">
          <LinkButton text="Github" icon="tech-logos/github-white-icon.webp" link="https://github.com/SultanAlzoghaibi" />
           <MagicButton text="sign up" />
           </span>
          </CardItem>

        

        </div>
      </CardBody>
    </CardContainer>
    </>
  );
}
