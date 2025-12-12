import { Container, Image } from 'react-bootstrap';
import miImagenError from '../assets/error-404.jpg'; 

const NotFoundPage = () => {
  return (
    <Container className="text-center py-5">
      <h2>Error 404 - Página No Encontrada</h2>
      <p>Lo sentimos, la página que buscas no existe.</p>
      
      <Image 
        src={miImagenError} 
        alt="Página no encontrada" 
        fluid
        rounded
        style={{ maxHeight: '400px' }} 
      />
    </Container>
  )
}

export default NotFoundPage;