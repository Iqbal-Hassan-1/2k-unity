import React, { useEffect, useRef, useState } from "react";
import style from "./chat.module.css";
import { BsFillSendFill } from "react-icons/bs";
import axios from "axios";

import { BASE_URL } from "../../constant";
import ChatMessage from "./ChatMessage";
const ChatRoom = ({ selectedUser }) => {
  const dummy = useRef();
  const [formValue, setFormValue] = useState("");
  const [messages, setMessages] = useState([]);
  console.log("messageAll", messages);
  const userId = selectedUser;
  useEffect(() => {
    const fetchData = async () => {
      const userToken = localStorage.getItem("token");
      console.log(userToken);
      try {
        const response = await axios.get(`${BASE_URL}conversations/${userId}`, {
          headers: {
            Authorization: userToken,
          },
        });
        // (response.data.leadership);
        setMessages(response.data.messages);
        console.log("conversation", response.data.messages);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [userId]);

  const sendMessage = async (data) => {
    data.preventDefault();
    const newMessage = {
      // id: messages.length + 1,
      message: formValue,
      conversationId: userId,
    };
    try {
      const authToken = localStorage.getItem("token");
      const response = await axios.post(
        `${BASE_URL}/messages/sendmessage`,
        newMessage,
        {
          headers: {
            Authorization: authToken,
          },
        }
      );
      console.log(response.data.data.message);
      setFormValue("");
      setTimeout(() => {
        dummy.current.scrollIntoView({ behavior: "smooth", block: "end" });
      }, 0);

      // Handle the response data
      // setData(response.data);
    } catch (err) {
      // Handle errors
      console.log(err);
      // setError(err.message);
    }
  };

  return (
    <>
      <main className={style.mainclass}>
        {messages &&
          messages?.map((msg, index) => (
            <ChatMessage key={index} userMessage={msg} />
          ))}
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
};
export default ChatRoom;
