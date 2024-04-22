import { Navbar, Container, Nav } from 'react-bootstrap';
//import { Link } from 'react-router-dom';
import './nav-bar.scss';

function NavBar() {
  return (
    <div>
      <Navbar className="custom-nav" fixed="top" expand="lg">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
