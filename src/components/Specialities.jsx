import React from "react";
import HtmlSvg from "../assets/HTML.svg";
import CssSvg from "../assets/CSS.svg";
import ReactSvg from "../assets/ReactJS.svg";
import VueJSSvg from "../assets/VueJS.svg";
import NestJSSvg from "../assets/NestJS.svg";
import NodeJSSvg from "../assets/NodeJS.svg";
import NuxtJSSvg from "../assets/NuxtJS.svg";
import GitSvg from "../assets/Git.svg";
import JavascriptSvg from "../assets/Javascript.svg";
import NextJSSVG from "../assets/NextJS.svg";
import TypescriptSvg from "../assets/Typescript.svg";
import TailwindCSSSvg from "../assets/TailwindCSS.svg";
import Frontend from "../assets/Frontend.png";
import Backend from "../assets/Backend.png";
import { getExperience } from "../constants/date.ts";

function TechNameIcon({ src, title }) {
  return (
    <div className="flex items-center gap-2 bg-cream p-2">
      <img
        loading="lazy"
        src={src}
        className="h-5 w-5"
        alt="vjdknv kjdnkj ndkj nkjfd"
      />
      <span className="font-semibold text-lg">{title}</span>
    </div>
  );
}

function SpecialitiesCard({ iconSrc, title, description }) {
  return (
    <div className="bg-cream w-80 p-10 flex flex-col gap-y-3 shadow-md">
      <img loading="lazy" src={iconSrc} className="h-7 w-7" alt="img" />
      <h1 className="md:text-2xl text-lg font-semibold">{title}</h1>
      <p className="text-sm md:text-base">{description}</p>
    </div>
  );
}

function Specialities() {
  return (
    <div className="md:py-16 p-5 md:px-0 container mx-auto">
      <div className="grid md:grid-cols-[30%_70%] py-4">
        <div className="flex gap-4">
          <span className="w-20 h-[2px] mt-5 bg-primary hidden md:inline" />
          <h1 className="text-2xl md:text-4xl font-semibold mx-auto md:mx-0">
            Meet My <br className="hidden md:inline" /> Technology
          </h1>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-3 md:mt-0">
          <TechNameIcon src={ReactSvg} title="React" />
          <TechNameIcon src={VueJSSvg} title="Vue" />
          <TechNameIcon src={NextJSSVG} title="NextJS" />
          <TechNameIcon src={NuxtJSSvg} title="Nuxt JS" />
          <TechNameIcon src={HtmlSvg} title="HTML" />
          <TechNameIcon src={CssSvg} title="CSS" />
          <TechNameIcon src={JavascriptSvg} title="JavaScript" />
          <TechNameIcon src={TypescriptSvg} title="Typescript" />
          <TechNameIcon src={NestJSSvg} title="Nest JS" />
          <TechNameIcon src={NodeJSSvg} title="Node JS" />
          <TechNameIcon src={GitSvg} title="Git" />
          <TechNameIcon src={TailwindCSSSvg} title="Tailwind CSS" />
        </div>
      </div>

      <div className="flex flex-col justify-center items-center">
        <h2 className="text-2xl md:text-4xl pt-5 pb-2 font-semibold">
          Specialities
        </h2>
        <p className="md:w-1/3 text-center">
          Allow me to highlight my specific areas of expertise. 💻
        </p>
      </div>

      <div className="flex justify-around flex-wrap gap-4">
        <SpecialitiesCard
          iconSrc={Frontend}
          title="Front End Developer"
          description={`As a Front-End Developer with over ${getExperience(
            "2021-07-25"
          )} of experience, I specialize in using technologies such as ReactJS and Vue to develop websites.`}
        />

        <SpecialitiesCard
          iconSrc={Backend}
          title="Back End Developer"
          description={`As a Back-End Developer with over ${getExperience('2022-07-01')} of experience, I have a strong proficiency in utilizing NodeJS and NestJS to manage and develop robust, efficient and scalable back-end systems and APIs.`}
        />
      </div>
    </div>
  );
}

export default Specialities;
