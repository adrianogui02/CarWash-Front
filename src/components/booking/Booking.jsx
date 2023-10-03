import React, { useState, useContext, useRef } from "react";
import "./booking.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import wall3 from "../../assets/photos/wall3.jpg";
import garage from "../../assets/photos/garage.jpg";
import car from "../../assets/icons/car-wash (1).png";
import gun from "../../assets/icons/foam-gun.png";
import interior from "../../assets/icons/interior.png";
import scra from "../../assets/icons/scratch.png";
import hatch from "../../assets/cars/hatch.jpeg";
import pickup from "../../assets/cars/pickup.jpeg";
import sedan from "../../assets/cars/sedan.jpeg";
import suv from "../../assets/cars/suv.jpeg";
import { FiX, FiCheck, FiClock } from "react-icons/fi";

const BookingCar = () => {
  const sliderRef = useRef(null);

  const [selectedCar, setSelectedCar] = useState(0);

  const handleSelectCar = (carIndex) => {
    setSelectedCar(carIndex);
    sliderRef.current.slickGoTo(carIndex); // Vá para o slide selecionado
  };

  const cars = [
    { name: "Sedan", image: sedan },
    { name: "Pickup", image: pickup },
    { name: "SUV", image: suv },
    { name: "Hatch", image: hatch },
  ];

  const settings = {
    infinite: true, // Carrossel infinito
    speed: 600, // Velocidade da transição
    slidesToShow: 1, // Quantidade de slides visíveis de cada vez
    slidesToScroll: 1, // Quantidade de slides para rolar de cada vez
    arrows: false, // Defina arrows como false para remover os botões de navegação
  };

  const [selectedPlan, setSelectedPlan] = useState(null);

  const plans = [
    {
      title: "Express Washing",
      price: "$12.99",
      features: ["Exterior washing"],
      time: "40 min",
    },
    {
      title: "Basic Cleaning",
      price: "$24.99",
      features: ["Exterior washing", "Vacuum cleaning"],
      time: "20 min",
    },
    {
      title: "Premium Service",
      price: "$36.99",
      features: [
        "Exterior washing",
        "Vacuum cleaning",
        "Interior wet cleaning",
      ],
      time: "60 min",
    },
    {
      title: "Full Complex",
      price: "$59.99",
      features: [
        "Exterior washing",
        "Vacuum cleaning",
        "Interior wet cleaning",
        "Window wiping",
      ],
      time: "120 min",
    },
    // Adicione outros planos aqui...
  ];

  const handleSelectPlan = (index) => {
    setSelectedPlan(index);
  };

  return (
    <div className="booking-container">
      <div className="booking-wall">
        <img src={wall3} alt="Imagem 1" />
        <div className="booking-wall-text">
          <h3>Car Washing</h3>
          <h2>Online Booking Service</h2>
          <div className="booking-wall-itens">
            <div className="booking-wall-itens-un">
              <img className="icon" src={car} alt="Ícone" />
              <h1 className="title-card">Contactless Washing</h1>
              <p className="comentary-card">
                Convenience and safety in the palm of your hand, ensuring a
                clean and well-maintained car.
              </p>
            </div>
            <div className="booking-wall-itens-un">
              <img className="icon" src={scra} alt="Ícone" />
              <h1 className="title-card">Safety Materials</h1>
              <p className="comentary-card">
              Looking for high-quality safety materials? Our products guarantee your peace of mind.
              </p>
            </div>
            <div className="booking-wall-itens-un">
              <img className="icon" src={gun} alt="Ícone" />
              <h1 className="title-card">Modern Equipment</h1>
              <p className="comentary-card">
              Ensure perfection for your car with our best equipment. Make your reservation now!
              </p>
            </div>
            <div className="booking-wall-itens-un">
              <img className="icon" src={interior} alt="Ícone" />
              <h1 className="title-card">Caring Service</h1>
              <p className="comentary-card">
              We guarantee a careful service, with attention to detail, for your complete satisfaction.
              </p>
            </div>
          </div>
        </div>
        <div className="carousel-container">
          <h1 className="h1-steps">STEP 1</h1>
          <h2>Choose Your Car Type</h2>
          <div className="car-buttons">
            {cars.map((car, index) => (
              <button
                key={index}
                className={`car-button ${
                  selectedCar === index ? "active" : ""
                }`}
                onClick={() => handleSelectCar(index)}
              >
                {car.name}
              </button>
            ))}
          </div>
          <Slider ref={sliderRef} {...settings}>
            {cars.map((car, index) => (
              <div className="carousel-item" key={index}>
                <img src={car.image} alt={car.name} />
              </div>
            ))}
          </Slider>
        </div>
        <div className="carousel-container">
          <h1 className="h1-steps">STEP 2</h1>
          <h2>Washing Plan</h2>
          <div className="plan-itens">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`plan-itens-un ${
                  selectedPlan === index ? "selected" : ""
                }`}
                onClick={() => handleSelectPlan(index)}
              >
                <h1 className="title-plan">{plan.title}</h1>
                <p className="price-plan">{plan.price}</p>
                {plan.features.map((feature, featureIndex) => (
                  <div className="itens-plan" key={featureIndex}>
                    <p>{feature}</p>
                  </div>
                ))}
                <div
                  className={`time-plan ${
                    selectedPlan === index ? "selected" : ""
                  }`}
                >
                  <p>{plan.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingCar;
