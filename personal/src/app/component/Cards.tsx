import React from "react";
import { projects } from "../data/datadata"; // Importing projects from data file
import { ThreeDCardDemo } from "./ThreeDCardDemo";

const Cards = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      {/* Cards container */}
      <div className="flex flex-wrap gap-10 justify-center">
        {projects.map((project) => (
          <ThreeDCardDemo

            key={project.id} // Using unique project id
            id={project.id}
            title={project.title}
            description={project.des}
            video={project.video}
            githublink={project.githublink}
            learnMorelink={project.learnMorelink} // Pass the learnMorelink
            imgtechstack={project.imgtechstack}
          />
        ))}
      </div>
    </div>
  );
};

export default Cards;