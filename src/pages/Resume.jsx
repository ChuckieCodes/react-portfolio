import React from "react";
import { Link } from "react-router-dom";

const fe = ["HTML", "CSS", "JavaScript", "React.js"];
const be = ["Node.js", "Express.js", "Inquirer.js", "MySQL"];

const Resume = () => {
  return (
    <>
      <h1>Resume</h1>
      <p>
        Open to work and contribute to open source projects, you can download my resume{" "}
        <Link to="/files/carlos-mario-palacio.pdf" target="_blank" download>
          here.
        </Link>
      </p>
      <br />
      <h3>Front-End</h3>
      <ul>
        {fe.map((element, index) => (
          <li key={index}>{element}</li>
        ))}
      </ul>
      <h3>Back-End</h3>
      <ul>
        {be.map((element, index) => (
          <li key={index}>{element}</li>
        ))}
      </ul>
    </>
  );
};

export default Resume;
