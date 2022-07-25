import { useEffect, useState } from "react"; 
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { getPokeCategoria } from '../servicios/pokemonapi'; 

const NachBar =(props)=> {
  const [dataCategoria, setDataCategoria] = useState({results:[]});

  useEffect(() => {
    getPokeCategoria().then((data) => setDataCategoria(data));
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
             { dataCategoria.results.map((CategoriaNombre) => {
                 return(
                  <NavDropdown.Item href={CategoriaNombre.url.replace("https://pokeapi.co/api/v2/item-category/", "/categoria/")}>{CategoriaNombre.name}</NavDropdown.Item>
                )})} 
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NachBar;