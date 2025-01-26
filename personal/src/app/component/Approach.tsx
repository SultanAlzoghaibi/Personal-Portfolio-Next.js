"use client";

import React from "react";

export function CanvasRevealEffectDemo() {
  return (
    <>
     <div className="pt-20 bg-center flex items-center justify-center">
  <h1 className="heading text-white">
   My 3 step 
    <span className="text-primary ">  Approach</span>
  </h1>
</div>
<div className="py-10 text-white flex flex-col lg:flex-row items-center justify-center w-full gap-4 mx-auto px-8">
  <Card
    title="Research and Defining"
    description="I gather research on what to build and the resources needed, as well as define the project’s MSCW (Must-haves, Should-haves, Could-haves, Won’t-haves)"
    icon="/search-alt.png"
  />
  <Card
    title="Diagramming and Layout"
    description="I create flowcharts (using FigJam) or layouts in Figma, which saves me crucial time 
    during the coding process. This also improves team communication."
    icon="/workflow.png"
  />
  <Card
    title="Coding and Debugging"
    description="I take time to think at a micro level 
    before coding, which helps me break big projects into manageable, day-by-day components."
    icon="/display-code.png"
  />
</div>
      
    </>
  );
}

const Card = ({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: string;
}) => {
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative max-w-sm w-full mx-auto p-4 border border-white/[0.2] rounded-lg bg-black overflow-hidden h-[30rem] group transition-transform duration-300"
    >
      {/* Animated Background */}
      <div
        className={`absolute inset-0 bg-primary scale-0 opacity-0 group-hover:scale-150 group-hover:opacity-100 transition-all duration-500`}
      />
      
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
        {/* Icon - Shows default Git image, changes to the actual icon on hover */}
        <div className="text-white mb-4">
          <img
            src="/lock.png" // Placeholder Git icon
            alt="lock Icon"
            className="h-10 w-10 object-contain group-hover:hidden transition-all duration-300"
          />
          <div className="hidden group-hover:block transition-all duration-300">
            
          <img
  src={icon} // Placeholder Git icon
  alt="lock Icon"
  className="h-10 w-10 object-contain opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 ease-in-out"
/>
          </div>
        </div>
        {/* Title - Shows on hover with smooth opacity transition */}
        <h2
          className={`text-xl font-bold text-white opacity-0 group-hover:opacity-100 group-hover:translate-y-2 transition-all duration-300 ${
            hovered ? "text-white" : "text-black"
          }`}
        >
          {title}
        </h2>
        {/* Description - Appears on hover */}
        <p
          className={`mt-2 text-sm text-white opacity-0 group-hover:opacity-100 group-hover:translate-y-2 transition-all duration-300 ${
            hovered ? "text-white" : "text-black"
          }`}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

// Research Icon with Circle
