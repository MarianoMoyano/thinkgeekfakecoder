/* import { getPokeApi } from "../../servicios/pokemonapi"
import { useEffect, useState } from "react";  */


export const PokeDetalle = ({ id, nombre, cost, sprite } ) => {
/* 
const [dataPoke, setDataPoke] = useState({});

useEffect(() => {
    getPokeApi().then((data) => setDataPoke(data));
}, []);
  
 */
return (
<div>
    <img src={sprite} alt="" className=""/>
    <h2>{id} {nombre}</h2>
    <h3>{cost}</h3>

  {/*   <h3>{console.log(dataPoke)}</h3> */}
    {/* <img src={dataPoke.sprites.default} alt="" className=""/> */}
</div>
)} 

export default PokeDetalle