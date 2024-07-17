import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Lightbox from './Lightbox';
import './PhotoGallery.css';



interface Photo {
  src: string;
  alt: string;
  tags: string;
  views: number;
  likes: number;
}



const PhotoGallery: React.FC= ( ) => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);
  ;
  let lightStyle ={ color: 'white', backgroundColor:'grey' }
  let darkStyle ={ color:'black', backgroundColor: 'white' }
  const [cssStyle, setCssStyle] = useState(lightStyle)
  const [mode, setMode] = useState("Light")
  
 const [page, setPage] = useState(1);
 const changeMode =() =>
  {
    mode === "Light" ? (setCssStyle(lightStyle), setMode("Dark"), document.body.style.backgroundColor ="grey", document.body.style.color="white") : (setCssStyle(darkStyle),setMode("Light"), document.body.style.backgroundColor ="white", document.body.style.color="black")
    
  }  
 useEffect(() => {
  
  const fetchPhotos = async () => {
    const apiKey = '44795245-d71858eb8aa5f53baa0b1b1b6';
    const url = `https://pixabay.com/api/?key=${apiKey}&page=${page}`;

    try {
      const response = await axios.get(url);
      const fetchedPhotos = response.data.hits.map((hit: any) => ({
        src: hit.webformatURL,
        alt: hit.tags,
        tags: hit.tags,
        views: hit.views,
        likes: hit.likes,
      }));
      setPhotos(fetchedPhotos);

    } catch (error) {
      console.error('Error fetc hing photos:', error);
    }
  };

  fetchPhotos();
}, [page]);




const handlePrev = () => {
  if (selectedPhotoIndex !== null) {
    setSelectedPhotoIndex((selectedPhotoIndex - 1 + photos.length) % photos.length);
  }
};

const handleNext = () => {
  if (selectedPhotoIndex !== null) {
    setSelectedPhotoIndex((selectedPhotoIndex + 1) % photos.length);
  }
};
  return (
    <>
     <span className="form-check form-switch">
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onChange={changeMode} />
  </span>
      <div  className="gallery">
        {photos.map((photo, index) => (
        
          <div style={cssStyle} className="card" >
           <img
            key={index}
            src={photo.src}
            alt={photo.alt}
            className="gallery-photo "
            onClick={() => setSelectedPhotoIndex(index)}
          />
          <div className="basic-card-body">
         <img className="icon" src="../price-tag.png"></img>
         <span>{photo.tags}</span>
         <p/><img className="icon" src="../view.png"></img>
         <span>{photo.views}</span>
         <p/> <img className="icon" src="../like.png"></img>
         <span>{photo.likes}</span>
          </div>
         </div>
        ))}
      
     
    
      
          
           
      
      {selectedPhotoIndex !== null && (
        <Lightbox
          photo={photos[selectedPhotoIndex]}
          onClose={() => setSelectedPhotoIndex(null)}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )} </div>
      <div className="pagination">
        <button onClick={() => setPage(page > 1 ? page - 1 : 1)}>Previous</button>
        <button onClick={() => setPage(page + 1)}>Next</button>
      </div>
   </>
  );
};

export default PhotoGallery;
