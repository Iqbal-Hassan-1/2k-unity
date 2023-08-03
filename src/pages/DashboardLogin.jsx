import React from "react";
import NavbarLogin from "../layout/NavbarLogin";
import { Outlet } from "react-router-dom";

const DashboardLogin = () => {
  return (
    <>
      <NavbarLogin />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default DashboardLogin;
