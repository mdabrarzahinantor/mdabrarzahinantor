import React from "react";
import "./Connect.css";
function Connect() {
  return (
    <div id="connect" className="connect">
      <div
        data-aos="fade-in"
        data-aos-duration="1000"
        data-aos-delay="300"
        data-aos-easing="ease-in-out-quad"
        className=" spcl"
      >
        Connect
      </div>
      <div
        data-aos="fade-up"
        duration="1500"
        data-aos-delay="500"
        data-aos-easing="ease-in-out-back"
        className="connect-sub-header special-sub-header"
      >
        What are you thinking about?
      </div>
      <div className="connect-container">
        <div className="connect-left">
          <div
            data-aos="zoom-in"
            duration="1500"
            data-aos-delay="500"
            data-aos-easing="ease-in-out-back"
            className="connect-left-header"
          >
            LET'S
            <br />
            TALK!
          </div>
        </div>
        <div className="connect-right">
          <input
            className="connect-right-name"
            placeholder="Write Your Name"
            type="text"
          />
          <input
            className="connect-right-email"
            placeholder="Write Your Email"
            type="email"
          />
          <input
            className="connect-right-desc"
            placeholder="Write Your Project Description"
            type="text"
          />
          <textarea
            className="connect-right-message"
            placeholder="Write Your Message"
            type="text"
          />
          <button type="submit">Submit</button>
        </div>
      </div>
    </div>
  );
}

export default Connect;
