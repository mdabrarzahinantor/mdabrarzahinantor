import React, { useEffect, useRef, useState } from "react";
import "./Home.css";
import Bar from "../../Assets/Images/Bar.svg";
import CrossMenu from "../../Assets/Images/CrossMenu.svg";
import Logo from "../../Assets/Images/Logo.svg";
import BannerIllustrationAnimated from "../../Assets/Images/BannerIllustrationAnimated.svg";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "100%" },
};

function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="home">
      <div className="scroll-to-top">
        <a href="#">
          <i class="fas fa-arrow-up    "></i>
        </a>
      </div>

      <div className="mynav">
        <motion.div className="mynav-left">
          <a href="#">
            <img src={Logo}></img>
          </a>
        </motion.div>

        <div className="mynav-middle">
          <ul>
            <li>
              <a className="first-child" href="#projects">
                Projects
              </a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#connect">Connect</a>
            </li>
          </ul>
        </div>
        <div className="mynav-right">
          <a href="#projects">Projects</a>
        </div>
      </div>
      {/* Sidebar */}
      <div>
        <div className="mynav-hamburger">
          <a
            // onClick={() => {
            //   document.querySelector(".mysidenav").classList.toggle("active");
            // }}
            id="toggler"
            href="#"
            onClick={() => setIsOpen(!isOpen)}
          >
            <img src={Bar} />
          </a>
        </div>
        <motion.div
          animate={isOpen ? "open" : "closed"}
          variants={variants}
          id="sidenav"
          className=" mysidenav"
        >
          <div className="mynav-crossmenu">
            <a
              onClick={() => setIsOpen(!isOpen)}
              id="toggler1"
              // onClick={() => {
              //   document.querySelector(".mysidenav").classList.toggle("active");
              // }}
              href="#"
            >
              <img src={CrossMenu} />
            </a>
          </div>

          <ul>
            <li>
              <i className="fas fa-tasks    "></i>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <i className="fas fa-clock    "></i>
              <a href="#services">Services</a>
            </li>
            <li>
              <i className="fas fa-portrait    "></i>
              <a href="#about">About</a>
            </li>
            <li>
              <i class="fas fa-envelope    "></i>
              <a href="#connect">Connect</a>
            </li>
          </ul>
        </motion.div>
      </div>
      <div className="banner">
        <div className="banner-left">
          <div className="banner-left-container">
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out-quad"
              className="banner-left-username"
            >
              __mdabrarzahinantor
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="500"
              data-aos-easing="ease-in-out-quad"
              className="banner-left-header"
            >
              find your <span className="highlighter">design,</span>
              <br></br>
              design your <span className="highlighter">finding.</span>
            </div>
            <div
              data-aos="fade-in"
              data-aos-duration="1000"
              data-aos-delay="1000"
              data-aos-easing="ease-in-out-quad"
              className="banner-left-desc"
            >
              I create fullstack website and illustration
            </div>
            <div className="banner-left-buttons">
              <div
                data-aos="fade-in"
                data-aos-duration="1000"
                data-aos-delay="500"
                data-aos-easing="ease-in-out-quad"
              >
                <div className="btn1 banner-left-button">
                  <a href="#projects">Projects</a>
                </div>{" "}
              </div>
              <div
                data-aos="fade-in"
                data-aos-duration="1000"
                data-aos-delay="500"
                data-aos-easing="ease-in-out-quad"
              >
                <div className="btn2 banner-left-button">
                  <a href="#connect">Connect</a>
                </div>{" "}
              </div>
            </div>
          </div>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-delay="1200"
          data-aos-easing="ease-in-out-back"
          className="banner-right"
        >
          <img src={BannerIllustrationAnimated} />
        </div>
      </div>
    </div>
  );
}

export default Home;
