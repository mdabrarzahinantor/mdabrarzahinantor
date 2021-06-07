import React from "react";
import "./About.css";
import ProfilePicPrimary from "../../Assets/Images/ProfilePicPrimary.png";
import Bullet from "../../Assets/Images/BulletMarker.svg";
function Project() {
  return (
    <div id="about" className="myabout">
      <div className="spc-container">
        <div
          data-aos="fade-in"
          data-aos-duration="1000"
          data-aos-delay="300"
          data-aos-easing="ease-in-out-quad"
          className="spcl"
        >
          About
        </div>
        <div
          data-aos="fade-up"
          duration="1500"
          data-aos-delay="500"
          data-aos-easing="ease-in-out-back"
          className="special-sub-header"
        >
          What about me?
        </div>
      </div>
      <div className="myabout-container">
        <div className="myabout-left">
          <img
            data-aos="zoom-in"
            duration="1500"
            data-aos-delay="500"
            data-aos-easing="ease-in-out-back"
            src={ProfilePicPrimary}
          />
        </div>
        <div className="myabout-right">
          <div className="myabout-desc">
            <ul>
              <li>
                <img src={Bullet} />
                <div>
                  <span>Who am I? </span>
                  <span>
                    I'm Abrar. Currently working in Burgeon Bangladesh. I'm
                    working with web development and design for twelve month.
                  </span>
                </div>
              </li>
              <li>
                <img src={Bullet} />
                <div>
                  <span>Why me?</span>
                  <span>
                    {" "}
                    I love to create new things in every project. I focus on the
                    theme of the project to make an inspirational website for
                    you. In every project, I try to learn at least a new thing
                    and eager to implement it. Thank you,
                  </span>
                  <a href="#" className="lit">
                    let's connect!
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
