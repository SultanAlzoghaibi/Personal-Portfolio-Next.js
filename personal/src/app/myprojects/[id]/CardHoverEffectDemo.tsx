import { HoverEffect } from "../../component/ui/cardsPrjHover";
import { myProjects } from "../../data/datadata";

import React from "react";

export function CardHoverEffectDemo({ idd }: { idd: number }) {
  // Validate the project id and ensure it exists in myProjects
  const project = myProjects.find((proj) => proj.id === idd);

  if (!project) {
    return (
      <div className="max-w-5xl no-underline mx-auto px-8">
        <h1 className="heading lg:max-w-[45vw] text-white">
          Project not found.
        </h1>
      </div>
    );
  }

  return (
    <div className="max-w-5xl no-underline mx-auto px-8 my-10 py-12">
      <h1 className="heading lg:max-w-[45vw] text-center text-white mx-auto flex flex-col justify-center items-center">
        This is my: <span className="text-primary">{project.title}</span>
      </h1>

      {/* Rendering HoverEffect only if projectInfo exists */}
      {project.projectInfo ? (
        <HoverEffect items={project.projectInfo} />
      ) : (
        <p className="text-white">
          No additional information available for this project.
        </p>
      )}
    </div>
  );
}
