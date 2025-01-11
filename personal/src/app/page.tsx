import React from "react";

import BackgroundVid1 from "./component/backgroundvid1";
import Hero from "./component/Hero";
import { FloatingNav } from "./component/ui/floating-navbar";
import  Grid  from "./component/Grid";
import RecentProjects from "./component/RecentProjects";

import { navItems } from "./data/datadata"
import Approach from "./component/Approach";


export default function Home() {
  return (
    <>
  <FloatingNav navItems={navItems} />
      {/* Hero Section */}
  <div className="relative">
    <Hero />
  </div>

  {/* Spacer Between Sections */}
  <div className="py-10 my-32"></div>
  

  {/* Grid Section */}
  <div className="container mx-auto px-4">
    <Grid />
  </div>
  <div className="my-16"></div>

  <RecentProjects />

    <Approach />


      
      
      <div className="my-16"></div>
      {/* Future Elements */}
      <div className="relative z-10">
        <p className="text-white">Add more content here!</p>
      </div>

    </>
  );
}
