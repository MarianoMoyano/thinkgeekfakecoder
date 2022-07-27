import { useState } from "react";
import "../components/Cartas/ItemDetail.css"
import Button from 'react-bootstrap/Button';

export const Cantidad = ({id}) => {
    const [dataCantidad, setDataCantidad] = useState(0)
    return(
       <div>
        <Button onClick={()=> {
            if (dataCantidad < id)
            setDataCantidad ( dataCantidad+1)
            }}>+</Button>
        Cantidad: {dataCantidad}  
        <Button onClick={()=> dataCantidad && setDataCantidad (dataCantidad-1)}>-</Button>
       <h3>Cantidad disponible: {id}</h3>
       </div> 
    )
}

export default Cantidad