import { useState } from "react";
import "../components/Cartas/ItemDetail.css"
import Button from 'react-bootstrap/Button';

export const Cantidad = ({id, nombre}) => {
    const [dataCantidad, setDataCantidad] = useState(0)
    return(
       <div key={id}>
        <Button onClick={()=> {
            if (dataCantidad < id)
            setDataCantidad ( dataCantidad+1)
            }}>+</Button>
        <span className="grandeNumero carrito">{dataCantidad}</span>
        <Button onClick={()=> dataCantidad && setDataCantidad (dataCantidad-1)}>-</Button>
        <Button className="carrito" onClick={() => sumarAlCarro (nombre, id, dataCantidad)}>Sumar al carro</Button>
        <h3>Cantidad disponible: {id}</h3>
       </div> 
    )
}

function sumarAlCarro (nombre, id, Cantidad){
    localStorage.setItem (id, JSON.stringify ({nombre:nombre, Cantidad:Cantidad, id:id}))
}

export default Cantidad