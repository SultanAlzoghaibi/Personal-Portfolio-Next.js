import React from "react";

const LinkButton = ({
  text,
  icon,
  link,
}: {
  text: string;
  icon: string;
  link: string;
}) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <button className="bg-black text-primary border border-primary hover:bg-primary font-bold w-12 h-12 flex items-center justify-center rounded-full">
        <img src={icon} alt={text} className="w-6 h-6" />
      </button>
    </a>
  );
};

export default LinkButton;
