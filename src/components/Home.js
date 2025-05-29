import React from 'react';
import { Carousel, Card, Row, Col, Container } from 'react-bootstrap';

const Home = () => {
  return (
    <>
      <Carousel style={{ maxHeight: '420px', overflow: 'hidden' }}>
        <Carousel.Item>
          <img className="d-block w-100" src="/images/limpieza.jpg" alt="Servicios de limpieza" style={{ maxHeight: '400px', objectFit: 'cover' }} />
          <Carousel.Caption style={{ backgroundColor: 'rgba(0,0,0,0.5)', borderRadius: '10px' }}>
            <h3>Servicios de Limpieza Profesional</h3>
            <p>Confía en nosotros para mantener tu hogar o empresa impecable.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="/images/mantenimiento.jpg" alt="Mantenimiento locativo" style={{ maxHeight: '400px', objectFit: 'cover' }} />
          <Carousel.Caption style={{ backgroundColor: 'rgba(0,0,0,0.5)', borderRadius: '10px' }}>
            <h3>Expertos en Mantenimiento Locativo</h3>
            <p>Servicios confiables para cada rincón de tu espacio.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="/images/jardineria.jpg" alt="Jardinería" style={{ maxHeight: '400px', objectFit: 'cover' }} />
          <Carousel.Caption style={{ backgroundColor: 'rgba(0,0,0,0.5)', borderRadius: '10px' }}>
            <h3>Cuidamos tus Espacios Verdes</h3>
            <p>Jardinería y embellecimiento con amor y detalle.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Container className="my-5">
        <Row>
          <Col md={3}>
            <Card>
              <Card.Img variant="top" src="/images/proveedor.jpg" style={{ height: '200px', objectFit: 'cover' }} />
              <Card.Body>
                <Card.Title>Proveedor del Mes</Card.Title>
                <Card.Text>María Gómez - Limpieza</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card>
              <Card.Img variant="top" src="/images/cliente.jpg" style={{ height: '200px', objectFit: 'cover' }} />
              <Card.Body>
                <Card.Title>Cliente del Mes</Card.Title>
                <Card.Text>Pedro Ruiz - 15 servicios contratados</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card>
              <Card.Img variant="top" src="/images/promocion.jpg" style={{ height: '200px', objectFit: 'cover' }} />
              <Card.Body>
                <Card.Title>Promociones</Card.Title>
                <Card.Text>Hasta 30% de descuento</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card>
              <Card.Img variant="top" src="/images/premios.jpg" style={{ height: '200px', objectFit: 'cover' }} />
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
};

export default Home;
