import React, { useState } from "react";
import axios from "axios";
import contact from "../assets/contact.jpg";

function MyForm() {
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null,
  });
  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg },
    });
    if (ok) {
      form.reset();
    }
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    setServerState({ submitting: true });
    axios({
      method: "post",
      url: "https://formspree.io/f/xwkwaver",
      data: new FormData(form),
    })
      .then((r) => {
        handleServerResponse(true, "Thanks!", form);
      })
      .catch((r) => {
        handleServerResponse(false, r.response.data.error, form);
      });
  };
  return (
    <div className="contact__dashboard">
      <div className="contact__assets">
        <h1 className="contact__assets--text">
          Have a project? Let´s talk! I´ll get back to you right away!{" "}
        </h1>
        <img src={contact} alt="" className="contact__assets--img" />
      </div>
      <div className="contact__container">
        <form className="contact__form" onSubmit={handleOnSubmit}>
          <label className="contact__form--label" htmlFor="email">
            Email:
          </label>
          <div style={{ position: "relative" }} className="">
            <input
              className="contact__form--input_effect"
              id="email"
              name="email"
              type="email"
              required
            />
            <span className="contact__form--input_effect_border"></span>
          </div>

          <label htmlFor="message" className="contact__form--label">
            Message:
          </label>
          <div style={{ position: "relative" }} className="">
            <textarea
              id="message"
              className="contact__form--input_effect"
              name="message"
            ></textarea>
            <span className="contact__form--input_effect_border"></span>
          </div>
          <div className="contact__form--rotation-wrapper-outer">
            <div className="contact__form--rotation-wrapper-inner">
              <button
                type="submit"
                className="contact__form--element-to-rotate"
                disabled={serverState.submitting}
              >
                Send
              </button>
            </div>
          </div>
          {serverState.status && (
            <p className={!serverState.status.ok ? "errorMsg" : ""}>
              {serverState.status.msg}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}

export default MyForm;
