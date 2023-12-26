import { useState } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { TypeAnimation } from "react-type-animation";
import { handleClickScroll } from "../utils";

const Hero = () => {
  const [headingColor, setHeadingColor] = useState<string>("#9295a2");
  return (
    <>
      <div
        id="hero"
        className="h-screen mx-auto text-center max-w-7xl bg-bgPrimaryDark"
      >
        {/* Container */}
        <div className="z-10 flex flex-col justify-center h-full max-w-6xl px-8 mx-auto tracking-tight gap-y-3">
          <p className="text-xl font-bold text-pink-500">
            Hi There{" "}
            <img
              src="https://user-images.githubusercontent.com/18350557/176309783-0785949b-9127-417c-8b55-ab5a4333674e.gif"
              alt=""
              className="inline-block"
            />
            , my name is -
          </p>
          <h1 className="text-4xl sm:text-7xl font-bold text-[#f4f6fc]">
            Harshit Bhardwaj
          </h1>
          <div style={{ color: headingColor }}>
            <TypeAnimation
              className="text-4xl font-bold md:text-7xl"
              sequence={[
                "I'm an Aspiring Full Stack Engineer.",
                1200,
                "",
                () => setHeadingColor("#9295a2"),
                () => setHeadingColor("#e91e63"),
                "I'm a Research and Development Enthusiast.",
                1200,
                "",
                () => setHeadingColor("#9295a2"),
              ]}
              deletionSpeed={40}
              repeat={Infinity}
              cursor={true}
            />
          </div>
          <div>
            <button
              onClick={() => handleClickScroll("about")}
              className="text-white group border-2 shadow-s shadow-pink-500 px-6 py-3 my-2 flex items-center hover:bg-pink-500 hover:border-pink-500 hover:text-bgPrimaryDark hover:font-bold text-center hover:scale-110 ease-in duration-75 rouned-md pt-4 mt-4 w-[75] mx-auto outline-none"
            >
              Know more about me
              <span className="duration-300 group-hover:rotate-90">
                <HiArrowNarrowRight className="ml-3 " />
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="border-b-[0.5px] border-pink-500"></div>
    </>
  );
};

export default Hero;
