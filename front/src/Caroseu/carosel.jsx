import '../style/Carosel.css'
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import YourComponent from './redirecionamento/randomfilmes.jsx'

const Carousel = ({genere}) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
  };
  console.log(genere)
  const slideContents = Array.from({ length: 10 }, (_, index) => (
    <div key={index}>
      <YourComponent
      genre= {genere}/>
    </div>
  ));

  return (
    <div className="caroselarq"> {/* Adiciona uma classe ao contêiner do carrossel */}
      <Slider {...settings}>
        {slideContents}
      </Slider>
    </div>
  );
};

export default Carousel;

