import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Card } from "react-bootstrap";
import portfolios from "../data/griddata.json";

export default function Grid() {
  return (
    <>
      <Container>
        <Row>
          {portfolios.map((element) => {
            return (
              <Col key={element.id} sm={12} md={6} lg={4} xl={2}>
                <Card>
                  <Card.Img src={element.image} alt="image" />
                  <Card.Body>
                    <Card.Title src={element.name}>Title 1</Card.Title>
                    <Card.Text>{element.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
}
