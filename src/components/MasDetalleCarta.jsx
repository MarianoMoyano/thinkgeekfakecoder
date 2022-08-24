import "./Cartas/ItemDetail.css";
import { Cantidad } from "./Cantidad.jsx";
import SumarAlCarro from "./SumarAlCarro";
import { useState } from "react";


export const MasDetallesCarta = ({ producto, cantidadInicial} ) => {

const [dataCantidad, setDataCantidad] = useState(0)

return (
<div className='cartaDeMasDetalles grid-fondo'>
    <img src={producto.imagen} alt="" className="sizeSprite"/>
    <h2>{producto.nombre}</h2>
     
    {(producto.precio > 0 && producto.stock > 0 ) && 
    <>
    <h3>Precio: {producto.precio}</h3>
     <Cantidad  id={producto.id} setCantidad={setDataCantidad} stock={producto.stock}/>
     <SumarAlCarro item = {producto} cantidad={dataCantidad}/>    
    <h3>Stock: {producto.stock}</h3>
    </>
    } 
    {(producto.precio === 0 || producto.stock === 0 ) && <h3>Proximamente!</h3>}

</div>
)} 

export default MasDetallesCarta