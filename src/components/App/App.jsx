import { useEffect, useState } from "react";
import { Container } from "./App.styled";
import { fetchImages } from "Services/Services";
import { Searchbar } from "components/Searchbar/Searchbar";
import { ImageGallery } from "components/ImageGallery/ImageGallery";
import { Loader } from "components/Loader/Loader";
import { Button } from "components/Button/Button";
import { Modal } from "components/Modal/Modal";

export const App =() => {
  const [search, setSearch] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(0);
  const [lastPage, setLastPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [modal, setModal] = useState({
    showModal: false,
    largeImageURL: '',
  });
  const [empty, setEmpty] = useState(false);

  const handleSubmit = search => setSearch(search);
  const clickLoad = () => {
    setPage(prev => prev + 1);
  };
  const toggleModal = () => {
    setModal(prev => ({ ...prev, showModal: !prev.showModal }));
  };

  const openModal = largeImageURL => {
    setModal(prev => ({ ...prev, largeImageURL }));
    toggleModal();
  };

  useEffect(() => {
    if (page === 0) return;

    const fetchImagesByQuery = async searchQuery => {
      setLoading(true); 
      setError(null);
      setEmpty(false); 

      try {
        const response = await fetchImages(searchQuery, page);
        setImages(prev => [...prev, ...response.hits]);
        setLastPage(Math.ceil(response.totalHits / 12));
        response.totalHits === 0 && setEmpty(true); 
        } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchImagesByQuery(search);
  }, [page, search]);

    return (
      <Container>
        <Searchbar handleSubmit={handleSubmit}/>
        <ImageGallery onImageClick = {openModal} images={images} />

        {empty && 
          <h2 style={{ textAlign: 'center' }}>
            Sorry.Image not found
          </h2>
        }

        {loading && <Loader/>}

        {error && 
        <p style={{ textAlign: 'center' }}>
          Something went wrong: {error.message}</p>
          }
             
        {page < lastPage && <Button clickLoad={clickLoad} />}
        {modal.showModal && 
          <Modal closeModal={toggleModal}>
            <img src={modal.largeImageURL} alt={modal.alt} />
          </Modal>
        }
      </Container>
    );
  }

