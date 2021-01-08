import React from "react";
import Header from "./Header";

const WorkDetail = (props) => {
  return (
    <>
      <Header place={"Go back to Home"} link={"/"} />
      <div className="workBg">
        <div className="workBg__info">
          <h1 className="workBg__info--h1"> {props.title}</h1>
          <p className="workBg__info--title">{props.paragraph}</p>
          <div>
            <a className="workBg__info--btn" href={props.link}>
              &rarr; Go to the page!
            </a>

            <a className="workBg__info--btn" href={props.linkGh}>
              &rarr; Go to the Repo!
            </a>
          </div>
        </div>
        <div className="workBg__img--container">
          <img className="workBg__img" src={props.img} alt="project-img" />
        </div>
      </div>
    </>
  );
};

export default WorkDetail;
