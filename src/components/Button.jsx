import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const Button = styled.button`
  color: white;
  width: 310px;
  height: 70px;
  border-radius: 50px;
  background: var(--orange, #fa4a0c);
  border: none;
  cursor: pointer;
  font-size: 20px;
  text-align: center;
  &:hover {
    transform: scale(1.05);
    background: var(--orange, #fd6832);
  }
`;

function ButtonComponent(prop) {
  return (
    <Link to="/create-product"> 
      <Button>{prop.text}</Button>
    </Link>
  );
}

export default ButtonComponent;
