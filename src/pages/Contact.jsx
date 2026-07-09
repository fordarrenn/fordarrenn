import { 
  FaGithub, 
  FaLinkedin, 
  FaEnvelope, 
  FaInstagram, 
  FaWhatsapp, 
  FaDiscord 
} from "react-icons/fa";

function Contact() {
  const contacts = [
    {
      name: "GitHub",
      icon: FaGithub,
      link: "https://github.com/fordarrenn",
      username: "@fordarrenn",
      hoverColor: "hover:text-white hover:border-neutral-500",
    },
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      link: "https://linkedin.com/in/darren-darren",
      username: "Darren .",
      hoverColor: "hover:text-blue-500 hover:border-blue-500/30",
    },
    {
      name: "Instagram",
      icon: FaInstagram,
      link: "https://instagram.com/fordarrenn",
      username: "@fordarrenn",
      hoverColor: "hover:text-pink-500 hover:border-pink-500/30",
    },
    {
      name: "Email",
      icon: FaEnvelope,
      link: "https://mail.google.com/mail/?view=cm&fs=1&to=fordarrenn@gmail.com",
      username: "fordarrenn@gmail.com",
      hoverColor: "hover:text-red-500 hover:border-red-500/30",
    },
    {
      name: "WhatsApp",
      icon: FaWhatsapp,
      link: "https://wa.me/628181882108",
      username: "+62 8xx-xxxx-xxxx",
      hoverColor: "hover:text-green-500 hover:border-green-500/30",
    },
    {
      name: "Discord",
      icon: FaDiscord,
      link: "https://discord.com/users/fordarrenn",
      username: "fordarrenn",
      hoverColor: "hover:text-indigo-400 hover:border-indigo-400/30",
    },
  ];

  return (
    <section className="
      min-h-screen
      bg-black
      text-white
      px-8
      py-20
      flex
      flex-col
      justify-center
    ">
      <div className="
        max-w-6xl 
        mx-auto 
        w-full
        text-center
      ">
        <h1 className="
          text-3xl 
          font-bold
          tracking-tight
          mb-6
          glitch
          "
          data-text="CONNECT WITH ME"
        >
          CONNECT WITH ME
        </h1>

        <div className="
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          lg:grid-cols-3 
          gap-6
        ">
          {contacts.map((contact, index) => {
            const IconComponent = contact.icon
            
            return (
              <a
                key={index}
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  glitch-hover
                  group
                  flex
                  items-center
                  gap-5
                  p-6
                  bg-neutral-950
                  border
                  border-neutral-900
                  rounded-2xl
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-neutral-900/50
                  text-left
                  ${contact.hoverColor}
                `}
              >
                <div className="
                  text-2xl 
                  text-neutral-400 
                  group-hover:scale-110 
                  transition-transform 
                  duration-300
                ">
                  <IconComponent />
                </div>

                <div className="overflow-hidden">
                  <h3 className="
                    text-sm 
                    font-bold 
                    tracking-wider 
                    text-neutral-300 
                    group-hover:text-white
                  ">
                    {contact.name}
                  </h3>
                  <p className="
                    text-xs 
                    text-neutral-500 
                    mt-1 
                    truncate
                    group-hover:text-neutral-400
                  ">
                    {contact.username}
                  </p>
                </div>
              </a>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default Contact;