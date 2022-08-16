import "./ItemDetail.css"
import { Cantidad } from "../Cantidad.jsx";
import SumarAlCarro from "../SumarAlCarro";
import { useState } from "react";


export const BrujoDetalle = ({ id, idCategoria, nombre, precio, imagen } ) => {

    const [dataCantidad, setDataCantidad] = useState(0)

return (
<div className='carta'>
    <img src={imagen} alt="" className="sizeSprite"/>
    <h2>Nombre: {nombre}</h2>
    <h3>Costo: {precio}</h3>
    <Cantidad nombre={nombre} id={id} precio={precio} setCantidad={setDataCantidad}/>
    <SumarAlCarro id={id}  nombre={nombre} precio={precio} cantidad={dataCantidad}/>    
    <h3>Cantidad disponible: {id}</h3>
</div>
)} 

export default BrujoDetalle