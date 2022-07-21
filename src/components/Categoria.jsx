import { useEffect, useState } from "react";
import { getPokeCategoriaById } from "../servicios/pokemonapi";

const Categoria = () => {
    const [dataCategoria, setDataCategoria] = useState([]);
  
    useEffect(() => {
      getPokeCategoriaById(8).then((data) => setDataCategoria(data));
    }, []);
  
    return (
    <p> 
        {JSON.stringify(dataCategoria.items)}
        {/* {dataCategoria.items.map((pokemon) => (
         <h1>{pokemon.name}</h1>
        ))} */}
        mostrar categoria
    </p> 
    );
  };
;
export default Categoria;