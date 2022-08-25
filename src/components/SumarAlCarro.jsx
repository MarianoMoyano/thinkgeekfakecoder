import "../components/Cartas/ItemDetail.css"
import Button from 'react-bootstrap/Button';
import { CartContext } from "../Context/CartContext";
import { useContext } from "react";

export const SumarAlCarro=({item, cantidad}) => {
  const { setCartItems }=useContext(CartContext);
  console.log('cant %d', cantidad)
    return(
       <div key={item.id}>
        <Button className="carrito" onClick={() => {
          console.log(cantidad)
          setCartItems((prevState) => [...prevState, {...item, cantidad }]);
        }}>Sumar al carro</Button>
       </div> 
    )
}

export default SumarAlCarro;
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
    

