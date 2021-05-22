import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <div id="footer" className="footer">
      <div className="footer-container">
        <div className="footer-sleft">
          <div className="footer-sleft-header">
            Interested in Collaboration?
          </div>
          <div className="footer-sleft-desc">
            <div className="footer-sleft-title">Be a part of our client.</div>
            <div className="spccl">
              <div className="footer-sleft-button">
                <a href="#connect">Let's Talk</a>
              </div>{" "}
            </div>
          </div>
        </div>
        <div className="footer-left">
          <div className="footer-left-header">Information</div>
          <div className="footer-left-desc">I am a developer and designer</div>
          <div className="footer-left-email">
            <div>mdabrarzahinantor2005@gmail.com</div>
            <div>Chattogram, Bangladesh</div>
          </div>
        </div>
        {/**/}
        <div className="footer-middle">
          <div className="footer-middle-header">About Us</div>
          <div className="footer-middle-desc">
            <div>
              <a href="#about">About</a>{" "}
            </div>
            <div>
              <a href="#projects">Projects</a>{" "}
            </div>
            <div>
              <a href="#services">What We Do</a>{" "}
            </div>
            <div>
              <a href="#connect">Connect</a>{" "}
            </div>
          </div>
        </div>
        {/**/}
        <div className="footer-right">
          <div className="footer-right-header">Follow Us</div>
          <div className="footer-right-desc">
            <a href="https://www.facebook.com/abrarzahinantor/">
              <i class="fab fa-facebook    "></i> Facebook
            </a>
            <a href="https://www.instagram.com/mdabrarzahinantor/">
              <i class="fab fa-instagram    "></i> Instagram
            </a>
            <a href="https://dribbble.com/mdabrarzahinantor">
              <i class="fab fa-dribbble    "></i> Dribble
            </a>
            <a href="https://twitter.com/ZahinAntor">
              <i class="fab fa-twitter"></i> Twitter
            </a>
            <a href="https://github.com/mdabrarzahinantor">
              <i class="fab fa-github    "></i> Github
            </a>
          </div>
        </div>
        {/* */}
      </div>

      <div className="copyright">2019 © All Rights Reserved.</div>
    </div>
  );
}

export default Footer;
