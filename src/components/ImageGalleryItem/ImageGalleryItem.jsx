import { ImgStyled } from "./ImgGallery.styled";
import { ItemGallery } from "./ItemGallery.styled";

export const ImageGalleryItem = ({ images, onImageClick }) => {
    return (
      <>
        {images.map(item => (
          <ItemGallery key={item.id} onClick={(evt)=>{onImageClick(item.largeImageURL, item.tags);}}>
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