import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import WorkHistory from "./WorkHistory";
import Bio from "./Bio";
const About = () => {
  return (
    <Container className="mt-4">
      <Row>
        <Col sm={4}>
          <Image className="mb-4" src="/images/headshot.png" thumbnail />
        </Col>
        <Col sm={8}>
          <Bio/>
        </Col>
      </Row>
      <Row>
        <WorkHistory />
      </Row>
    </Container>
  );
};

export default About;
