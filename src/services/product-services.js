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
      throw new Error(`Error al crear el producto: ${response.status}`);
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
      throw new Error(`Error de red: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}


