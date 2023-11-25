import '../style/Carosel.css'
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 2,
  };

  const slideContents = Array.from({ length: 10 }, (_, index) => (
    <div key={index}>
      <img
        src={`https://www.ubuy.com.br/productimg/?image=aHR0cHM6Ly9pNS53YWxtYXJ0aW1hZ2VzLmNvbS9zZW8vRnJlc2gtU2xpY2luZy1Ub21hdG8tRWFjaF9hMWU4ZTQ0YS0yYjgyLTQ4YWItOWMwOS1iNjg0MjBmNjk1NGMuMDRmNmUwZTg3ODA3ZmM1NDU3ZjU3ZTNlYzA3NzAwNjEuanBlZw.jpg`}
        alt={`Slide ${index + 1}`}
      />
    </div>
  ));

  return (
    <div className="custom-carousel"> {/* Adiciona uma classe ao contêiner do carrossel */}
      <Slider {...settings}>
        {slideContents}
      </Slider>
    </div>
  );
};

export default Carousel;