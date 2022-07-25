import { useEffect, useState } from "react";
import { getPokeCategoriaById } from "../servicios/pokemonapi";
import { useParams } from "react-router-dom";
import { PokeDetalle } from "./Cartas";

const Categoria = () => {
  const { id } = useParams();
    const [dataCategoria, setDataCategoria] = useState([]);
  
    useEffect(() => {
      getPokeCategoriaById(id).then((data) => setDataCategoria(data));
      console.log (dataCategoria)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
  

    return (
      <div> 
          { dataCategoria.map((pokemon) => (
            <div>
                  <PokeDetalle
                    id={pokemon.id}
                    nombre={pokemon.name} 
                    cost={pokemon.cost} 
                    sprite={pokemon.sprites.default}/>
                  </div>))
          }
      </div> 
      );

/*     return (
    <div> 
        { dataCategoria.items.map((pokemon) => (
          <div>
            { <h1>{pokemon.name}</h1> }
                <PokeDetalle id={pokemon.id} nombre={pokemon.name} url={pokemon.url} />
                </div>))
        }
    </div> 
    ); */
  };
;
export default Categoria;