"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";
import { Saira_Stencil_One } from "next/font/google";

const stencilFont = Saira_Stencil_One({
  variable: "--font-saira",
  subsets: ["latin"],
  display: "swap",
  weight: "400", // Ensure the correct weight is applied
});

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();

  // Ensure that words is always a string
  const wordsArray = (typeof words === 'string' ? words : '').split(" ");

  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration ? duration : 1,
        delay: stagger(0.2),
      }
    );
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          const isWhite = idx < 4; // First 4 words
          return (
            <motion.span
              key={word + idx}
              className={`${stencilFont.className} ${
                isWhite ? "text-white" : "text-primary"
              }`}
              initial={{ opacity: 0 }} // Ensure initial opacity is 0
              animate={{ opacity: 1 }} // Animate opacity to 1
              transition={{ delay: idx * 0.2, duration: duration }}
              style={{
                filter: filter ? "blur(10px)" : "none",
              }}
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn(`font-bold`, className)}>
      <div className="my-4">
        <div className="flex">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};