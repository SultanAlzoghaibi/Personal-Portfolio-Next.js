"use client";
import React from "react";
import { cn } from "@/lib/utils";

interface CanvasRevealEffectProps {
  items: { title: string; description: string; icon: React.ReactNode }[];
  className?: string;
}

export const CanvasRevealEffect: React.FC<CanvasRevealEffectProps> = ({
  items,
  className,
}) => {
  return (
    <div className={cn("relative p-8", className)}>
      <div className="grid grid-cols-2 gap-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="group relative p-4 rounded-lg overflow-hidden bg-black text-white border border-gray-700 hover:bg-primary transition-colors"
          >
            {/* Animated Red Circle */}
            <div
              className="absolute inset-0 rounded-full bg-primary scale-0 group-hover:scale-150 opacity-10 transition-transform duration-500 ease-in-out"
              style={{
                zIndex: 0,
              }}
            />
            {/* Placeholder Icon - Initially Git Image, changes on hover */}
            <div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover:top-4 transition-all duration-500 ease-in-out"
            >
              <img
                src="/tech-logos/git.png"
                alt="Git Icon"
                className="h-10 w-10 object-contain group-hover:hidden transition-all"
              />
              {/* Actual Icon - Shown only on hover */}
              <div className="hidden group-hover:block transition-all duration-500 ease-in-out">
                {item.icon}
              </div>
            </div>
            {/* Text Content - Appears only on hover */}
            <div className="relative z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out font-sans">
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="mt-2 text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};