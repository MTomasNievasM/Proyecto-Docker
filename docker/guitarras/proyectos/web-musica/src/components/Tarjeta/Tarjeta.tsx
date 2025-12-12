
import { Card } from 'react-bootstrap'
import React from 'react' 


interface TarjetaProps {
  titulo: string;
  texto: string;

  estilo?: React.CSSProperties; 
}

const Tarjeta: React.FC<TarjetaProps> = ({ titulo, texto, estilo }) => {
  return (
   
    <Card style={estilo || {}} className="mb-3 h-100"> 
      <Card.Body>
        <Card.Title>{titulo}</Card.Title>
        <Card.Text>{texto}</Card.Text>
        <Card.Link href="#">Ver más</Card.Link>
      </Card.Body>
    </Card>
  )
}

export default Tarjeta