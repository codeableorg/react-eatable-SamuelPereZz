import styled from "@emotion/styled";

const Button = styled.button`
margin-top: 1rem;
  color: white;
  width: 300px;
  height: 70px;
  border-radius: 50px;
  background: var(--orange, #fa4a0c);
  border: none;
  cursor: pointer;
  font-size: 20px;
  text-align: center;
  &:hover {
    transform: scale(1.05);
    background: #fd6832;
  }
`;

export function ButtonGlobal(prop) {
  return (
      <Button>{prop.text}</Button>
  );
}



