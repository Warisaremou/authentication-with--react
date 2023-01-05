import React from "react";
import { Link } from "react-router-dom";
import ErrorSvg from "../images/Error-Page-Svg.svg";

function Error() {
  return (
    <div className="md:max-w-3xl px-5 py-10 mx-auto flex justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-blue-500">Page Not Found !</h1>
        <img src={ErrorSvg} alt="Error" className="w-96 my-10" />
        <p className="mb-2 text-gray-600">
          It seems like the page you are looking for does not exist.
        </p>
        <Link to="/acceuil">Got to Home</Link>
      </div>
    </div>
  );
}

export default Error;
