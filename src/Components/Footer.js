import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col className="text-center">
            <p>&copy; {new Date().getFullYear()} Schachverein. Alle Rechte vorbehalten.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
