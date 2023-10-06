import styled from "@emotion/styled";
import Image from "./Image";
import Edit from "../assets/edit.svg";
import Delete from "../assets/delete.svg";

const ContainerCard = styled.div`
  width: 160px;
  height: 218px;
  border-radius: 35px;
  background-color: white;
  display: flex;
  flex-direction: column;
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
  top: -2rem;
`;

const ImageContainer = styled.div`
  padding: 5px;
  position: relative;
  top: -2rem;
`;

const ButtonCard = styled.button`
  background: none;
  border: none;
  padding: 0;
  width: auto;
  height: auto;
  cursor: pointer;
  top:-5;
  &:hover {
    transform: scale(1.5);
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  column-gap: 4rem;
  position:relative;
  top: -2.5rem;

`;

const CardFood = ({ id, name, price, src, handleProduct }) => {
  return (
    <ContainerCard onClick={() => handleProduct(id)}>
      <ImageContainer>
        <Image size={"sm"} src={src} />
      </ImageContainer>
      <FoodName>{name}</FoodName>
      <FoodName color={"#FA4A0C"}>${price}
      </FoodName>
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
