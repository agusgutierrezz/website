import React from "react";

import likedin from "../../assets/linkedin.svg";
const footer = () => {
  return (
    <div className="footer">
      <div className="footer__info">
        <div className="footer__links">
          <h6 className="footer__links-p">Reach me</h6>
          <p className="footer__links-m">agusgutierrezperez@gmail.com</p>
          <picture className="footer__links-img">
            <img src={likedin} alt="" />
          </picture>
        </div>
      </div>
    </div>
  );
};

export default footer;
