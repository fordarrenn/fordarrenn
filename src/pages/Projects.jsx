import { useState } from "react";
import { projects } from "../data/projects";

function Projects() {
  const [popup, setPopup] = useState({
    open: false,
    url: "",
  })

  const [currentImages, setCurrentImages] = useState({});

  const openExternal = (url) => {
    setPopup({
      open: true,
      url,
    })
  }

  const confirmRedirect = () => {
    window.open(popup.url, "_blank", "noopener,noreferrer");

    setPopup({
      open: false,
      url: "",
    });
  }

  const cancelRedirect = () => {
    setPopup({
      open: false,
      url: "",
    });
  };

  const nextImage = (projectIndex) => {
    setCurrentImages((prev) => {
      const total = projects[projectIndex]?.images?.length || 1;
      const current = prev[projectIndex] || 0;

      return {
        ...prev,
        [projectIndex]: (current + 1) % total,
      };
    });
  };

  const prevImage = (projectIndex) => {
    setCurrentImages((prev) => {
      const total = projects[projectIndex]?.images?.length || 1;
      const current = prev[projectIndex] || 0;

      return {
        ...prev,
        [projectIndex]: (current - 1 + total) % total,
      };
    });
  };

  return (
    <section className="
        min-h-screen 
        bg-black 
        text-white 
        px-8 
        py-24
    ">
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
                    Here are some of the projects that I've worked on, feel free to check them out!
                </p>
            </div>

            <div className="space-y-14">
                {projects.map((project, index) => {
                    const images = Array.isArray(project.images) && project.images.length > 0
                    ? project.images
                    : [project.image];
                    const currentIndex = currentImages[index] || 0;

                    return (
                    <div
                        key={index}
                        className="
                            bg-neutral-900 
                            rounded-3xl 
                            overflow-hidden 
                            shadow-xl 
                            hover:scale-[1.02] 
                            duration-300 
                            grid 
                            md:grid-cols-2
                            items-center"
                    >
                        <div className="relative bg-black/40">
                            <img
                                src={images[currentIndex]}
                                alt={project.title}
                                className="
                                    w-full 
                                    h-96 
                                    object-contain
                                    object-center
                                    items-center"
                            />

                        {images.length > 1 && (
                            <>
                            <button
                                onClick={() => prevImage(index)}
                                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 rounded-full w-10 h-10 text-2xl"
                                aria-label={`Previous image for ${project.title}`}
                            >
                                ❮
                            </button>

                            <button
                                onClick={() => nextImage(index)}
                                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 rounded-full w-10 h-10 text-2xl"
                                aria-label={`Next image for ${project.title}`}
                            >
                                ❯
                            </button>

                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                                {images.map((_, imageIndex) => (
                                <span
                                    key={imageIndex}
                                    className={`h-2.5 w-2.5 rounded-full ${imageIndex === currentIndex ? "bg-red-500" : "bg-white/40"}`}
                                />
                                ))}
                            </div>
                            </>
                        )}
                        </div>

                        <div className="p-10 flex flex-col">
                            <h2 className="text-4xl font-bold">{project.title}</h2>

                            <p className="mt-6 text-gray-400 leading-8">{project.description}</p>

                            <p className="mt-6 text-yellow-500 leading-8">
                                {project.status ? `Status: ${project.status}` : "Status: [Unknown]"}
                            </p>

                            <div className="flex flex-wrap gap-3 mt-8">
                                {(project.tech || []).map((tech, i) => (
                                <span
                                    key={i}
                                    className="bg-red-600 px-4 py-2 rounded-full text-sm"
                                >
                                    {tech}
                                </span>
                                ))}
                            </div>

                            <div className="flex flex-wrap gap-5 mt-10">
                                {project.demo != "#" && (
                                    <button
                                        onClick={() => openExternal(project.demo)}
                                        className="
                                            bg-red-600 
                                            hover:bg-red-700 
                                            px-3
                                            py-3 
                                            rounded-xl 
                                            cursor-pointer
                                    ">
                                        Demo
                                    </button>
                                )}

                                {project.github != "#" && (
                                    <button
                                        onClick={() => openExternal(project.github)}
                                        className="
                                            border
                                            border-gray-500 
                                            hover:bg-white 
                                            hover:text-black 
                                            px-3
                                            py-3 
                                            rounded-xl 
                                            transition 
                                            cursor-pointer
                                    ">
                                        GitHub
                                    </button>
                                )}

                                {project.presentation != "#" && (
                                    <button
                                        onClick={() => openExternal(project.presentation)}
                                        className="
                                            border
                                            border-gray-500 
                                            hover:bg-white 
                                            hover:text-black 
                                            px-3
                                            py-3
                                            rounded-xl
                                            transition
                                            cursor-pointer
                                    ">
                                        Presentation
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                    );
                })}
            </div>
      </div>

      {popup.open && (
        <div className="
            fixed 
            inset-0 
            bg-black/70 
            flex 
            justify-center 
            items-center 
            z-50
        ">
            <div className="
                bg-zinc-900 
                rounded-2xl 
                p-8 
                w-full 
                max-w-md 
                text-center 
                shadow-2xl
            ">
                <h2 className="
                    text-2xl 
                    font-bold
                ">
                    Leaving This Website
                </h2>

                <p className="
                    mt-5 
                    text-gray-400 
                    leading-7
                ">
                    You are about to visit an external website in a new browser tab.
                </p>

                <p className="
                    mt-3 
                    text-gray-500 
                    text-sm 
                    break-all
                ">
                    {popup.url}
                </p>

                <div className="
                    flex 
                    justify-center 
                    gap-4 
                    mt-8
                ">
                    <button
                        onClick={cancelRedirect}
                        className="
                            px-6 py-3 
                            rounded-xl 
                            border 
                            border-gray-500 
                            hover:bg-white 
                            hover:text-black 
                            transition
                    ">
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
                    ">
                        Continue
                    </button>
                </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;