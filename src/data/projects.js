// DATA FOR PROJECTS

import website from "../assets/images/website_preview.PNG";
import dartplex from "../assets/images/dartplex_cinemas.png";
import dartplexPrev from "../assets/images/dartplex_presentation_preview.PNG";
import dartflix from "../assets/images/dartflix_streaming.png";
import dartflixPrev from "../assets/images/dartflix_presentation_preview.PNG";

export const projects = [
  {
    title: "This Website",
    image: website,
    images: [
        website
    ],
    description:
      "A modern responsive portfolio built using React and Tailwind CSS.",
    tech: ["React", "Tailwind CSS"],
    status: "Successfully Deployed",
    github: "https://github.com/fordarrenn/fordarrenn",
    demo: "#",
    presentation: "#",
  },

  {
    title: "DartFlix Streaming",
    image: dartflix,
    images: [
        dartflix, 
        dartflixPrev
    ],
    description:
      "A streaming platform built with HTML, CSS, and JavaScript. Using the combination of Node.js, Express, and SQL integration. The continuation and revamp of DartPlex Cinemas.",
    tech: ["Node.js", "JavaScript", "HTML", "CSS", "SQL", "Express"],
    status: "Successfully Deployed - Discontinued",
    github: "https://github.com/EL-43/DartFlix-Streaming",
    demo: "https://dartflix.up.railway.app/",
    presentation: "https://canva.link/o0hn1eh8vgb5pwr",
  },

  {
    title: "DartPlex Cinemas",
    image: dartplex,
    images: [
        dartplex, 
        dartplexPrev
    ],
    description:
      "A cinema booking platform integrated with a real-time database using Node.js, Express, and SQL.",
    tech: ["Node.js", "JavaScript", "HTML", "CSS", "SQL", "Express"],
    status: "Successfully Deployed - Discontinued",
    github: "https://github.com/EL-43/DartPlex-Cinemas",
    demo: "https://dartplex-cinemas.up.railway.app/index",
    presentation: "https://canva.link/7n1lbxfgx4ggzo7",
  },
];