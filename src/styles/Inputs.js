import { css } from "@emotion/react";


const CommonInputStyles = css`
  background-color: transparent;
  border: none;
  border-bottom: 1.5px solid black;
  &:hover {
    color: #fd6832;
    border-bottom: 2.5px solid #fd6832;
  }
  &:focus {
    outline: none;
    border-bottom: 2.5px solid #fd6832;
  }
`;

export default CommonInputStyles