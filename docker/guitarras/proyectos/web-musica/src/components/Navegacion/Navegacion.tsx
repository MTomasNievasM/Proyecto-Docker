import { Link } from 'react-router-dom'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'

const Navegacion = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container fluid>
        <Navbar.Brand href="#home">Mi Proyecto</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

            <Nav.Link as={Link} to="/">
              <i className="bi bi-house-door-fill me-2"></i>
              Inicio
            </Nav.Link>
            
            <Nav.Link as={Link} to="/contacto">
              <i className="bi bi-person-lines-fill me-2"></i>
              Contacto
            </Nav.Link>
            
            <Nav.Link as={Link} to="/servicios">
              <i className="bi bi-briefcase-fill me-2"></i>
              Servicios
            </Nav.Link>
            
            <NavDropdown title="Más Opciones" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/sobre-nosotros">
                Sobre nosotros
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/por-que-elegirnos">
                ¿Por que elegirnos?
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/noticias">
                Noticias
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/tienda">
                Tienda
              </NavDropdown.Item>
            </NavDropdown>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navegacion