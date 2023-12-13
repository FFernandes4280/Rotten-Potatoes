import React from 'react';
import { Link } from 'react-router-dom';

const ClickableImage = ({ imageUrl, linkTo, alt }) => {
  let link= linkTo;
if (linkTo=="http://http://localhost:5173/description"){
  link =`${link}?${alt}`
}
  const handleImageClick = () => {
  };

  return (
    <Link to={`${link}?=nome${alt}`}>
      <img
        src={imageUrl}
        alt={alt}
        onClick={handleImageClick}
        style={{ cursor: 'pointer' }}
      />
    </Link>
  );
};

export default ClickableImage;
