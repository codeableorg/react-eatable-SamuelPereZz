import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  font-family: Arial, sans-serif;
`;

const Loader = styled.div`
  font-size: 24px;
  margin-bottom: 16px;
  animation: spin 1s infinite linear;
`;

const ListContainer = styled.div`
  font-size: 24px;
  text-align: center;
  color: red;
`;

const NotProduct = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      setProducts([]);
    }, 2000);
  }, []);

  return (
    <Container>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <ListContainer>
          {products.length === 0 ? (
            <p>The product is no longer available.</p>
          ) : (
            <ul>
              {products.map((product) => (
                <li key={product.id}>{product.name}</li>
              ))}
            </ul>
          )}
        </ListContainer>
      )}
    </Container>
  );
};

export default NotProduct;
