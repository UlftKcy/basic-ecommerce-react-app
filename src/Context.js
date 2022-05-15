import React, { createContext } from "react";

const MainContext = createContext();

const ContextProvider = ({ children }) => {
  return (
    <MainContext.Provider value={{}}>{children}</MainContext.Provider>
  );
};

export { MainContext, ContextProvider };
