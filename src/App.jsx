import React from "react";
import CardImagenPerrito from "../src/components/card.jsx";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import HeaderAdoptaUnPerrito from "../src/components/header.jsx";
import PieDePagina from "../src/components/footer.jsx";
import image3 from "../src/assets/img/dog_3.jpg";
import image1 from "../src/assets/img/dog_1.jpg";
import image2 from "../src/assets/img/dog_2.jpg";
import image4 from "../src/assets/img/dog_4.jpg";
import image5 from "../src/assets/img/dog_5.jpg";
import image6 from "../src/assets/img/dog_6.jpg";
import image7 from "../src/assets/img/dog_7.jpg";

const tarjetas = [
  {
    imagen: image3,
    nombre: "Bosco",
    descripcion: "Todo una delicia.",
    raza: "Salchicha",
    color: "warning",
  },

  {
    imagen: image1,
    nombre: "Picasso",
    descripcion: "Te acompañará a todas partes.",
    raza: "Labrador",
    color: "success",
  },

  {
    imagen: image4,
    nombre: "Da Vinci",
    descripcion: "Can universale.",
    raza: "Sabueso Afgano",
    color: "info",
  },

  {
    imagen: image6,
    nombre: "Bethoveen",
    descripcion: "Una niñera pero low cost.",
    raza: "San Bernardo",
    color: "danger",
  },

  {
    imagen: image7,
    nombre: "Giambellino",
    descripcion: "Le apodan El Manchas.",
    raza: "Dálmata",
    color: "primary",
  },

  {
    imagen: image5,
    nombre: "Vermeer",
    descripcion: "Ya no necesitarás alarma en tú hogar.",
    raza: "Bichón Maltés",
    color: "dark",
  },
];

function App() {
  return (
    <>
      <HeaderAdoptaUnPerrito title="Adopta un perrito" />
      <div className="ContainerGaleria">
        {tarjetas.map(({ imagen, nombre, descripcion, raza, color }, index) => (
          <CardImagenPerrito
            key={index}
            imagen={imagen}
            nombre={nombre}
            descripcion={descripcion}
            raza={raza}
            color={color}
          />
        ))}
      </div>

      <PieDePagina />
    </>
  );
}

export default App;
