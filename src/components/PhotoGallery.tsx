import React, { useEffect, useState, useContext, useRef } from 'react';
import axios from 'axios';
import Lightbox from './Lightbox';
import './PhotoGallery.css';
import SearchProvider, { SearchModeContext } from '../context/SearchContext';
import LazyImage from './LazyImage';
import InfiniteScroll from "react-infinite-scroll-component";
import Search from './Search';
import Spinner from './Spinner';
import ThemeProvider, { ThemeModeContext } from '../context/ThemeContext'

interface ThemeMode {
  dataTheme: string;
}

interface Photo {
  src: string;
  alt: string;
  tags: string;
  views: number;
  likes: number;
}


const PhotoGallery = () => {
  const { isSearch, setIsSearch } = useContext(SearchModeContext);
  const [previousData, setPreviousData] = useState<Photo[]>([]);
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);
  const [loading, setLoading] = useState(true)
  const { dataTheme, setDataTheme } = useContext(ThemeModeContext);

  const [page, setPage] = useState(1);
  const apiKey = '44795245-d71858eb8aa5f53baa0b1b1b6';
  const [url, setURL] = useState(`https://pixabay.com/api/?key=${apiKey}&page=${page}`);
  const [tag, setTag] = useState("");
  const [view, setView] = useState("");
  const [like, setLike] = useState("");


  useEffect(() => {
    fetchPhotos();

  }, [isSearch.fetchURL, page]);


  useEffect(() => {
    changeIcons();
console.log(dataTheme);
  }, [dataTheme]);

  const changeIcons = async () => {
    if (dataTheme.dataTheme === "light") {
      setTag('../price-tag.png');
      setView('../view.png');
      setLike('../like.png');
    }
    else {

      setTag('../price-tag-dark.png');
      setView('../view-dark.png');
      setLike('../like-dark.png');
    }

  }
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
          setPhotos(photos.concat(fetchedPhotos));
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


    setTimeout(() => {
      setPage(page + 1);

      setURL(`https://pixabay.com/api/?key=${apiKey}&page=${page + 1}`);

      try {

        axios.get(url).then(response => {
          const fetchedPhotos = response.data.hits.map((hit: any) => ({
            src: hit.webformatURL,
            alt: hit.tags,
            tags: hit.tags,
            views: hit.views,
            likes: hit.likes,
          }));
          if (fetchedPhotos.length > 0) {
            setLoading(true);
          }
          else {
            setLoading(false);
          }

          setPhotos(photos.concat(fetchedPhotos));
        });
      } catch (error) {
        console.error('Error fetching photos:', error);
      }

    }, 1500);


  }

  return (
    <>


      <div style={{ overflow: "auto" }}>
        <InfiniteScroll
          dataLength={photos.length}
          next={fetchMoreData}
          hasMore={loading}
          loader={<Spinner />}
        >

          <div className="gallery">
            {photos.map((photo, index) => (

              <div className="card" onClick={() => setSelectedPhotoIndex(index)}  >
                <div className="gallery-photo ">
                  <LazyImage
                    key={index}
                    src={photo.src}
                    alt={photo.alt}
                  />
                </div>
                <div className="basic-card-body">
                  <img className="icon" src={tag}></img>
                  <span>{photo.tags}</span>
                  <p /><img className="icon" src={view}></img>
                  <span>{photo.views}</span>
                  <p /> <img className="icon" src={like}></img>
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
