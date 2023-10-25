import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import SocialIcons from "./SocialIcons";

const Footer: React.FC = () => {
  return (
    <Navbar fixed="bottom" expand="lg" bg="dark" data-bs-theme="dark">
      <Container fluid className="justify-content-center">
        <SocialIcons />
      </Container>
    </Navbar>
  );
};

export default Footer;
