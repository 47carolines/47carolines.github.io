import { Container, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Bio from "./Bio";

const Home = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <Container className="mt-4">
            <Row>
              <Col sm={4}>
                <Image className="mb-4" src="/images/headshot.png" fluid />
              </Col>
              <Col sm={8}>
                <h1 className="display-1 homepage">Caroline</h1>
                <h1 className="display-1 homepage">Lewis</h1>
                <p className="lead">Entry Level Software Developer</p>
                <Bio />
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
