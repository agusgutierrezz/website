import React, { useState } from "react";
import Navigation from "./Navigation";
import Project from "./Project";

const Header = () => {
  return (
    <div className="header">
      <Navigation />
      <Project />
      <h1 className="header__title">
        Welcome to my portfolio. Look around and enjoy!
      </h1>
    </div>
  );
};

export default Header;
// We pass a callback to Child
