import { about } from "../data/about"
import { experiences } from "../data/experiences"
import { skills } from "../data/skills"
import { facts } from "../data/facts"

function About() {
  const profileNormal = about.find((item) => item.title === "me")?.image || "";
  const profileFocus = about.find((item) => item.title === "me_focus")?.image || "";

  return (
    <section className="min-h-screen bg-black text-white">
      <div className="max-w-6xl mx-auto px-8 py-28 text-center">
        <h1 className="text-5xl md:text-6xl font-bold">About Me</h1>
        <p className="mt-8 text-gray-400 max-w-3xl mx-auto leading-8">
          I'm Darren, an Informatics student who enjoys designing and developing modern web applications.
          I believe technology should not only work well but also provide a pleasant user experience.
        </p>
      </div>

      <div className="group relative w-90 h-90 mx-auto rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-900 shadow-2xl">
        <img
          src={profileNormal}
          alt="Profile Normal"
          className="absolute inset-0 w-full h-full object-contain transition-all duration-700 ease-in-out group-hover:opacity-0 group-hover:scale-110 group-hover:-rotate-6"
        />

        <img
          src={profileFocus}
          alt="Profile Focus"
          className="absolute inset-0 w-full h-full object-contain opacity-0 transition-all duration-700 ease-in-out group-hover:opacity-100 group-hover:scale-105 group-hover:rotate-3"
        />
      </div>

      <div className="max-w-6xl mx-auto px-8 grid md:grid-cols-2 gap-20 items-center py-16">
        <img
          src="https://i.imgur.com/hLOeizR.png"
          alt="Profile illustration"
          className="w-full rounded-3xl object-cover shadow-xl"
        />

        <div>
          <h2 className="text-4xl font-bold">My Story</h2>
          <p className="mt-8 text-gray-400 leading-8">
            My interest in technology started from curiosity about how software works. Since then, I&apos;ve been learning
            programming through university projects and personal development, focusing primarily on frontend technologies.
          </p>
          <p className="mt-6 text-gray-400 leading-8">
            I enjoy creating responsive interfaces, writing clean code, and continuously improving my problem-solving skills.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-8 py-24">
        <h2 className="text-4xl font-bold mb-16 text-center">Experience</h2>

        {experiences.map((exp) => (
          <div key={exp.id} className="relative border-l-2 border-red-600 pl-10 pb-16">
            <div className="absolute -left-2.5 top-1 w-5 h-5 rounded-full bg-red-600" />
            <p className="text-red-500 font-semibold">{exp.year}</p>
            <h3 className="text-2xl font-bold mt-2">{exp.title}</h3>
            <p className="text-gray-400 mt-1">{exp.organization}</p>
            <p className="text-gray-500 mt-1">{exp.type} • {exp.duration}</p>
            <p className="mt-5 text-gray-400 leading-8">{exp.description}</p>
          </div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-8 py-20">
        <h2 className="text-4xl font-bold text-center mb-16">Skills</h2>
        <div className="flex flex-wrap justify-center gap-5">
          {skills.map((skill, index) => (
            <div key={index} className="bg-zinc-900 px-6 py-3 rounded-full border border-zinc-700 hover:border-red-500 transition">
              {skill}
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-8 py-24">
        <h2 className="text-4xl font-bold text-center mb-16">Quick Facts</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {facts.map((fact, index) => (
            <div key={index} className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800 shadow-md">
              {fact}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;