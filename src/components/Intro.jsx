import React from "react";
import LinkedinSvg from "../assets/LinkedIn.svg";
import GithubSvg from "../assets/Github.svg";
import MediumSvg from "../assets/Medium.svg";
import Sde from "../assets/Sde.png";
import { LinkedinUrl, GithubUrl, MediumUrl } from "../constants";

function FollowMeOnLogo({ src, href, alt }) {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      <img loading="lazy" src={src} className="w-5 h-5" alt={alt} />
    </a>
  );
}

function Intro() {
  return (
    <div className="flex w-full upper-background items-center justify-center flex-wrap bg-cover bg-bottom bg-no-repeat px-5 md:px-0">
      <div id="left" className="md:w-1/2 h-96 order-last md:order-first animate-slow-bounce md:block">
        <img
          loading="lazy"
          src={Sde}
          className="h-full mx-auto"
          alt="React logo"
        />
      </div>

      <div id="right">
        <div className="my-5 md:my-10">
          <h1 className="text-4xl md:text-6xl font-semibold">
            Hi, I&apos;m Neeraj
          </h1>
          <h1 className="text-2xl md:text-4xl font-semibold">
            A Passionate Developer
          </h1>
        </div>

        <p className="md:w-1/2 my-4 md:my-8">
          A full stack software engineer with a strong attention to detail and a
          dedication to quality
        </p>

        <div id="button">
          <button
            type="button"
            className="btn bg-blue-600 mr-4 hover:bg-blue-500"
          >
            Contact Me
          </button>
          <button type="button" className="btn bg-green-600 hover:bg-green-500">
            Resume
          </button>
        </div>

        <div className="flex gap-6 mt-4 md:mt-16 py-4 items-center flex-wrap">
          <p className="font-medium text-xl">Follow me on </p>
          <FollowMeOnLogo src={LinkedinSvg} href={LinkedinUrl} alt="Linkedin" />
          <FollowMeOnLogo src={GithubSvg} href={GithubUrl} alt="Github" />
          <FollowMeOnLogo src={MediumSvg} href={MediumUrl} alt="Medium" />
        </div>
      </div>
    </div>
  );
}

export default Intro;
