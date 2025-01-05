import React from "react";
import BackgroundVid1 from "./backgroundvid1";
import { Inter} from "next/font/google";
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


const Hero = () => (
    <div>
      <BackgroundVid1 />
      <div className="absolute inset-0 flex items-start justify-start pt-20 pl-5 overflow-visible">
        <TextGenerateEffect
          className={`${stencilFont.className} 
          text-[70px] font-extrabold leading-none 
          absolute top-[150px] max-w-[750px] min-w-[749px]`}
          words="Welcome to my site! Sultan Alzoghaibi"
        />
      </div>
    </div>
  );
  
  export default Hero;