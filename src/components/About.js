import React from "react";

import berlin from "../assets/berlin.jpg";
import mendoza from "../assets/mendoza.png";
const About = () => {
  return (
    <div className="" id="about">
      <div className="about">
        <img className="about__img--1" src={berlin} alt="Berlin" />

        <div className="about__img-ut">
          <img className="about__img--2" src={mendoza} alt="Mendoza" />
        </div>
      </div>

      <div className="about__text">
        <div className="about__text_primary">
          <div className="lds-ellipsis">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <h3>
            I´m a Front End Developer based in Berlin working to make the web a
            happier place.
          </h3>
        </div>

        <h5 className="about__text_secondary">
          I’m a hard working and dedicated professional front-end developer/user
          interface designer with a keen eye for detail, and a determination to
          deliver the very highest quality. I take great pride in my work, and I
          always try to better myself with every project I work on. I like to
          write semantic, cross browser compatible code by hand that is
          re-useable, maintainable and easy to understand. I am motivated,
          enthusiastic and well organised, with a keen eye for beautiful design,
          primarily based around user interfaces. The main areas of my expertise
          are HTML(5), CSS(3) and JavaScript (native and jQuery) but I have
          intermediate knowledge of PHP and MySQL.
        </h5>
      </div>
    </div>
  );
};

export default About;
