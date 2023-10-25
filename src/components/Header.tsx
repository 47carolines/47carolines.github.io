import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Header: React.FC = () => {
  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href="/">Caroline Lewis</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/#experience">Experience</Nav.Link>
            <Nav.Link href="/#work">Work</Nav.Link>
            <Nav.Link href="/#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
