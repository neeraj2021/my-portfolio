import React from "react";
import LinkedinSvg from "../assets/LinkedIn.svg";
import GithubSvg from "../assets/Github.svg";
import MediumSvg from "../assets/Medium.svg";
import Model from "../assets/Model.png";
import { LinkedinUrl, GithubUrl, MediumUrl } from "../constants";

const Intro = () => {
  return (
    <div className="flex w-full upperBackground bg-cover bg-bottom bg-no-repeat">
      <div id="left" className="w-1/2 self-end h-96">
        <img src={Model} className="h-full mx-auto" alt="React logo" />
      </div>
      <div id="right">
        <div className="my-10">
          <h1 className="text-6xl font-semibold">Hi, I'm Neeraj</h1>
          <h1 className="text-4xl font-semibold">A Passionate Developer</h1>
          {/* <h1 className="text-4xl font-semibold">Developer</h1> */}
        </div>
        <p className="w-1/2 my-8">
          A full stack software engineer with a strong attention to detail and a
          dedication to quality
        </p>
        <div id="button" className="">
          <button className="btn bg-blue-600 mr-4 hover:bg-blue-500">
            Contact Me
          </button>
          <button className="btn bg-green-600 hover:bg-green-500">
            Resume
          </button>
        </div>
        <div className="flex gap-6 mt-16 py-4 items-center flex-wrap">
          <p className="font-medium text-xl">Follow me on </p>
          <a href={LinkedinUrl} target="_blank">
            <img src={LinkedinSvg} className="w-5 h-5" alt="React logo" />
          </a>
          <a href={GithubUrl} target="_blank">
            <img src={GithubSvg} className="w-5 h-5" alt="React logo" />
          </a>
          <a href={MediumUrl} target="_blank">
            <img src={MediumSvg} className="w-5 h-5" alt="React logo" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Intro;
