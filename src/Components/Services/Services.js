import React from "react";
import "./Services.css";
import ServicesImageDesignAnimated from "../../Assets/Images/ServicesImageDesignAnimated.svg";
import ServicesImageDevelopmentAnimated from "../../Assets/Images/ServicesImageDevelopmentAnimated.svg";
import ServicesImageInteractionAnimated from "../../Assets/Images/ServicesImageInteractionAnimated.svg";
function Services() {
  return (
    <div id="services" className="services">
      <div className="spc-container">
        <div
          data-aos="fade-in"
          data-aos-duration="1000"
          data-aos-delay="300"
          data-aos-easing="ease-in-out-quad"
          className="spcl"
        >
          Services
        </div>
        <div
          data-aos="fade-up"
          duration="1500"
          data-aos-delay="500"
          data-aos-easing="ease-in-out-back"
          className="special-sub-header services-sub-header"
        >
          see what we provide!
        </div>
      </div>

      <div className="services-card-container">
        <div className="services-card">
          <div className="services-card-image">
            <img src={ServicesImageDesignAnimated} />
          </div>
          <div className="services-card-container-inside">
            <div className="services-card-header">Design</div>
            <div className="services-card-desc">
              UI/UX Design,2D Illustration,3D Illustration,Logo,Brand Design
            </div>
          </div>
        </div>
        {/*Card */}
        <div className="services-card">
          <div className="services-card-image">
            <img src={ServicesImageInteractionAnimated} />
          </div>
          <div className="services-card-container-inside">
            <div className="services-card-header">Interaction</div>
            <div className="services-card-desc">
              Responsive UI, SVG Animation, On Scroll Animation,Navbar
              Animation,UI Animation
            </div>
          </div>
        </div>
        {/*Card */}
        <div className="services-card">
          <div className="services-card-image">
            <img src={ServicesImageDevelopmentAnimated} />
          </div>
          <div className="services-card-container-inside">
            <div className="services-card-header">Development</div>
            <div className="services-card-desc">
              Frontend Development,Backend Development,Web Security,Hosting
            </div>
          </div>
        </div>
        {/*Card */}
      </div>
    </div>
  );
}

export default Services;
