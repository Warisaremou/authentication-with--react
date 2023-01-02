// import { useContext } from "react";
// import { AuthenticationContext } from "../Context/AuthenticationContext";
import { useLocalStorage } from "./useLocalStorage";

export const useAuth = () => {
  //   const [isLogging, setIsLogging] = useContext(AuthenticationContext);

  //   return [isLogging, setIsLogging];

  const { getItem } = useLocalStorage();

  const isLogged = () => {
    const temp = getItem("userAccount");

    return temp ? true : false;
  };
  return isLogged;
};

// const useState = () => {
//     return [value, setValue];
// }
