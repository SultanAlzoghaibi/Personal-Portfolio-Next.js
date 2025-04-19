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
      <div className="mx-auto max-w-6xl px-4 space-y-16 gap-12">
        {/* Apply consistent vertical spacing */}
        <Hero />
        <RecentProjects />
        <div className="py-1"> </div>
        <Grid />
        <CanvasRevealEffectDemo />
        <Footer />
      </div>
    </>
  );
}
