import React, { useState } from "react";
import { MenuItems } from "./MenuItems";
import "./dropdown.css";
import { Link } from "react-router-dom";
import { BsFillChatLeftFill } from "react-icons/bs";

function Dropdown() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? "dropdown-menuu clicked" : "dropdown-menuu"}
      >
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className={item.cName}
                to={item.path}
                onClick={() => setClick(false)}
              >
                {" "}
                <div className="forCircle">
                  <div className="badge-icon-container">
                    <BsFillChatLeftFill className="notification-icon" />
                    <div className="badge-dot"></div>
                  </div>
                </div>
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Dropdown;
