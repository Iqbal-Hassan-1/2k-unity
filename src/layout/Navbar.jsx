import React, { useState } from "react";
import { Button } from "../component/Button";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

import kLogo from "../assets/2k-logo.png";

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className="navbar">
        <NavLink to="/" className="navbar-logo mb-3" onClick={closeMobileMenu}>
          <img src={kLogo} alt="logo" />
        </NavLink>

        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <NavLink
              to="/"
              className="nav-links"
              style={({ isActive }) => ({
                background: isActive ? "var(--main-color)" : null,
              })}
              onClick={closeMobileMenu}
            >
              HOME
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/payment"
              className="nav-links"
              style={({ isActive }) => ({
                background: isActive ? "var(--main-color)" : null,
              })}
              onClick={closeMobileMenu}
            >
              Payment
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/contact"
              className="nav-links"
              style={({ isActive }) => ({
                background: isActive ? "var(--main-color)" : null,
                // borderRight: isActive ? "none" : "2px solid white",
              })}
              onClick={closeMobileMenu}
            >
              Contact
            </NavLink>
          </li>
          {/* <li className="nav-item">
            <NavLink
              to="/about"
              className="nav-links"
              style={({ isActive }) => ({
                background: isActive ? "var(--main-color)" : null,
              })}
              onClick={closeMobileMenu}
            >
              About
            </NavLink>
          </li> */}

          <li className="nav-item border-right-0">
            <NavLink
              to="/sign-in"
              className="nav-links border-0"
              style={({ isActive }) => ({
                background: isActive ? "var(--main-color)" : null,
              })}
              onClick={closeMobileMenu}
            >
              SIGN IN
            </NavLink>
          </li>
        </ul>
        {/* <Button /> */}
      </nav>
    </>
  );
}

export default Navbar;
