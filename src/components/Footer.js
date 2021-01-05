import React from "react";
import { Link } from "react-router-dom";

import likedin from "../assets/linkedin.svg";
const footer = () => {
  return (
    <div className="footer">
      <h3 className="footer__title">Have a project? </h3>
      <h3 className="footer__title">Let´s talk. </h3>
      <div className="rotation-wrapper-outer">
        <div className="rotation-wrapper-inner">
          <Link to={"/contact"} className="element-to-rotate">
            Contact
          </Link>
        </div>
      </div>
      <div className="footer__info">
        <div className="footer__links">
          <h6 className="footer__links-p">Reach me</h6>
          <p className="footer__links-m">agusgutierrezperez@gmail.com</p>
          <picture className="footer__links-img">
            <img src={likedin} alt="" />
          </picture>
        </div>
        <div className="footer__copyright">
          this portfolio is a react app, made using SASS and love. the design is
          from vrrb.com.
        </div>
      </div>
    </div>
  );
};

export default footer;
