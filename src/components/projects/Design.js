import React, { useEffect } from "react";

import coffee from "../../assets/coffeFull.png";
import corp from "../../assets/corpFull.png";
import finantial from "../../assets/finantialFull.png";
import skin from "../../assets/skinFull.png";
import Header from "../layout/Header";
import Bottom from "../layout/Bottom";

const Design = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <Header
        link={"/"}
        place={"Back to home"}
        name={"Check out some of my designs!"}
      />
      <Bottom />
      <div className="design_bg">
        <div className="design__img__container">
          <img src={coffee} alt="" className="design__img design__img--1" />
        </div>
        <div className="design__img__container">
          <img src={corp} alt="" className="design__img design__img--2" />
        </div>
        <div className="design__img__container">
          <img src={finantial} alt="" className="design__img design__img--3" />
        </div>
        <div className="design__img__container">
          <img src={skin} alt="" className="design__img design__img--4" />
        </div>
      </div>
    </>
  );
};

export default Design;
