import React, { useState } from "react";
import { createProduct } from "../services/product-services";
import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

const Header = styled.header`
  display: block;
  justify-content: center;
  text-align: center;
`;

const Form = styled.form`
  gap: 22px;
  display: flex;
  flex-direction: column;
  text-align: start;
  justify-items: center;
  justify-content: center;
  padding: 20px;
`;

const Input = styled.input`
  background-color: transparent;
  border: none;
  border-bottom: 1.5px solid black;
  &:focus {
    outline: none;
    border-bottom: 2.5px solid black;
  }
  &[type="number"]::-webkit-inner-spin-button,
  &[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const Label = styled.label`
  color: #a1a1a4;
  font-size: 16px;
  font-weight: 500;
  &:hover {
    color: #4c4c4c;
  }
`;

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
  margin-top: 50px;
  &:hover {
    transform: scale(1.05);
    background: var(--orange, #fd6832);
  }
`;

function ProductForm() {
  const [productData, setProductData] = useState({
    name: "",
    price: "",
    category: "",
    description: "",
    picture_url: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(productData);
    try {
      const response = await createProduct(productData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      <Header>
        <h1>Create Product</h1>
      </Header>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="name">Name</Label>
        <Input
          type="text"
          name="name"
          id="name"
          value={productData.name}
          onChange={handleChange}
        />
        <Label htmlFor="price">Price</Label>
        <Input
          type="number"
          name="price"
          id="price"
          value={productData.price}
          onChange={handleChange}
        />
        <Label htmlFor="description">Description</Label>
        <Input
          type="text"
          name="description"
          id="description"
          value={productData.description}
          onChange={handleChange}
        />
        <Label htmlFor="category">Category</Label>
        <Input
          type="text"
          name="category"
          id="category"
          value={productData.category}
          onChange={handleChange}
        />
        <Label htmlFor="picture_url">Picture URL</Label>
        <Input
          type="text"
          name="picture_url"
          id="picture_url"
          value={productData.picture_url}
          onChange={handleChange}
        />
        <Button type="submit">Create</Button>
      </Form>
    </Container>
  );
}

export default ProductForm;