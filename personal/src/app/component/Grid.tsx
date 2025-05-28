import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/Bento-Grid";
import { gridItems } from "../data/datadata";

const grid = () => {
  return (
    <section id="about" className="px-8">
      <BentoGrid>
        {gridItems.map((item) => (
          <BentoGridItem
            id={item.id}
            key={item.id}
            title={item.title}
            description={item.description}
            className={item.className}
            img={item.img}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
          />
        ))}
      </BentoGrid>
    </section>
  );
};
// comments
export default grid;
