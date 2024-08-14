import React, { useEffect, useState, useContext, useRef } from 'react';
import axios from 'axios';
import Lightbox from './Lightbox';
import './PhotoGallery.css';
import SearchProvider, { SearchModeContext } from '../context/SearchContext';
import LazyImage from './LazyImage';
import InfiniteScroll from "react-infinite-scroll-component";
import Search from './Search';




interface Photo {
  src: string;
  alt: string;
  tags: string;
  views: number;
  likes: number;
}

interface modeProps {
  query: string,
}

const PhotoGallery: React.FC = (props): JSX.Element => {
  const { isSearch, setIsSearch } = useContext(SearchModeContext);
  const [previousData, setPreviousData] = useState<Photo[]>([]);
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);
  let darkStyle = { color: 'white', backgroundColor: 'grey' }
  let lightStyle = { color: 'black', backgroundColor: 'white' }
  const [cssStyle, setCssStyle] = useState(lightStyle)
  const [mode, setMode] = useState("Light")
  const [loading, setLoading] = useState(true)

  const [page, setPage] = useState(1);
  const apiKey = '44795245-d71858eb8aa5f53baa0b1b1b6';
  const [url, setURL] = useState(`https://pixabay.com/api/?key=${apiKey}&page=${page}`);
  const cardStyle = useRef(null);
  const changeMode = () => {
    mode === "Light" ? (setCssStyle(darkStyle), setMode("Dark"), document.body.style.backgroundColor = "grey", document.body.style.color = "white") : (setCssStyle(lightStyle), setMode("Light"), document.body.style.backgroundColor = "white", document.body.style.color = "black")

  }



  useEffect(() => {

    fetchPhotos();

  }, [isSearch.fetchURL, page]);


  const fetchPhotos = async () => {

    if (!isSearch.isSearch) {// default
      setURL(`https://pixabay.com/api/?key=${apiKey}&page=${page}`);

    } else { //Search
      setURL(isSearch.fetchURL);

      setIsSearch({
        isSearch: true,
        fetchURL: isSearch.fetchURL + ' '
      });


    }

    try {

      axios.get(url).then(response => {
        const fetchedPhotos = response.data.hits.map((hit: any) => ({
          src: hit.webformatURL,
          alt: hit.tags,
          tags: hit.tags,
          views: hit.views,
          likes: hit.likes,
        }));
        //setPhotos(fetchedPhotos);
        if (fetchedPhotos.length > 0) {
          setLoading(true);
        }
        else {
          setLoading(false);
         }

        if (!isSearch.isSearch) {// default
          setPhotos((previous) => {
            setPreviousData(previous);
            return previousData.concat(fetchedPhotos);
         //   console.log('Photogallery : line 94')
          })
        }
        else {
          setPhotos(fetchedPhotos);
        }

      });
    } catch (error) {
      console.error('Error fetching photos:', error);
    }

  };


  const handlePrev = () => {
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((selectedPhotoIndex - 1 + photos.length) % photos.length);
    }
  };

  const handleNext = () => {
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((selectedPhotoIndex + 1) % photos.length);
      console.log(selectedPhotoIndex);
    }
  };
  const fetchMoreData = () => {
    setPage(page + 1);
    fetchPhotos();

  }

  return (
    <>
      <span className="form-check form-switch ">
        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onChange={changeMode} />
      </span>
      <div className='container'>
        <InfiniteScroll
          dataLength={photos.length}
          next={fetchMoreData}
          hasMore={loading}
          loader={<h4>Loading...</h4>}
        >

          <div className="gallery">
            {photos.map((photo, index) => (

              <div style={cssStyle} className="card" onClick={() => setSelectedPhotoIndex(index)} ref={cardStyle} >
                <div className="gallery-photo ">
                  <LazyImage
                    key={index}
                    src={photo.src}
                    alt={photo.alt}
                  />
                </div>
                <div className="basic-card-body">
                  <img className="icon" src="../price-tag.png"></img>
                  <span>{photo.tags}</span>
                  <p /><img className="icon" src="../view.png"></img>
                  <span>{photo.views}</span>
                  <p /> <img className="icon" src="../like.png"></img>
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
            )}

          </div>
        </InfiniteScroll>
      </div>
    </>
  );
};

export default PhotoGallery;
