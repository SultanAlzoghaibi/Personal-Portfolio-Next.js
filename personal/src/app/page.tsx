import React from "react";

import BackgroundVid1 from "./component/backgroundvid1";
import Hero from "./component/Hero";


export default function Home() {
  return (
    <>
      <Hero />
      <div className="my-40">
        <br />
      </div>
      

      {/* Future Elements */}
      <div className="relative z-10">
        <p className="text-white">Add more content here!</p>
      </div>

    </>
  );
}
