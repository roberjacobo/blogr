import React from "react";
import "../App.css";
import ArrowImg from "../assets/icon-arrow-dark.svg"

const Header = () => {
  return (
    <div className="navbar-container">
      <div>
        <div className="navbar">
          <div className="left-navbar">
            <h1>Blogr</h1>
            <div className="mobile-navbar">
              <ul className="mobile-navbar-content">
                <li>
                  <div className="dropdown-mobile">
                    <div><span>Product</span><button className="mobile-dropdown-btn"><image src={ArrowImg} alt="arrow image" /></button></div>
                    <div className="dropdown-content-mobile">
                      <p>Hello World!</p>
                    </div>
                  </div>
                </li>
                <li> <span>Company</span><div><button className="mobile-dropdown-btn"><image src={ArrowImg} alt="arrow image 2" /></button></div></li>
                <li><span>Connect</span><div><button className="mobile-dropdown-btn"><image src={ArrowImg} alt="arrow image 3" /></button></div></li>
                <hr />
                <li><button className="login-buttons-mobile">Login</button></li>
                <li><button className="login-buttons-mobile">Sign Up</button></li>
              </ul>
            </div>
            <ul className="ul-web">
              <li>
                <div className="dropdown">
                  <span>Product</span>
                  <div className="dropdown-content">
                    <p>Hello World!</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="dropdown">
                  <span>Company</span>
                  <div className="dropdown-content">
                    <p>Hello World!</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="dropdown">
                  <span>Connect</span>
                  <div className="dropdown-content">
                    <p>Contact</p>
                    <p>Newsletter</p>
                    <p>LinkedIn</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="right-navbar">
            <ul className="login-buttons-container">
              <li>
                <button className="login-buttons">Login</button>
              </li>
              <li>
                <button className="login-buttons">Sign Up</button>
              </li>
            </ul>
          </div>
          <div className="burger-container"><input type="checkbox" className="burger-btn" /></div>
        </div>
        <div className="texts-header-container">
          <h2>A modern publishing platform</h2>
          <h3>Grow your audience and build your online brand</h3>
          <div>
            <button className="start-btn">Start for free</button>
            <button className="learn-btn">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
