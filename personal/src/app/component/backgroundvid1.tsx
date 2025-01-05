import React from "react";

const BackgroundVid1: React.FC = () => {
  return (
    <div className="relative h-screen w-screen">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
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