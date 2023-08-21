import React from "react";
import NavbarLogin from "../layout/NavbarLogin";
import { Outlet } from "react-router-dom";
import style from "./dashboardlogin.module.css";
const DashboardLogin = () => {
  return (
    <>
      <div className={style.mainNav}>
        <NavbarLogin />
      </div>
      <main className={style.mainPage}>
        <Outlet />
      </main>
    </>
  );
};

export default DashboardLogin;
