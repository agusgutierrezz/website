import React from "react";

const Project = (props) => {
  return (
    <div className="project">
      <figure className="project__circle"></figure>
      <h3 style={{ color: props.color }} className="project__text">
        Start a project
      </h3>
    </div>
  );
};

export default Project;
