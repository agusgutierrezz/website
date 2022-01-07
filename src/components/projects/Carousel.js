import React from "react";
import { Link } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";
import Projects from "./Projects";





const Carousel = () => {
  return (
    <div id="myWork" className="carousel__container">
      <ScrollAnimation animateIn="bounceInRight" animateOut="bounceOutLeft">
        <h1 className="carousel__title">What I do</h1>
      </ScrollAnimation>
      <ScrollAnimation animateIn="bounceInLeft" animateOut="bounceOutRight">
        <h1 className="carousel__title">What I do</h1>
      </ScrollAnimation>
     <Projects headerShow = {false} />
      <Link to={"/projects"}>
        <button className="carousel__btn all">
          {" "}
         Explore All!<span className="arrow">&rarr;</span> 
        </button>
      </Link>
    </div>
  );
};

export default Carousel;
