import React, { useEffect, useState } from "react";
import { getProducts } from "../services/product-services";

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error("Error al obtener productos:", error);
      });
  }, []);

  return (
    <div>
      <h1>Lista de Productos</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <img src={product.picture_url} alt={product.name} />
            <h2>{product.name}</h2>
            <p>Precio: ${product.price}</p>
            {/* <p>Categoría: {product.category}</p>
            <p>Descripción: {product.description}</p> */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
