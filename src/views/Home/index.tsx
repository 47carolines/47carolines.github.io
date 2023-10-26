import { Container, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Bio from "./Bio";

const Home = () => {
  return (
    <Container fluid className="mt-4">
      <Row>
        <Col sm={6}>
          <Image className="mb-4" src="/images/headshot.png" fluid />
        </Col>
        <Col sm={6}>
          <h1 className="display-1 heading">Caroline</h1>
          <h1 className="display-1 heading">Lewis</h1>
          <p className="lead">Entry Level Software Developer</p>
          <Bio />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
