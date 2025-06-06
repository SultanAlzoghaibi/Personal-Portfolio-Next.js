import React from "react";

const BackgroundVid1: React.FC = () => {
  return (
    <div className="relative w-full h-[90vh]">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover object-bottom"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/videos/backroundVid.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default BackgroundVid1;
