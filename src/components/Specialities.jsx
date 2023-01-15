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

function TechNameIcon({ src, title }) {
  return (
    <div className="flex items-center gap-2 bg-cream p-2">
      <img src={src} className="h-5 w-5" alt="vjdknv kjdnkj ndkj nkjfd" />
      <span className="font-semibold text-lg">{title}</span>
    </div>
  );
}

function SpecialitiesCard({ iconSrc, title, description }) {
  return (
    <div className="bg-cream w-80 p-10 flex flex-col gap-y-3 shadow-md">
      <img src={iconSrc} className="h-7 w-7" alt="vjdknv kjdnkj ndkj nkjfd" />
      <h1 className="text-2xl font-semibold">{title}</h1>
      <p>{description}</p>
    </div>
  );
}

function Specialities() {
  return (
    <div className="py-16 container mx-auto">
      <div className="grid grid-cols-[30%_70%] py-4">
        <div className="flex gap-4">
          <span className="w-20 h-[2px] mt-5 bg-primary" />
          <h1 className="text-4xl font-semibold">
            Meet My <br /> Technology
          </h1>
        </div>

        <div className="grid grid-cols-4 gap-3">
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
        <h2 className="text-4xl pt-5 pb-2 font-semibold">Specialities</h2>
        <p className="w-1/3 text-center">
          Allow me to highlight my specific areas of expertise. 💻
        </p>
      </div>

      <div className="flex justify-around flex-wrap gap-4">
        <SpecialitiesCard
          iconSrc={Frontend}
          title="Front End Developer"
          description="As a Front-End Developer with over a year of experience, I specialize in using technologies such as ReactJS and Vue to develop websites."
        />

        <SpecialitiesCard
          iconSrc={Backend}
          title="Back End Developer"
          description="As a Back-End Developer with over 3 months of experience, I have a strong proficiency in utilizing NodeJS and NestJS to manage and develop robust, efficient and scalable back-end systems and APIs."
        />
      </div>
    </div>
  );
}

export default Specialities;
