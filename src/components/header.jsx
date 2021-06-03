import React from "react";
import "../App.css";

const Header = () => {
  return (
    <div className="navbar-container">
      <div>

      <div className="navbar">
        <div className="left-navbar">
            <h1>Blogr</h1>
          <ul>
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
          <ul>
            <li>
              <button className="login-buttons">Login</button>
            </li>
            <li>
              <button className="login-buttons">Sign Up</button>
            </li>
          </ul>
        </div>
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
