import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { createProduct } from "../services/product-services";
import FormPresentation from "../components/Form";

function CreateProduct() {
  const initialValues = {
    name: "",
    price: "",
    category: "",
    description: "",
    picture_url: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    price: Yup.number()
      .typeError("Price must be a number")
      .positive("Price must be positive")
      .required("Price is required"),
    description: Yup.string().required("Description is required"),
    category: Yup.string().required("Category is required"),
    picture_url: Yup.string().url("Invalid URL format").required("Picture URL is required"),
  });

  const onSubmit = async (values, { resetForm }) => {
    try {
      await createProduct(values);
      resetForm(); 
      alert("Product added successfully!");
    } catch (error) {
      console.error(error);
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <FormPresentation
      formik={formik}
    />
  );
}

export default CreateProduct;
