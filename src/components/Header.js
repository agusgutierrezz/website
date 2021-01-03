import React from "react";

import Navigation from "./Navigation";

const Header = () => {
  return (
    <>
      <Navigation />

      <div className="header">
        <div className="header__bg"> </div>{" "}
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
