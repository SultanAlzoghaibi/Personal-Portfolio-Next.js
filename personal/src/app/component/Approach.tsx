"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";

export function CanvasRevealEffectDemo() {
  return (
    <div className="py-20 flex flex-col lg:flex-row items-center justify-center bg-black w-full gap-4 mx-auto px-8">
      <Card
        title="Sheetal is Nisha"
        description="A description for Sheetal is Nisha."
        icon={<ResearchIcon />}
      />
      <Card
        title="Nisha is Munni"
        description="A description for Nisha is Munni."
        icon={<DiagrammingIcon />}
      />
      <Card
        title="Munni is Aditi"
        description="A description for Munni is Aditi."
        icon={<CodeIcon />}
      />
    </div>
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

// Research Papers and Magnifying Glass Icon
const ResearchIcon = () => (
  <svg
    width="24"
    height="24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="h-10 w-10 text-white group-hover:text-black"
  >
    <path
      d="M21 21l-4.35-4.35M18 10V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V12l2-2V10z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Software Diagramming Symbol Icon (Flowchart-style Icon)
const DiagrammingIcon = () => (
  <svg
    width="24"
    height="24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="h-10 w-10 text-white group-hover:text-black"
  >
    <path
      d="M6 3v18M6 12h12M18 3h3M18 21h3"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Code Block (</>) Icon
const CodeIcon = () => (
  <svg
    width="24"
    height="24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="h-10 w-10 text-white group-hover:text-black"
  >
    <path
      d="M7 7l-4 4 4 4M17 7l4 4-4 4"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);