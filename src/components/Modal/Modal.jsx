import { Overlay } from "./Overlay.styled";
import { ModalStyled } from "./Modal.styled";
import { useEffect } from "react";

export const Modal = ({largeImageURL, closeModal} ) => {
useEffect(() => {
  const handleKeyDown = e => {
    if (e.code === 'Escape'){
        closeModal ();
    }
  };
  window.addEventListener('keydown', handleKeyDown);
  return () => {
    window.removeEventListener('keydown', handleKeyDown);
  }
}, [closeModal])


    return (
    <Overlay onClick={closeModal}>
      <ModalStyled>
      <img src={largeImageURL} alt=""/>
      </ModalStyled>
    </Overlay>)
  }
