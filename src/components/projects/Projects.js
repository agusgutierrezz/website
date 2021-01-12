import React, { useEffect } from "react";
import Header from "../layout/Header";
import Bottom from "../layout/Bottom";
import Project from "./Project";

import houses from "../../assets/houses.jpg";
import food from "../../assets/food.jpg";
import natour from "../../assets/natour.jpg";
import medical from "../../assets/medical.jpg";
import tutti from "../../assets/tutti.jpg";
import recipic from "../../assets/recipic.jpg";
const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div>
      <Header
        link={"/"}
        place={"Back to home"}
        name={"Look around and enjoy my work!"}
      />
      <Bottom />
      <div className="projects__container">
        <div className="projects__images gallery">
          <div className="gallery_item gallery_item--1">
            <Project
              img={houses}
              name={"Css Grid"}
              link={"/grid"}
              linkOut={"https://nexterfront.netlify.app/"}
            />
          </div>
          <div className="gallery_item gallery_item--2">
            <Project
              img={food}
              name={"React Hooks"}
              link={"/ironcook"}
              linkOut={"https://agusgutierrezz.github.io/drag-drop/"}
            />
          </div>
          <div className="gallery_item gallery_item--3">
            <Project
              img={natour}
              name={"CSS Interactions"}
              link={"/cssInteractions"}
              linkOut={"https://natourfront.netlify.app/"}
            />
          </div>
          <div className="gallery_item gallery_item--4">
            <Project
              img={medical}
              name={"Bootstrap"}
              link={"/bootstrap"}
              linkOut={"https://connectfront.netlify.app/"}
            />
          </div>
          <div className="gallery_item gallery_item--5">
            <Project
              img={tutti}
              name={"Javascript"}
              link={"/tutti"}
              linkOut={"https://agusgutierrezz.github.io/TuttiFrutti/"}
            />
          </div>
          <div className="gallery_item gallery_item--6">
            <Project img={recipic} name={"Web Design"} link={"/design"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
