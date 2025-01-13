import { HoverEffect } from "../../component/ui/cardsPrjHover";
import { projectsId } from "../../data/datadata";

export function CardHoverEffectDemo({ idd }: { idd: number }) {
  return (
    <div className="max-w-5xl no-underline mx-auto px-8">
      {/* Adjusting indexing to correctly fetch the project data */}
      <HoverEffect items={projectsId[idd - 1].projects} />
    </div>
  );
}