import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {getDocs, getFirestore, query, where, collection} from "firebase/firestore";
import { BrujoDetalle } from "./Cartas";
import "../components/Cartas/ItemDetail.css";
import Cargando from "./Cargando";

const Categoria = () => {
  const { id } = useParams();
  const [dataCategoria, setDataCategoria] = useState([]);
  const [cargando, setCargando] = useState (true)

  useEffect(() => {
    setCargando (true)
    const db = getFirestore();
    const productos = collection (db, "productos");
    const filteredCollection = query(
      productos,
      where("idCategoria", "==", parseInt(id))
    );
    getDocs (filteredCollection).then (snapshot=> {
      const datos= snapshot.docs.map (doc=> ({
        id: doc.id,
        ...doc.data()
      })) 
      setDataCategoria(datos)
    }) 
    setCargando (false)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
 
  if (cargando) {
    return <Cargando/>;
  }

  return (
    <div className="grid-Cartas grid-fondo"> 
        { dataCategoria.map((brujo) => (
          <div>
                <BrujoDetalle
                  key={brujo.id}
                  id={brujo.id}
                  nombre={brujo.nombre} 
                  precio={brujo.precio} 
                  imagen={brujo.imagen}
                  stock={brujo.stock}/>
                </div>))
        }
    </div> 
    );
};

export default Categoria;