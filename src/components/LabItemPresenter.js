import * as React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  border: 1px solid silver;
  margin: 10px;
  cursor: pointer;
  margin-left: 50px;
  margin-right: 50px;
  background-color: white;
  padding: 6px;
  text-align: left;
  &:hover {
    background-color: whitesmoke;
  }
`;
const LinkContainer = styled.div`
  a {
    text-decoration: none;
    &:visited {
      color: initial !important;
    }
  }
`;

export const LabItemsPresenter = props => {
  return (
    <LinkContainer>
      <Link to={props.route}>
        <Container>{props.solution.task}</Container>
      </Link>
    </LinkContainer>
  );
};
