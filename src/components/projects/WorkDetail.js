import React from "react";
import Navigation from "../layout/Navigation";

const WorkDetail = (props) => {
  return (
    <>
      <Navigation link={"/"} place={"Back to home"} />

      <div className="workBg__background">&nbsp;</div>
      <div className="workBg">
        <div className="workBg__wrapper">
          <div className="workBg__box--a">
            {" "}
            <h1 className="workBg__box--a--h1">{props.title}</h1>
          </div>
          <div
            className="workBg__box--b"
            style={{ backgroundImage: `url(${props.img})` }}
          >
            {" "}
            {/* <img className="workBg__box--b--img" src={props.img} alt="" /> */}
          </div>
          <div className="workBg__box--c">
            {" "}
            <p className="workBg__box--c--title">{props.paragraph}</p>
            <div className="workBg__box--c--buttons">
              {" "}
              <a className="workBg__box--c--btn" href={props.link}>
                &rarr; Go to the page!
              </a>
              <a className="workBg__box--c--btn" href={props.linkGh}>
                &rarr; Go to the Repo!
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkDetail;
