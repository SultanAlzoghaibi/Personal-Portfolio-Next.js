import { video } from "framer-motion/client";

export const gridItems = [

  {
    id: 1,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-3 md:col-span-4 md:row-span-4  lg:min-h-[60vh] sm:min-h-[50vh] xs:min-h-[60vh]",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 2,
    title: " 🏗️ 🏗️ 🏗️ This bento is under construction 🏗️ 🏗️ 🏗️",
    description: "",
    className: "lg:col-span-2 md:col-span-2 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/",
    spareImg: "",
  },
  {
    id: 3,
    title: "This site was built with Next.js",
    description: "",
    className: "lg:col-span-2 lg:row-span-1 md:col-span-2 md:row-span-2 lg:max-h-[150px] lg:min-h-[150px] md:min-h-[180px] " , // Increased min height
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/test.png",
    spareImg: "",
  },
  {
    id: 4,
    title: "Helping TechStart club migrate from to Next.js",
    description: "Currently focusing on",
    className: "lg:col-span-3 lg:row-span-2 md:col-span-4 md:row-span-3  lg:max-h-[340px] lg:min-h-[300px] md:min-h-[250px]", // Adjusted height for id: 4
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "tech-logos/nextjs.png",
    spareImg: "test.png",
  },
  {
    id: 5,
    title: "Want to do a hackathon or Leetcode together?",
    description: "",
    className: "lg:col-span-2 lg:row-span-1 md:col-span-2 md:row-span-1 lg:max-h-[150px] lg:min-h-[150px] md:min-h-[130px]", // Explicit height for id: 5
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    spareImg: "",
  },
];


export const projects = [
  {
    id: 1,
    title: "pacman",
    des: "Smart ai pathing pacman game",
    video: "/videos/backroundVid.mp4",
    githublink: "https://github.com/SultanAlzoghaibi",
    learnMorelink: "https://github.com/SultanAlzoghaibi",
    imgtechstack: ["/tech-logos/java.png", "/tech-logos/javaFX.png"], // Ensure paths start with `/` or are absolute
  },{
    id: 2,
    title: "Personal Portfolio",
    des: "Next.js site that showcases my skills and projects",
    video: "/videos/backroundVid.mp4",
    githublink: "https://github.com/SultanAlzoghaibi",
    learnMorelink: "https://github.com/SultanAlzoghaibi",
    imgtechstack: ["/tech-logos/typescript.png", "/tech-logos/nextjs.png","/tech-logos/tailwindcss.png", "/tech-logos/react.png", "/tech-logos/figma.png"], // Ensure paths start with `/` or are absolute
  }
]
