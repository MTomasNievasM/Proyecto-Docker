import { Carousel, Image } from 'react-bootstrap';

import img1 from '../../assets/ibanezHambucker.jpg';
import img2 from '../../assets/StratoFender.jpg';
import img3 from '../../assets/LesPaul.jpg';

const Galeria: React.FC = () => {
  const imagenes = [
    { src: img1, alt: 'Ibanez Humbucker' },
    { src: img2, alt: 'Stratocaster Fender' },
    { src: img3, alt: 'Gibson Les Paul' },
  ];

  return (
    <Carousel
      variant="dark"
      interval={4000}    
      pause="hover"      
      indicators         
      controls           
      touch              
      keyboard           
    >
      {imagenes.map((img, i) => (
        <Carousel.Item key={i}>
          <Image
            src={img.src}
            alt={img.alt}
            className="d-block w-100 object-fit-cover"
            style={{ maxHeight: 520 }}
            loading="lazy"
          />
          <Carousel.Caption>
            <h5>{img.alt}</h5>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Galeria;
