import React, { useState } from "react";
import "./chaticon.css";
import { HiChatBubbleLeftRight, HiUserGroup } from "react-icons/hi2";
import { IoMdAdd } from "react-icons/io";
import Chat from "./Chat";
const ChatIcon = () => {
  const [isChat, setIsChat] = useState(false);
  return (
    <>
      <div className="floating-container">
        <div className="floating-button">
          <IoMdAdd style={{ color: "white" }} size={30} />
        </div>
        <div className="element-container">
          <span className="float-element">
            <HiUserGroup size={30} />
            {/* <i className="material-icons">email</i> */}
          </span>

          <span className="float-element" onClick={() => setIsChat(!isChat)}>
            <HiChatBubbleLeftRight size={30} />
            {/* <i className="material-icons">chat</i> */}
          </span>
        </div>
      </div>
      {isChat && <Chat setIsChat={setIsChat} />}
    </>
  );
};

export default ChatIcon;
