import React from "react";
import styled from "styled-components";
export const StyledHeader = ({ title = "Default hello" }) => {
  return (
    <StyledWrapper>
      <h1>{title}</h1>
      <h2 className="random">another heading</h2>
    </StyledWrapper>
  );
};
const StyledWrapper = styled.section`
  background: red;
  transition: all 2s ease-in-out;
  h1 {
    color: blue;
  }
  .random {
    color: green;
  }
  &:hover {
    background: black;
  }
`;
