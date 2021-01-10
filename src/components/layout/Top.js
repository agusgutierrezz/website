import React from "react";
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
const Top = () => {
  return (
    <div className="top" onClick={() => scrollToTop()}>
      To top!
    </div>
  );
};

export default Top;
