export const navItems = [
  { name: "Home", link: "/", section: "home" },
  { name: "About", link: "/", section: "about" },
  { name: "Projects", link: "/", section: "projects" },
  { name: "About My Site", link: "/myprojects/2", section: "" },
  { name: "Contact", link: "/", section: "" },
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

export const myProjects = [
  {
    id: 1,
    idd: 1,
    title: "Pacman Game",
    des: "Pacman with Smart Ghost AI pathing based on mathematical algorithms",
    video: "/videos/demoReplayPacmanv2.mp4",
    githublink: "hhttps://github.com/SultanAlzoghaibi/Pacman_GhostsmartAI_pathing",
    learnMorelink: "https://github.com/SultanAlzoghaibi/Pacman_GhostsmartAI_pathing",
    imgtechstack: [
      "/tech-logos/java.png",
      "/tech-logos/JavaFX.png",
    ],
    projectInfo: [
      {
        description:
          "Reaseached the real Pacman game logic to sucessfully recreate all elements of the game.",
        link: "https://github.com/SultanAlzoghaibi/Pacman_GhostsmartAI_pathing",
        photo1: "/zmyprojectsImg/myprojectsImg1/RDP1.png",
        photo2: "/path/to/photo2.jpg",
      },
      {
        description:
          "To facilate ceratain complex parts and help teammebers understand my vison, I created a Fijgam diagram for both inheritance as well as the Pacman game logic.",
        link: "https://netflix.com",
        photo1: "/zmyprojectsImg/myprojectsImg1/DLP1.png",
        photo2: "",
      },
      {
        description:
          "I contributed to ~85% of the code base, (all ecept pellets and GUI), I used the FigJab diagram to greatly speed up the implimentation of complicated parts of the game.",
        link: "https://google.com",
        photo1: "/zmyprojectsImg/myprojectsImg1/CDP1.png",
        photo2: "",
      },
      {
        description:
          "Due to certain delays in the course, we only had 2 weeks to learn javaFX to compltete this project, and some teamates showed the inability or low skills in to code, As a solution i made all the logic update a backedn 2 Char Array, then based that array it would update the GUI, Allowing my less experience members to not need to code in JavaFX.",
        link: "https://meta.com",
        photo1: "/zmyprojectsImg/myprojectsImg1/CHP1.png",
        photo2: "",
      },
      {
        description:
          "for th ghost AI, Used a HashMap<Character, Integer[]> that stored the direction (w,a,s,d) and that tile position, it will then filter out tiles that are a wall, that represent the revese direction and then compare the linear distant to the target tile to pick the best move",
        link: "https://amazon.com",
        photo1: "/zmyprojectsImg/myprojectsImg1/HIP1.png",
        photo2: "",
      },
      {
        description:
          "Learn more by clicking the button below",
        link: "https://microsoft.com",
        photo1: "/path/to/photo1.jpg",
        photo2: "/path/to/photo2.jpg",
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
          "Conducted research on Next.js 15 and React by reviewing the official Next.js, Tailwind CSS, and Acency UI documentation, exploring resources on YouTube, and observing the practices of software engineering students at the University of Calgary for portfolio inspiration.",
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
          "Developed the site using a component-based architecture to enhance code readability and maintainability. Leveraged and customized online UI kits, requiring an understanding of props, array mapping, state management, Tailwind CSS, and Framer Motion.",
        link: "https://google.com",
        photo1: "/zmyprojectsImg/myprojectsImg2/CDP1.png",
        photo2: "/path/to/photo2.jpg",
      },
      {
        description:
          "Encountered compatibility issues with Acency UI and various online tutorials when working with Next.js 15 and React. Adapted design goals and implemented workarounds as necessary to address these challenges.",
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
        link: "https://microsoft.com",
        photo1: "/path/to/photo1.jpg",
        photo2: "/path/to/photo2.jpg",
      },
    ],
  },
];