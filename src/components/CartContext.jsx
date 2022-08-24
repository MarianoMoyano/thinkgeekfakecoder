import React, { createContext, useState} from "react";
import {addDoc, collection, getFirestore, writeBatch, query, where, getDocs, documentId} from "firebase/firestore";


export const CartContext = createContext();

const CartProvider = (props) => {
    const [cartItems, setCartItems] = useState([]);

    
  const registrarVenta = async (precioTotal, datosComprador) => {
    const db = getFirestore();
    const ventasCollection = collection(db, "ventas");
    const venta = {
      productos: cartItems,
      total: precioTotal,
      comprador: datosComprador,
    };

    const transaccion = writeBatch(db);
    const idLista = cartItems.map((product) => product.item.id);
    const sinStock = [];
    const collectionProd = collection(db, "producto");
    const productosFiltrados = await getDocs(
      query(collectionProd, where(documentId(), "in", idLista))
    );

    productosFiltrados.docs.forEach((doc) => {
      const dataDocumento = doc.data();
      const articulo = cartItems.find((art) => art.item.id === doc.id);

      if (dataDocumento.stock >= articulo.cantidad) {
        transaccion.update(doc.ref, { stock: dataDocumento.stock - articulo.cantidad });
      } else {
        sinStock.push({ articulo });
      }

    });
    if (sinStock.length === 0) {
      const nuevaVenta = await addDoc(ventasCollection, venta);
      transaccion.commit();
      alert(
        `Tu ticket de venta es: ${nuevaVenta.id}`
        );
    } else {
      alert(
        `Hubo un problema con el stock de ciertos productos: ${sinStock.toString()}`
      );
    }
  };
    return(
        <CartContext.Provider value ={{cartItems, setCartItems, registrarVenta}}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartProvider;