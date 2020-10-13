import React from "react";
import styled from "styled-components";

const SubHeaderWarpper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  background: navajowhit;
`;

const Title = styled.h2`
  text-align: center;
  flex-basis: 60%;

  &:first-child {
    margin-left: 20%;
  }

  &:last-child {
    margin-right: 20%;
  }
`;
