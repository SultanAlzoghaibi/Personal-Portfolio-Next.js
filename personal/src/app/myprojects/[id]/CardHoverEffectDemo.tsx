import { HoverEffect } from "../../component/ui/cardsPrjHover";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl no-underline mx-auto px-8">
      <HoverEffect items={project1} />
    </div>
  );
}


export const project1 = [
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
    title: "Coding and debugging",
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
];
