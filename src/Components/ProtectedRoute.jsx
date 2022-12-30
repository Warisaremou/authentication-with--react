import React from "react";
import { useAuth } from "../hooks/useAuth";
import { Outlet } from "react-router-dom";
import { Navigate } from "react-router-dom";

function ProtectedRoute() {

  const isLogged = useAuth()

  return <div>{isLogged() ? <Outlet /> : <Navigate replace to="/login"/>}</div>;
}

export default ProtectedRoute;
