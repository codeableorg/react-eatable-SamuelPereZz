const BASE_URI = "https://react-eatable-api.herokuapp.com";

export function getProducts() {
  return fetch(`${BASE_URI}/products`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Error de red: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data); 
      return data;
    })
    .catch((error) => {
      console.error("Error al obtener productos:", error);
      throw error;
    });
}