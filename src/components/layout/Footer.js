import React from "react";

import likedin from "../../assets/linkedin.svg";
const footer = () => {
  return (
    <div className="footer">
      <div className="footer__info">
        <div className="footer__links">
          <h6 className="footer__links-p">Reach me</h6>
          <p className="footer__links-m">agusgutierrezperez@gmail.com</p>
          <a
            href="https://www.linkedin.com/in/agustina-gutierrez/"
            className="footer__links-img"
          >
            <img src={likedin} alt="" />
          </a>
          <div className="footer__links-copy">
            This portfolio was made by me, using React, Sass and love.
          </div>
        </div>
      </div>
    </div>
  );
};

export default footer;
