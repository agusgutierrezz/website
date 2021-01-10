import React from "react";

import Navigation from "./Navigation";

function Header(props) {
  return (
    <>
      <Navigation link={props.link} place={props.place} />
      <div className="header">
        <div className="header__bg"> </div>{" "}
        <div className="header__title">
          <h1>{props.name}</h1>
        </div>
      </div>
    </>
  );
}

export default Header;
// We pass a callback to Child
