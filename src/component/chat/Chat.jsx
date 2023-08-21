import React, { useEffect, useRef, useState } from "react";
import style from "./chat.module.css";
import { BsFillSendFill } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import axios from "axios";
import Group from "./Group";
import { BASE_URL } from "../../constant";
import ChatRoom from "./ChatRoom";
import { MdArrowBack } from "react-icons/md";

// INSIDE CHAT FUNCTION START FROM HERE

// INSIDE CHAT MESSAGE FUNCTION START FROM HERE

const Chat = ({ setIsChat }) => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isLoading, setIsLoadibg] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const userToken = localStorage.getItem("token");
      console.log(userToken);
      setIsLoadibg(true);
      try {
        const response = await axios.get(`${BASE_URL}conversations`, {
          headers: {
            Authorization: userToken,
          },
        });
        // set(response.data.leadership);
        setUsers(response.data.conversations);
        setIsLoadibg(false);
        console.log("message", response.data.conversations);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={style.maindiv}>
      <header
        className=" d-flex justify-content-between px-3 align-items-center fs-4 fw-bold py-2 border-bottom border-gray border-4"
        style={{ color: "var(--main-color)" }}
        // onClick={() => setIsChat(false)}
      >
        {selectedUser !== null && (
          <MdArrowBack
            style={{ cursor: "pointer" }}
            onClick={() => setSelectedUser(null)}
          />
        )}
        {selectedUser !== null ? "The Night Club" : "Chats & Groups"}
        <IoMdClose
          style={{ cursor: "pointer" }}
          onClick={() => setIsChat(false)}
        />
      </header>

      {selectedUser === null ? (
        <Group
          users={users}
          setSelectedUser={setSelectedUser}
          isLoading={isLoading}
        />
      ) : (
        <ChatRoom
          selectedUser={selectedUser}
          setSelectedUser={setSelectedUser}
        />
      )}
    </div>
  );
};

export default Chat;
