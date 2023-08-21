import React, { useEffect, useState } from "react";
import style from "./group.module.css";
import { BASE_URL } from "../../constant";
import axios from "axios";

const Group = ({ users, setSelectedUser, isLoading }) => {
  return (
    <main className={style.maingroupclass}>
      {isLoading ? (
        <div
          className="spinner-grow text-warning mx-auto"
          style={{ width: "4rem", height: "4rem" }}
          role="status"
        >
          <span className="visually-hidden ">Loading...</span>
        </div>
      ) : (
        users?.map((user, index) => {
          return (
            <div
              className="d-flex gap-4 align-items-center bg-white border-bottom border-gray border-2 py-2"
              style={{ cursor: "pointer" }}
              index={index + 1}
              onClick={() => setSelectedUser(user?._id)}
            >
              <img
                src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp"
                style={{ width: "45px", marginBottom: "5px" }}
                className="rounded-circle border border-white border-2 shadow-lg"
              />
              <span className="fw-bold text-center">
                {user?.friend ? user?.friend?.first_name : "Group Name"}
              </span>
            </div>
          );
        })
      )}
    </main>
  );
};

export default Group;
