import React from "react";
import { Row } from "reactstrap";

import Project from "../components/Project";

const projects = [
  {
    name: "Code Quiz",
    description: "A web based quiz app powered by HTML, CSS and JavaScript.",
    url: "https://github.com/ChuckieCodes/code-quiz",
  },
  {
    name: "Day Scheduler",
    description:
      "A simple calendar web app for scheduling your work day. Built using HTML, CSS & jQuery.",
    url: "https://github.com/ChuckieCodes/day-scheduler",
  },
  {
    name: "Weather App",
    description:
      "A web based app that fetch data from open weather api to let the user see the weather forecast for the next 5 days.",
    url: "https://github.com/ChuckieCodes/weather-app",
  },
  {
    name: "Readme Generator",
    description:
      "A CLI app that will help every developer out there to make a README.md file for their projects.",
    url: "https://github.com/ChuckieCodes/readme-generator",
  },
  {
    name: "Logo Generator",
    description:
      "A CLI application that allows user to generate an svg file based on a series of questions..",
    url: "https://github.com/ChuckieCodes/logo-generator",
  },
];

const Portfolio = () => {
  return (
    <>
      <h1>Portfolio</h1>
      <p>Complete collection of my projects.</p>
      <br />
      <Row>
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </Row>
    </>
  );
};

export default Portfolio;
