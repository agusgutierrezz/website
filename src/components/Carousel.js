import React from "react";
import { Link } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import houses from "../assets/houses.jpg";
import food from "../assets/food.jpg";
import natour from "../assets/natour.jpg";
import medical from "../assets/medical.jpg";
import tutti from "../assets/tutti.jpg";
import recipic from "../assets/recipic.jpg";

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};

const items = [
  <div className="carousel__card--mar">
    <div className="carousel__card-img">
      <div
        style={{ backgroundImage: `url(${houses})` }}
        className="carousel__card-img-child"
      ></div>
    </div>
    <div className="carousel__card_info">
      {" "}
      <p className="carousel__text">Name</p>
      <Link to={"/cssInteractions"}>
        <button className="carousel__btn">
          {" "}
          <span className="carousel__span">&rarr;</span> Explore
        </button>
      </Link>
    </div>
  </div>,
  <div className="carousel__card--margin">
    <div className="carousel__card-img ">
      <div
        className="carousel__card-img-child"
        style={{ backgroundImage: `url(${food})` }}
      ></div>
    </div>
    <div className="carousel__card_info">
      {" "}
      <p className="carousel__text">Name</p>
      <button className="carousel__btn">
        {" "}
        <span className="carousel__span">&rarr;</span> Explore
      </button>
    </div>
  </div>,
  <div className="carousel__card--mar">
    <div className="carousel__card-img">
      <div
        className="carousel__card-img-child"
        style={{ backgroundImage: `url(${natour})` }}
      ></div>
    </div>
    <div className="carousel__card_info">
      {" "}
      <p className="carousel__text">Name</p>
      <button className="carousel__btn">
        {" "}
        <span className="carousel__span">&rarr;</span> Explore
      </button>
    </div>
  </div>,
  <div className="carousel__card--mar">
    <div className="carousel__card-img ">
      <div
        className="carousel__card-img-child"
        style={{ backgroundImage: `url(${medical})` }}
      ></div>
    </div>
    <div className="carousel__card_info">
      {" "}
      <p className="carousel__text">Name</p>
      <button className="carousel__btn">
        {" "}
        <span className="carousel__span">&rarr;</span> Explore
      </button>
    </div>
  </div>,
  <div className="carousel__card--margin">
    <div className="carousel__card-img">
      <div
        className="carousel__card-img-child"
        style={{ backgroundImage: `url(${tutti})` }}
      ></div>
    </div>
    <p className="carousel__text">Name</p>
    <button className="carousel__btn">
      {" "}
      <span className="carousel__span">&rarr;</span> Explore
    </button>
  </div>,
  <div className="carousel__card--mar ">
    <div className="carousel__card-img ">
      <div
        className="carousel__card-img-child"
        style={{ backgroundImage: `url(${recipic})` }}
      ></div>
    </div>
    <div className="carousel__card_info">
      {" "}
      <p className="carousel__text">Name</p>
      <button className="carousel__btn">
        {" "}
        <span className="carousel__span">&rarr;</span> Explore
      </button>
    </div>
  </div>,
];

const Carousel = () => {
  return (
    <div className="carousel__container">
      <ScrollAnimation animateIn="bounceInRight" animateOut="bounceOutLeft">
        <h1 className="carousel__title">Featured projects</h1>
      </ScrollAnimation>
      <ScrollAnimation animateIn="bounceInLeft" animateOut="bounceOutRight">
        <h1 className="carousel__title">Featured projects</h1>
      </ScrollAnimation>

      <div className="carousel">
        <AliceCarousel
          mouseTracking
          items={items}
          responsive={responsive}
          disableButtonsControls={true}
        />
      </div>
    </div>
  );
};

export default Carousel;
