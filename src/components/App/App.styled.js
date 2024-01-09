import styled from "styled-components"

export const Container = styled('div')(()=> {
    return {
        display: "grid",
        gridTemplateColumns: '1fr',
        gridGap: '16px',
        paddingBottom: '24px',
    }
})