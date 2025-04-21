import React from "react";

import Hero from "./component/Hero";
import Grid from "./component/Grid";
import RecentProjects from "./component/RecentProjects";
import Script from "next/script";

import { CanvasRevealEffectDemo } from "./component/Approach";
import Footer from "./component/Footer";

export default function Home() {
  return (
    <>
      <Script src="https://kit.fontawesome.com/1b5075d03e.js" />

      <Hero />
      <div className="py-4"> </div>
      <RecentProjects />
      <div className=" px-2 space-y-16 mx-8 gap-12">
        {/* Apply consistent vertical spacing */}
        <div className="py-4"> </div>
        <Grid />
      </div>
      <CanvasRevealEffectDemo />
      <Footer />
    </>
  );
}
