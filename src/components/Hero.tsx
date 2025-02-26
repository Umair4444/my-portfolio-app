import { div } from "motion/react-client";
import React from "react";
import { Spotlight } from "./ui/Spotlights";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen "
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw] "
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw] " fill="blue" />
      </div>

      <div className="h-screen w-full dark:bg-black bg-white  dark:bg-grid-white/[0.05] bg-grid-black/[0.3] absolute top-0 left-0 flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        {/* <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
          Backgrounds
        </p> */}
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[90vw] md:max-w-2xl">
          <h2 className="text-white uppercase tracking-widest text-xs text-center ">
            The Magic comes from trying even if you are failing!
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Hero;
