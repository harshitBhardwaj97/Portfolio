import { techStack } from "../data";

const About = () => {
  return (
    <>
      <div
        id="about"
        className="flex flex-col items-center justify-center w-full max-w-5xl min-h-screen px-4 py-24 mx-auto mb-3 text-white"
      >
        <div className="pb-2 font-bold tracking-tight border-b-4 border-pink-500 heading md:text-2xl">
          About Me
        </div>
        <div className="info text-[14px] md:text-xl">
          I started off as a <span className="mark">Quality Engineer</span>{" "}
          Intern in one fast paced Ed-tech startup, got to learn a lot there,
          since I had to wear multiple hats.
          <br />
          <br />
          After that I got an opportunity to work in{" "}
          <span className="mark">CORPORATE on a FINTECH Project</span>, where I
          was assigned as the SPOC for one of the implementations of the core
          product. So I can say that I have an{" "}
          <span className="mark">in-depth exposure</span> to complete{" "}
          <span className="mark">STLC</span> and{" "}
          <span className="mark">SDLC</span> processes, and a good experience in
          working with both small and mid-sized teams. In my last company, I got
          the opportunity to automate a complex workflow of an entire Invoice
          Lifecycle, including multiple steps via SFTP server, which drastically
          reduced the manual efforts of the team, for which I was also{" "}
          <span className="mark">
            acknowledged by VP of engineering with a recognition of my efforts.
          </span>
          <br />
          <br />
          But I wanted to take things a step further and also increase my
          existing knowledge base, so from past few months{" "}
          <span className="mark">
            I have been dedicating my energy towards mastering the craft of
            software development
          </span>
          . I'm looking forward to contribute in the industry and society with
          whatever resources and knowledge I have, and I'm open for an{" "}
          <span className="mark">exciting role</span> that challenges the status
          quo and brings the best out of me !
        </div>
        <div className="aboutMe">
          <div className="p-4 mt-6 techStack">
            <h2 className="pb-2 font-bold md:text-xl">
              💻 I'm having hands-on experience on the following tech stack -
            </h2>
            <p className="flex items-center gap-2 pb-2">
              {techStack.map((technology) => (
                <a
                  href={technology.aHref}
                  target="_blank"
                  rel="noreferrer"
                  key={technology.aHref}
                >
                  <img
                    src={technology.imgSrc}
                    width={technology.width}
                    height={technology.height}
                    alt={technology.alt}
                  />
                </a>
              ))}
            </p>
            <h2 className="pb-2 font-bold md:text-xl">
              🌍 I'm based in India.
            </h2>
            <h2 className="pb-2 font-bold md:text-xl">
              🧠 Currently I'm learning MERN Stack, Rust.
            </h2>
            <h2 className="font-bold md:text-xl">
              👨🏽‍💻 Checkout my work at{" "}
              <a
                href="https://github.com/harshitbhardwaj97"
                className="duration-100 ease-in-out hover:text-pink-500 hover:font-bold hover:scale-105 hover:border-b-[1px] hover:border-b-white"
              >
                Github
              </a>
              .
            </h2>
          </div>
        </div>
      </div>
      <div className="border-b-[0.5px] border-pink-500"></div>
    </>
  );
};

export default About;
