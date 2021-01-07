import React from "react";

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
              <a href="#mywork" className="navigation__link">
                <span>02</span>My Work!
              </a>
            </li>

            <li className="navigation__item">
              <a href="#mywork" className="navigation__link">
                <span>02</span>My Work!
              </a>
            </li>
            <li className="navigation__item">
              <span>03</span>Contact Me!
            </li>
          </ul>
        </nav>
      </div>

      <div className="project">
        <span className="project__circle"></span>
      </div>
    </div>
  );
};

export default Navigation;
