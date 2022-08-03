import { useState } from "react";
import "../components/Cartas/ItemDetail.css"
import Button from 'react-bootstrap/Button';

export const Cantidad = ({id, nombre, precio, setCantidad}) => {
    const [dataCantidad, setDataCantidad] = useState(0)
    return(
       <div key={id}>
        <Button onClick={()=> {
            if (dataCantidad < id)
            setDataCantidad ( dataCantidad+1, setCantidad (dataCantidad))
            }}>+</Button>
        <span className="grandeNumero carrito">{dataCantidad}</span>
        <Button onClick={()=> dataCantidad && setDataCantidad (dataCantidad-1, setCantidad (dataCantidad))}>-</Button>
       </div> 
    )
}

export default Cantidad