export const navItems = [
  { name: "Home", link: "home" },
  { name: "About", link: "about" },
  { name: "Projects", link: "projects" },
  { name: "About My Site", link: "blog" },
  { name: "Contact", link: "#contact" },
];

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
    img: "",
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
    title: "Pacman",
    des: "Smart AI pathing Pacman game",
    video: "/videos/backgroundVid.mp4", // Fixed the typo 'backroundVid' to 'backgroundVid'
    githublink: "https://github.com/SultanAlzoghaibi",
    learnMorelink: "https://github.com/SultanAlzoghaibi",
    imgtechstack: [
      "/tech-logos/java.png",
      "/tech-logos/javaFX.png",
    ], // Ensure paths start with `/` or are absolute
  },
  {
    id: 2,
    title: "Personal Portfolio",
    des: "Next.js site that showcases my skills and projects",
    video: "/videos/backgroundVid.mp4", // Fixed the typo 'backroundVid' to 'backgroundVid'
    githublink: "https://github.com/SultanAlzoghaibi",
    learnMorelink: "https://github.com/SultanAlzoghaibi",
    imgtechstack: [
      "/tech-logos/typescript.png",
      "/tech-logos/playwright.png",
      "/tech-logos/framer-motion.png",
      "/tech-logos/nextjs.png",
      "/tech-logos/tailwindcss.png",
      "/tech-logos/react.png",
      "/tech-logos/figma.png",
    ], // Ensure paths start with `/` or are absolute
  },
];

export const projectsId = [
  {
    id: 1,
    projects: [
      {
        title: "Research and Defining",
        description:
          "A technology company that builds economic infrastructure for the internet.",
        link: "https://stripe.com",
        photo1: "/tech-logos/git.png", // Add photo1
        photo2: "/path/to/photo2.jpg", // Add photo2
      },
      {
        title: "Diagramming and Layout",
        description:
          "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
        link: "https://netflix.com",
        photo1: "/path/to/photo1.jpg", // Add photo1
        photo2: "/path/to/photo2.jpg", // Add photo2
      },
      {
        title: "Coding and Debugging",
        description:
          "A multinational technology company that specializes in Internet-related services and products.",
        link: "https://google.com",
        photo1: "/path/to/photo1.jpg", // Add photo1
        photo2: "/path/to/photo2.jpg", // Add photo2
      },
      {
        title: "Challenges",
        description:
          "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
        link: "https://meta.com",
        photo1: "/path/to/photo1.jpg", // Add photo1
        photo2: "/path/to/photo2.jpg", // Add photo2
      },
      {
        title: "Solutions",
        description:
          "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
        link: "https://amazon.com",
        photo1: "/path/to/photo1.jpg", // Add photo1
        photo2: "/path/to/photo2.jpg", // Add photo2
      },
      {
        title: "More Information",
        description:
          "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
        link: "https://microsoft.com",
        photo1: "/path/to/photo1.jpg", // Add photo1
        photo2: "/path/to/photo2.jpg", // Add photo2
      },
    ],
  },
  {
    id: 2,
    projects: [
      {
        title: "@@@@@@ and Defining",
        description:
          "A technology company that builds economic infrastructure for the internet.",
        link: "https://stripe.com",
        photo1: "/tech-logos/git.png", // Add photo1
        photo2: "/path/to/photo2.jpg", // Add photo2
      },
      {
        title: "Diagramming and Layout",
        description:
          "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
        link: "https://netflix.com",
        photo1: "/path/to/photo1.jpg", // Add photo1
        photo2: "/path/to/photo2.jpg", // Add photo2
      },
      {
        title: "Coding and Debugging",
        description:
          "A multinational technology company that specializes in Internet-related services and products.",
        link: "https://google.com",
        photo1: "/path/to/photo1.jpg", // Add photo1
        photo2: "/path/to/photo2.jpg", // Add photo2
      },
      {
        title: "Challenges",
        description:
          "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
        link: "https://meta.com",
        photo1: "/path/to/photo1.jpg", // Add photo1
        photo2: "/path/to/photo2.jpg", // Add photo2
      },
      {
        title: "Solutions",
        description:
          "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
        link: "https://amazon.com",
        photo1: "/path/to/photo1.jpg", // Add photo1
        photo2: "/path/to/photo2.jpg", // Add photo2
      },
      {
        title: "More Information",
        description:
          "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
        link: "https://microsoft.com",
        photo1: "/path/to/photo1.jpg", // Add photo1
        photo2: "/path/to/photo2.jpg", // Add photo2
      },
    ],
  },
];