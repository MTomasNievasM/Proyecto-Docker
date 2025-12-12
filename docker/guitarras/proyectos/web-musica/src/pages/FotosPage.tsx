import { Container, Carousel } from "react-bootstrap";
import "./FotosPage.css";

// importa tus imágenes (ejemplos)
import img1 from "../assets/ibanezHambucker.jpg";
import img2 from "../assets/StratoFender.jpg";
import img3 from "../assets/LesPaul.jpg";

const FotosPage: React.FC = () => {
  const imgs = [img1, img2, img3];

  return (
    <Container className="py-4">
      <h1 className="mb-4">Fotos</h1>

      <Carousel
        className="fotos-carousel"
        interval={4000}
        fade
        pause="hover"
        touch
        keyboard
        indicators
      >
        {imgs.map((src, i) => (
          <Carousel.Item key={i}>
            <img src={src} alt={`Foto ${i + 1}`} />
            {/* opcional */}
            {/* <Carousel.Caption><h3>Título {i+1}</h3></Carousel.Caption> */}
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default FotosPage;
