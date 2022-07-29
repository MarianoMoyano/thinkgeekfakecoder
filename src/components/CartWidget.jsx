import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";



const CartWidget = () => {
    const { id } = useParams();
      const [dataCategoria, setDataCategoria] = useState([]);}

export default CartWidget;