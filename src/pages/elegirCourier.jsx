import { useState } from "react";
import { Form, Button } from "react-bootstrap";

export default function Courier() {
  const [destino, setDestino] = useState("");
  const [formato, setFormato] = useState("json"); // JSON por defecto

  const handleSubmit = (e) => {
    e.preventDefault();

    // Crear la URL con los parámetros que ha dado el usuario
    const url = `http://courrier/consulta?destino=${destino}&formato=${formato}`;
    
    // Simular el envío de la solicitud en la consola (luego puedes hacer una solicitud real con fetch)
    console.log("Enviando solicitud a URL:", url);

    // Aquí puedes implementar el envío real con fetch
    // fetch(url)
    //   .then((response) => response.json())
    //   .then((data) => console.log('Respuesta del servidor:', data))
    //   .catch((error) => console.error('Error en la solicitud:', error));
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
    </>
  );
}
