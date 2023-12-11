import React from 'react';
import { Link } from 'react-router-dom';

const ClickableImage = ({ imageUrl, linkTo, alt }) => {
  const handleImageClick = () => {
  };

  return (
    <Link to={linkTo}>
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
