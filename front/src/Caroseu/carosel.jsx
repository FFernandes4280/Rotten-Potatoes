import '../style/Carosel.css'
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ClickableImage from './redirecionamento/redirecionamento.jsx';

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
  };

  const slideContents = Array.from({ length: 10 }, (_, index) => (
    <div key={index}>
      <ClickableImage
        imageUrl={`https://www.intoxianime.com/wp-content/uploads/2023/08/F4M7DiMbgAAuHUV.jpg`}
        alt={`Slide ${index + 1}`}
        linkTo={'http://localhost:5173/description'}
      />
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