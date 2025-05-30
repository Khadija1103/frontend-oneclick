// Importación de librerías necesarias y componentes
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Navbar, Nav, Container, Card, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';

// Importación de componentes externos
import Login from './components/Login';
import Register from './components/Register';

// Componente de la página principal (Home)
function Home() {
  return (
    <>
      {/* Carrusel de imágenes con servicios destacados */}
      <Carousel style={{ maxHeight: '420px', overflow: 'hidden' }}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/limpieza.jpg"
            alt="Servicios de limpieza"
            style={{ maxHeight: '400px', objectFit: 'cover' }}
          />
          <Carousel.Caption style={{ backgroundColor: 'rgba(0,0,0,0.5)', borderRadius: '10px' }}>
            <h3>Servicios de Limpieza Profesional</h3>
            <p>Confía en nosotros para mantener tu hogar o empresa impecable.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/mantenimiento.jpg"
            alt="Mantenimiento locativo"
            style={{ maxHeight: '400px', objectFit: 'cover' }}
          />
          <Carousel.Caption style={{ backgroundColor: 'rgba(0,0,0,0.5)', borderRadius: '10px' }}>
            <h3>Expertos en Mantenimiento Locativo</h3>
            <p>Servicios confiables para cada rincón de tu espacio.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/jardineria.jpg"
            alt="Jardinería"
            style={{ maxHeight: '400px', objectFit: 'cover' }}
          />
          <Carousel.Caption style={{ backgroundColor: 'rgba(0,0,0,0.5)', borderRadius: '10px' }}>
            <h3>Cuidamos tus Espacios Verdes</h3>
            <p>Jardinería y embellecimiento con amor y detalle.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Sección con tarjetas informativas */}
      <Container className="my-5">
        <Row>
          <Col md={3}>
            <Card>
              <Card.Img
                variant="top"
                src="/images/proveedor.jpg"
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <Card.Body>
                <Card.Title>Proveedor del Mes</Card.Title>
                <Card.Text>María Gómez - Limpieza</Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={3}>
            <Card>
              <Card.Img
                variant="top"
                src="/images/cliente.jpg"
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <Card.Body>
                <Card.Title>Cliente del Mes</Card.Title>
                <Card.Text>Pedro Ruiz - 15 servicios contratados</Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={3}>
            <Card>
              <Card.Img
                variant="top"
                src="/images/promocion.jpg"
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <Card.Body>
                <Card.Title>Promociones</Card.Title>
                <Card.Text>Hasta 30% de descuento</Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={3}>
            <Card>
              <Card.Img
                variant="top"
                src="/images/premios.jpg"
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <Card.Body>
                <Card.Title>Premios y Descuentos</Card.Title>
                <Card.Text>Acumula puntos</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

// Componente principal de la aplicación
function App() {
  return (
    <>
      <Navbar bg="primary" variant="dark" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand as={Link} to="/">One Click Service</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/login">Iniciar sesión</Nav.Link>
              <Nav.Link as={Link} to="/register">Registrarse</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Rutas de la aplicación */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;



