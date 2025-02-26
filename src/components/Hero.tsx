import { div } from "motion/react-client";
import React from "react";
import { Spotlight } from "./ui/Spotlights";
import { TextGenerateEffect } from "./ui/TextGeneratorEffect";
import Link from "next/link";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="pb-20 pt-36 ">
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

      <div className="h-screen w-full dark:bg-slate-900 bg-white  dark:bg-grid-white/[0.05] bg-grid-black/[0.3] absolute top-0 left-0 flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[90vw] md:max-w-2xl lg:max-w-3xl flex items-center justify-end flex-col">
          <h2 className="text-white uppercase tracking-widest text-xs text-center lg:text-sm ">
            The Magic comes from trying even if you are failing!
          </h2>

          <TextGenerateEffect
            className="text-center md:text-5xl lg::text-6xl "
            words={"Solving Digital Problems with Cutting-Edge Technology."}
          />
          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl ">
            Hi I'm Umair Ali Khan, a Frontend Developer from Pakistan
          </p>
          <Link href={"/"}>
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
