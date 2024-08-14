import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';

interface LazyImageProps {
  
  src: string;
  alt: string;
  key: number;
 }

const LazyImage: React.FC<LazyImageProps> = ({ key, src, alt}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref} >
      {inView && (
        <img
        key={key}
        src={src}
        alt={alt}
        className="gallery-photo"
        
     onLoad={() => setIsLoaded(true)}
          style={{ opacity: isLoaded ? 1 : 0, transition: 'opacity 0.5s' }}
        />
      )}
    </div>
  );
};

export default LazyImage;
