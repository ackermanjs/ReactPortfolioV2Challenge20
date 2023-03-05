import React from "react";
import { NavLink } from "react-router-dom";
import './TopNavBar.css';


const TopNavBar = () => {
  return (
    <div className="topnav-container">
      <nav className="topnav">
        <div className="topnav__logo">
          {/* <img src={ reactLogo } alt="logo" ></img> */}
          <span className="topnav__logo-text">Jeffrey Ackerman</span>
        </div>
        {/* my intention is to make a mobile nav button here:
        <div className="toggleNav">
          <button className="toggle__button">X</button>
        </div> */}
        <div className="topnav__links">
          <ul className="topnav__ul">
              <li>
                  <NavLink to="/aboutpage">About</NavLink>
              </li>
              <li>
                  <NavLink to="/projectspage">Projects</NavLink>
              </li>
              <li>
                  <NavLink to="/contactpage">Contact</NavLink>
              </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default TopNavBar;