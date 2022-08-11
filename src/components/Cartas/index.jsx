import "./ItemDetail.css"
import { Cantidad } from "../Cantidad.jsx";
import SumarAlCarro from "../SumarAlCarro";
import { useState } from "react";


export const PokeDetalle = ({ id, nombre, cost, sprite } ) => {

    const [dataCantidad, setDataCantidad] = useState(0)

return (
<div className='carta'>
    <img src={sprite} alt="" className="sizeSprite"/>
    <h2>Nombre: {nombre}</h2>
    <h3>Costo: {cost}</h3>
    <Cantidad nombre={nombre} id={id} precio={cost} setCantidad={setDataCantidad}/>
    <SumarAlCarro id={id}  nombre={nombre} precio={cost} cantidad={dataCantidad}/>    
    <h3>Cantidad disponible: {id}</h3>
</div>
)} 

export default PokeDetalle