import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function DatosVenta({guardar}) {
  return (
    <Form onSubmit={guardar}>
    <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" placeholder="Escriba nombre" id='nombre'/>
        <Form.Text className="text-muted">
          Ingrese su nombre.
        </Form.Text>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Mail</Form.Label>
        <Form.Control type="mail" placeholder="Escriba mail" id='mail'/>
        <Form.Text className="text-muted">
        Ingrese su mail.
        </Form.Text>
    </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Telefono</Form.Label>
        <Form.Control type="tel" placeholder="Escriba celular" id='tel'/>
        <Form.Text className="text-muted">
        Ingrese su telefono.
        </Form.Text>
      </Form.Group>
      <Button variant="primary" type="submit">
        Completar compra!
      </Button>
    </Form>
  );
}

export default DatosVenta;