import React from "react";
import { Link } from "react-router-dom";

const Project = (props) => {
  return (
    <>
      <div className="gallery_item_overlay"></div>
      <img className="gallery_img" src={props.img} alt="project view" />
      <div className="gallery_item_details">
        <h3 className="gallery_item_details-title">{props.name}</h3>
        <div className="gallery_item_details-btn">
          <Link to={props.link} className="gallery_item_details-text">
            See More!
          </Link>
          <a href={props.linkOut} className="gallery_item_details-text ">
            Go straight to the page!
          </a>
        </div>
      </div>
    </>
  );
};

export default Project;
