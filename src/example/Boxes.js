import styled, { css } from "styled-components";

const Box = css`
  width: 150px;
  height: 150px;
  margin: 1rem;
  border: 2px solid ${props => props.color};
`;
export const RedBox = styled.div`
  ${Box};
`;

export const GreenBox = styled.div`
  ${Box};
`;
