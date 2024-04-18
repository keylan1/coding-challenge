import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './nav-bar.scss';

function NavBar() {
  return (
    <div>
      <Navbar className="fixed-top" data-bs-theme="dark" expand="lg">
        <Container>
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
