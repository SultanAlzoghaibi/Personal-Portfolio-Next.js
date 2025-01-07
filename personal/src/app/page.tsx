import React from "react";

import BackgroundVid1 from "./component/backgroundvid1";
import Hero from "./component/Hero";
import { FloatingNav } from "./component/ui/floating-navbar";
import  Grid  from "./component/Grid";

export default function Home() {
  return (
    <>

    
      {/* Hero Section */}
  <div className="relative">
    <Hero />
  </div>

  {/* Spacer Between Sections */}
  <div className="my-64"></div>

  {/* Grid Section */}
  <div className="container mx-auto px-4">
    <Grid />
  </div>


      <FloatingNav 
      className=""
      navItems={[
          {name: "Home",
          link: "/",
          icon: <span className="text-white">🏠</span>},
      ]}
   
      />
      
      
      <div className="my-16"></div>
      {/* Future Elements */}
      <div className="relative z-10">
        <p className="text-white">Add more content here!</p>
      </div>

    </>
  );
}
