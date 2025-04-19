export const navItems = [
  { name: "Home", link: "/", section: "home" },
  { name: "About", link: "/", section: "about" },
  { name: "Projects", link: "/", section: "projects" },
  { name: "About My Site", link: "/myprojects/2", section: "" },
];

export const gridItems = [
  {
    id: 1,
    title: "My tech stack",
    description: "I constantly try to improve",
    className:
      "lg:col-span-3 md:col-span-4 md:row-span-4  lg:min-h-[60vh] sm:min-h-[50vh] xs:min-h-[60vh]",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 2,
    title: "Looking for an internship  for Fall 2025",
    description: "",
    className: "lg:col-span-2 md:col-span-2 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/tech-logos/internship.png",
    spareImg: "",
  },
  {
    id: 3,
    title: "This site was built with Next.js",
    description: "",
    className:
      "lg:col-span-2 lg:row-span-1 md:col-span-2 md:row-span-2 lg:max-h-[150px] lg:min-h-[150px] md:min-h-[180px] ", // Increased min height
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "building a Spring Boot + gRPC distributed system",
    description: "Currently focusing on",
    className:
      "lg:col-span-3 lg:row-span-2 md:col-span-4 md:row-span-3  lg:max-h-[340px] lg:min-h-[300px] md:min-h-[250px]", // Adjusted height for id: 4
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/tech-logos/grpc.png",
    spareImg: "test.png",
  },
  {
    id: 5,
    title: "Want to do a hackathon or Leetcode together?",
    description: "",
    className:
      "lg:col-span-2 lg:row-span-1 md:col-span-2 md:row-span-1 lg:max-h-[150px] lg:min-h-[150px] md:min-h-[130px]", // Explicit height for id: 5
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    spareImg: "",
  },
];

export const myProjects = [
  {
    id: 3,
    idd: 3,
    title: "Horizontally Scaling Distributed System",
    des: "AWS ECS auto‑scaling matchmaking: dynamic servers, warm pools & multithreaded sockets",
    video: "/videos/project-porfshocase.mp4", // Optional: replace with real demo path
    githublink:
      "https://github.com/SultanAlzoghaibi/horizonatally_Scalling_DistributedSystem_ECS-Docker", // replace with actual repo if you have one
    learnMorelink:
      "https://github.com/SultanAlzoghaibi/Scalable-Matchmaking-System",
    imgtechstack: [
      "/tech-logos/java.png",
      "/tech-logos/javafx.png",
      "/tech-logos/docker.webp",
      "/tech-logos/ECS.png",
      "/tech-logos/fargate.png",
      "/tech-logos/cloudwatch.png",
    ],
    projectInfo: [
      {
        description:
          "Started with a turn-based game tutorial, then self-built Docker, WebSockets, and ECS Fargate integration—drawing from various sources and a Pason Tech Lead.",
        link: "",
        photo1: "/zmyprojectsImg/myprojectsImg3/1.png",
        photo2: "",
      },
      {
        description:
          "Initially diagrammed the GameServer flow, then restructured the system with a SearchServer as a matchmaking layer to connect players and redirect them to available GameServers.",
        link: "",
        photo1: "/zmyprojectsImg/myprojectsImg3/2.png",
        photo2: "",
      },
      {
        description:
          "This project exposed the limits of Error messages —debugging race conditions, ECS permissions, and Docker issues required much more hands-on problem solving with breakpoints, latency timers, CloudWatch, and manual testing.",
        link: "",
        photo1: "/zmyprojectsImg/myprojectsImg3/3.png",
        photo2: "",
      },
      {
        description:
          "The system architecture required rethinking early approaches. I first used a tick-rate scheduler for matchmaking but switched to an event-driven thread model after facing race conditions and high CPU usage.",
        link: "",
        photo1: "/zmyprojectsImg/myprojectsImg3/4.png",
        photo2: "",
      },
      {
        description:
          "The highlight was deploying a dynamic warm pooling system that cut matchmaking latency by 98% (20s → 0.4s). Its modular design decouples SearchServer from GameServer, enabling game logic changes without affecting matchmaking—showcasing scalable, maintainable architecture.",
        link: "",
        photo1: "/zmyprojectsImg/myprojectsImg3/5.png",
        photo2: "/videos/matchmakingDemo.mp4",
      },
      {
        description: "Learn more by clicking the button below.",
        link: "https://github.com/SultanAlzoghaibi/horizonatally_Scalling_DistributedSystem_ECS-Docker",
        photo1: "https://www.youtube.com/embed/72xiK4MXEDE?si=KfVED6PiAb5KenuU",
        photo2: "https://www.youtube.com/embed/TD56ZpvX434?si=mdYS3t_mDkooW8U",
      },
    ],
  },
  {
    id: 1,
    idd: 1,
    title: "Pacman Game",
    des: "Pacman with Smart Ghost AI pathing based on mathematical algorithms",
    video: "/videos/demoReplayPacmanv2.mp4",
    githublink:
      "https://github.com/SultanAlzoghaibi/Pacman_GhostsmartAI_pathing",
    learnMorelink:
      "https://github.com/SultanAlzoghaibi/Pacman_GhostsmartAI_pathing",
    imgtechstack: ["/tech-logos/java.png", "/tech-logos/JavaFX.png"],
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
          "Faced with course delays and teammates’ limited JavaFX skills, I designed the GUI to sync with a backend 2D char array, simplifying contributions for less experienced members.",
        link: "https://meta.com",
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
        description: "Learn more by clicking the button below.",
        link: "https://www.youtube.com/watch?time_continue=4&v=wqhjb4PUzP4&embeds_referring_euri=https%3A%2F%2Fsultan-alzoghaibi.com%2F&source_ve_path=Mjg2NjY",
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
    githublink:
      "https://github.com/SultanAlzoghaibi/Personal-Portfolio-Next.js",
    learnMorelink:
      "https://github.com/SultanAlzoghaibi/Personal-Portfolio-Next.js",
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
          "Used databases and component-based code to have to site be scalibility without needing code.  Leveraged online UI kits, requiring an understanding of props, array mapping, state management, TailwindCSS, etc.",
        link: "",
        photo1: "/zmyprojectsImg/myprojectsImg2/CDP1.png",
        photo2: "/path/to/photo2.jpg",
      },
      {
        description:
          "Encountered compatibility issues with Aceternity/Shadcn UI and various online tutorials when working with Next.js 15 and React 19. I creativly adapted design goals as workarounds to these issues.",
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
