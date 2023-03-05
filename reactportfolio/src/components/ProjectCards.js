import React from "react";
import "./ProjectCards.css";

const ProjectCards = () => {
  return (
    <div className="project-cards">
      <div className="project-card">
        <img src="image1.jpg" alt="Project 1" />
        <div className="overlay">
          <h3>Project 1</h3>
          <p>Description of project 1.</p>
        </div>
      </div>
      <div className="project-card">
        <img src="image2.jpg" alt="Project 2" />
        <div className="overlay">
          <h3>Project 2</h3>
          <p>Description of project 2.</p>
        </div>
      </div>
      <div className="project-card">
        <img src="image3.jpg" alt="Project 3" />
        <div className="overlay">
          <h3>Project 3</h3>
          <p>Description of project 3.</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCards;
