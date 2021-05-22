import React from "react";
import "./Home.css";
import HamburgerAnimated from "../../Assets/Images/HamburgerAnimated.svg";
import CrossMenu from "../../Assets/Images/CrossMenu.svg";
import Logo from "../../Assets/Images/Logo.svg";
import BannerIllustrationAnimated from "../../Assets/Images/BannerIllustrationAnimated.svg";

function Home() {
  return (
    <div className="home">
      <div className="scroll-to-top">
        <a href="#">
          <i class="fas fa-arrow-up    "></i>
        </a>
      </div>
      <div className="mynav-hamburger">
        <a
          // onClick={() => {
          //   document.querySelector(".mysidenav").classList.toggle("active");
          // }}
          id="toggler"
          href="#"
        >
          <img src={HamburgerAnimated} />
        </a>
      </div>
      <div className="mynav">
        <div className="mynav-left">
          <a href="#">
            <img src={Logo}></img>{" "}
          </a>
        </div>

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
      <div style={{ display: "none" }} id="sidenav" className=" mysidenav">
        <div className="mynav-crossmenu">
          <a
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
      </div>
      <div className="banner">
        <div className="banner-left">
          <div className="banner-left-container">
            <div className="banner-left-username">__mdabrarzahinantor</div>
            <div className="banner-left-header">
              find your <span className="highlighter">design,</span>
              <br></br>
              design your <span className="highlighter">finding.</span>
            </div>
            <div className="banner-left-desc">
              I create fullstack website and illustration
            </div>
            <div className="banner-left-buttons">
              <div className="btn1 banner-left-button">
                <a href="#projects">Projects</a>
              </div>
              <div className="btn2 banner-left-button">
                <a href="#connect">Connect</a>
              </div>
            </div>
          </div>
        </div>
        <div className="banner-right">
          <img src={BannerIllustrationAnimated} />
        </div>
      </div>
    </div>
  );
}

export default Home;
