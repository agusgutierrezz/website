import React from "react";

import berlin from "../../assets/berlin.jpg";
import mendoza from "../../assets/mendoza.png";
const About = () => {
  return (
    <div className="">
      <div className="about">
        <img className="about__img--1" src={berlin} alt="Berlin" />
        <div className="about__img-ut">
          <img className="about__img--2" src={mendoza} alt="Mendoza" />
        </div>
      </div>

      <div className="about__text " id="about">
        <div className="about__text_primary">
          <h3>
            Hi! I am Agus, a front-end developer based in Berlin working to make
            the web a happier place!
          </h3>
        </div>

        <h5 className="about__text_secondary">
          As a developer, I like to code things from scratch and <b> enjoy</b>{" "}
          bringing ideas to life in browser. <b>React</b> and <b>Css</b> are my
          preferred languages since I truly enjoy to work with{" "}
          <b> micro-interactions </b>
          and <b>motion design</b> . I am confident, naturally curious,
          open-minded, and not afraid to put my hands on new projects or
          challenges.My focus always is helping small businesses and start-ups
          build cohesive brand solutions and new products since I always take my
          <b> passion</b>, knowledge, and expertise into each and every project.
        </h5>
      </div>
    </div>
  );
};

export default About;
