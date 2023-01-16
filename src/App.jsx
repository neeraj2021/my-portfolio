import React from "react";
import Intro from "./components/Intro";
import Specialities from "./components/Specialities";
import Project from "./components/Project";
import WorkExperience from "./components/WorkExperience";

import "react-vertical-timeline-component/style.min.css";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Intro />
      <Specialities />
      <Project />
      <WorkExperience />
      <Footer />
    </>
  );
}

export default App;
