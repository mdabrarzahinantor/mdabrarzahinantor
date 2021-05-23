import React from "react";
import "./Skills.css";
// import SkillReact from "../../Assets/Images/SkillReact.svg";
// import SkillMongoDB from "../../Assets/Images/SkillMongoDB.svg";
// import SkillJS from "../../Assets/Images/SkillJS.svg";
// import SkillNodeJS from "../../Assets/Images/SkillNodeJS.svg";
// import SkillPython from "../../Assets/Images/SkillPython.svg";
// import SkillJquery from "../../Assets/Images/SkillJquery.svg";
// import SkillExpress from "../../Assets/Images/SkillExpress.svg";
// import SkillSass from "../../Assets/Images/SkillSass.svg";
// import SkillFirebase from "../../Assets/Images/SkillFirebase.svg";

function Skills() {
  return (
    <div className="skills">
      <div
        data-aos="fade-in"
        data-aos-duration="1000"
        data-aos-delay="100"
        data-aos-easing="ease-in-out-quad"
        className=" spcl"
      >
        Skills
      </div>
      <div
        data-aos="fade-up"
        duration="1500"
        data-aos-delay="500"
        data-aos-easing="ease-in-out-back"
        className="skills-sub-header special-sub-header"
      >
        How can I help you?
      </div>
      <div className="skills-container">
        <div className="skill skill1">
          <div className="skill-icon">
            <i class="fab fa-react    "></i>
          </div>

          <div className="skill-container">
            <div className="skill-header">ReactJS</div>
            <div className="skill-progress react"></div>
          </div>
        </div>
        {/**Skill */}
        <div className="skill skill2">
          <div className="skill-icon">
            <i class="fab fa-envira    "></i>
          </div>

          <div className="skill-container">
            <div className="skill-header">MongoDB</div>
            <div className="skill-progress mongodb"></div>
          </div>
        </div>
        {/**Skill */}
        <div className="skill skill3">
          <div className="skill-icon">
            <i class="fab fa-js-square    "></i>
          </div>

          <div className="skill-container">
            <div className="skill-header">Javascript</div>
            <div className="skill-progress js"></div>
          </div>
        </div>
        {/**Skill */}
        <div className="skill skill4">
          <div className="skill-icon">
            <i class="fab fa-node-js    "></i>
          </div>

          <div className="skill-container">
            <div className="skill-header">NodeJS</div>
            <div className="skill-progress nodejs"></div>
          </div>
        </div>
        {/**Skill */}
        <div className="skill skill5">
          <div className="skill-icon">
            <i class="fab fa-python    "></i>
          </div>

          <div className="skill-container">
            <div className="skill-header">Python3</div>
            <div className="skill-progress python"></div>
          </div>
        </div>
        {/**Skill */}
        <div className="skill skill6">
          <div className="skill-icon">
            <i class="fab fa-quinscape    "></i>
          </div>

          <div className="skill-container">
            <div className="skill-header">jQuery</div>
            <div className="skill-progress jquery"></div>
          </div>
        </div>
        {/**Skill */}
        <div className="skill skill7">
          <div className="skill-icon">
            <i class="fab fa-sass    "></i>
          </div>

          <div className="skill-container">
            <div className="skill-header">Sass</div>
            <div className="skill-progress sass"></div>
          </div>
        </div>
        {/**Skill */}
        <div className="skill skill8">
          <div className="skill-icon">
            <i class="fas fa-fire    "></i>
          </div>

          <div className="skill-container">
            <div className="skill-header">Firebase</div>
            <div className="skill-progress firebase"></div>
          </div>
        </div>
        {/**Skill */}
        <div className="skill skill9">
          <div className="skill-icon">
            <i class="fas fa-shipping-fast    "></i>
          </div>

          <div className="skill-container">
            <div className="skill-header">ExpressJS</div>
            <div className="skill-progress express"></div>
          </div>
        </div>
        {/**Skill */}
      </div>
    </div>
  );
}

export default Skills;
