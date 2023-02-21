import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

export default function Header() {
  return (
    <>
      <Container fluid />
      <Row>
        <Col>
          <img
            src="https://picsum.photos/1400/300?random=1"
            className="hero-image"
            alt="header"
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <h1>Hello I am a Software Engineer</h1>
        </Col>
      </Row>
    </>
  );
}
