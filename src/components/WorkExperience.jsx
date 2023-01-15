import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faSchool } from "@fortawesome/free-solid-svg-icons";

function WorkExperience() {
  return (
    <div>
      <h2 className="text-3xl p-5 pb-0 flex justify-center font-semibold">
        Work Experience
      </h2>

      <VerticalTimeline animate={false}>
        <VerticalTimelineElement
          className="vertical-timeline-element--work my-10"
          contentArrowStyle={{ borderRight: "10px solid  rgb(33, 150, 243)" }}
          date="Jan 2022 - Present"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<FontAwesomeIcon icon={faBriefcase} />}
        >
          <h3 className="font-semibold text-xl">Field Assist</h3>
          <h4>Gurgaon (Haryana)</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, quis
            maxime excepturi sit quo harum obcaecati ipsum quam quod facere!
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work my-10"
          contentArrowStyle={{ borderRight: "10px solid  rgb(33, 150, 243)" }}
          date="Aug 2021 - Jan 2022"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<FontAwesomeIcon icon={faSchool} />}
        >
          <h3 className="font-semibold text-xl">Sharp Quest</h3>
          <h4>Ahmedabad (Gujrat)</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed eos
            illo quibusdam adipisci libero. Delectus a illum cumque quam
            aliquid!
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>

      <h2 className="text-3xl p-5 pb-0 flex justify-center font-semibold">
        Education
      </h2>

      <VerticalTimeline animate={false}>
        <VerticalTimelineElement
          className="vertical-timeline-element--work my-10"
          contentArrowStyle={{ borderRight: "10px solid  rgb(33, 150, 243)" }}
          date="Jul 2017 - Jun 2021"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<FontAwesomeIcon icon={faBriefcase} />}
        >
          <h3 className="font-semibold text-xl">
            Indian Institute Of Technology (IIT ISM), Dhanbad
          </h3>
          <h4>Dhanbad (Jharkhand)</h4>
          <p>Bachelor of Technology In Mechanical Engineering</p>
          <p>CGPA - 7.62 / 10</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work my-10"
          contentArrowStyle={{ borderRight: "10px solid  rgb(33, 150, 243)" }}
          date="Jul 2015 - May 2016"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<FontAwesomeIcon icon={faSchool} />}
        >
          <h3 className="font-semibold text-xl">Raja Public School</h3>
          <h4>Dausa (Rajasthan)</h4>
          <p>RBSE Senior Secondary (12th Board)</p>
          <p>Percentage - 82%</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work my-10"
          contentArrowStyle={{ borderRight: "10px solid  rgb(33, 150, 243)" }}
          date="Jul 2015 - May 2016"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<FontAwesomeIcon icon={faSchool} />}
        >
          <h3 className="font-semibold text-xl">Raja Public School</h3>
          <h4>Dausa (Rajasthan)</h4>
          <p>RBSE Secondary (10th Board)</p>
          <p>Percentage - 91%</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default WorkExperience;
