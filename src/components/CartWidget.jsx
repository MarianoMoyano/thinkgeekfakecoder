import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import Cantidad from "./Cantidad";

const CartWidget = () => {
  const [dataCarrito, setDataCarrito] = useState (
    JSON.parse (localStorage.getItem ("carrito") || "[]")
  );

  const [dataCantidad, setDataCantidad] = useState(0)

  return (
  <div>
      <Table className = "renglones" striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Cantidad</th>
          <th>Precio</th>
          <th>subtotal</th>
          <th>Borrar</th>
        </tr>
      </thead>
      <tbody>
      { dataCarrito.map((item) => (
        <tr key= {item.id}>
          <td>{item.nombre}</td>
          <td><Cantidad id={item.id} nombre={item.nombre} precio={item.precio} setCantidad={setDataCantidad} cantidadInicial={item.Cantidad} /></td>
          <td>{item.precio}</td>
          <td>{item.precio*item.Cantidad}</td>
          <td>
          <button className="btn btn-link" role="link" onClick={()=> { 
            const nuevoCarrito = dataCarrito.filter(
              function(itemBorrar) {
                return (
                  itemBorrar.id !== item.id
                )
              }
            )
            localStorage.setItem ("carrito", JSON.stringify (nuevoCarrito))
            setDataCarrito(nuevoCarrito) 
          }
          }> 
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
              <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
              </svg>
            </button>
          </td>
        </tr>
        ))}
      </tbody>
    </Table>
  </div>
  )
}
export default CartWidget;