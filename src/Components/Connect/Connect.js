import React from "react";
import "./Connect.css";
function Connect() {
  return (
    <div id="connect" className="connect">
      <div className=" spcl">Connect</div>
      <div className="connect-sub-header special-sub-header">
        What are you thinking about?
      </div>
      <div className="connect-container">
        <div className="connect-left">
          <div className="connect-left-header">
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
