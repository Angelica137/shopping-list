import React from "react";
import withDataFetching from "../withDataFetching";

export const ListsContext = React.createContext();

const ListsContextProvider = ({ children, data }) => (
  <ListsContextProvider value={{ lists: data }}>
    {children}
  </ListsContextProvider>
);

export default withDataFetching({
  dataSource:
    "https://my-json-server.typicode.com/PacktPublishing/React-Projects/lists",
})(ListsContextProvider);
