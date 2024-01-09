import styled from "styled-components";

export const ModalStyled = styled('div')(()=> {
    return {
        maxiWidth: 'calc(100vw - 48px)',
        maxHeight: 'calc(100vh - 24px)',
        img: {
            maxWidth: 'calc(100vw - 48px)',
            maxHeight: 'calc(100vh - 24px)',
        }
    }
})
