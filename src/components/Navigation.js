import React from "react";

import { Link } from "react-router-dom";

const Navigation = (props) => {
  return (
    <div className="navbar" id="navbar">
      <div className="navigation">
        <input
          type="checkbox"
          className="navigation__checkbox"
          id="navi-toggle"
        />

        <label htmlFor="navi-toggle" className="navigation__button">
          <span className="navigation__icon">&nbsp;</span>
        </label>

        <div className="navigation__background">&nbsp;</div>

        <nav className="navigation__nav">
          <ul className="navigation__list">
            <li className="navigation__item">
              <Link to={"/"} className="navigation__link">
                {" "}
                <span>01</span>About Me!{" "}
              </Link>
            </li>
            <li className="navigation__item">
              <a href="#mywork" className="navigation__link">
                <span>02</span>My Work!
              </a>
            </li>
            <li className="navigation__item">
              <Link to={"/contact"} className="navigation__link">
                <span>03</span>Contact Me!
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="project">
        <Link to={props.link}>
          <span className="project__circle"></span>
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
