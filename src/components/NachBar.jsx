import { useEffect, useState } from "react"; 
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
/* import { getPokeCategoria } from '../servicios/pokemonapi'; 
 */import {getDocs, collection, getFirestore} from "firebase/firestore";

const NachBar =(props)=> {
  const [dataCategoria, setDataCategoria] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const collRef = collection (db, "categorias")
    getDocs(collRef).then((snapshot)=> {
    const datos = snapshot.docs.map((doc)=>({id: doc.id, ...doc.data()}))
    console.log(datos)
    setDataCategoria (datos)
  });
  // eslint-disable-next-line react-hooks/exhaustive-deps
   /*  getPokeCategoria().then((data) => setDataCategoria(data)); */
  }, []);

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">{props.tiendaWebMM}</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Categorias" id="collasible-nav-dropdown">
             { dataCategoria.map((CategoriaNombre) => {
                 return(
                  <NavDropdown.Item href= "`categoria/$({CategoriaNombre.id})`">{CategoriaNombre.nombre}</NavDropdown.Item>
                )})}
            </NavDropdown>
          </Nav>
          <a href="/cart">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="carritoImagen" viewBox="0 0 16 16">
            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
            </svg>  
          </a>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NachBar;