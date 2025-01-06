import React from "react";

import BackgroundVid1 from "./component/backgroundvid1";
import Hero from "./component/Hero";
import { FloatingNav } from "./component/ui/floating-navbar";
import  Grid  from "./component/Grid";

export default function Home() {
  return (
    <>
      <Hero />
    
     
      <div className="my-40">
        <br />
      </div>
      <Grid />
      <FloatingNav 
      className=""
      navItems={[
          {name: "Home",
          link: "/",
          icon: <span className="text-white">🏠</span>},
      ]}
   
      />
      
      

      {/* Future Elements */}
      <div className="relative z-10">
        <p className="text-white">Add more content here!</p>
      </div>

    </>
  );
}
