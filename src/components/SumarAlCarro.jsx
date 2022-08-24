import "../components/Cartas/ItemDetail.css"
import Button from 'react-bootstrap/Button';
import { CartContext } from "./CartContext";
import { useContext } from "react";

export const SumarAlCarro = ({item}, cantidad) => {
  const { setCartItems } = useContext(CartContext);
    return(
       <div key={item.id}>
        <Button className="carrito" onClick={() => {
          setCartItems((prevState) => [...prevState, { item, cantidad: cantidad }]);
        }}>Sumar al carro</Button>
{/*         <Button className="carrito" onClick={() => agregarAlCarro ({item}, cantidad)}>Sumar al carro</Button>
 */}
       </div> 
    )
}

/* function agregarAlCarro ({item}, cantidad){ */
    /* const { setCartItems } = useContext(CartContext);
    setCartItems((prevState) => [...prevState, { item, cantidad: cantidad }]); */
    /* const carrito = JSON.parse (localStorage.getItem ("carrito") || "[]") */
 /*    if(
        carrito.find ((Item)=>{
            return Item.id === id
        })=== undefined
    ) { */
/*         const nuevoCarrito = [...carrito,  {nombre:nombre, Cantidad:Cantidad, id:id, precio:precio}]
 */       /*  localStorage.setItem ("carrito", JSON.stringify (nuevoCarrito)) */
/*     } else {
        const modificarCarrito = carrito.filter(
            function(itemSumar) {
              return (
                itemSumar.id !== id
              )
            }
          ) */
/*         const nuevoCarrito = [...modificarCarrito,  {nombre:nombre, Cantidad:Cantidad, id:id, precio:precio}]
 */        /* localStorage.setItem ("carrito", JSON.stringify (nuevoCarrito)) */
    

export default SumarAlCarro