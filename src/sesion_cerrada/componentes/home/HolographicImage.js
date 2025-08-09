import React from 'react';
import './HolographicImage.css';

const HolographicImage = ({ src, alt }) => {
  return (
    <div className="holographic-container">
      <img src={src} alt={alt} className="holographic-image" />
      <div className="holographic-overlay-lines"></div>
      <div className="holographic-overlay-grid"></div>
      <div className="holographic-scanline"></div>
    </div>
  );
};

export default HolographicImage;
