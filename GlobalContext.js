import React from "react";
import ListsContextProvider from "./ListsContextProvider";
import ItemsContextProvider from "./ItemsContextProvider";

const GlobalContext = ({ childer }) => {
  return (
    <ListContextProvider>
      <ItemsContextProvider>{children}</ItemsContextProvider>
    </ListContextProvider>
  );
};

export default GlobalContext;
