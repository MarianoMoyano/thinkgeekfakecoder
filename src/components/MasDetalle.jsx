import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Cartas/ItemDetail.css";
import Cargando from "./Cargando";
import {getDoc, doc, getFirestore} from "firebase/firestore";
import MasDetallesCarta from "./MasDetalleCarta";

const MasDetalles = () => {
    const { id } = useParams();
    const [cargando, setCargando] = useState (true)
    const [brujo, setBrujo] = useState ({})
    useEffect(() => {
        setCargando (true)
        const db = getFirestore();
        const productoDoc = doc(db, "productos", id);
        getDoc(productoDoc).then((snapshot) => {
          setBrujo({ ...snapshot.data(), id: snapshot.id });
          setCargando(false);
        });
    }, [])

    if (cargando) {
        return <Cargando/>;
    }

    return ( <MasDetallesCarta 
        key={brujo.id}
        producto = {brujo}
        cantidadInicial = {0}
        /> );
}
 
export default MasDetalles;