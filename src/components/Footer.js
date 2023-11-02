import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import navIcon1 from '../assets/img/github.png';
import navIcon2 from '../assets/img/YouTube-icon.png';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
          <h1 className="ea">Packo Lemoa</h1>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
