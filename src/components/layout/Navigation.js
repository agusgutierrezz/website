import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navigation = (props) => {
  const [enabledCheckBox, setEnabledCheckBox] = useState(false);

  const onClick = () => {
    setEnabledCheckBox(!enabledCheckBox);
  };
  return (
    <div className="navbar" id="navbar">
      <div className="navigation">
        <input
          type="checkbox"
          className="navigation__checkbox"
          id="navi-toggle"
          checked={enabledCheckBox}
          onChange={onClick}
        />

        <label htmlFor="navi-toggle" className="navigation__button">
          <span className="navigation__icon">&nbsp;</span>
        </label>

        <div className="navigation__background">&nbsp;</div>
        {enabledCheckBox && (
          <nav className="navigation__nav">
            <ul className="navigation__list">
              <li className="navigation__item" onClick={onClick}>
                <a className="navigation__link" href="#about">
                  <span>01</span>About Me!
                </a>
              </li>

              <li className="navigation__item" onClick={onClick}>
                <a className="navigation__link" href="#myWork">
                  <span>02</span>My Work!
                </a>
              </li>
              <li className="navigation__item" onClick={onClick}>
                <Link to={"/contact"} className="navigation__link">
                  <span>03</span>Contact Me!
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>

      <div className="project">
        <Link to={props.link}>
          <span className="project__circle"></span>
        </Link>
        <h3 className="header__text">{props.place}</h3>
      </div>
    </div>
  );
};

export default Navigation;
