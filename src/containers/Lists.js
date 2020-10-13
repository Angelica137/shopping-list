import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import withDataFetching from "../withDataFetching";

const ListWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin: 5%;
`;

const ListLink = styled(Link)`
  dispaly: flex;
  text-align: left;
  align-item: center;
  padding: 1%;
  background: lightGray;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 2px;
  text-decoration: none;
`;

const Title = styled.h3`
  flex-basis: 80%;
`;

const Alert = styled.span`
  width: 100%;
  text-align: center;
`;

const Lists = ({ data, loading, error, history }) =>
  !loading && !error ? (
    <>
      <Title>Your lists</Title>
      <ListWrapper>
        {data &&
          data.map((list) => (
            <ListLink key={list.id} to={`list/${list.id}`}>
              <Title>{list.title}</Title>
            </ListLink>
          ))}
      </ListWrapper>
    </>
  ) : (
    <Alert>{loading ? "Loading..." : error}</Alert>
  );

export default withDataFetching({
  dataSource:
    "https://my-json-server.typicode.com/PacktPublishing/React-Projects/lists",
})(Lists);
