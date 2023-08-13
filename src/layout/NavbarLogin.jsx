import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import style from "./navbarlogin.module.css";
import kLogo from "../assets/2k-logo.png";
import { MdClose, MdMenu, MdOutlineKeyboardArrowDown } from "react-icons/md";

import Dropdown from "../component/Dropdown";

function NavbarLogin() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(true);
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
      <nav className={style.navbarlogin}>
        <NavLink
          to="ranking"
          className={`mb-3 ${style.navbarLogo}`}
          onClick={closeMobileMenu}
        >
          {/* <img src={kLogo} alt="logo" /> */}
        </NavLink>

        <div className={style.menuIcon} onClick={handleClick}>
          {click ? (
            <MdClose style={{ color: "black" }} />
          ) : (
            <MdMenu style={{ color: "black" }} />
          )}
        </div>
        <ul
          className={
            click ? `${style.navMenuu} ${style.activee}` : style.navMenuu
          }
        >
          <li className={style.navItemm}>
            <NavLink
              to="/ranking"
              className={style.navLinkss}
              onClick={closeMobileMenu}
            >
              Ranking
            </NavLink>
          </li>
          <li
            className={style.navItemm}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <NavLink
              to="notification"
              className={
                dropdown
                  ? `${style.navLinkss} ${style.activee}`
                  : style.navLinkss
              }
              onClick={closeMobileMenu}
            >
              Notification <MdOutlineKeyboardArrowDown size={25} />
            </NavLink>
            {dropdown && <Dropdown />}
          </li>
          <li className={style.navItemm}>
            <NavLink
              to="/nav-rank/chat"
              className={style.navLinkss}
              onClick={closeMobileMenu}
            >
              Chat
            </NavLink>
          </li>
          <li className={style.navItemm}>
            <NavLink
              to="create-match"
              className={style.navLinkss}
              onClick={closeMobileMenu}
            >
              Create Match
            </NavLink>
          </li>

          <li className={`border-right-0 ${style.navItemm}`}>
            <NavLink
              to="/sign-in"
              className={`border-0 ${style.navLinkss}`}
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
