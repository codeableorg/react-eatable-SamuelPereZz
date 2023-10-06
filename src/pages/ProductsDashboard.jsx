import React, { useEffect, useState } from "react";
import { getProducts } from "../services/product-services";
import CardFood from "../components/CardsFood";
import styled from "@emotion/styled";
import ButtonComponent from "../components/Button";

const CardContainer = styled.div`
  padding: 15px;
  display: grid;
  grid-template-columns: repeat(2, 0.1fr);
  gap: 1rem;
  row-gap: 3rem;
  justify-items: center;
  justify-content: center;
`;
const Header = styled.header`
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
  padding: 15px;
`;

const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #d3d3d4;
  display: flex;
  justify-content: center;
  padding: 15px;
`;

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <Header>
        <h2>Products Dashboard</h2>
      </Header>
      <CardContainer>
        {products.map((product) => (
          <CardFood
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            src={product.picture_url}
          />
        ))}
              <Footer>
        <ButtonComponent text="Create Product" />
      </Footer>
      </CardContainer>

    </div>
  );
}

export default ProductList;
