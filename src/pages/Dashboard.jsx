import React from "react";
import Navbar from "../layout/Navbar";
import { Outlet } from "react-router-dom";
import style from "./dashboard.module.css";
const Dashboard = () => {
  return (
    <>
      <div className={style.mainNavbar}>
        <Navbar />
      </div>
      <main className={style.maindiv}>
        <Outlet />
      </main>
    </>
  );
};

export default Dashboard;
