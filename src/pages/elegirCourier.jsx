import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

export default function Courier() {
  const location = useLocation();
  const { total } = location.state || { total: 0 }; // Obtener el total desde el catálogo
  const [destino, setDestino] = useState('');
  const [formato, setFormato] = useState('json');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = `http://courrier/consulta?destino=${destino}&formato=${formato}`;
    console.log("Enviando solicitud a URL:", url);
  };

  const handleProceedToPayment = () => {
    navigate('/payment', { state: { total: total } }); // Redirige a la pantalla de pago con el total
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="destinoInput">
          <Form.Label>Destino</Form.Label>
          <Form.Control
            type="text"
            placeholder="Código de destino"
            value={destino}
            onChange={(e) => setDestino(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formatoSelect">
          <Form.Label>Formato de respuesta</Form.Label>
          <Form.Control
            as="select"
            value={formato}
            onChange={(e) => setFormato(e.target.value)}
          >
            <option value="json">JSON</option>
            <option value="xml">XML</option>
          </Form.Control>
        </Form.Group>

        <Button variant="primary" type="submit">
          Consultar Costo de Envío
        </Button>
      </Form>

      <br />
      <Button variant="success" onClick={handleProceedToPayment}>
        Proceder al Pago
      </Button>
    </>
  );
}
