import { Outlet } from 'react-router-dom' 
import { Container, Row, Col } from 'react-bootstrap'
import Header from './components/Header/Header'
import Navegacion from './components/Navegacion/Navegacion'
import Sidebar from './components/Sidebar/Sidebar'
import Footer from './components/Footer/Footer'

import './App.css' 

function App() {
  return (
    <div className="App">
 
      <Header />
      <Navegacion />
      
      <Container as="main" fluid className="my-4">
        <Row>
          
          <Col md={8} as="section">
            
          
            <Outlet />
            
          </Col>
          
       
          <Col md={4} as="aside">
            <Sidebar />
          </Col>
          
        </Row>
      </Container>
      
      <Footer />
    </div>
  )
}

export default App