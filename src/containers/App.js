import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Route, Switch } from "react-router-dom";
import GlobalContext from "../Context/GlobalContext";
import Header from "../components/Header/Header";
import Lists from "./Lists";
import List from "./List";
import Form from "./Form";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

const AppWrapper = styled.div`
  text-align: center;
`;

const App = () => (
  <>
    <GlobalStyle />
    <AppWrapper>
      <Header />
      <GlobalContext>
        <ListsContext.Consumer>
          {({
            lists,
            loading: listsLoading,
            error: listsError,
            getListsRequest,
          }) => (
            <ItemsContext.Consumer>
              {({
                items,
                loading: itemsLoading,
                error: itemsError,
                getItemsRequest,
                addItemRequest,
              }) => (
                <Switch>
                  <Route
                    exact
                    path="/"
                    render={(props) =>
                      lists && (
                        <Lists
                          lists={lists}
                          loading={listsLoading}
                          error={listsError}
                          getListsRequest={getListsRequest}
                          {...props}
                        />
                      )
                    }
                  />
                  <Route
                    path="/list/:id/new"
                    render={(props) => (
                      <Form addItemRequest={addItemRequest} {...props} />
                    )}
                  />
                  <Route
                    path="/list/:id"
                    render={(props) =>
                      lists &&
                      items && (
                        <List
                          lists={lists}
                          items={items}
                          loading={itemsLoading}
                          error={itemsError}
                          getItemsRequest={getItemsRequest}
                          {...props}
                        />
                      )
                    }
                  />
                </Switch>
              )}
            </ItemsContext.Consumer>
          )}
        </ListsContext.Consumer>
      </GlobalContext>
    </AppWrapper>
  </>
);

export default App;
