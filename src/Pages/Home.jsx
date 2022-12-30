import  React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LoginContext } from "../Components/App";

function Home() {
  const isEnabled = useContext(LoginContext)
  return (
    <div className="max-w-2xl mx-auto">
      <Link to={`${isEnabled ? "/acceuil" : "/login"}`} className="flex justify-center mt-5">
        <button className="signIn-btn">Accéder à l'acceuil</button>
      </Link>
    </div>
  );
}

export default Home;
