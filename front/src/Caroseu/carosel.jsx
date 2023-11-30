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
    slidesToScroll: 10,
  };

  const slideContents = Array.from({ length: 10 }, (_, index) => (
    <div key={index}>
      <img
        src={`https://www.intoxianime.com/wp-content/uploads/2023/08/F4M7DiMbgAAuHUV.jpg`}
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