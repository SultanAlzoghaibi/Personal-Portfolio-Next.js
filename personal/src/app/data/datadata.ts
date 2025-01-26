export const navItems = [
  { name: "Home", link: "/", section: "home" },
  { name: "About", link: "/", section: "about" },
  { name: "Projects", link: "/", section: "projects" },
  { name: "About My Site", link: "/myprojects/2", section: "" }
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
    title: "Currently taking Data Structures and Algorithms (cpsc 319)",
    description: "",
    className: "lg:col-span-2 md:col-span-2 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/algo.png",
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
    img: "/tech-logos/nextjs.png",
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

export const myProjects = [
  {
    id: 1,
    idd: 1,
    title: "Pacman Game",
    des: "Pacman with Smart Ghost AI pathing based on mathematical algorithms",
    video: "/videos/demoReplayPacmanv2.mp4",
    githublink: "https://github.com/SultanAlzoghaibi/Pacman_GhostsmartAI_pathing",
    learnMorelink: "https://github.com/SultanAlzoghaibi/Pacman_GhostsmartAI_pathing",
    imgtechstack: [
      "/tech-logos/java.png",
      "/tech-logos/JavaFX.png",
    ],
    projectInfo: [
      {
        description:
          "Researched the real Pacman game logic to successfully recreate all elements of the game.",
        link: "https://github.com/SultanAlzoghaibi/Pacman_GhostsmartAI_pathing",
        photo1: "/zmyprojectsImg/myprojectsImg1/RDP1.png",
        photo2: "/path/to/photo2.jpg",
      },
      {
        description:
          "To facilitate certain complex parts and help team members understand my vision, I created a Figma diagram for both inheritance and the Pacman game logic.",
        link: "https://netflix.com",
        photo1: "/zmyprojectsImg/myprojectsImg1/DLP1.png",
        photo2: "",
      },
      {
        description:
          "I contributed to approximately 85% of the code base (all except pellets and GUI). And by refering to my Figma diagram to greatly speed up the implementation of complicated parts, leaving me with a grade of 102.3%",
        link: "https://google.com",
        photo1: "/zmyprojectsImg/myprojectsImg1/CDP1.png",
        photo2: "",
      },
      {
        description:
        "Faced with course delays and teammates’ limited JavaFX skills, I designed the GUI to sync with a backend 2D char array, simplifying contributions for less experienced members."
        ,link: "https://meta.com",
        photo1: "/zmyprojectsImg/myprojectsImg1/CHP1.png",
        photo2: "",
      },
      {
        description:
          "For the ghost AI, I used a HashMap<Character, Integer[]> to store the direction (w,a,s,d) & the tile position [x,y]. It filters out invalid tiles, and compare the linear distance to the target tile to pick the best move.",
        link: "https://amazon.com",
        photo1: "/zmyprojectsImg/myprojectsImg1/HIP1.png",
        photo2: "",
      },
      {
        description:
          "Learn more by clicking the button below.",
        link: "https://microsoft.com",
        photo1: "/zmyprojectsImg/myprojectsImg1/EIP1.png",
        photo2: "https://www.youtube.com/embed/wqhjb4PUzP4?start=4",
      },
    ],
  },
  {
    id: 2,
    idd: 2,
    title: "Personal Portfolio",
    des: "Next.js site that showcases my skills and projects",
    video: "/videos/p1cardvid.mp4",
    githublink: "https://github.com/SultanAlzoghaibi/Personal-Portfolio-Next.js",
    learnMorelink: "https://github.com/SultanAlzoghaibi/Personal-Portfolio-Next.js",
    imgtechstack: [
      "/tech-logos/typescript.png",
      "/tech-logos/playwright.png",
      "/tech-logos/framer-motion.png",
      "/tech-logos/nextjs.png",
      "/tech-logos/TailwindCSS.png",
      "/tech-logos/React.png",
      "/tech-logos/figma.png",
    ],
    projectInfo: [
      {
        description:
          "Conducted research on tech stacks by by reviewing the official Next.js, Tailwind CSS, and Aceternity UI documentation, exploring resources on YouTube, and observing the designs of  students at the University of Calgary for portfolio inspiration.",
        link: "https://stripe.com",
        photo1: "/zmyprojectsImg/myprojectsImg2/RDP1.png",
        photo2: "/path/to/photo2.jpg",
      },
      {
        description:
          "Created a Figma design to streamline the frontend development process and allow for design revisions before starting the codebase.",
        link: "https://netflix.com",
        photo1: "/zmyprojectsImg/myprojectsImg2/DLP1.png",
        photo2: "/path/to/photo2.jpg",
      },
      {
        description:
          "Developed the site using a component-based code to increase scalibility and readibility.  Leveraged and customized online UI kits, requiring an understanding of props, array mapping, state management, Tailwind CSS, and Framer Motion.",
        link: "https://google.com",
        photo1: "/zmyprojectsImg/myprojectsImg2/CDP1.png",
        photo2: "/path/to/photo2.jpg",
      },
      {
        description:
          "Encountered compatibility issues with Aceternity UI and various online tutorials when working with Next.js 15 and React. Adapted design goals and implemented workarounds as necessary to address these challenges.",
        link: "https://meta.com",
        photo1: "/zmyprojectsImg/myprojectsImg2/CHP1.png",
        photo2: "/path/to/photo2.jpg",
      },
      {
        description:
          "Coded the site to automatically generate project cards and a new info URL section by simply adding entries to the database, ensuring scalability and ease of use.",
        link: "https://amazon.com",
        photo1: "/zmyprojectsImg/myprojectsImg2/HIP1.png",
        photo2: "/path/to/photo2.jpg",
      },
      {
        description:
          "Performed testing and validation to ensure functionality and performance across different scenarios.",
        link: "https://github.com/SultanAlzoghaibi/Personal-Portfolio-Next.js",
        photo1: "",
        photo2: "",
      },
    ],
  },
];