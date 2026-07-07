import { useState } from "react";

const projects = [
    {
        title: "This Website",
        image: "https://i.imgur.com/hLOeizR.png",
        description:
            "A modern responsive portfolio built using React and Tailwind CSS.",
        tech: ["React", "Tailwind CSS"],
        status: "Successfully Deployed",
        github: "https://github.com/fordarrenn/fordarrenn",
        demo: "#", 
        presentation: "#"
    },

    {
        title: "DartFlix Streaming",
        image: "https://i.imgur.com/m2tKInC.png",
        description:
          "A streaming platform built with HTML, CSS, and JavaScript. Using the combination of Node.js, Express, and SQL integration. The continuation and revamp of DartPlex Cinemas.",
        tech: ["Node.js", "JavaScript", "HTML", "CSS", "SQL", "Express"],
        status: "Successfully Deployed - Discontinued",
        github: "https://github.com/EL-43/DartFlix-Streaming",
        demo: "https://dartflix.up.railway.app/",
        presentation: "https://canva.link/o0hn1eh8vgb5pwr"
    },

    {
        title: "DartPlex Cinemas",
        image: "https://i.imgur.com/MUI5gaI.png",
        description:
          "A cinema booking platform integrated with a real-time database using Node.js, Express, and SQL.",
        tech: ["Node.js", "JavaScript", "HTML", "CSS", "SQL", "Express"],
        status: "Successfully Deployed - Discontinued",
        github: "https://github.com/EL-43/DartPlex-Cinemas",
        demo: "https://dartplex-cinemas.up.railway.app/index",
        presentation: "https://canva.link/7n1lbxfgx4ggzo7"
    }
];

function Projects() {
  const [popup, setPopup] = useState({
    open: false,
    url: "",
  });

  const openExternal = (url) => {
      setPopup({
        open: true,
        url,
      });
  };

  const confirmRedirect = () => {
      window.open(popup.url, "_blank", "noopener,noreferrer");

      setPopup({
          open: false,
          url: "",
      });
  };

  const cancelRedirect = () => {
      setPopup({
          open: false,
          url: "",
      });
  };
    return (

        <section
            className="
                min-h-screen
                bg-black
                text-white
                px-8
                py-24
            "
        >

            <div className="
              max-w-7xl
              mx-auto
            ">

                <div className="
                  text-center 
                  mb-20
                ">

                    <h1 className="
                      text-3xl 
                      font-bold
                      tracking-[3px]
                    ">
                        PROJECTS
                    </h1>

                    <p className="
                      text-gray-400 
                      mt-2 
                      max-w-2xl 
                      mx-auto
                    ">
                        Here are some of the projects that I've worked on, feel free tocheck them out!
                    </p>

                </div>

                <div className="space-y-14">

                    {projects.map((project, index) => (

                        <div
                            key={index}
                            className="
                                bg-zinc-900
                                rounded-3xl
                                overflow-hidden
                                shadow-xl
                                hover:scale-[1.02]
                                duration-300
                                grid
                                md:grid-cols-2
                            "
                        >

                            <img
                                src={project.image}
                                alt={project.title}
                                className="
                                    w-full
                                    h-120
                                    object-cover
                                "
                            />

                            <div className="p-10 flex flex-col">

                                <h2 className="text-4xl font-bold">
                                    {project.title}
                                </h2>

                                <p className="mt-6 text-gray-400 leading-8">
                                    {project.description}
                                </p>

                                <p className="
                                  mt-6 
                                  text-yellow-500
                                  leading-8
                                ">
                                    {project.status ? `Status: ${project.status}` : "Status: [Unknown]"}
                                </p>

                                <div className="flex flex-wrap gap-3 mt-8">

                                    {project.tech.map((tech, i) => (

                                        <span
                                            key={i}
                                            className="
                                                bg-red-600
                                                px-4
                                                py-2
                                                rounded-full
                                                text-sm
                                            "
                                        >
                                            {tech}
                                        </span>

                                    ))}

                                </div>

                                <div className="flex gap-5 mt-10">

                                    <button
                                      onClick={() => openExternal(project.demo)}
                                      className="
                                          bg-red-600
                                          hover:bg-red-700
                                          px-6
                                          py-3
                                          rounded-xl
                                          cursor-pointer
                                    ">
                                        Demo
                                    </button>

                                    <button
                                        onClick={() => openExternal(project.github)}
                                        className="
                                          border
                                          border-gray-500
                                          hover:bg-white
                                          hover:text-black
                                          px-6
                                          py-3
                                          rounded-xl
                                          transition
                                          cursor-pointer
                                      ">
                                        GitHub
                                    </button>

                                    {project.presentation && (
                                        <button
                                            onClick={() => openExternal(project.presentation)}
                                            className="
                                                border
                                                border-gray-500
                                                hover:bg-white
                                                hover:text-black
                                                px-6
                                                py-3
                                                rounded-xl
                                                transition
                                                cursor-pointer
                                            "
                                        >
                                            Presentation
                                        </button>
                                    )}

                                </div>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

          {

    popup.open && (

        <div
            className="
                fixed
                inset-0
                bg-black/70
                flex
                justify-center
                items-center
                z-50
            "
        >

            <div
                className="
                    bg-zinc-900
                    rounded-2xl
                    p-8
                    w-100
                    text-center
                    shadow-2xl
                "
            >

                <h2 className="text-2xl font-bold">
                    Leaving This Website
                </h2>

                <p className="mt-5 text-gray-400 leading-7">
                    You are about to visit an external website in a new browser
                    tab.
                </p>

                <p className="mt-3 text-gray-500 text-sm break-all">
                    {popup.url}
                </p>

                <div className="flex justify-center gap-4 mt-8">

                    <button
                        onClick={cancelRedirect}
                        className="
                            px-6
                            py-3
                            rounded-xl
                            border
                            border-gray-500
                            hover:bg-white
                            hover:text-black
                            transition
                        "
                    >
                        Stay Here
                    </button>

                    <button
                        onClick={confirmRedirect}
                        className="
                            px-6
                            py-3
                            rounded-xl
                            bg-red-600
                            hover:bg-red-700
                            transition
                        "
                    >
                        Continue
                    </button>

                </div>

            </div>

        </div>

    )
}

        </section>

    );

}

export default Projects;