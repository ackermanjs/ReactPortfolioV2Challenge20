import React from "react";
import "./ProjectCards.css";
import projOne from "../images/options.png";
import projtwo from "../images/password.png";
import projThree from "../images/note.png";

const ProjectCards = () => {
  return (
    <div className="cards-container">
      <div className="project-cards">
        <div className="project-card">
          <img src={projOne} alt="Project 1" />
          <div className="overlay">
            <h3>Code Quiz</h3>
            <p></p>
          </div>
        </div>
        <div className="project-card">
          <img src={projtwo} alt="Project 2" />
          <div className="overlay">
            <h3>Password Generator</h3>
            <p></p>
          </div>
        </div>
        <div className="project-card">
          <img src={projThree} alt="Project 3" />
          <div className="overlay">
            <h3>Note Taker</h3>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCards;
