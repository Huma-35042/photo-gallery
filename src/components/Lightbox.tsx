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

const Lightbox: React.FC<LightboxProps> = ({ photo, onClose , onNext, onPrev }) => {
  return (
    <div className="lightbox" onClick={onClose}>
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
       <div className="lightbox-bg">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <button className="prev" onClick={onPrev}>&#10094;</button>
        <img src={photo.src} alt={photo.alt} className="lightbox-image" />
        
        <button className="next" onClick={onNext}>&#10095;</button>
      </div>
      </div>
    </div>
  );
};

export default Lightbox;
