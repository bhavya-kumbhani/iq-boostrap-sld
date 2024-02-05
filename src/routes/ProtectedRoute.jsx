import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isAuth = localStorage.getItem("authUser") || {};
  if (Object.keys(isAuth).length !== 0) return <>{children}</>;
  return <Navigate to="/" />;
};

export default ProtectedRoute;
