import React from 'react';
import './Lightbox.css';

interface LightboxProps {
  photo: {
    src: string;
    alt: string;
  };

  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

const Lightbox: React.FC<LightboxProps> = ({ photo, onClose, onNext, onPrev }) => {
  return (
    <div className="lightbox" onClick={onClose}>

      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <div className="lightbox-content-img" >

          <img src={photo.src} alt={photo.alt} className="lightbox-image" />

        </div>
        <div className="prev" onClick={onPrev}>&#10094;</div>
        <div className="next" onClick={onNext}>&#10095;</div>

      </div>
    </div>
  );
};
export default Lightbox;
