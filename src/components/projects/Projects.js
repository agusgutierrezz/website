import React, { useEffect } from "react";
import Header from "../layout/Header";
import Bottom from "../layout/Bottom";

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
        <div className="projects__text"></div>
        <div className="projects__images gallery">
          <figure className="gallery_item gallery_item--1">
            <img src={houses} alt="" className="gallery_img" />
          </figure>
          <figure className="gallery_item gallery_item--2">
            <img src={food} alt="" className="gallery_img" />
          </figure>
          <figure className="gallery_item gallery_item--3">
            <img src={natour} alt="" className="gallery_img" />
          </figure>
          <figure className="gallery_item gallery_item--4">
            <img src={medical} alt="" className="gallery_img" />
          </figure>
          <figure className="gallery_item gallery_item--5">
            <img src={tutti} alt="" className="gallery_img" />
          </figure>
          <figure className="gallery_item gallery_item--6">
            <img src={recipic} alt="" className="gallery_img" />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Projects;
