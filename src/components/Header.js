import React, { useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";

import Navigation from "./Navigation";
import Project from "./Project";

const Header = () => {
  return (
    <>
      <nav>
        <Navigation />
        <Project />
      </nav>
      <div className="header">
        <h3 className="header__text">Start a project</h3>
        <h1 className="header__title">
          Welcome to my portfolio. Look around and enjoy!
        </h1>
      </div>
    </>
  );
};

export default Header;
// We pass a callback to Child
