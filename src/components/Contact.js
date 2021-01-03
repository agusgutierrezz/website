import React from "react";
import likedin from "../assets/linkedin.svg";
const Contact = () => {
  return (
    <div className="contact">
      <h3 className="contact__title">Have a project? </h3>
      <h3 className="contact__title">Let´s talk. </h3>
      <div className="rotation-wrapper-outer">
        <div className="rotation-wrapper-inner">
          <span className="element-to-rotate">Contact</span>
        </div>
      </div>
      <div className="contact__info">
        <div className="contact__links">
          <h6 className="contact__links-p">Reach me</h6>
          <p className="contact__links-m">agusgutierrezperez@gmail.com</p>
          <picture className="contact__links-img">
            <img src={likedin} alt="" />
          </picture>
        </div>
        <div className="contact__copyright">
          this portfolio is a react app, made using SASS and love. the design is
          from vrrb.com.
        </div>
      </div>
    </div>
  );
};

export default Contact;
