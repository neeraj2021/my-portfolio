import { faSchool, IconDefinition } from "@fortawesome/free-solid-svg-icons";

interface IEducation {
  institute: string;
  location: string;
  course: string;
  result: string;
  date: string;
  icon: IconDefinition;
}

export const educationArr: IEducation[] = [
  {
    institute: "Indian Institute Of Technology (IIT ISM), Dhanbad",
    location: "Dhanbad (Jharkhand)",
    course: "Bachelor of Technology In Mechanical Engineering",
    result: "CGPA - 7.62 / 10",
    date: "Jul 2017 - Jun 2021",
    icon: faSchool,
  },
  {
    institute: "Raja Public Senior Secondary School",
    location: "Dausa (Rajasthan)",
    course: "RBSE Senior Secondary (12th Board)",
    result: "Percentage - 82%",
    date: "Jul 2015 - May 2016",
    icon: faSchool,
  },
  {
    institute: "Raja Public Senior Secondary School",
    location: "Dausa (Rajasthan)",
    course: "RBSE Secondary (1oth Board)",
    result: "Percentage - 90.83%",
    date: "Jul 2013 - May 2014",
    icon: faSchool,
  },
];
