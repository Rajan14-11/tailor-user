import React, { createContext, useContext, useReducer, useState } from "react";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [selectLocation, setSelectLocation] = useState(false);
  const [openCart, setOpenCart] = useState(false);

  return (
    <StateContext.Provider
      value={{
        selectLocation,
        setSelectLocation,
        openCart,
        setOpenCart,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};
export const useStateContext = () => useContext(StateContext);
