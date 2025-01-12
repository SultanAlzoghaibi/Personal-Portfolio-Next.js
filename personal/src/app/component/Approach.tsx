"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function CanvasRevealEffectDemo() {
  return (
    <>
     <div className="pt-20 bg-center flex items-center justify-center">
  <h1 className="heading text-white">
   My
    <span className="text-primary">  Approach</span>
  </h1>
</div>
<div className="py-10 text-white flex flex-col lg:flex-row items-center justify-center w-full gap-4 mx-auto px-8">
  <Card
    title="Research and Defining"
    description="I gather research on what to build and the resources needed, as well as define the project’s MSCW (Must-haves, Should-haves, Could-haves, Won’t-haves)"
    icon={<ResearchIcon />}
  />
  <Card
    title="Diagramming and Layout"
    description="I create flowcharts (using FigJam) or layouts in Figma, which saves me crucial time 
    during the coding process. This also improves team communication."
    icon={<DiagrammingIcon />}
  />
  <Card
    title="Coding"
    description="In this phase, I focus on writing code! I take time to think at a micro level 
    before coding, which helps me break big projects into manageable, day-by-day components."
    icon={<CodeIcon />}
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
  icon: React.ReactNode;
}) => {
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative max-w-sm w-full mx-auto p-4 border border-gray-700 rounded-lg bg-black overflow-hidden h-[30rem] group transition-transform duration-300"
    >
      {/* Animated Background */}
      <div
        className={`absolute inset-0 bg-primary scale-0 opacity-0 group-hover:scale-150 group-hover:opacity-100 transition-all duration-500`}
      />
      
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
        {/* Icon - Shows default Git image, changes to the actual icon on hover */}
        <div className="text-white mb-4">
          <img
            src="/tech-logos/git.png" // Placeholder Git icon
            alt="Git Icon"
            className="h-10 w-10 object-contain group-hover:hidden transition-all duration-300"
          />
          <div className="hidden group-hover:block transition-all duration-300">
            {icon} {/* Actual icon on hover */}
          </div>
        </div>
        {/* Title - Shows on hover with smooth opacity transition */}
        <h2
          className={`text-xl font-bold text-white opacity-0 group-hover:opacity-100 group-hover:translate-y-2 transition-all duration-300 ${
            hovered ? "text-black" : "text-white"
          }`}
        >
          {title}
        </h2>
        {/* Description - Appears on hover */}
        <p
          className={`mt-2 text-sm text-white opacity-0 group-hover:opacity-100 group-hover:translate-y-2 transition-all duration-300 ${
            hovered ? "text-black" : "text-white"
          }`}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

// Research Icon with Circle
const ResearchIcon = () => (
  <svg
    width="40"
    height="40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="h-10 w-10 text-white group-hover:text-black"
  >
    <circle
      cx="20"
      cy="20"
      r="19"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M26 26l-4.35-4.35M24 15V9a2 2 0 0 0-2-2H10a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-5l2-2v-1z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Diagramming Icon with Circle
const DiagrammingIcon = () => (
  <svg
    width="40"
    height="40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="h-10 w-10 text-white group-hover:text-black"
  >
    <circle
      cx="20"
      cy="20"
      r="19"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M12 8v24M12 20h16M28 8h3M28 32h3"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Code Icon with Circle
const CodeIcon = () => (
  <svg
    width="40"
    height="40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="h-10 w-10 text-white group-hover:text-black"
  >
    <circle
      cx="20"
      cy="20"
      r="19"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M15 15l-4 5 4 5M25 15l4 5-4 5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);