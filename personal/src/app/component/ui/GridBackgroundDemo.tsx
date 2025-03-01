import React from "react";

export function GridBackgroundDemo() {
  return (
    <div className=" h-screen max-h-[600px] w-full dark:bg-[#0f0e0e] bg-white  dark:bg-grid-white/[0.1] bg-grid-black/[0.9] absolute top-0 left-0 flex items-center justify-center ">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-[#070707]  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]">

      </div>
     
    </div>
  );
}
