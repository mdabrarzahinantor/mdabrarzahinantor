import React from "react";
import "./Projects.css";
import AboutCardIllustrationSearchEngineAnimated from "../../Assets/Images/AboutCardIllustrationSearchEngineAnimated.svg";
import AboutCardIllustrationCoronaTrackerAnimated from "../../Assets/Images/AboutCardIllustrationCoronaTrackerAnimated.svg";
import AboutCardIllustrationChatWebAppAnimated from "../../Assets/Images/AboutCardIllustrationChatWebAppAnimated.svg";
import AboutCardIllustrationEcommerceAnimated from "../../Assets/Images/AboutCardIllustrationEcommerceAnimated.svg";
import AboutCardIllustrationSocialMediaAnimated from "../../Assets/Images/AboutCardIllustrationSocialMediaAnimated.svg";

import Bullet from "../../Assets/Images/BulletMarker.svg";
function About() {
  return (
    <div id="projects" className="about">
      <div className="spc-container">
        <div className=" spcl">Projects</div>
        <div className="about-sub-header special-sub-header">
          create your first project that inspires
        </div>
      </div>
      <div className="about-container">
        {/* ----------Card--------------
        -----------------------------Card
        ---------------Card------------ */}
        <div className="about-card">
          <div className="about-card-image">
            <img src={AboutCardIllustrationSearchEngineAnimated} />
          </div>
          <div className="about-card-container">
            <div className="about-card-header">search engine webapp using:</div>
            <div className="about-card-desc">
              <ul>
                <li>
                  <img src={Bullet} /> <div> ReactJS</div>
                </li>
                <li>
                  <img src={Bullet} />
                  <div> React Router</div>
                </li>
                <li>
                  <img src={Bullet} />
                  <div> Google Custom Search Api</div>
                </li>
              </ul>
            </div>
            <div className="about-card-buttons">
              <a href="#">
                <div className="about-card-button btn1">Learn More</div>
              </a>
              <a href="#">
                <div className="about-card-button btn2">Github</div>
              </a>
            </div>
          </div>
        </div>
        {/* ----------Card--------------
        -----------------------------Card
        ---------------Card------------ */}
        <div className="about-card">
          <div className="about-card-image">
            <img src={AboutCardIllustrationCoronaTrackerAnimated} />
          </div>
          <div className="about-card-container">
            <div className="about-card-header">
              realtime Covid19 tracker using:
            </div>
            <div className="about-card-desc">
              <ul>
                <li>
                  <img src={Bullet} /> <div> ReactJS</div>
                </li>
                <li>
                  <img src={Bullet} />
                  <div> Disease Api</div>
                </li>
                <li>
                  <img src={Bullet} />
                  <div> Realtime</div>
                </li>
              </ul>
            </div>
            <div className="about-card-buttons">
              <a href="#">
                <div className="about-card-button btn1">Learn More</div>
              </a>
              <a href="#">
                <div className="about-card-button btn2">Github</div>
              </a>
            </div>
          </div>
        </div>
        {/* ----------Card--------------
        -----------------------------Card
        ---------------Card------------ */}
        <div className="about-card">
          <div className="about-card-image">
            <img src={AboutCardIllustrationChatWebAppAnimated} />
          </div>
          <div className="about-card-container">
            <div className="about-card-header">chat webapp using: </div>
            <div className="about-card-desc">
              <ul>
                <li>
                  <img src={Bullet} /> <div> ReactJS</div>
                </li>
                <li>
                  <img src={Bullet} />
                  <div>React Router</div>
                </li>
                <li>
                  <img src={Bullet} />
                  <div> Google Authentication</div>
                </li>
                <li>
                  <img src={Bullet} />
                  <div> Firebase</div>
                </li>
              </ul>
            </div>
            <div className="about-card-buttons">
              <a href="#">
                <div className="about-card-button btn1">Learn More</div>
              </a>
              <a href="#">
                <div className="about-card-button btn2">Github</div>
              </a>
            </div>
          </div>
        </div>
        {/* ----------Card--------------
        -----------------------------Card
        ---------------Card------------ */}
        <div className="about-card">
          <div className="about-card-image">
            <img src={AboutCardIllustrationEcommerceAnimated} />
          </div>
          <div className="about-card-container">
            <div className="about-card-header">ecommerce webapp using:</div>
            <div className="about-card-desc">
              <ul>
                <li>
                  <img src={Bullet} /> <div> ReactJS</div>
                </li>
                <li>
                  <img src={Bullet} />
                  <div> React Router</div>
                </li>
                <li>
                  <img src={Bullet} />
                  <div> Firebase</div>
                </li>
                <li>
                  <img src={Bullet} />
                  <div> Authentication</div>
                </li>
              </ul>
            </div>
            <div className="about-card-buttons">
              <a href="#">
                <div className="about-card-button btn1">Learn More</div>
              </a>
              <a href="#">
                <div className="about-card-button btn2">Github</div>
              </a>
            </div>
          </div>
        </div>

        {/* ----------Card--------------
        -----------------------------Card
        ---------------Card------------ */}
        <div className="about-card">
          <div className="about-card-image">
            <img
              className="nt"
              src={AboutCardIllustrationSocialMediaAnimated}
            />
          </div>
          <div className="about-card-container">
            <div className="about-card-header">social media webapp using:</div>
            <div className="about-card-desc">
              <ul>
                <li>
                  <img src={Bullet} /> <div> ReactJS</div>
                </li>
                <li>
                  <img src={Bullet} />
                  <div> React Router</div>
                </li>
                <li>
                  <img src={Bullet} />
                  <div> Firebase</div>
                </li>
                <li>
                  <img src={Bullet} />
                  <div> Authentication</div>
                </li>
              </ul>
            </div>
            <div className="about-card-buttons">
              <a href="#">
                <div className="about-card-button btn1">Learn More</div>
              </a>
              <a href="#">
                <div className="about-card-button btn2">Github</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
