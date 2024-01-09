import styled from "styled-components";

export const UlStyled = styled('ul')(() => {
    return {
        display:' grid',
        maxWidth: 'calc(100vw - 48px)',
        gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
        gridGap: '16px',
      
        marginTop: '16px',
        marginBottom: '16px',
        padding: '0',
        
        listStyle: 'none',
        marginLeft:'auto',
        marginRight:'auto',
    }
})