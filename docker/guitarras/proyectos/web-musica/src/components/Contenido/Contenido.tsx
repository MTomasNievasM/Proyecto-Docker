import Tarjeta from '../Tarjeta/Tarjeta' 
import Galeria from '../Galeria/Galeria' 
import { Row, Col } from 'react-bootstrap'

const Contenido = () => {
  
  
  const datosCards = [
    { 
      id: 1, 
      titulo: "DESCUENTOS  BLACK FRIDAY", 
      texto: "Estas fiestas no te quedes sin tu instrumento favorito.Descuentos de hasta el 30% en productos seleccionados.",
      estilo: { backgroundColor: '#bd0d00ff' } 
    },
    { 
      id: 2, 
      titulo: "Política de Devoluciones", 
      texto: "No hay devoluciones para todos los productos comprados sin factura. Con factura se admitirán devoluciones en un plazo de 15 segundos.",
     
    },
    { 
      id: 3, 
      titulo: "Regalale un tambor a tu primillo chico", 
      texto: "imaginate perder totalmente la tranquilidad de tu hogar, regalale un tambor a tu primillo chico y veras como no paras de reirte.",
      estilo: { borderColor: 'green', color: '#ff0808ff' }
    }
  ];

  return (
    <div>
      <h2>Nuestros Servicios</h2>
      <Row>
       
        {datosCards.map(card => (
          <Col md={4} key={card.id}>
           
            <Tarjeta 
              titulo={card.titulo} 
              texto={card.texto} 
              estilo={card.estilo}
            />
          </Col>
        ))}
      </Row>
      
      <hr className="my-4" />
      
      <h2>Galería de Productos</h2>
      <Galeria />
    </div>
  )
}

export default Contenido