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
      "A CLI application that allows user to generate an svg file based on a series of questions.",
    url: "https://github.com/ChuckieCodes/logo-generator",
  },
  {
    name: "Note Taker",
    description:
      "A web based app that let's user to add notes. This application will use an Express.js back end and will save and retrieve note data from a JSON file.",
    url: "https://github.com/ChuckieCodes/note-taker",
  },
  {
    name: "Employee Tracker",
    description:
      "A CLI app, powered by node, inquirer.js and using mysql for the database. Lets you add, update and browse departments, roles and employees.",
    url: "https://github.com/ChuckieCodes/employee-tracker",
  },
  {
    name: "Ecommerce API",
    description:
      "Should serve as an api for an e-commerce store, built using node express, mysql and sequelize.",
    url: "https://github.com/ChuckieCodes/ecommerce-api",
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
