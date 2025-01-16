"use client";

import { useState } from "react";
import { createPortal } from "react-dom";

export const ZoomableImage = ({ src, alt }: { src: string; alt: string }) => {
  const [isZoomed, setIsZoomed] = useState(false);

  const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setIsZoomed(false); // Close on clicking the background
    }
  };

  return (
    <>
      {/* Main Image */}
      <img
        src={src}
        alt={alt}
        className="w-64 h-32 my-5 object-cover rounded-lg cursor-pointer"
        onClick={() => setIsZoomed(true)} // Open zoomed view
      />

      {/* Zoomed View (Modal) */}
      {isZoomed &&
        createPortal(
          <div
            className="fixed inset-0 z-[99999] flex items-center justify-center bg-black bg-opacity-75"
            onClick={handleBackgroundClick} // Close on background click
          >
            {/* Zoomed Image */}
            <img
              src={src}
              alt={alt}
              className="rounded-lg shadow-lg max-w-[90%] max-h-[90%]"
            />
          </div>,
          document.body // Render modal as a child of <body>
        )}
    </>
  );
};