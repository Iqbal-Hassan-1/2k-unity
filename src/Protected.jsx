import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const Protected = ({ Component }) => {
  const location = useLocation();
  let user = localStorage.getItem("user");

  if (user) {
    return <Component />;
  }

  // Redirect to login page if user is not logged in
  return <Navigate to="/sign-in" state={{ from: location }} replace />;
};

export default Protected;
