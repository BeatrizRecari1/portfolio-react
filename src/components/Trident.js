import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

export default function Trident() {
  return (
    <>
      <Container className="trident">
        <Row className="bg-danger">
          <Col>
            <h2>3 Things About Me</h2>
          </Col>
        </Row>
        <Row className="bg-success">
          <Col sm={12} lg={4}>
            <img src="/images/hp-icon-1_360.png" alt="ideas" />
            <h3>Ideas</h3>
            <p>lorem lorem lorem lorem lorem lorem</p>
          </Col>
          <Col sm={12} lg={4}>
            <img src="/images/hp-icon-2_360.png" alt="shield" />
            <h3>Shield</h3>
            <p>lorem lorem lorem lorem lorem lorem</p>
          </Col>
          <Col sm={12} lg={4}>
            <img src="/images/hp-icon-3_360.png" alt="graph" />
            <h3>Graph</h3>
            <p>lorem lorem lorem lorem lorem lorem</p>
          </Col>
        </Row>
      </Container>
    </>
  );
}
