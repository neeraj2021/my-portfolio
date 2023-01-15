/* eslint-disable react/no-array-index-key */
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { workArr } from "../constants/work.ts";
import { educationArr } from "../constants/education.ts";

function ExperienceTitle({ title }) {
  return (
    <h2 className="text-3xl p-5 pb-0 flex justify-center font-semibold">
      {title}
    </h2>
  );
}

function WorkExperience() {
  return (
    <div>
      <ExperienceTitle title="Work Experience" />

      <VerticalTimeline animate={false}>
        {workArr.map((work, index) => (
          <VerticalTimelineElement
            className="vertical-timeline-element--work my-10"
            contentArrowStyle={{
              borderRight: "10px solid  rgb(33, 150, 243)",
            }}
            date={work.date}
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<FontAwesomeIcon icon={work.icon} />}
            key={index}
          >
            <h3 className="font-semibold text-2xl">{work.position}</h3>

            <div className="flex justify-between items-end pb-4">
              <h3 className="font-semibold text-xl">{work.company}</h3>
              <span className="text-sm">{work.location}</span>
            </div>

            {work.projects.map((project, projectIndex) => (
              <div className="pb-6" key={projectIndex}>
                <h5 className="font-medium bg-gray-100 py-1">
                  {project.title}
                </h5>

                {project.details.map((detail, detailIndex) => (
                  <div key={detailIndex}>
                    <h5 className="font-medium mt-3">{detail.subtitle}</h5>

                    {detail.points.map((point, pointIndex) => (
                      <div className="flex flex-row gap-2" key={pointIndex}>
                        <FontAwesomeIcon
                          icon={faCircle}
                          className="h-[5px] mt-[10px]"
                        />
                        <span className="p-0 m-0 text-sm">{point}</span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            ))}
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>

      <ExperienceTitle title="Education" />

      <VerticalTimeline animate={false}>
        {educationArr.map((education) => (
          <VerticalTimelineElement
            className="vertical-timeline-element--work my-10"
            contentArrowStyle={{
              borderRight: "10px solid  rgb(33, 150, 243)",
            }}
            date={education.date}
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<FontAwesomeIcon icon={education.icon} />}
          >
            <h3 className="font-semibold text-xl">{education.institute}</h3>
            <h4>{education.location}</h4>
            <p>{education.course}</p>
            <p>{education.result}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
}

export default WorkExperience;
