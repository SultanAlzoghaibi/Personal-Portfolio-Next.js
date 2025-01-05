import React from "react";
import BackgroundVid1 from "./backgroundvid1";
import { Inter} from "next/font/google";

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
    <div className="absolute inset-0 flex items-start justify-start pt-20 pl-5">
  <h1
    style={{ textShadow: "3px 3px 5px rgba(0, 0, 0, 0.3)" }}
    className={`${stencilFont.className} text-[70px] font-extrabold leading-none text-white absolute top-[150px]`}
  >
    Welcome to my site!
    <span className="text-primary"> Sultan Alzoghaibi</span>
  </h1>

    </div>
  </div>
);

export default Hero;