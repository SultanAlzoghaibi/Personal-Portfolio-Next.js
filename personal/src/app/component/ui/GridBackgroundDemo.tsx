import React from "react";
export function GridBackgroundDemo() {
  return (
    <div className="absolute inset-0 w-full h-full bg-white dark:bg-[#0f0e0e] dark:bg-grid-white/[0.1] bg-grid-black/[0.9]">
      {/* Optional radial overlay for fade effect */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center dark:bg-[#070707] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
    </div>
  );
}
