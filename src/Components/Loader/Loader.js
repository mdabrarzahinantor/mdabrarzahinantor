import React from "react";
import Logo from "../../Assets/Images/Loader.svg";
import "./Loader.css";
function Loader() {
  return (
    <div id="preloader" className="preloader">
      <img src={Logo} />
    </div>
  );
}

export default Loader;
