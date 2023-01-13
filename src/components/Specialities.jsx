import React from "react";
import TechNameIcon from "./TechNameIcon";
import HtmlSvg from "../assets/HTML.svg";
import CssSvg from "../assets/CSS.svg";
import ReactSvg from "../assets/React.svg";
import VueJSSvg from "../assets/VueJS.svg";
import NestJSSvg from "../assets/NestJS.svg";
import NodeJSSvg from "../assets/NodeJS.svg";
import NuxtJSSvg from "../assets/NuxtJS.svg";
import GitSvg from "../assets/Git.svg";
import JavascriptSvg from "../assets/Javascript.svg";
import NextJSSVG from '../assets/NextJS.svg'
import TypescriptSvg from "../assets/Typescript.svg";
import TailwindCSSSvg from "../assets/TailwindCSS.svg";
import SpecialitiesCard from "./SpecialitiesCard";
import Frontend from "../assets/Frontend.png";
import Backend from "../assets/Backend.png";

const Specialities = () => {
  return (
    <div className="py-16">
      <div className="grid grid-cols-[30%_70%]">
        <div className="flex gap-4">
          <span className="w-20 h-[2px] mt-5 bg-primary"></span>
          <h1 className="text-4xl font-semibold">
            Meet My <br /> Technology
          </h1>
        </div>
        <div className="grid grid-cols-4 gap-3">
          <TechNameIcon src={HtmlSvg} title="HTML" />
          <TechNameIcon src={CssSvg} title="CSS" />
          <TechNameIcon src={JavascriptSvg} title="JavaScript" />
          <TechNameIcon src={TypescriptSvg} title="Typescript" />
          <TechNameIcon src={ReactSvg} title="React" />
          <TechNameIcon src={VueJSSvg} title="Vue" />
          <TechNameIcon src={NestJSSvg} title="Nest JS" />
          <TechNameIcon src={NodeJSSvg} title="Node JS" />
          <TechNameIcon src={NuxtJSSvg} title="Nuxt JS" />
          <TechNameIcon src={GitSvg} title="Git" />
          <TechNameIcon src={TailwindCSSSvg} title="Tailwind CSS" />
          <TechNameIcon src={NextJSSVG} title="NextJS" />
        </div>
      </div>

      <div className="flex flex-col justify-center items-center">
        <h2 className="text-5xl p-5 font-semibold">Specialities</h2>
        <p className="w-1/3 text-center">
          Allow me to highlight my specific areas of expertise. 💻
        </p>
      </div>

      <div className="flex justify-around gap-4">
        <SpecialitiesCard
          iconSrc={Frontend}
          title="FrontEnd Developer"
          description="As a Front-End Developer with over a year of experience, I specialize in using technologies such as ReactJS and Vue to develop websites."
        />
        <SpecialitiesCard
          iconSrc={Backend}
          title="BackEnd Developer"
          description="As a Back-End Developer with over 3 months of experience, I have a strong proficiency in utilizing NodeJS and NestJS to manage and develop robust, efficient and scalable back-end systems and APIs."
        />
      </div>
    </div>
  );
};

export default Specialities;
