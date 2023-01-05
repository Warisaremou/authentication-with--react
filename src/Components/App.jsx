import { createContext } from "react";
import Login from "./Login";
import Error from "./Error";
import { Home, Products } from "../Pages";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { UserInfoProvider } from "../Context/AuthenticationContext";
import ProtectedRoute from "./ProtectedRoute";
import { NextUIProvider } from "@nextui-org/react";
import NavBar from "./NavBar";

export const LoginContext = createContext();

function App() {
  return (
    <div className="font-poppins">
      <NextUIProvider>
        <UserInfoProvider>
          <Router>
            <NavBar />
            <Routes>
              <Route path="login" element={<Login />} />
              <Route path="/" element={<ProtectedRoute />}>
                <Route path="home" element={<Home />} />
                <Route path="products" element={<Products />} />
              </Route>
              <Route path="*" element={<Error />} />
            </Routes>
          </Router>
        </UserInfoProvider>
      </NextUIProvider>
    </div>
  );
}

export default App;
