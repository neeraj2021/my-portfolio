/* eslint-disable react/no-array-index-key */
import React from "react";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { projectArr } from "../constants/project";

function ProjectItem({ project, swap }) {
  return (
    <div
      className={`text-white lg:flex gap-8 pb-4 items-center ${
        swap ? "flex-row-reverse" : ""
      }`}
    >
      <div className="">
        <img loading="lazy" src={project.imageSrc} alt={project.imageAlt} />
      </div>

      <div>
        <h4 className="text-xl lg:text-2xl font-semibold">{project.title}</h4>
        {project.details.map((item, index) => (
          <div key={index}>
            <h5 className="text-lg lg:text-xl font-medium mt-3">
              {item.title}
            </h5>
            <div className="px-4">
              {item.points.map((point, subIndex) => (
                <div className="flex gap-2" key={subIndex}>
                  <FontAwesomeIcon icon={faCircle} className="h-2 w-2 mt-2" />
                  <p className="text-sm lg:text-base"> {point}</p>
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
    <div className="bg-primary w-full lg:px-20 px-5 bg-dots">
      <div className="pt-6 pb-10">
        <h3 className="text-white hidden lg:inline-block text-2xl lg:text-4xl font-semibold">
          Take a look at <br /> My recent projects
        </h3>
        <h3 className="text-white text-2xl flex justify-center lg:hidden">
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
