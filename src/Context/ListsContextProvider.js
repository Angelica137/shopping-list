import React from "react";
import withDataFetching from "../withDataFetching";

export const ListsContext = React.createContext();

async function fetchData(dataSource) {
  try {
    const data = await fetch(dataSource);
    const dataJSON = await data.json();

    if (dataJSON) {
      return await { data: dataJSON, error: false };
    }
  } catch (error) {
    return { data: false, error: error.message };
  }
}

const ListsContextProvider = ({ children, data }) => (
  <ListsContext.Provider value={{ lists: data }}>
    {children}
  </ListsContext.Provider>
);

export default withDataFetching({
  dataSource:
    "https://my-json-server.typicode.com/PacktPublishing/React-Projects/lists",
})(ListsContextProvider);
