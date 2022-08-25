import { useEffect, useState } from "react"; 
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import {getDocs, collection, getFirestore} from "firebase/firestore";
import NumeroCarrito from "./NumeroCarrito";

const NachBar =(props)=> {
  const [dataCategoria, setDataCategoria] = useState([]);

  useEffect(() => {
    const db=getFirestore();
    const collRef=collection (db, "categorias")
    getDocs(collRef).then((snapshot)=> {
      const datos=snapshot.docs.map((doc)=>({id: doc.id, ...doc.data()}))
      console.log(datos)
      setDataCategoria (datos)
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, []);

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>{props.tiendaWebMM}</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            { dataCategoria.map((CategoriaNombre) => {
                 return(
                  <Nav.Link key={CategoriaNombre.id} as={Link} to={`/categoria/${CategoriaNombre.id}`}>{CategoriaNombre.nombre}</Nav.Link>
                )})}
          </Nav>
          <NumeroCarrito></NumeroCarrito>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NachBar;