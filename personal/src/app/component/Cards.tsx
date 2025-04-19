import React from "react";
import { myProjects } from "../data/datadata"; // Importing projects from the updated data file
import { ThreeDCardDemo } from "./ThreeDCardDemo";

const Cards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-6xl w-full px-8 mx-auto">
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
  );
};

export default Cards;
