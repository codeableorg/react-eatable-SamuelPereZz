import React from "react";
import styled from "@emotion/styled";
import { ButtonGlobal } from "../components/Button";
import CommonInputStyles from "../styles/Inputs";
import { useFormik } from "formik";
import * as Yup from "yup";
import { createProduct } from "../services/product-services";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 3rem;
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

function FormPresentation(prop) {
  const { values, errors, touched, handleChange, handleBlur, handleSubmit } = useFormik({
    initialValues: {
      name: "",
      price: "",
      category: "",
      description: "",
      picture_url: "",
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().required("Name is required"),
      price: Yup.number()
        .typeError("Price must be a number")
        .positive("Price must be positive")
        .required("Price is required"),
      description: Yup.string().required("Description is required"),
      category: Yup.string().required("Category is required"),
      picture_url: Yup.string()
        .url("Invalid URL format")
        .required("Picture URL is required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        await createProduct(values);
        resetForm();
        alert("Product added successfully!");
      } catch (error) {
        console.error(error);
      }
    },
  });

  // Estilo para los mensajes de error
  const errorStyle = { color: "red" };

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
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.name && errors.name && <div style={errorStyle}>{errors.name}</div>}

        <Label htmlFor="price">Price</Label>
        <Input
          type="number"
          name="price"
          id="price"
          value={values.price}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.price && errors.price && <div style={errorStyle}>{errors.price}</div>}

        <Label htmlFor="description">Description</Label>
        <Input
          type="text"
          name="description"
          id="description"
          value={values.description}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.description && errors.description && <div style={errorStyle}>{errors.description}</div>}

        <Label htmlFor="category">Category</Label>
        <Input
          type="text"
          name="category"
          id="category"
          value={values.category}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.category && errors.category && <div style={errorStyle}>{errors.category}</div>}

        <Label htmlFor="picture_url">Picture URL</Label>
        <Input
          type="text"
          name="picture_url"
          id="picture_url"
          value={values.picture_url}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.picture_url && errors.picture_url && <div style={errorStyle}>{errors.picture_url}</div>}

        <ButtonGlobal type="submit" text="Create" />
      </Form>
    </Container>
  );
}

export default FormPresentation;
