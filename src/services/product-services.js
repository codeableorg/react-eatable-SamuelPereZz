const BASE_URI = "https://react-eatable-api.herokuapp.com";

export async function createProduct(productData) {
  try {
    const response = await fetch(`${BASE_URI}/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    });
    if (!response.ok) {
      throw new Error(response.status);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getProducts() {
  try {
    const response = await fetch(`${BASE_URI}/products`);
    if (!response.ok) {
      throw new Error(response.status);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getProductById(id) {
  try {
    const response = await fetch(`${BASE_URI}/products/${id}`);
    if (!response.ok) {
      throw new Error(response.status);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function updateProduct(id, updatedProductData) {
  try {
    const response = await fetch(`${BASE_URI}/products/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedProductData),
    });
    if (!response.ok) {
      throw new Error(response.status);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function deleteProduct(id) {
  try {
    const response = await fetch(`${BASE_URI}/products/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error(response.status);
    }
    return true;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
