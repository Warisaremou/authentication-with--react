import React, { useState, createContext } from "react";

export const AuthenticationContext = createContext({});

export const AuthenticationContextProvider = ({ children }) => {
  const [isLogging, setIsLogging] = useState(false);

  return (
    <AuthenticationContext.Provider value={[isLogging, setIsLogging]}>
      {children}
    </AuthenticationContext.Provider>
  );
};

export const UserInfoContext = createContext();

export const UserInfoProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({});

  return (
    <UserInfoContext.Provider value={[userInfo, setUserInfo]}>{children}</UserInfoContext.Provider>
  );
};
