import React, { createContext, useContext, useReducer, useState } from "react";
import { useRef } from "react";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [selectLocation, setSelectLocation] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [search, setSearch] = useState();

  const autoCompleteRef = useRef();

  const getLocation = (inputRef)=>{
     autoCompleteRef.current = new window.google.maps.places.Autocomplete(
       inputRef?.current
     );
     autoCompleteRef?.current.addListener("place_changed", async function () {
       const { address_components, formatted_address } =
         await autoCompleteRef?.current.getPlace();
         window.localStorage.setItem(
         "address",
         JSON.stringify({ formatted_address, address_components })
       );
       return ({formatted_address, address_components});
     });
  }

  return (
    <StateContext.Provider
      value={{
        selectLocation,
        setSelectLocation,
        openCart,
        setOpenCart,
        getLocation,
       setSearch,search
      }}
    >
      {children}
    </StateContext.Provider>
  );
};
export const useStateContext = () => useContext(StateContext);
