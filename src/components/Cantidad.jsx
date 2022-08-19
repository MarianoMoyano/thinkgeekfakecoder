import { useState } from "react";
import "../components/Cartas/ItemDetail.css"
import Button from 'react-bootstrap/Button';

export const Cantidad = ({id, nombre, precio, setCantidad, cantidadInicial}) => {
    const [dataCantidad, setDataCantidad] = useState(cantidadInicial || 0)
    return(
       <div key={id}>
        <Button onClick={()=> {
            if (dataCantidad < id)
            setDataCantidad ( dataCantidad+1, setCantidad (dataCantidad+1))
            }}>+</Button>
        <span className="grandeNumero carrito">{dataCantidad}</span>
        <Button onClick={()=> dataCantidad && setDataCantidad (dataCantidad-1, setCantidad (dataCantidad-1))}>-</Button>
       </div> 
    )
}

export default Cantidad