import styled from "@emotion/styled";
import Image from "./Image";
import Edit from "../assets/edit.svg";
import Delete from "../assets/delete.svg";
import { Link } from "react-router-dom";

const ContainerCard = styled.div`
  width: 160px;
  height: 210px;
  border-radius: 30px;
  box-shadow: 0px 30px 60px 0px rgba(57, 57, 57, 0.114);
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-self: center;
  justify-content: center;
  align-items: center;
  transition: all 0.5s;
  &:hover {
    transform: scale(1.05);
  }
`;

const FoodName = styled.p`
  font-size: 1.1rem;
  line-height: 1.75rem;
  font-weight: 600;
  text-align: center;
  color: ${({ color }) => color};
  position: relative;
  margin-top: 0px;
  top: -2.3rem;
`;

const ImageContainer = styled.div`
  position: relative;
  top: -2.5rem;
`;

const ButtonCard = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  &:hover {
    transform: scale(1.5);
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  column-gap: 4rem;
  position: relative;
  top: -2.5rem;
`;

const CardFood = ({ id, name, price, src }) => {
  return (
    <ContainerCard>
      <Link to={`/products/${id}`}>
        <ImageContainer>
          <Image size={"sm"} src={src} />
        </ImageContainer>
        <FoodName>{name}</FoodName>
        <FoodName color={"#FA4A0C"}>${price}</FoodName>
      </Link>
      <ButtonContainer>
        <ButtonCard>
          <img src={Edit} alt="editButton" />
        </ButtonCard>
        <ButtonCard>
          <img src={Delete} alt="editButton" />
        </ButtonCard>
      </ButtonContainer>
    </ContainerCard>
  );
};

export default CardFood;
