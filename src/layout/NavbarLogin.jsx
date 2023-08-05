import React, { useState } from "react";
import { Button } from "../component/Button";
import { Link, NavLink } from "react-router-dom";
import "./navbar-login.css";
import Dropdown from "../component/Dropdown";
import kLogo from "../assets/2k-logo.png";

function NavbarLogin() {
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
      <nav className="navbarlogin">
        <NavLink to="/" className="navbar-logo mb-3" onClick={closeMobileMenu}>
          <img src={kLogo} alt="logo" />
        </NavLink>

        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menuu active" : "nav-menuu"}>
          <li className="nav-itemm">
            <NavLink
              to="/nav-rank"
              className="nav-linkss"
              style={({ isActive }) => ({
                background: isActive ? "gray" : null,
                color: isActive ? "#ffffff" : null,
              })}
              onClick={closeMobileMenu}
            >
              Ranking
            </NavLink>
          </li>
          <li className="nav-itemm">
            <NavLink
              to="/notification"
              className="nav-linkss"
              style={({ isActive }) => ({
                background: isActive ? "gray" : null,
                color: isActive ? "#ffffff" : null,
              })}
              onClick={closeMobileMenu}
            >
              Notification
            </NavLink>
          </li>
          <li className="nav-itemm">
            <NavLink
              to="/chat"
              className="nav-linkss"
              style={({ isActive }) => ({
                background: isActive ? "gray" : null,
                color: isActive ? "#ffffff" : null,
                // borderRight: isActive ? "none" : "2px solid white",
              })}
              onClick={closeMobileMenu}
            >
              Chat
            </NavLink>
          </li>
          <li className="nav-itemm">
            <NavLink
              to="/nav-rank/create-match"
              className="nav-linkss"
              style={({ isActive }) => ({
                background: isActive ? "gray" : null,
                color: isActive ? "#ffffff" : null,
                // borderRight: isActive ? "none" : "2px solid white",
              })}
              onClick={closeMobileMenu}
            >
              Create Match
            </NavLink>
          </li>
          {/* <li className="nav-itemm">
            <NavLink
              to="/about"
              className="nav-linkss"
              style={({ isActive }) => ({
                background: isActive ? "gray" : null,
              })}
              onClick={closeMobileMenu}
            >
              About
            </NavLink>
          </li> */}

          <li className="nav-itemm border-right-0">
            <NavLink
              to="/sign-in"
              className="nav-linkss border-0"
              style={({ isActive }) => ({
                background: isActive ? "gray" : null,
                color: isActive ? "#ffffff" : null,
              })}
              onClick={closeMobileMenu}
            >
              Logout
            </NavLink>
          </li>
        </ul>
        {/* <Button /> */}
      </nav>
    </>
  );
}

export default NavbarLogin;
