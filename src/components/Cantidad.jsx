import { useState } from "react";
import "../components/Cartas/ItemDetail.css"
import Button from 'react-bootstrap/Button';

export const Cantidad = ({id, nombre, precio}) => {
    const [dataCantidad, setDataCantidad] = useState(0)
    return(
       <div key={id}>
        <Button onClick={()=> {
            if (dataCantidad < id)
            setDataCantidad ( dataCantidad+1)
            }}>+</Button>
        <span className="grandeNumero carrito">{dataCantidad}</span>
        <Button onClick={()=> dataCantidad && setDataCantidad (dataCantidad-1)}>-</Button>
        <Button className="carrito" onClick={() => sumarAlCarro (nombre, id, dataCantidad, precio)}>Sumar al carro</Button>
        <h3>Cantidad disponible: {id}</h3>
       </div> 
    )
}

function sumarAlCarro (nombre, id, Cantidad, precio){
    const carrito = JSON.parse (localStorage.getItem ("carrito") || "[]")
    const nuevoCarrito = [...carrito,  {nombre:nombre, Cantidad:Cantidad, id:id, precio:precio}]
    localStorage.setItem ("carrito", JSON.stringify (nuevoCarrito))
}

export default Cantidad