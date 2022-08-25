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
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if (cargando) {
        return <Cargando/>;
    }

    return ( <MasDetallesCarta 
        key={brujo.id + 10000}
        producto = {brujo}
        /> );
}
 
export default MasDetalles;