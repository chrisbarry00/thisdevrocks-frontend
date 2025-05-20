import { Project } from "../../types/Project";

export const projects: Project[] = [
  {
    id: "thisdev.rocks",
    name: "thisdev.rocks",
    description: "Personal website & blog",
    links: [{ label: "You are here!", url: "/" }],
  },
  {
    id: "mfc",
    name: "Mr. Fun Computer",
    description: "Roblox game",
    links: [
      {
        label: "View on Roblox",
        url: "https://www.roblox.com/games/140357280365343/Mr-Fun-Computer-s-Fun-Time-Obby-HARD",
      },
      // { label: "Read Dev Journey", url: "/blog/mr-fun-computer" },
    ],
  },
  {
    id: "github",
    name: "GitHub Repos",
    description: "A collection of projects I've worked on",
    links: [
      { label: "GitHub Profile", url: "https://github.com/chrisbarryrocks" },
    ],
  },
];
