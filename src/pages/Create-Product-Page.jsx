import React, { useState } from "react";
import { createProduct } from "../services/product-services";
import FormPresentation from "../components/Form";

function CreateProduct() {
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
    try {
      const response = await createProduct(productData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <FormPresentation
      productData={productData}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
}

export default CreateProduct;