import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import { UlStyled } from "./ImageGallery.styled";


export const ImageGallery = ({ images, onImageClick }) => {
    return (
      <>
        <UlStyled>
          <ImageGalleryItem onImageClick = {onImageClick} images={images} />
        </UlStyled>
      </>
    );
  };