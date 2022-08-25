import "./Cartas/ItemDetail.css";
import { useState, useContext } from "react";
import { Cantidad } from "./Cantidad.jsx";
import SumarAlCarro from "./SumarAlCarro";
import { CartContext } from "../Context/CartContext";


export const MasDetallesCarta = ({ producto } ) => {
const { cartItems }=useContext(CartContext);
const [dataCantidad, setDataCantidad] = useState(0)

return (
<div className='cartaDeMasDetalles grid-fondo'>
    <img src={producto.imagen} alt="" className="sizeSprite"/>
    <h2>{producto.nombre}</h2>
     
    {(producto.precio > 0 && producto.stock > 0 && cartItems.find((item)=>{return item.id===producto.id})===undefined) && 
    <>
    <h3>Precio: {producto.precio}</h3>
    <Cantidad  id={producto.id} setCantidad={setDataCantidad} stock={producto.stock}/>
    <SumarAlCarro item={producto} cantidad={dataCantidad}/>    
    <h3>Stock: {producto.stock}</h3>
    </>
    } 
    {(producto.precio===0 || producto.stock===0 ) && <h3>Proximamente!</h3>}

</div>
)} 

export default MasDetallesCarta;