import React, { useRef, useState } from "react";
import image from "../../assets/basket-ball.png";
import style from "./chat.module.css";
import { GrSend } from "react-icons/gr";
import { BsFillSendFill } from "react-icons/bs";
function ChatRoom() {
  const dummy = useRef();
  const [formValue, setFormValue] = useState("");
  const [messages, setMessages] = useState([]);

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
const Chat = () => {
  return (
    <div className={style.maindiv}>
      <header
        className="text-center fs-4 fw-bold py-2 border-bottom border-gray border-4"
        style={{ color: "var(--main-color)" }}
      >
        The Night Club
      </header>
      <ChatRoom />
    </div>
  );
};

export default Chat;
