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
      <div className="lightbox-content-img" >    
        <span className="close" onClick={onClose}>
          &times;
        </span>
         <img src={photo.src} alt={photo.alt} className="lightbox-image" />
        
          </div>
      <button className="prev" onClick={onPrev}>&#10094;</button>
      <button className="next" onClick={onNext}>&#10095;</button>
      
      </div>
    </div>
  );
};

export default Lightbox;
