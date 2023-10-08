import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById, updateProduct } from "../services/product-services";
import Image from "../components/Image";
import { ButtonGlobal } from "../components/Button";
import styled from "@emotion/styled";
import CommonInputStyles from "../styles/Inputs";
import NotProduct from "./Not-Products";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.header`
  text-align: center;
`;

const Form = styled.form`
  gap: 22px;
  display: flex;
  flex-direction: column;
  text-align: start;
  padding: 20px;
`;

const Input = styled.input`
  ${CommonInputStyles}
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

function EditPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const data = await getProductById(id);
        setProduct(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchProduct();
  }, [id]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProduct({ ...product, [name]: value });
  };

  const handleUpdate = async (event) => {
    event.preventDefault();

    try {
      await updateProduct(id, product);
      alert("Product updated successfully");
    } catch (error) {
      console.error(error);
      alert("Error updating the product");
    }
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      {product ? (
        <>
          <Header>
            <h1>Edit Product</h1>
          </Header>
          <Image size="sm" src={product.picture_url} />
          <Form onSubmit={handleUpdate}>
            <Label htmlFor="name">Name</Label>
            <Input
              type="text"
              name="name"
              id="name"
              value={product.name}
              onChange={handleInputChange}
            />
            <Label htmlFor="price">Price</Label>
            <Input
              type="number"
              name="price"
              id="price"
              value={product.price}
              onChange={handleInputChange}
            />
            <Label htmlFor="description">Description</Label>
            <Input
              type="text"
              name="description"
              id="description"
              value={product.description}
              onChange={handleInputChange}
            />
            <Label htmlFor="category">Category</Label>
            <Input
              type="text"
              name="category"
              id="category"
              value={product.category}
              onChange={handleInputChange}
            />
            <Label htmlFor="picture_url">Picture URL</Label>
            <Input
              type="text"
              name="picture_url"
              id="picture_url"
              value={product.picture_url}
              onChange={handleInputChange}
            />
            <ButtonGlobal type="submit" text="Save" />
          </Form>
        </>
      ) : (
        <NotProduct />
      )}
    </Container>
  );
}

export default EditPage;
