export const API_URL = "https://pokeapi.co/api/v2/item-category";

export const getPokeCategoria = async () => {
  return await fetch(`${API_URL}/`)
    .then((response) => response.json())
    .then((data) => data);
};

export const getPokeCategoriaById = async (id) => {
  let cate = await fetch(`${API_URL}/${id}`)
    .then((response) => response.json())
  let poke = cate.items.map (async pokemon => {
     return await fetch (pokemon.url) 
      .then ((dataPoke) =>dataPoke.json())
    })

    return Promise.all (poke).then((data) => data); 
}
