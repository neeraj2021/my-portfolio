/* eslint-disable import/prefer-default-export */
import {
  faBriefcase,
  faSchool,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";

interface IProject {
  title: string; // DMS
  details: {
    subtitle: string; // Frontend
    points: string[];
  }[];
}

interface IWork {
  position: string;
  company: string;
  date: string;
  location: string;
  projects: IProject[];
  icon: IconDefinition;
}

export const workArr: IWork[] = [
  {
    position: "SOFTWARE DEVELOPER ENGINEER",
    company: "FieldAssist",
    date: "Jan 2022 - Present",
    location: "Gurgaon (Haryana)",
    projects: [
      {
        title: "DISTRIBUTED MANAGEMENT SYSTEM (DMS)",
        details: [
          {
            subtitle: "Frontend",
            points: [
              "I created and implemented multiple web pages to manage the supply chain for businesses with an emphasis on providing an easy-to-use interface.",
              "I improved the performance of web pages that handle large amounts of data by optimizing them, resulting in a reduction of loading time by up to 30%.",
              "I employed the use of mixins and VueX to eliminate code duplication and increase code reuse in the project.",
            ],
          },
          {
            subtitle: " Backend",
            points: [
              "I am currently working on multiple project modules and developing new RESTful APIs to meet the specific needs of the business.",
              "I have initiated the process of logging API failures in the discord server to facilitate the identification and resolution of bugs in the production environment.",
            ],
          },
        ],
      },
      {
        title: "INVENTORY MICROSERVICE",
        details: [
          {
            subtitle: "Backend",
            points: [
              "I have separated the inventory functionality from the main service and converted it into a microservice to enable independent management and deployment.",
              "I am currently in the process of developing and making available new external APIs to facilitate communication and sharing of inventory information with other services.",
              "I have optimized the Inventory API's resulting in a significant decrease in loading time from 3 seconds to 500 milliseconds.",
            ],
          },
        ],
      },
    ],
    icon: faBriefcase,
  },
  {
    position: "ASSOCIATE SOFTWARE ENGINEER",
    company: "SharpQuest",
    date: "July 2021 - Jan 2022",
    location: "Ahmedabad (Gujrat)",
    icon: faBriefcase,
    projects: [
      {
        title: "SOLXSYS365",
        details: [
          {
            subtitle: "Frontend",
            points: [
              "I have worked on several pages of the project to incorporate new features as per the requirements.",
              "I have adapted the user interface of project pages for compatibility with mobile devices.",
              "I have replaced inline styles with class-based styles in the project.",
              "I have created a common component for location hierarchy filtering across the project.",
            ],
          },
        ],
      },
    ],
  },
];
