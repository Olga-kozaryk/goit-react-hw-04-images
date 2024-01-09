import styled from "styled-components";

export const FormStyled = styled('form')(() => {
    return {
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        maxWidth: '600px',
        backgroundColor: '#fff',
        borderRadius: '10px',
        overflow: 'hidden',
        button:{
            display: 'inline-block',
            width: '48px',
            height: '48px',
            border: '0',
            backgroundSize: '40%',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            opacity: '0.6',
            transition: 'opacity 250ms cubic-bezier(0.4, 0, 0.2, 1)',
            cursor: 'pointer',
            outline: 'none',
            '&:hover':{
                opacity: 1,
              }
        },
        input:{
            display: 'inline-block',
            width: '100%',
            font: 'inherit',
            fontSize: '20px',
            border: 'none',
            outline: 'none',
            paddingLeft: '4px',
            paddingRight: '4px',
            '&::placeholder': {
                font: "inherit",
                fontSize: '18px',
              }
          }
    }
})