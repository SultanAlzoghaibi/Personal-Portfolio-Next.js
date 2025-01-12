import React from "react";
import LinkButton from "./linkButton";
import Magicbutton from "./ui/Magicbutton";
import { GridBackgroundDemo } from "./ui/GridBackgroundDemo"; // Importing the component
import { Cover } from "./ui/cover";

const Footer = () => {
  return (
    <footer className="relative w-full pt-20 pb-10" id="contact">
      {/* Grid Background */}
  

      {/* Footer content */}
      <div className="relative flex flex-col items-center z-10 mx-9">
        <h1 className="heading lg:max-w-[45vw] text-white">
          Help me, <span className="text-primary"> Help you</span>
          , write code that is <span>  <Cover className="">
          blazingly fast  🚀
      </Cover>  </span>
        </h1>
        <p className="text-white md:mt-10 my-5 text-center">
          If you're an employer, checkout my Linkdin, Github, and Resume so see why I am a good candidate.
        </p>
        <a href="mailto:contact@jsmastery.pro">
          <Magicbutton text="Email me" link="mailto:ssultan007@icloud.com" />
        </a>
      </div>

    
    </footer>
  );
};

export default Footer;