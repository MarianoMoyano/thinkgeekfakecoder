export const API_URL = "https://pokeapi.co/api/v2/item-category";

export const getPokeCategoria = async () => {
  return await fetch(`${API_URL}/`)
    .then((response) => response.json())
    .then((data) => data);
};

export const getPokeCategoriaById = async (id) => {
  return await fetch(`${API_URL}/${id}`)
    .then((response) => response.json())
    .then((data) => data);
}