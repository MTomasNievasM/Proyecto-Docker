
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (

    <footer className="bg-dark text-white p-4 mt-5">
      <Container>
        <Row>
          
          <Col md={6} className="mb-3 mb-md-0"> 
            <h5>IES [Cura Valera]</h5>
            <p>&copy; {new Date().getFullYear()}</p>
          </Col>
          
         
          <Col md={6} className="text-md-end">
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white me-3 fs-4" 
            >
              <i className="bi bi-facebook"></i>
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white me-3 fs-4"
            >
              <i className="bi bi-twitter"></i>
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white fs-4"
            >
              <i className="bi bi-instagram"></i>
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer