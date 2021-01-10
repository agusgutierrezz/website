import React from "react";
import MyForm from "./MyForm";
import Navigation from "../layout/Navigation";

const Contact = () => {
  return (
    <div id="contact" className="contact">
      <Navigation link={"/"} place={"Back to home"} />

      <MyForm />
    </div>
  );
};

export default Contact;
