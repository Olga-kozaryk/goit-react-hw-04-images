import { ImgStyled } from "./ImgGallery.styled";
import { ItemGallery } from "./ItemGallery.styled";

export const ImageGalleryItem = ({ images, togleModal }) => {
    return (
      <>
        {images.map(item => (
          <ItemGallery key={item.id} onClick={(evt)=>{togleModal(item.largeImageURL, item.tags);}}>
            <ImgStyled
              loading="lazy"
              src={item.webformatURL}
              alt={item.tags}
            />
          </ItemGallery>
        ))}
      </>
    );
  };