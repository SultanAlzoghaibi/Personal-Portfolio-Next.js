import React from "react";
import { myProjects } from "../data/datadata"; // Importing projects from the updated data file
import { ThreeDCardDemo } from "./ThreeDCardDemo";

const Cards = () => {
  return (
    <div className="flex justify-center items-center w-full">
      <div className="flex flex-wrap gap-10 justify-center max-w-6xl px-4">
        {myProjects.map((project) => (
          <ThreeDCardDemo
            key={project.id}
            id={project.id}
            idd={project.idd}
            title={project.title}
            description={project.des}
            video={project.video}
            githublink={project.githublink}
            learnMorelink={project.learnMorelink}
            imgtechstack={project.imgtechstack}
          />
        ))}
      </div>
    </div>
  );
};

export default Cards;
