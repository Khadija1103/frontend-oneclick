import React, { useState } from 'react';
import { Form, Button, Container, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const validatePassword = (pwd) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    return regex.test(pwd);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validatePassword(password)) {
      setError(
        'La contraseña debe tener mínimo 8 caracteres, incluir mayúsculas, minúsculas, números y símbolos.'
      );
    } else {
      setError('');
      alert('Inicio de sesión exitoso (simulado)');
    }
  };

  return (
    <Container className="my-5 d-flex justify-content-center">
      <Card style={{ width: '25rem' }}>
        <Card.Body>
          <Card.Title className="mb-4 text-center">Iniciar Sesión</Card.Title>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="loginEmail">
              <Form.Label>Correo electrónico</Form.Label>
              <Form.Control type="email" placeholder="Ingrese su correo" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="loginPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Ingrese su contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                isInvalid={!!error}
                required
              />
              {error && (
                <Form.Text className="text-danger">{error}</Form.Text>
              )}
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100 mb-3">
              Entrar
            </Button>

            <div className="d-flex justify-content-between">
              <Link to="/forgot-password" className="text-decoration-none">
                ¿Olvidó su contraseña?
              </Link>
              <Link to="/register" className="text-decoration-none">
                Registrarse
              </Link>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Login;
