import React from "react";
import "../components/AboutPage.css";

const AboutPage = () => {
  return (
    <div id="aboutme-page" className="page">
      <div className="page-container">
        <div className="header-container">
          <div className="header">
            <h2 className="header-title">About Me</h2>
          </div>
        </div>
        <div className="content-container">
          <div className="content">
            <p className="content-text">
              As a junior-level full-stack developer, I have experience working
              with a range of technologies and frameworks, including HTML, CSS,
              JavaScript, React, Node.js, and MongoDB. With this skillset, I'm
              able to build web applications from the ground up, starting with
              the front-end user interface and ending with the back-end server
              infrastructure. I can write clean, efficient code that is easy to
              maintain and scale, and I have experience working in both
              individual and team-based environments. Additionally, I am eager
              to learn and am constantly seeking out new technologies and
              techniques to improve my abilities. Overall, as a junior-level
              full-stack developer, I am able to contribute to the development
              of complex web applications and am excited to continue growing my
              skills and knowledge.
            </p>
          </div>
          <div className="button-contaier">
            {/* this is where a button would go, if the page features a button. */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
