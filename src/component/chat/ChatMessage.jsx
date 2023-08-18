import React from "react";
import style from "./chat.module.css";
const ChatMessage = ({ userMessage }) => {
  const getUser = localStorage.getItem("user");
  const user = JSON.parse(getUser);
  console.log(userMessage);

  const isReceivedMessage = user && userMessage?.senderId !== user._id;
  const messageClass = isReceivedMessage ? style.received : style.sent; // Adjust the class based on received or sent

  return (
    <div className={`${style.message} ${messageClass}`}>
      <img
        src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp"
        className="rounded-circle mb-3"
        style={{ width: "50px" }}
        alt="Avatar"
      />
      <p className={style.pclass}>{userMessage?.message}</p>
    </div>
  );
};
export default ChatMessage;
