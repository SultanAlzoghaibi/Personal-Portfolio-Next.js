import React from "react";

import BackgroundVid1 from "./component/backgroundvid1";
import Hero from "./component/Hero";
import { FloatingNav } from "./component/ui/floating-navbar";
import Grid from "./component/Grid";
import RecentProjects from "./component/RecentProjects";
import Script from 'next/script'

import { navItems } from "./data/datadata";
import { CanvasRevealEffectDemo } from "./component/Approach";
import Footer from "./component/Footer";

export default function Home() {
  return (
    <>
   <Script src="https://kit.fontawesome.com/1b5075d03e.js" />

      {/* Floating Navbar */}

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

      {/* Recent Projects Section */}
      <div className="my-16"></div>
      <RecentProjects />

      {/* Approach Section */}
      <CanvasRevealEffectDemo />
      {/* Spacer */}
      <div className="my-16"></div>
      <Footer />  
      {/* Future Elements */}
    
    </>
  );
}