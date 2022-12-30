import { createContext, useState, useEffect } from "react";
import Login from "./Login";
import { Home, Acceuil } from "../Pages";
import { BrowserRouter as Router, Route, Routes, Outlet } from "react-router-dom";
import { useLocalStorage } from "../hooks/useLocalStorage";
import ProtectedRoute from "./ProtectedRoute";

export const LoginContext = createContext();

function App() {
  return (
    <div className="font-poppins">
      
      <Router>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="/" element={<ProtectedRoute />}>
            <Route path="acceuil" element={<Acceuil />} />
          </Route>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>

      {/* This element will render either <DashboardMessages> when the URL is
          "/messages", <DashboardTasks> at "/tasks", or null if it is "/"
      */}
      <Outlet />
    </div>
  );
}
