import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carrocel.css"; // Crie um arquivo CSS para personalizar seu carrossel
import foto1 from "../../assets/photos/foto1.jpg";
import foto2 from "../../assets/photos/foto2.jpg";
import foto3 from "../../assets/photos/foto3.jpg";
import foto4 from "../../assets/photos/foto4.jpg";
import foto5 from "../../assets/photos/foto5.jpg";
import {
  FiChevronRight,
  FiChevronLeft,
} from "react-icons/fi";

const Carousel = () => {
  const sliderRef = useRef(null);

  const settings = {
    infinite: true, // Carrossel infinito
    speed: 600, // Velocidade da transição
    slidesToShow: 1, // Quantidade de slides visíveis de cada vez
    slidesToScroll: 1, // Quantidade de slides para rolar de cada vez
    autoplay: true, // Ativar o modo de reprodução automática
    autoplaySpeed: 6000, // Intervalo de tempo em milissegundos entre as trocas de slides (por exemplo, 2000ms = 2 segundos)
    arrows: false, // Defina arrows como false para remover os botões de navegação
  };

  const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  return (
    <div className="carousel-container">
      <Slider ref={sliderRef} {...settings}>
        <div className="carousel-item">
          <img src={foto1} alt="Imagem 1" />
          <div className="carousel-caption">
            <h3>Título da Imagem 1</h3>
            <p>Descrição da Imagem 1.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={foto2} alt="Imagem 2" />
          <div className="carousel-caption">
            <h3>Título da Imagem 2</h3>
            <p>Descrição da Imagem 2.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={foto3} alt="Imagem 1" />
          <div className="carousel-caption">
            <h3>Título da Imagem 1</h3>
            <p>Descrição da Imagem 1.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={foto4} alt="Imagem 1" />
          <div className="carousel-caption">
            <h3>Título da Imagem 1</h3>
            <p>Descrição da Imagem 1.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={foto5} alt="Imagem 1" />
          <div className="carousel-caption">
            <h3>Título da Imagem 1</h3>
            <p>Descrição da Imagem 1.</p>
          </div>
        </div>
      </Slider>
      <button className="carousel-button left" onClick={handlePrev}>
        <FiChevronLeft />
      </button>
      <button className="carousel-button right" onClick={handleNext}>
        <FiChevronRight />
      </button>
    </div>
  );
};

export default Carousel;
