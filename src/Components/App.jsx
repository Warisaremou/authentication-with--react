import { createContext } from "react";
import Login from "./Login";
import { Acceuil } from "../Pages";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { useLocalStorage } from "../hooks/useLocalStorage";
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
