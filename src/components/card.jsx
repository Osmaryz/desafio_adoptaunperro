import Card from "react-bootstrap/Card";
import TagCard from "./tag";

function CardImagenPerrito({ imagen, nombre, descripcion, raza, color }) {
  return (
    <>
    
      <Card className="FormatoTarjeta border-dark"> 
        <Card.Img className="foto" variant="top" src={imagen} />
        <Card.Body>
          <Card.Title>{nombre}</Card.Title>
          <Card.Text className="text-break">{descripcion}</Card.Text>
          <TagCard color={color} raza={raza} />
        </Card.Body>
      </Card>
      <br/>
      
    </>
  );
}

export default CardImagenPerrito;
