import React, { useEffect, useState } from "react";
import CardFood from "../components/CardsFood";
import styled from "@emotion/styled";
import { ButtonGlobal } from "../components/Button";
import { Link } from "react-router-dom";
import ConfirmationModal from "../components/DeleteMessage";
import { deleteProduct, getProducts } from "../services/product-services";

const CardContainer = styled.div`
  padding: 15px;
  display: grid;
  grid-template-columns: repeat(2, 0.1fr);
  gap: 1.5rem;
  row-gap: 5rem;
  justify-items: center;
  justify-content: center;
  padding-bottom: 7rem;
`;

const Header = styled.header`
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
`;

const Footer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  padding: 15px 0px;
  bottom: 0;
  position: fixed;
`;

function ProductList() {
  const [products, setProducts] = useState([]);
  const [productIdToDelete, setProductIdToDelete] = useState(null);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const data = await getProducts();
      setProducts(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async () => {
    try {
      await deleteProduct(productIdToDelete);
      setDeleteModalOpen(false);
      fetchProducts();
    } catch (error) {
      console.error(error);
    }
  };

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
            price={parseFloat(product.price).toLocaleString("en-US", {
              currency: "USD",
              minimumFractionDigits: 2,
            })}
            src={product.picture_url}
            onDelete={() => {
              setProductIdToDelete(product.id);
              setDeleteModalOpen(true);
            }}
          />
        ))}
      </CardContainer>
      <Footer>
        <Link to="/create-product">
          <ButtonGlobal text="Create Product" />
        </Link>
      </Footer>
      {deleteModalOpen && (
        <ConfirmationModal
          message="Are you sure?"
          onConfirm={handleDelete}
          onCancel={() => setDeleteModalOpen(false)}
        />
      )}
    </div>
  );
}

export default ProductList;
