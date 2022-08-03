import "../components/Cartas/ItemDetail.css"
import Button from 'react-bootstrap/Button';

export const SumarAlCarro = ({id, nombre, precio, cantidad}) => {
    return(
       <div key={id}>
        <Button className="carrito" onClick={() => agregarAlCarro (nombre, id, cantidad, precio)}>Sumar al carro</Button>
       </div> 
    )
}

function agregarAlCarro (nombre, id, Cantidad, precio){
    const carrito = JSON.parse (localStorage.getItem ("carrito") || "[]")
    if(
        carrito.find ((Item)=>{
            return Item.id === id
        })=== undefined
    ) {
        const nuevoCarrito = [...carrito,  {nombre:nombre, Cantidad:Cantidad, id:id, precio:precio}]
        localStorage.setItem ("carrito", JSON.stringify (nuevoCarrito))
    } else {
        const modificarCarrito = carrito.filter(
            function(itemSumar) {
              return (
                itemSumar.id !== id
              )
            }
          )
        const nuevoCarrito = [...modificarCarrito,  {nombre:nombre, Cantidad:Cantidad, id:id, precio:precio}]
        localStorage.setItem ("carrito", JSON.stringify (nuevoCarrito))
    }
  
}

export default SumarAlCarro