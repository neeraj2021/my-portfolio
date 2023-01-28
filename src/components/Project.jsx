/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/no-array-index-key */
import React from "react";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { projectArr } from "../constants/project";
import GithubSvg from "../assets/Github.svg";

export function GithubLink({ src, href, alt }) {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      <img loading="lazy" src={src} className="w-4 h-4" alt={alt} />
    </a>
  );
}

function ProjectItem({ project, swap }) {
  const handleClick = (link) => {
    if (link) {
      // eslint-disable-next-line no-undef
      window.open(project.link);
    }
  };

  return (
    <div
      className={`text-white md:flex gap-8 pb-4 items-center ${
        swap ? "flex-row-reverse" : ""
      }`}
    >
      <div className="">
        <img loading="lazy" src={project.imageSrc} alt={project.imageAlt} />
      </div>

      <div>
        <h4 className="text-xl md:text-2xl font-semibold flex gap-x-2 items-center">
          <span
            className={`${project.link ? "underline cursor-pointer" : ""}`}
            onClick={() => handleClick(project.link)}
          >
            {project.title}
          </span>
          <GithubLink
            src={GithubSvg}
            href={project.github_server}
            alt="Github"
          />
          <GithubLink
            src={GithubSvg}
            href={project.github_client}
            alt="Github"
          />
        </h4>
        {project.details.map((item, index) => (
          <div key={index}>
            <h5 className="text-lg md:text-xl font-medium mt-3">
              {item.title}
            </h5>
            <div className="px-4">
              {item.points.map((point, subIndex) => (
                <div className="flex gap-2" key={subIndex}>
                  <FontAwesomeIcon icon={faCircle} className="h-2 w-2 mt-2" />
                  <p className="text-sm md:text-base"> {point}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Project() {
  return (
    <div className="bg-primary w-full md:px-20 px-5 bg-dots">
      <div className="pt-6 pb-10">
        <h3 className="text-white hidden md:inline-block text-2xl md:text-4xl font-semibold">
          Take a look at <br /> My recent projects
        </h3>
        <h3 className="text-white text-2xl flex justify-center md:hidden">
          My Recent Projects
        </h3>
      </div>

      {projectArr.map((project, index) => (
        <ProjectItem project={project} key={index} swap={index % 2} />
      ))}
    </div>
  );
}

export default Project;
