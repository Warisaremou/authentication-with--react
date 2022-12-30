import React, { useState, createContext } from "react";

export const AuthenticationContext = createContext({});

export const AuthenticationContextProvider = ({ children }) => {
  const [isLogging, setIsLogging] = useState(false);


  return <AuthenticationContext.Provider value={[isLogging, setIsLogging]}>
    {children}
  </AuthenticationContext.Provider>;
};
