import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getProductById } from "../services/product-services";
import styled from "@emotion/styled";
import Image from "../components/Image";
import { ButtonGlobal } from "../components/Button";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const FoodData = styled.p`
  font-size: 28px;
  font-weight: 600;
  color: ${({ color }) => color};
  margin-top: 10px;
`;
const ContainerInfo = styled.div`
  width: 350px;
  display: flex;
  flex-direction: column;
  justify-content: start;
`;

const Info = styled.p`
  font-size: 16px;
  font-weight: 400;
`;

function DishData() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProductById(id)
      .then((data) => {
        setProduct(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  if (!product) {
    return <div>Cargando...</div>;
  }

  return (
    <Container>
      <Image size={"md"} src={product.picture_url} />
      <FoodData color={"#000000"}>{product.name}</FoodData>
      <FoodData color={"#FA4A0C"}>${product.price}</FoodData>
      <ContainerInfo>
        <h3>Description</h3>
        <Info>{product.description}</Info>
        <h3>Category</h3>
        <Info>{product.category}</Info>
      </ContainerInfo>
      <Link to="/">
        <ButtonGlobal text="Go Back" />
      </Link>
    </Container>
  );
}

export default DishData;
