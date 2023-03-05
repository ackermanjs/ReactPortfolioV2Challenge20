import React from "react";
import "../components/HomePage.css";
import reactLogo from "../images/working.png";

const HomePage = () => {
  return (
    <div className="page">
      <div className="page-container">
        <div className="header-container">
          <div className="header">
            {/* <img src={reactLogo} alt="logo"></img> */}
            <h2 className="header-title">Hello, I'm Jeffrey.</h2>
          </div>
        </div>
        <div className="content-container">
          <div className="content">
            <p className="content-text">
              Welcome to my Portfolio.
              <br></br>
              You can navigate using the links in the top navigation bar.
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

export default HomePage;
