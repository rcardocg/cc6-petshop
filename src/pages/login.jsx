import { Button, Form } from 'react-bootstrap';
export default function Login(){
    return(
        <>
            <Form.Label>Inicio de sesión</Form.Label>
            <br />
            <Form.Control type="email" placeholder="nombre@ejemplo.com" />
            <br />
            <Form.Control type='password' placeholder='contraseña' />
            <br />
            <Button variant='primary'>Entrar</Button>
        </>
    )
}