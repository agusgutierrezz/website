import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import houses from "../assets/houses.jpg";
import food from "../assets/food.jpg";
import natour from "../assets/natour.jpg";

const handleDragStart = (e) => e.preventDefault();

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};

const items = [
  <div className="carousel__card--1">
    <img src={houses} onDragStart={handleDragStart} className="carousel__img" />
    <p className="carousel__text">Name</p>
    <button className="carousel__btn">&rarr; Explore</button>
  </div>,
  <div className="carousel__card--2">
    <img src={food} onDragStart={handleDragStart} className="carousel__img" />
    <p className="carousel__text">Name</p>
    <button className="carousel__btn">&rarr; Explore</button>
  </div>,
  <div className="carousel__card--3">
    <img src={natour} onDragStart={handleDragStart} className="carousel__img" />
    <p className="carousel__text">Name</p>
    <button className="carousel__btn">&rarr; Explore</button>
  </div>,
  <div className="carousel__card--1">
    <img src={houses} onDragStart={handleDragStart} className="carousel__img" />
    <p className="carousel__text">Name</p>
    <button className="carousel__btn">&rarr; Explore</button>
  </div>,
  <div className="carousel__card--2">
    <img src={food} onDragStart={handleDragStart} className="carousel__img" />
    <p className="carousel__text">Name</p>
    <button className="carousel__btn">&rarr; Explore</button>
  </div>,
  <div className="carousel__card--3">
    <img src={natour} onDragStart={handleDragStart} className="carousel__img" />
    <p className="carousel__text">Name</p>
    <button className="carousel__btn">&rarr; Explore</button>
  </div>,
];

const Carousel = () => {
  return (
    <div className="carousel">
      <ScrollAnimation animateIn="bounceInRight" animateOut="bounceOutLeft">
        <h1 className="carousel__title">Featured projects</h1>
      </ScrollAnimation>
      <ScrollAnimation animateIn="bounceInLeft" animateOut="bounceOutRight">
        <h1 className="carousel__title">Featured projects</h1>
      </ScrollAnimation>
      <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        disableButtonsControls={true}
      />
    </div>
  );
};

export default Carousel;
