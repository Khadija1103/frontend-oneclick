import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';

function Login() {
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [tipoMensaje, setTipoMensaje] = useState('');

  // Simulación de usuario válido
  const correoValido = 'admin@correo.com';
  const contrasenaValida = '1234';

  const manejarEnvio = (e) => {
    e.preventDefault();

    if (correo === correoValido && contrasena === contrasenaValida) {
      setMensaje('✅ Inicio de sesión exitoso. Bienvenido.');
      setTipoMensaje('success');
    } else {
      setMensaje('❌ Error en la autenticación. Correo o contraseña incorrectos.');
      setTipoMensaje('danger');
    }
  };

  return (
    <Container className="mt-5" style={{ maxWidth: '400px' }}>
      <h2 className="mb-4">Iniciar sesión</h2>
      {mensaje && <Alert variant={tipoMensaje}>{mensaje}</Alert>}

      <Form onSubmit={manejarEnvio}>
        <Form.Group className="mb-3">
          <Form.Label>Correo electrónico</Form.Label>
          <Form.Control
            type="email"
            placeholder="Ingrese su correo"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="Ingrese su contraseña"
            value={contrasena}
            onChange={(e) => setContrasena(e.target.value)}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Iniciar sesión
        </Button>
      </Form>
    </Container>
  );
}

export default Login;


