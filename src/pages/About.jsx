import { useState } from "react"
import story from "../assets/images/story.jpeg"

import { about } from "../data/about"
import { experiences } from "../data/experiences"
import { skills } from "../data/skills"
import { facts } from "../data/facts"

// FILES
import cv_me from "../assets/files/CV_Darren.pdf"
import resume_me from "../assets/files/Resume_Darren.pdf"

function About() {
  const profileNormal = about.find((item) => item.title === "me")?.image || ""
  const profileFocus = about.find((item) => item.title === "me_focus")?.image || ""


  const [currentImages, setCurrentImages] = useState({})

  const nextImage = (experienceIndex) => {
    setCurrentImages((prev) => {
      const total = experiences[experienceIndex]?.images?.length || 1;
      const current = prev[experienceIndex] || 0;

      return {
        ...prev,
        [experienceIndex]: (current + 1) % total,
      };
    });
  }

  const prevImage = (experienceIndex) => {
    setCurrentImages((prev) => {
      const total = experiences[experienceIndex]?.images?.length || 1;
      const current = prev[experienceIndex] || 0;

      return {
        ...prev,
        [experienceIndex]: (current - 1 + total) % total,
      };
    });
  }

  return (
    <section className="
      min-h-screen 
      bg-black 
      text-white
    ">
      <div className="
        py-30
        group 
        relative 
        w-90 
        h-90
        my-30
        mx-auto 
        rounded-3xl 
        overflow-hidden 
        border 
        border-neutral-800 
        bg-neutral-900 
        shadow-2xl
      ">
        <img
          src={profileNormal}
          alt="Profile Normal"
          draggable={false}
          className="
            absolute 
            inset-0 
            w-full 
            h-full 
            object-contain 
            transition-all 
            duration-700 
            ease-in-out 
            group-hover:opacity-0 
            group-hover:scale-110 
            group-hover:-rotate-6"
        />

        <img
          src={profileFocus}
          alt="Profile Focus"
          draggable={false}
          className="
            absolute 
            inset-0 
            w-full 
            h-full 
            object-contain 
            opacity-0 
            transition-all 
            duration-700 
            ease-in-out 
            group-hover:opacity-100 
            group-hover:scale-105 
            group-hover:rotate-3"
        />
      </div>

      <div className="
        max-w-6xl 
        mx-auto 
        px-8 
        py-5
        text-center
      ">
        <h1 className="
          text-3xl 
          font-bold
          tracking-[3px]
        ">
          ABOUT ME
        </h1>
        <p className="
          mt-8 
          text-gray-400 
          max-w-3xl 
          mx-auto 
          leading-8
        ">
          I'm Darren, an Informatics student who currently enroled in Universitas Multimedia Nusantara.
          Here you can view my brief story, current and past experiences, skills, and facts about me.
        </p>
      </div>

      <div className="
        max-w-6xl 
        mx-auto 
        px-8
        py-16
        grid 
        md:grid-cols-2 
        gap-20 
        items-center
      ">
        <img
          src={story}
          alt="Any"
          draggable={false}
          className="
            w-full 
            rounded-3xl 
            object-cover 
            shadow-xl"
        />

        <div>
          <h2 className="
            text-4xl 
            font-bold
          ">
            My Story
          </h2>
          <p className="
            mt-8 
            text-gray-400 
            leading-8
          ">
            Born in Tangerang, Indonesia. I have become an Indonesian native more than 20 years! I'm really excited to share my knowledge and improve for the better!
          </p>
          <p className="
            mt-6 
            text-gray-400 
            leading-8
          ">
            I enjoy solving logical problems, creating logical code blueprint, building websites, experimenting on applications, and deeply in love to learn more.
          </p>
          <div className="
            mt-3
            flex
            flex-wrap
            gap-3
          ">
            <a
              href={cv_me}
              target="_blank"
              rel="noopener noreferrer"
              className="
                px-6 
                py-3 
                text-sm 
                font-semibold 
                tracking-widest 
                text-black 
                bg-white 
                rounded-full 
                hover:bg-neutral-400 
                transition-all 
                duration-300 
                shadow-lg 
                text-center
                min-w-30
              "
            >
              VIEW CV
            </a>
            <a
              href={resume_me}
              target="_blank"
              rel="noopener noreferrer"
              className="
                px-6 
                py-3 
                text-sm 
                font-semibold 
                tracking-widest 
                text-white 
                bg-transparent
                rounded-full
                border
                border-neutral-100
                hover:bg-neutral-700 
                transition-all 
                duration-300 
                shadow-lg 
                text-center
                min-w-30
              "
            >
              VIEW RESUME
            </a>
          </div>
        </div>
      </div>

      <div className="
        max-w-6xl 
        mx-auto 
        px-8 
        py-24
      ">
        <h2 className="
          text-3xl 
          font-bold 
          mb-16 
          text-center
          tracking-[3px]
        ">
          EXPERIENCE
        </h2>

        {experiences.map((exp, index) => {
          const images = Array.isArray(exp.images) && exp.images.length > 0 
            ? exp.images 
            : [exp.image]
          const currentIndex = currentImages[index] || 0

          return (
            <div key={exp.id} 
              className="
                relative 
                border-l-2 
                border-red-600 
                pl-8 
                md:pl-10 
                pb-16
            ">
              <div className="
                absolute 
                -left-2.5 
                top-1 
                w-5 
                h-5 
                rounded-full 
                bg-red-600" 
              />

              <div className="
                grid 
                md:grid-cols-[minmax(220px,320px)_1fr] 
                gap-6 
                md:gap-8 
                items-start
              ">
                <div className="
                  relative 
                  overflow-hidden 
                  rounded-2xl 
                  border 
                  border-zinc-800 
                  bg-zinc-900 
                  shadow-lg
                ">
                  <img src={images[currentIndex]}
                    alt={exp.title}
                    draggable={false}
                    className="
                      w-full 
                      h-56 
                      md:h-64 
                      object-cover"
                  />

                  {images.length > 1 && (
                    <>
                      <button
                        onClick={() => prevImage(index)}
                        className="
                          absolute 
                          left-3 
                          top-1/2 
                          -translate-y-1/2 
                          bg-black/60 
                          hover:bg-black/80 
                          rounded-full 
                          w-9 
                          h-9 
                          text-xl"
                        aria-label={`Previous image for ${exp.title}`}
                      >
                        ❮
                      </button>

                      <button
                        onClick={() => nextImage(index)}
                        className="
                          absolute 
                          right-3 
                          top-1/2 
                          -translate-y-1/2 
                          bg-black/60 
                          hover:bg-black/80 
                          rounded-full 
                          w-9 
                          h-9 
                          text-xl"
                        aria-label={`Next image for ${exp.title}`}
                      >
                        ❯
                      </button>

                      <div className="
                        absolute 
                        bottom-3 
                        left-1/2 
                        -translate-x-1/2 
                        flex gap-2
                      ">
                        {images.map((_, imageIndex) => (
                          <span
                            key={imageIndex}
                            className={`
                              h-2 
                              w-2 
                              rounded-full 
                              ${imageIndex === currentIndex ? "bg-red-500" : "bg-white/40"}
                            `}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>

                <div>
                  <p className="
                    text-red-500 
                    font-semibold
                  ">
                    {exp.year}
                  </p>
                  <h3 className="
                    text-2xl 
                    font-bold 
                    mt-2
                  ">
                    {exp.title}
                  </h3>
                  <p className="
                    text-gray-400 
                    mt-1
                  ">
                    {exp.organization}
                  </p>
                  <p className="
                    text-gray-500 
                    mt-1
                  ">
                    {exp.type} • {exp.duration}
                  </p>
                  <p className="
                    mt-5 
                    text-gray-400 
                    leading-8
                  ">
                    {exp.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="
        text-center
        max-w-6xl 
        mx-auto 
        px-8 
        py-6
      ">
        <h2 className="
          text-3xl 
          font-bold 
          text-center 
          items-center
          mb-16
          tracking-tight
          glitch
          "
          data-text="SKILLS"
        >
          SKILLS
        </h2>
        <div className="
          flex 
          flex-wrap 
          justify-center 
          gap-5
        ">
          {skills.map((skill, index) => (
            <div key={index} 
              className="
                bg-zinc-900 
                px-6 
                py-3 
                rounded-full border 
                border-zinc-700 
                hover:border-red-500 
                transition
              ">
                {skill}
            </div>
          ))}
        </div>
      </div>

      <div className="
        max-w-5xl 
        mx-auto 
        px-8 
        py-24
      ">
        <h2 className="
          text-4xl 
          font-bold 
          text-center 
          mb-16
        ">
          Quick Facts
        </h2>
        <div className="
          grid 
          md:grid-cols-2 
          gap-8
        ">
          {facts.map((fact, index) => (
            <div key={index} 
              className="
                bg-zinc-900 
                rounded-2xl 
                p-6 border 
                border-zinc-800 
                shadow-md
            ">
              {fact}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;