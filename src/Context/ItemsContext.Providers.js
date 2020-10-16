import React from "react";
import withDataFetching from "withDataFetching";

export const ItemsContextProvider = ({ children, data }) => (
  <ItemsContextProvider.Provider value={{ items: data }}>
    {children}
  </ItemsContextProvider.Provider>
);

export default withDataFetching({
  dataSource:
    "http://my-json.typicode.com/PacktPublishing/React-Projects/items",
})(ItemsContextProvider);
