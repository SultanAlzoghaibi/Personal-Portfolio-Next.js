import React from "react";
import Magicbutton from "./ui/Magicbutton";
import { GridBackgroundDemo } from "./ui/GridBackgroundDemo"; // Importing the background component
import { Cover } from "./ui/cover";

const Footer = () => {
  return (
    <>
      <section className="relative w-full pt-24 mt-10 pb-10" id="contact">
        {/* Grid Background */}
        <div className="absolute top-0  left-0 right-0 bottom-0 z-0">
          <GridBackgroundDemo />
        </div>
        {/* Footer content */}
        <div className="relative flex flex-col items-center z-10 mx-9">
          <h1 className="heading lg:max-w-[45vw] text-white">
            Help me, <span className="text-primary">Help you</span>, write code
            that is{" "}
            <span>
              <Cover>blazingly fast 🚀</Cover>
            </span>
          </h1>
          <p className="text-white md:mt-10 my-5 text-center">
            If you&apos;re an employer, check out my LinkedIn, GitHub, and
            Resume to see why I am a good candidate.
          </p>
          <Magicbutton text="Email me" link="mailto:ssultan007@icloud.com" />
        </div>
      </section>
    </>
  );
};

export default Footer;
