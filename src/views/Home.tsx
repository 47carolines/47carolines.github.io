import { Container, Row, Col } from "react-bootstrap";

const Home = () => {
  return (
    <Container
      fluid
      className="vh-100 d-flex align-items-center text-center full-page-component justify-content-center"
    >
      <Row>
        <Col>
          <h1 className="display-1 homepage">Caroline Lewis</h1>
          <p className="lead">Software Developer</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
