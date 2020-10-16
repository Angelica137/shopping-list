import React from "react";
import withDataFetching from "../withDataFetching";

export const ItemsContext = React.createContext();

export const ItemsContextProvider = ({ children, data }) => (
  <ItemsContext.Provider value={{ items: data }}>
    {children}
  </ItemsContext.Provider>
);

export default withDataFetching({
  dataSource:
    "http://my-json.typicode.com/PacktPublishing/React-Projects/items",
})(ItemsContextProvider);
