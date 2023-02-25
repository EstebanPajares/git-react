import React from "react";
import styled from "styled-components";

const LayoutStyled = styled.main`
    margin: auto;
    min-block-size: 100vh;
    max-inline-size: 75rem;
    padding-inline: 1.25rem;

    @media screen and (min-width: 768px) {
        border: 2px solid orange;
        display: grid;
        grid-template-areas: "profile filters" "profile repoList";
        grid-template-columns: 17.375rem 1fr;
        grid-template-rows: auto 1fr;
        column-gap: 2rem;
    }

`

function Layout ( { children } ){
    return(
        <LayoutStyled>
            { children }
        </LayoutStyled>
    )
}

export default Layout
