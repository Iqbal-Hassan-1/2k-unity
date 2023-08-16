import React, { useEffect, useRef, useState } from "react";
import style from "./chat.module.css";
import { BsFillSendFill } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import axios from "axios";
import { BASE_URL } from "../../constant";

// INSIDE CHAT FUNCTION START FROM HERE
function ChatRoom() {
  const dummy = useRef();
  const [formValue, setFormValue] = useState("");
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const userToken = localStorage.getItem("token");
      console.log(userToken);
      try {
        const response = await axios.get(`${BASE_URL}conversations`, {
          headers: {
            Authorization: userToken,
          },
        });
        // set(response.data.leadership);
        console.log("message", response.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  const sendMessage = (data) => {
    data.preventDefault();
    const newMessage = {
      id: messages.length + 1,
      msg: formValue,
    };

    // Update the messages array with the new message
    setMessages([...messages, newMessage]);

    setFormValue("");

    // Use a setTimeout to ensure that the scrollIntoView runs after the state update
    setTimeout(() => {
      dummy.current.scrollIntoView({ behavior: "smooth", block: "end" });
    }, 0);
    setFormValue("");
  };

  return (
    <>
      <main className={style.mainclass}>
        {messages &&
          messages?.map((msg) => <ChatMessage key={msg.id} message={msg} />)}
        <span ref={dummy}></span>
        <form onSubmit={sendMessage} className={style.formclass}>
          <div className={style.inputContainer}>
            <input
              value={formValue}
              className={style.inputclass}
              onChange={(e) => setFormValue(e.target.value)}
              placeholder="Type your message.."
            />
            <button
              type="submit"
              disabled={!formValue}
              className={style.buttonclass}
            >
              <BsFillSendFill style={{ color: "var(--main-color)" }} />
            </button>
          </div>
        </form>
      </main>
    </>
  );
}
// INSIDE CHAT MESSAGE FUNCTION START FROM HERE
function ChatMessage(props) {
  const { msg, id } = props.message;
  const isSentMessage = id % 2 === 0; // Example condition to differentiate sent and received messages

  const messageClass = isSentMessage ? style.sent : style.received;

  return (
    <div className={`${style.message} ${messageClass}`}>
      <img
        src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp"
        className="rounded-circle mb-3"
        style={{ width: "50px" }}
        alt="Avatar"
      />
      <p className={style.pclass}>{msg}</p>
    </div>
  );
}
const Chat = ({ setIsChat }) => {
  return (
    <div className={style.maindiv}>
      <header
        className=" d-flex justify-content-between px-3 align-items-center  fs-4 fw-bold py-2 border-bottom border-gray border-4"
        style={{ color: "var(--main-color)" }}
        onClick={() => setIsChat(false)}
      >
        The Night Club{" "}
        <IoMdClose
          style={{ cursor: "pointer" }}
          onClick={() => setIsChat(false)}
        />
      </header>
      <ChatRoom />
    </div>
  );
};

export default Chat;
