"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { ZoomableImage } from "../ZoomableImage";
import MagicButton from "./Magicbutton";
import LinkButton from "../linkButton";

const titleArray = [
  "Research and Defining",
  "Diagramming and Layout",
  "Coding and Debugging",
  "Challenges",
  "Highlights",
  "More Information",
];

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    description: string;
    photo1?: string;
    photo2?: string;
    video?: string;
    link?: string;
  }[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-fr py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={idx}
          className={cn(
            "relative group block p-2 h-full w-full lg:row-span-2"
          )}
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-primary/[0.2] block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          {idx < 3 ? (
            <Card>
              <div className="flex flex-col items-center justify-center text-center">
                <img
                  src={
                    idx === 0
                      ? "/search-alt.png"
                      : idx === 1
                      ? "/workflow.png"
                      : "/display-code.png"
                  }
                  alt="Icon"
                  className="h-8 w-8 mb-4"
                />
                <CardTitle idx={idx} />
                <CardDescription>{item.description}</CardDescription>
                {item.photo1 && (
                  <ZoomableImage
                    src={item.photo1}
                    alt="Photo 1"
                    className="w-64 h-32 my-5 object-cover rounded-lg"
                  />
                )}
              </div>
            </Card>
          ) : idx === 5 ? (
            <Card>
              <div className="flex flex-col items-center justify-center text-center">
                <h4 className="text-white font-sans font-bold lgtracking-wide mt-4">
                  Extra Information
                </h4>
                {item.video && (
                  <video
                    src={item.video}
                    className="w-full h-auto rounded-lg mb-4"
                    controls
                  />
                )}
                <span className="flex flex-wrap gap-x-4 gap-y-4 my-4">
                  <MagicButton
                    text="Visit Link"
                    link={item.link || ""}
                    className=""
                  />
                  <LinkButton
                    text="Github"
                    icon="/tech-logos/github-white-icon.webp"
                    link={item.link || ""}
                  />
                </span>
              </div>
            </Card>
          ) : (
            <Card>
              <div className="flex flex-col items-center justify-center text-center">
                <img
                  src={
                    idx === 4
                      ? "/sparkles.png"
                      : idx === 3
                      ? "/triangle-warning.png"
                      : ""
                  }
                  alt="Icon"
                  className="h-8 w-8 mb-4"
                />
                <CardTitle idx={idx} />
                <CardDescription>{item.description}</CardDescription>
                {item.photo1 && (
                  <ZoomableImage
                    src={item.photo1}
                    alt="Photo 1"
                    className="w-64 h-32 my-5 object-cover rounded-lg"
                  />
                )}
              </div>
            </Card>
          )}
        </div>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => (
  <div
    className={cn(
      "rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-primary/[0.9] relative z-20",
      className
    )}
  >
    <div className="relative z-50">
      <div className="p-4">{children}</div>
    </div>
  </div>
);

export const CardTitle = ({
  className,
  idx,
}: {
  className?: string;
  idx: number;
}) => (
  <h4 className={cn("text-white text-3xl lgtracking-wide mt-4", className)}>
    {titleArray[idx]}
  </h4>
);

export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => (
  <p
    className={cn(
      "mt-4 text-zinc-400 tracking-wide leading-relaxed text-sm h-[calc(1.5rem*6)] overflow-hidden",
      className
    )}
  >
    {children}
  </p>
);