import React from "react";
import Cards from "./Cards";

const RecentProjects = () => {
  return (
    <div id="projects" className="space-y-10">
      {/* Section Heading */}
      <div className="pt-20">
        <h1 className="heading text-white text-4xl sm:text-5xl font-bold">
          My Recent <span className="text-primary">Projects</span>
        </h1>
      </div>
      {/* Cards */}
      <div>
        <Cards />
      </div>
    </div>
  );
};

export default RecentProjects;
