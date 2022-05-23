import React, { createContext, useState } from "react";

const MainContext = createContext();

const ContextProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  
  const addToCart = (id,image, name, category) => {
    setItems((prevItems) => [...prevItems, {id, image, name, category}]);
  };

  const values = {
    items,
    setItems,
    addToCart,
  }

  return (
    <MainContext.Provider value={values}>{children}</MainContext.Provider>
  );
};

export { MainContext, ContextProvider };
