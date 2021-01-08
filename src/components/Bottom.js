import React from "react";
const scrollToBottom = () => {
  window.scrollTo({
    top: 1200,
    behavior: "smooth",
  });
};
const Bottom = () => {
  return (
    <div className="bottom" onClick={() => scrollToBottom()}>
      &darr;
    </div>
  );
};

export default Bottom;
